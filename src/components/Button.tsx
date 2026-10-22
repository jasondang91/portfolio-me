import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
	onClick?: () => void
	label?: string
	subtitle?: string
	value?: string
	className?: string
	link?: string
	iconcolor?: string
	iconSVG?: React.FC<{ className: string }>
	/** 'main-btn' → purple primary  |  'secondary-btn' → lightblue secondary  |  any other string is treated as primary */
	buttoncolor?: string
	buttonhovercolor?: string
	type?: 'button' | 'submit' | 'reset'
	elementType?: 'input' | 'button'
	disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
	onClick,
	label,
	subtitle,
	link,
	value,
	iconSVG: IconSVGComponent,
	type,
	elementType,
	disabled,
	buttoncolor,
	className,
}) => {
	// Resolve variant from buttoncolor prop
	const isSecondary = buttoncolor === 'secondary-btn'

	// Border + accent tokens driven by variant
	const borderCls = isSecondary
		? 'border-[--lightblue]/40 hover:border-[--lightblue]/80 hover:shadow-[--lightblue]/20'
		: 'border-[--purple]/40 hover:border-[--purple]/80 hover:shadow-[--purple]/20'

	const accentCls = isSecondary ? 'text-[--lightblue]' : 'text-[--purple]'
	const shimmerCls = isSecondary ? 'via-[--lightblue]/20' : 'via-[--purple]/20'
	const glowCls = isSecondary
		? 'from-[--lightblue]/10 via-[--lightblue]/15 to-[--lightblue]/10'
		: 'from-[--purple]/10 via-[--purple]/15 to-[--purple]/10'
	const iconBgCls = isSecondary
		? 'from-[--lightblue]/20 to-[--lightblue]/10 group-hover:from-[--lightblue]/40 group-hover:to-[--lightblue]/20'
		: 'from-[--purple]/20 to-[--purple]/10 group-hover:from-[--purple]/40 group-hover:to-[--purple]/20'

	const baseClass = [
		'group relative py-3 px-7 rounded-xl',
		'border-2 bg-transparent',
		'shadow-lg hover:shadow-xl',
		'hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97]',
		'transition-all duration-300 ease-out',
		'cursor-pointer overflow-hidden text-left backdrop-blur-sm',
		borderCls,
		disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
		className ?? '',
	].join(' ')

	const inner = (displayLabel?: string) => (
		<>
			{/* Shimmer sweep */}
			<div
				className={`pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent ${shimmerCls} to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full`}
			/>
			{/* Subtle glow fill */}
			<div
				className={`pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br ${glowCls} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
			/>

			<div className='relative z-10 flex items-center gap-3'>
				{/* Inline icon */}
				{IconSVGComponent && (
					<div
						className={`flex-shrink-0 rounded-lg bg-gradient-to-br p-2 transition-all duration-300 ${iconBgCls}`}
					>
						<IconSVGComponent
							className={`h-6 w-6 transition-transform duration-300 group-hover:scale-110 ${accentCls}`}
						/>
					</div>
				)}

				{/* Label + optional subtitle */}
				<div className='flex-1'>
					<p
						className={`text-[1.5rem] font-semibold leading-tight tracking-wide transition-all duration-300 group-hover:brightness-125 ${accentCls}`}
					>
						{displayLabel}
					</p>
					{subtitle && (
						<p className={`mt-0.5 text-[1.2rem] opacity-60 transition-opacity duration-300 group-hover:opacity-80 ${accentCls}`}>
							{subtitle}
						</p>
					)}
				</div>

				{/* Chevron — subtle, slides right on hover */}
				<div
					className={`flex-shrink-0 opacity-30 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-80 ${accentCls}`}
				>
					<svg viewBox='0 0 24 24' stroke='currentColor' fill='none' className='h-5 w-5'>
						<path d='M9 5l7 7-7 7' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round' />
					</svg>
				</div>
			</div>
		</>
	)

	// Submit / standalone button
	if (elementType === 'input' || (type === 'submit' && !link)) {
		return (
			<button type={type ?? 'submit'} disabled={disabled} onClick={onClick} className={baseClass}>
				{inner(value ?? label)}
			</button>
		)
	}

	// Link button
	return (
		<Link to={link || ''} className='no-underline'>
			<button type={type ?? 'button'} disabled={disabled} onClick={onClick} className={baseClass}>
				{inner(label)}
			</button>
		</Link>
	)
}

export default Button
