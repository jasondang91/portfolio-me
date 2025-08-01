import React from 'react'
import ThemeSwitch from '../components/theme-switch.tsx'
import { useSectionInView } from '../assets/lib/hooks.tsx'
import { projectsData } from '../assets/lib/data'
import { useLanguage } from '../context/language-context.tsx'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { GoArrowLeft } from "react-icons/go";
import RadialGradient from '../components/RadialGradient.tsx'


interface RadialGradientProps {
	scale: string
	opacity: string
	position?: string
	overflow?: string
}

const Projects: React.FC<RadialGradientProps> = () => {
	const { ref } = useSectionInView('Home', 0.5)
	const { language } = useLanguage()


	return (
		<>
			<ThemeSwitch />
			<section
				className={`flex flex-col justify-center items-center gap-10 max-lg:gap-6 h-full max-lg:h-full hero`}
				ref={ref}
				id='home'
			>

				<div className='relative mx-auto px-4 min-[1921px]:px-96 md:px-0 overflow-x-clip'>
					<RadialGradient scale='scale-y-125' opacity='opacity-30' />
					<div className='px-4 py-10'>
						<div className='flex justify-between items-center'>

							<a href={'/'} className='flex items-center gap-x-2'> <GoArrowLeft /> back</a>
						</div>

						<div className='mx-auto py-12 container'>
							<div className='flex justify-center items-center'>
								<h1 className='font-semibold text-4xl md:text-7xl'>Some my project has done</h1>
							</div>
						</div>

						<div className='gap-12 grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-16 px-0'>
							{projectsData.map((project, index: number) => (
								<div className='group cursor-pointer'>
									<div className='p-0 md:p-5 md:border-2 md:dark:hover:border-mint hover:border-darkblue border-transparent rounded-md transition-all duration-300'>
										<div className='gap-5 md:gap-1 grid grid-cols-1 md:grid-cols-3 grid-rows-1' key={`project_item-${index}`}>
											<div className='w-full h-[30rem] md:h-[36rem] overflow-hidden transition-all duration-200'>
												<img
													className={`w-full h-fit object-contain md:transform opacity-100 md:transition-all md:duration-[4000ms] md:hover:translate-y-[-50%] rounded-md`}
													src={project.image}
													alt=''
												/>
											</div>
											<div className='justify-between col-span-1 md:col-span-2 lg:mx-6'>
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
													<div className='items-center gap-6 grid grid-cols-6 mt-5'>
														{project?.technologies?.map((technology, innerIndex: number) => (
															<img
																key={innerIndex}
																src={technology.icon}
																alt={`${project.title}-icon`}
																className='w-[85%] md:w-[60%] h-[3rem] md:h-[5rem] object-contain'
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
