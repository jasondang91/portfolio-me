/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

interface LottieProps {
	animationData: any
	height: number
	width: number
}

const Lottie: React.FC<LottieProps> = ({ animationData, height, width }) => {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = containerRef.current
		if (container) {
			lottie.loadAnimation({
				container,
				renderer: 'svg',
				loop: true,
				autoplay: true,
				animationData,
				rendererSettings: {
					preserveAspectRatio: 'xMidYMid slice',
				},
			})

			// This will clean up the animation when the component unmounts
			return () => {
				lottie.destroy()
			}
		}
	}, [animationData])

	return <div ref={containerRef} style={{ height, width }} />
}

export default Lottie
