import React, { useEffect, useState } from 'react'
import ThemeSwitch from '../components/theme-switch.tsx'
import { useSectionInView } from '../assets/lib/hooks.tsx'
import { projectsData } from '../assets/lib/data'
import { useLanguage } from '../context/language-context.tsx'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { useTheme } from '../context/theme-context.tsx'

interface RadialGradientProps {
	scale: string
	opacity: string
	position?: string
	overflow?: string
}

const Projects: React.FC<RadialGradientProps>  = ({ scale, opacity, position, overflow }) => {
	const { ref } = useSectionInView('Home', 0.5)
	const { language } = useLanguage()
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
			theme === 'light' ? '#fafafa' : '#0b101c'
		})`,
	}

	return (
		<>
			<ThemeSwitch />
			<div
				// rotate-180 for mirrored effect
				className={`radial-gradient-styling absolute ${position} left-0 -z-[1] h-[70px] w-[70px]   ${opacity} ${scale} ${overflow}`}
				style={radialGradientStyle}
			></div>
			<section
				className='hero flex h-full flex-col items-center justify-center gap-10 max-lg:h-full max-lg:gap-6'
				ref={ref}
				id='home'
				style={radialGradientStyle}
			>
				<div className='container relative mx-auto overflow-x-clip min-[1921px]:px-96'>
					<div className='px-2 py-10'>
						<div className='flex items-center justify-between'>
							<h1 className='text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl'>
								All my project
							</h1>
							<a href={'/'}>Back to homepage</a>
						</div>

						<div className='mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2'>
							{projectsData.map((project, index: number) => (
								<div className='grid grid-cols-3 grid-rows-1 gap-5' key={`project_item-${index}`}>
									<div className='h-[25rem] w-full overflow-hidden transition-all duration-200'>
										<img
											className={`h-auto w-full transform opacity-100 transition-all duration-[6000ms] hover:translate-y-[-50%]`}
											src={project.image}
											alt=''
										/>
									</div>
									<div className='col-span-2 justify-between py-6 lg:mx-6'>
										<div className='flex flex-col'>
											<a
												href='#'
												className='text-3xl font-semibold text-gray-800 hover:underline dark:text-white '
											>
												{project.title}
											</a>
											<span className='py-2 text-base'>
												{language === 'DE'
													? project.description
													: language === 'EN'
														? project.description_EN
														: project.description_VI}
											</span>
											<div className='grid grid-cols-6 gap-2 p-1'>
												{project.technologies.map((technology, innerIndex: number) => (
													<img
														key={innerIndex}
														src={technology.icon}
														alt={`${project.title}-icon`}
														className='h-[5rem] w-[50%] '
														data-tooltip-id='my-tooltip'
														data-tooltip-content={technology.name}
													/>
												))}
											</div>
											<span className='text-sm text-gray-500 dark:text-gray-300'>
												On: 20 October 2019
											</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<ReactTooltip
				place='top'
				id='my-tooltip'
				style={{
					fontSize: '1.5rem',
					backgroundColor: 'var(--purple)',
				}}
			/>
		</>
	)
}

export default Projects
