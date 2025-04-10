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

const Projects: React.FC<RadialGradientProps> = ({ scale, opacity, position, overflow }) => {
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
		background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #211b48, ${theme === 'light' ? '#ffffff' : '#5417cf'
			})`,
	}

	return (
		<>
			<ThemeSwitch />
			<div
				className={`radial-gradient-styling absolute ${position} left-0 -z-[1] w-full h-[500px] ${opacity} ${scale} ${overflow}`}
				style={radialGradientStyle}
			></div>
			<section
				className='flex flex-col justify-center items-center gap-10 max-lg:gap-6 h-full hero'
				ref={ref}
				id='home'
			>
				<div className='relative mx-auto min-[1921px]:px-96 overflow-x-clip container'>
					<div className='px-2 py-10'>
						<div className='flex justify-between items-center'>
							<p className='font-bold text-gray-800 dark:text-white text-3xl lg:text-4xl capitalize'>
								Some my works
							</p>
							<p className="font-bold text-gray-800 dark:text-white text-3xl lg:text-4xl"><a href={'/'}>back</a></p>
						</div>

						<div className='mx-auto py-12 container'>
							<div className='flex justify-center items-center'>
								<h1 className='font-semibold'>Some my project has done</h1>
							</div>
						</div>

						<div className='gap-12 grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-16'>
							{projectsData.map((project, index: number) => (
								<div className='group overflow-hidden'>
									<div className='p-5 border-2 group-hover:border-mint border-transparent group-hover:rounded-md transition-all duration-300'>
										<div className='gap-1 grid grid-cols-3 grid-rows-1' key={`project_item-${index}`}>
											<div className='w-full h-[32rem] overflow-hidden transition-all duration-200'>
												<img
													className={`h-auto w-full transform opacity-100 transition-all duration-[6000ms] hover:translate-y-[-50%] rounded-md`}
													src={project.image}
													alt=''
												/>
											</div>
											<div className='justify-between col-span-2 lg:mx-6 py-6'>
												<div className='flex flex-col p-3'>
													<a
														href='#'
														className='font-semibold text-gray-800 dark:text-white text-3xl hover:underline'
													>
														{project.title}
													</a>
													<span className='text-lg'>
														{language === 'DE'
															? project.description
															: language === 'EN'
																? project.description_EN
																: project.description_VI}
													</span>
													<div className='gap-6 grid grid-cols-6 mt-5'>
														{project?.technologies?.map((technology, innerIndex: number) => (
															<img
																key={innerIndex}
																src={technology.icon}
																alt={`${project.title}-icon`}
																className='w-[60%] h-[5rem]'
																data-tooltip-id='my-tooltip'
																data-tooltip-content={technology.name}
															/>
														))}
													</div>
													<span className='mt-12 text-gray-500 dark:text-gray-300 text-lg underline'>
														Live preview
													</span>
												</div>
											</div>
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
