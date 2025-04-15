import React from 'react'
import ThemeSwitch from '../components/theme-switch.tsx'
import { useSectionInView } from '../assets/lib/hooks.tsx'
import { projectsData } from '../assets/lib/data'
import { useLanguage } from '../context/language-context.tsx'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { useTheme } from '../context/theme-context.tsx'
import { GoArrowLeft } from "react-icons/go";


interface RadialGradientProps {
	scale: string
	opacity: string
	position?: string
	overflow?: string
}

const Projects: React.FC<RadialGradientProps> = ({ scale, opacity, position, overflow }) => {
	const { ref } = useSectionInView('Home', 0.5)
	const { language } = useLanguage()
	const { theme } = useTheme()

	const radialGradientStyle: React.CSSProperties = {
		background: `${theme === 'light' ? '#e2d5ff' : '#272057'
			}`,
	}

	return (
		<>
			<ThemeSwitch />
			<div
				className={`radial-gradient-styling absolute ${position} left-0 -z-[1]  h-full w-full  ${opacity} ${scale} ${overflow}`}
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

							<a href={'/'} className='flex items-center gap-x-2'> <GoArrowLeft /> back</a>
						</div>

						<div className='mx-auto py-12 container'>
							<div className='flex justify-center items-center'>
								<h1 className='font-semibold'>Some my project has done</h1>
							</div>
						</div>

						<div className='gap-12 grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-16'>
							{projectsData.map((project, index: number) => (
								<div className='group cursor-pointer'>
									<div className='p-5 border-2 hover:border-darkblue dark:hover:border-mint border-transparent rounded-md transition-all duration-300'>
										<div className='gap-1 grid grid-cols-3 grid-rows-1' key={`project_item-${index}`}>
											<div className='w-full h-[32rem] overflow-hidden transition-all duration-200'>
												<img
													className={`h-auto w-full transform opacity-100 transition-all duration-[6000ms] hover:translate-y-[-50%] rounded-md`}
													src={project.image}
													alt=''
												/>
											</div>
											<div className='justify-between col-span-2 lg:mx-6'>
												<div className='flex flex-col'>
													<p
														className='mb-2 font-semibold text-gray-800 text-3xl hover:underline'
													>
														{project.title}
													</p>
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
