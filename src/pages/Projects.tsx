import React, { useEffect, useState } from 'react'
import { useSectionInView } from '../assets/lib/hooks.tsx'
import { projectsData } from '../assets/lib/data'
import { useLanguage } from '../context/language-context.tsx'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { GoArrowLeft, GoArrowUp } from 'react-icons/go'
import { FiExternalLink } from 'react-icons/fi'
import Footer from '../components/Footer.tsx'
import LanguageSwitch from '../components/LanguageSwitch.tsx'

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

	const [showScrollButtons, setShowScrollButtons] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollButtons(window.scrollY > 300)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<section
				className='hero min-h-screen w-full'
				ref={ref}
				id='home'
				style={{ background: 'linear-gradient(135deg, #0d0221 0%, #1a0533 40%, #0d0221 100%)' }}
			>
				<div className='relative mx-auto w-full max-w-[1600px] overflow-x-clip px-6 md:px-16 min-[1921px]:px-32'>
					{/* Back link */}
					<div className='pb-4 pt-10'>
						<a
							href='/'
							className='inline-flex items-center gap-2 text-2xl text-gray-400 transition-colors duration-200 hover:text-[--purple]'
						>
							<GoArrowLeft size={16} />
							{language === 'DE' ? 'Zurück' : language === 'VI' ? 'Quay lại' : 'Back'}
						</a>
					</div>
					<LanguageSwitch />

					{/* Page heading */}
					<div className='py-12 text-center'>
						<p className='mb-2 text-xl font-semibold uppercase tracking-widest text-[--purple]'>
							{language === 'DE' ? 'Portfolio' : language === 'VI' ? 'Danh mục' : 'Portfolio'}
						</p>
						<h1 className='text-4xl font-bold text-white md:text-6xl'>
							{language === 'DE' ? 'Meine Projekte' : language === 'VI' ? 'Dự Án Của Tôi' : 'My Projects'}
						</h1>
					</div>

					{/* Project cards */}
					<div className='flex flex-col pb-24'>
						{projectsData.map((project, index: number) => {
							const isEven = index % 2 === 0 // even → text left, image right
							return (
								<div key={index} className='group relative border-b border-white/5 py-12 md:py-28'>
									{/* ── Main two-column row ── */}
									<div
										className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-0`}
									>
										{/* ── Text column (45%) ── */}
										<div
											className={`relative z-10 flex w-full flex-col md:w-[45%] ${isEven ? 'md:pr-4' : 'md:pl-4'}`}
										>
											{/* Title */}
											<h2
												className={`mb-2 md:mb-10 text-5xl  leading-tight text-white md:text-5xl ${isEven ? '' : 'md:text-right'}`}
											>
												{project.title}
											</h2>

											{/* Glassmorphism description card — overlaps onto image */}
											<div
												className={`relative z-20 mb-8 rounded-2xl p-7
													shadow-[0_8px_32px_rgba(0,0,0,0.5)]
													${isEven ? 'md:mr-[-6rem]' : 'md:ml-[-6rem]'}
												`}
												style={{
													backdropFilter: 'blur(20px)',
													WebkitBackdropFilter: 'blur(20px)',
													background: 'rgba(26, 34, 56, 0.80)',
													border: '1px solid rgba(139, 92, 246, 0.30)',
												}}
											>
												<p className='text-[1.5rem] leading-relaxed text-gray-200 md:text-[1.8rem]'>
													{language === 'DE'
														? project.description
														: language === 'EN'
															? project.description_EN
															: project.description_VI}
												</p>
											</div>

											{/* Tech icons */}
											<div
												className={`mb-6 flex flex-wrap items-center gap-5 ${isEven ? '' : 'md:justify-end'}`}
											>
												{project.technologies.map((tech, i) => (
													<img
														key={i}
														src={tech.icon}
														alt={tech.name}
														className='h-9 w-9 md:h-12 md:w-12 object-contain opacity-90 transition-opacity duration-200 hover:opacity-100'
														data-tooltip-id='my-tooltip'
														data-tooltip-content={tech.name}
													/>
												))}
											</div>

											{/* CTA links */}
											<div
												className={`flex items-center gap-6 ${isEven ? '' : 'md:justify-end'}`}
											>
												{project.deploymenturl && project.deploymenturl !== '#' && (
													<a
														href={project.deploymenturl}
														target='_blank'
														rel='noopener noreferrer'
														className='flex items-center gap-2 text-sm font-semibold text-[--purple] transition-opacity duration-200 hover:opacity-80'
													>
														<FiExternalLink size={16} />
														{language === 'DE'
															? 'Live Demo'
															: language === 'VI'
																? 'Xem trực tiếp'
																: 'Live Demo'}
													</a>
												)}
											</div>
										</div>

										{/* ── Image column (55%) ── */}
										<div className='relative mt-10 w-full md:mt-0 md:w-[55%]'>
											{/* Browser chrome frame */}
											<div
												className='border-white/15 relative overflow-hidden rounded-2xl border shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-shadow duration-500 group-hover:shadow-[0_30px_70px_rgba(109,40,217,0.3)]'
												style={{ background: '#fff' }}
											>
												{/* Browser top bar */}
												<div className='flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-4 py-3'>
													<span className='h-3 w-3 rounded-full bg-red-400' />
													<span className='h-3 w-3 rounded-full bg-yellow-400' />
													<span className='h-3 w-3 rounded-full bg-green-400' />
													<div className='mx-4 flex-1 truncate rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-400'>
														{project.deploymenturl && project.deploymenturl !== '#'
															? project.deploymenturl
															: 'https://project-demo.com'}
													</div>
												</div>

												{/* Screenshot with hover scroll */}
												<div className='relative h-[32rem] w-full overflow-hidden bg-gray-50 md:h-[45rem]'>
													<img
														src={project.image}
														alt={project.title}
														className='h-auto w-full object-cover object-top transition-transform duration-[5000ms] group-hover:-translate-y-[40%]'
													/>
												</div>
											</div>

											{/* Decorative radial glow */}
											<div
												className='pointer-events-none absolute -inset-8 -z-10 rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100'
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
					<div className='flex items-center justify-center border-t border-white/10 py-16'>
						<p className='text-xl text-gray-500'>
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

			{/* Floating scroll-to-top and back-to-home buttons */}
			{showScrollButtons && (
				<div className='fixed bottom-6 right-6 flex flex-col gap-3 z-50'>
					{/* Back to home */}
					<a
						href='/'
						className='flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/20 transition'
					>
						<GoArrowLeft size={22} />
					</a>
					{/* Scroll to top */}
					<button
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						className='flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/20 transition'
					>
						<GoArrowUp size={22} />
					</button>
				</div>
			)}
		</>
	)
}

export default Projects
