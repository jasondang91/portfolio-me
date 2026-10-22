import React, { useEffect, useRef, useCallback } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Particle {
	/** Resting (home) position */
	ox: number
	oy: number
	/** Current rendered position */
	x: number
	y: number
	/** Current velocity */
	vx: number
	vy: number
	/** Base radius before glow */
	radius: number
	/** Base opacity (0–1) */
	opacity: number
	/** Idle float phase offset (radians) */
	phase: number
	/** Idle float speed multiplier */
	speed: number
	/** Idle float amplitude (px) */
	amplitude: number
	/** Hue tint: 0 = cool white, 1 = lightblue */
	tint: number
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getParticleCount(width: number): number {
	if (width < 480) return 40
	if (width < 768) return 70
	if (width < 1280) return 110
	return 160
}

function lerp(a: number, b: number, t: number): number {
	return a + (b - a) * t
}

// ─── Component ───────────────────────────────────────────────────────────────

export interface ParticleFieldProps {
	/** Whether the host section is currently in view – pauses rAF when false */
	active?: boolean
	className?: string
}

const ParticleField: React.FC<ParticleFieldProps> = ({ active = true, className }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const particlesRef = useRef<Particle[]>([])
	const rafRef = useRef<number>(0)
	const mouseRef = useRef<{ x: number; y: number; inside: boolean }>({
		x: -9999,
		y: -9999,
		inside: false,
	})
	const reducedMotion = useRef(
		typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
	)

	// ── Particle factory ────────────────────────────────────────────────────
	const buildParticles = useCallback((w: number, h: number): Particle[] => {
		const count = getParticleCount(w)
		return Array.from({ length: count }, () => {
			const ox = Math.random() * w
			const oy = Math.random() * h
			return {
				ox,
				oy,
				x: ox,
				y: oy,
				vx: 0,
				vy: 0,
				radius: 0.8 + Math.random() * 1.6,
				opacity: 0.15 + Math.random() * 0.45,
				phase: Math.random() * Math.PI * 2,
				speed: 0.2 + Math.random() * 0.4,
				amplitude: 8 + Math.random() * 18,
				tint: Math.random(),
			}
		})
	}, [])

	// ── Draw one frame ──────────────────────────────────────────────────────
	const draw = useCallback((ctx: CanvasRenderingContext2D, dpr: number, timestamp: number) => {
		const canvas = ctx.canvas
		const logicalW = canvas.width / dpr
		const logicalH = canvas.height / dpr

		ctx.clearRect(0, 0, canvas.width, canvas.height)

		const mouse = mouseRef.current
		const noMotion = reducedMotion.current
		const t = timestamp / 1000 // seconds

		// Repulsion parameters
		const REPEL_RADIUS = 150
		const REPEL_STRENGTH = 0.18
		const RETURN_SPRING = 0.055
		const DAMPING = 0.78

		for (const p of particlesRef.current) {
			// ── Idle float ──────────────────────────────────────────────────
			let floatX = 0
			let floatY = 0
			if (!noMotion) {
				floatX = Math.sin(t * p.speed + p.phase) * p.amplitude * 0.4
				floatY = Math.cos(t * p.speed * 0.7 + p.phase) * p.amplitude
			}

			// Home target (origin + float)
			const targetX = p.ox + floatX
			const targetY = p.oy + floatY

			// ── Mouse repulsion ─────────────────────────────────────────────
			if (mouse.inside && !noMotion) {
				const dx = p.x - mouse.x
				const dy = p.y - mouse.y
				const dist = Math.sqrt(dx * dx + dy * dy)

				if (dist < REPEL_RADIUS && dist > 0) {
					// Stronger push the closer we are
					const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) ** 2 * REPEL_STRENGTH
					const nx = dx / dist
					const ny = dy / dist
					p.vx += nx * force * 60
					p.vy += ny * force * 60
				}
			}

			// ── Spring return ───────────────────────────────────────────────
			if (!noMotion) {
				p.vx += (targetX - p.x) * RETURN_SPRING
				p.vy += (targetY - p.y) * RETURN_SPRING
				p.vx *= DAMPING
				p.vy *= DAMPING
				p.x += p.vx
				p.y += p.vy
			} else {
				// Reduced motion: skip physics, stay at home
				p.x = p.ox
				p.y = p.oy
			}

			// Wrap particles that drift outside canvas
			if (p.x < -20) { p.x += logicalW + 40; p.ox += logicalW + 40 }
			if (p.x > logicalW + 20) { p.x -= logicalW + 40; p.ox -= logicalW + 40 }
			if (p.y < -20) { p.y += logicalH + 40; p.oy += logicalH + 40 }
			if (p.y > logicalH + 20) { p.y -= logicalH + 40; p.oy -= logicalH + 40 }

			// ── Render ──────────────────────────────────────────────────────
			ctx.save()
			ctx.scale(dpr, dpr)

			// Color: interpolate between cool-white and soft lightblue (#9daaf2)
			const r = Math.round(lerp(220, 157, p.tint))
			const g = Math.round(lerp(230, 170, p.tint))
			const b = Math.round(lerp(255, 242, p.tint))

			// Outer glow
			const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4)
			gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${p.opacity * 0.9})`)
			gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${p.opacity * 0.35})`)
			gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)

			ctx.beginPath()
			ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2)
			ctx.fillStyle = gradient
			ctx.fill()

			// Core dot
			ctx.beginPath()
			ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
			ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`
			ctx.fill()

			ctx.restore()
		}
	}, [])

	// ── Animation loop ──────────────────────────────────────────────────────
	const startLoop = useCallback(
		(ctx: CanvasRenderingContext2D, dpr: number) => {
			const tick = (timestamp: number) => {
				draw(ctx, dpr, timestamp)
				rafRef.current = requestAnimationFrame(tick)
			}
			rafRef.current = requestAnimationFrame(tick)
		},
		[draw],
	)

	// ── Canvas setup + resize ───────────────────────────────────────────────
	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const dpr = window.devicePixelRatio || 1

		const resize = () => {
			const parent = canvas.parentElement ?? canvas
			const w = parent.offsetWidth
			const h = parent.offsetHeight
			canvas.width = w * dpr
			canvas.height = h * dpr
			// Rebuild particles to fit new viewport
			particlesRef.current = buildParticles(w, h)
		}

		resize()
		startLoop(ctx, dpr)

		const ro = new ResizeObserver(resize)
		ro.observe(canvas.parentElement ?? canvas)

		return () => {
			cancelAnimationFrame(rafRef.current)
			ro.disconnect()
		}
	}, [buildParticles, startLoop])

	// Pause/resume when active prop changes
	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return
		const ctx = canvas.getContext('2d')
		if (!ctx) return
		const dpr = window.devicePixelRatio || 1

		if (active) {
			startLoop(ctx, dpr)
		} else {
			cancelAnimationFrame(rafRef.current)
		}

		return () => cancelAnimationFrame(rafRef.current)
	}, [active, startLoop])

	// ── Mouse tracking (attached to the parent section, not the canvas) ─────
	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return
		const parent = canvas.parentElement
		if (!parent) return

		const onMove = (e: MouseEvent) => {
			const rect = parent.getBoundingClientRect()
			mouseRef.current = {
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
				inside: true,
			}
		}

		const onLeave = () => {
			mouseRef.current = { x: -9999, y: -9999, inside: false }
		}

		parent.addEventListener('mousemove', onMove)
		parent.addEventListener('mouseleave', onLeave)

		return () => {
			parent.removeEventListener('mousemove', onMove)
			parent.removeEventListener('mouseleave', onLeave)
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			aria-hidden='true'
			className={className}
			style={{
				position: 'absolute',
				inset: 0,
				width: '100%',
				height: '100%',
				pointerEvents: 'none',
				zIndex: 0,
			}}
		/>
	)
}

export default ParticleField
