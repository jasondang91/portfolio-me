import React from 'react'
import { useEffect, useState } from 'react'
import { useTheme } from '../context/theme-context'

interface RadialGradientProps {
	scale: string
	opacity: string
	position?: string
	overflow?: string
}

const RadialGradient: React.FC<RadialGradientProps> = ({ scale, opacity, position, overflow }) => {
	const [mouseXpercentage, setMouseXPercentage] = useState<number>(0)
	const [mouseYpercentage, setMouseYPercentage] = useState<number>(0)
	const { theme } = useTheme()

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const windowWidth = window.innerWidth
			const windowHeight = window.innerHeight
			const newMouseXPercentage = Math.round((event.pageX / windowWidth) * 100)
			const newMouseYPercentage = Math.round((event.pageY / windowHeight) * 100)

			setMouseXPercentage(newMouseXPercentage)
			setMouseYPercentage(newMouseYPercentage)
		}

		document.addEventListener('mousemove', handleMouseMove)

		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	const radialGradientStyle: React.CSSProperties = {
		background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #8043f9, ${
			theme === 'light' ? '#ffffff' : '#0c1220'
		})`,
	}

	return (
		<React.Fragment>
			<div
				// rotate-180 for mirrored effect
				className={`radial-gradient-styling absolute ${position} left-0 -z-[1] h-full w-full   ${opacity} ${scale} ${overflow}`}
				style={radialGradientStyle}
			></div>
		</React.Fragment>
	)
}

export default RadialGradient
