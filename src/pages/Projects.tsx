import React, { useEffect } from 'react'
import { useSectionInView } from '../assets/lib/hooks.tsx'
import { projectsData } from '../assets/lib/data'
import { useLanguage } from '../context/language-context.tsx'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { GoArrowLeft } from 'react-icons/go'
import { FiExternalLink } from 'react-icons/fi'
import Footer from '../components/Footer.tsx'

interface RadialGradientProps {
	scale: string
	opacity: string
	position?: string
	overflow?: string
}

const Projects: React.FC<RadialGradientProps> = () => {
	const { ref } = useSectionInView('Home', 0.5)
	const { language } = useLanguage()

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])

	return (
		<>
			<section
				className='min-h-screen w-full hero'
				ref={ref}
				id='home'
				style={{ background: 'linear-gradient(135deg, #0d0221 0%, #1a0533 40%, #0d0221 100%)' }}
			>
				<div className='relative mx-auto w-full max-w-[1600px] px-6 md:px-16 min-[1921px]:px-32 overflow-x-clip'>

					{/* Back link */}
					<div className='pt-10 pb-4'>
						<a
							href='/'
							className='inline-flex items-center gap-2 text-2xl text-gray-400 hover:text-[--purple] transition-colors duration-200'
						>
							<GoArrowLeft size={16} />
							{language === 'DE' ? 'Zurück' : language === 'VI' ? 'Quay lại' : 'Back'}
						</a>
					</div>

					{/* Page heading */}
					<div className='py-12 text-center'>
						<p className='mb-2 text-xl font-semibold tracking-widest text-[--purple] uppercase'>
							{language === 'DE' ? 'Portfolio' : language === 'VI' ? 'Danh mục' : 'Portfolio'}
						</p>
						<h1 className='font-bold text-4xl md:text-6xl text-white'>
							{language === 'DE' ? 'Meine Projekte' : language === 'VI' ? 'Dự Án Của Tôi' : 'My Projects'}
						</h1>
					</div>

					{/* Project cards */}
					<div className='flex flex-col pb-24'>
						{projectsData.map((project, index: number) => {
							const isEven = index % 2 === 0 // even → text left, image right

							return (
								<div
									key={index}
									className='relative py-20 md:py-28 border-b border-white/5 group'
								>
									{/* ── Main two-column row ── */}
									<div className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-0`}>

										{/* ── Text column (45%) ── */}
										<div className={`relative z-10 w-full md:w-[45%] flex flex-col ${isEven ? 'md:pr-4' : 'md:pl-4'}`}>

											{/* Title */}
											<h2 className={`mb-10 font-extrabold text-3xl md:text-5xl text-white leading-tight ${isEven ? '' : 'md:text-right'}`}>
												{project.title}
											</h2>

											{/* Glassmorphism description card — overlaps onto image */}
											<div
												className={`relative z-20 p-7 rounded-2xl mb-8
													shadow-[0_8px_32px_rgba(0,0,0,0.5)]
													${isEven ? 'md:mr-[-6rem]' : 'md:ml-[-6rem]'}
												`}
												style={{
													backdropFilter: 'blur(20px)',
													WebkitBackdropFilter: 'blur(20px)',
													background: 'rgba(26, 34, 56, 0.20)',
													border: '1px solid rgba(139, 92, 246, 0.30)',
												}}
											>
												<p className='text-gray-200 text-[1.2rem] md:text-[1.8rem] leading-relaxed'>
													{language === 'DE'
														? project.description
														: language === 'EN'
															? project.description_EN
															: project.description_VI}
												</p>
											</div>

											{/* Tech icons */}
											<div className={`flex flex-wrap items-center gap-5 mb-6 ${isEven ? '' : 'md:justify-end'}`}>
												{project.technologies.map((tech, i) => (
													<img
														key={i}
														src={tech.icon}
														alt={tech.name}
														className='w-12 h-12 object-contain opacity-60 hover:opacity-100 transition-opacity duration-200'
														data-tooltip-id='my-tooltip'
														data-tooltip-content={tech.name}
													/>
												))}
											</div>

											{/* CTA links */}
											<div className={`flex items-center gap-6 ${isEven ? '' : 'md:justify-end'}`}>
												{project.deploymenturl && project.deploymenturl !== '#' && (
													<a
														href={project.deploymenturl}
														target='_blank'
														rel='noopener noreferrer'
														className='flex items-center gap-2 text-sm font-semibold text-[--purple] hover:opacity-80 transition-opacity duration-200'
													>
														<FiExternalLink size={16} />
														{language === 'DE' ? 'Live Demo' : language === 'VI' ? 'Xem trực tiếp' : 'Live Demo'}
													</a>
												)}
											</div>
										</div>

										{/* ── Image column (55%) ── */}
										<div className='relative w-full md:w-[55%] mt-10 md:mt-0'>
											{/* Browser chrome frame */}
											<div
												className='relative rounded-2xl overflow-hidden border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-shadow duration-500 group-hover:shadow-[0_30px_70px_rgba(109,40,217,0.3)]'
												style={{ background: '#fff' }}
											>
												{/* Browser top bar */}
												<div className='flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200'>
													<span className='w-3 h-3 rounded-full bg-red-400' />
													<span className='w-3 h-3 rounded-full bg-yellow-400' />
													<span className='w-3 h-3 rounded-full bg-green-400' />
													<div className='flex-1 mx-4 px-3 py-1 bg-white rounded-full text-xs text-gray-400 truncate border border-gray-200'>
														{project.deploymenturl && project.deploymenturl !== '#'
															? project.deploymenturl
															: 'https://project-demo.com'}
													</div>
												</div>

												{/* Screenshot with hover scroll */}
												<div className='relative w-full h-[32rem] md:h-[45rem] overflow-hidden bg-gray-50'>
													<img
														src={project.image}
														alt={project.title}
														className='w-full h-auto object-cover object-top transition-transform duration-[5000ms] group-hover:-translate-y-[40%]'
													/>
												</div>
											</div>

											{/* Decorative radial glow */}
											<div
												className='absolute -inset-8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10'
												style={{
													background: `radial-gradient(ellipse at center, ${project.colors.projectcolor}30 0%, transparent 70%)`,
												}}
											/>
										</div>
									</div>
								</div>
							)
						})}
					</div>

					{/* Footer note */}
					<div className='flex justify-center items-center py-16 border-t border-white/10'>
						<p className='text-gray-500 text-xl'>
							{language === 'DE'
								? 'Weitere Projekte auf GitHub verfügbar'
								: language === 'VI'
									? 'Xem thêm dự án trên GitHub'
									: 'More projects available on GitHub'}
						</p>
					</div>
				</div>
			</section>
			<Footer />
			<ReactTooltip
				place='top'
				id='my-tooltip'
				style={{
					fontSize: '1.5rem',
					backgroundColor: 'var(--purple)',
					zIndex: 100,
				}}
			/>
		</>
	)
}

export default Projects
