import bannerBg from '../assets/img/bannerbg.webp'
import React, { useRef } from 'react'
import Button from './Button'
import LiveTicker from './ParallaxText'
import { projectsData, toastMessages } from '../assets/lib/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards, Pagination } from 'swiper/modules'
import { ToastContainer, toast } from 'react-toastify'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { useSectionInView } from '../assets/lib/hooks'
import { useLanguage } from '../context/language-context'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'

const ProjectSlider: React.FC = () => {
	const { ref } = useSectionInView('Projects')
	const { language } = useLanguage()
	const animationReference = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: animationReference,
		offset: ['1 1', '1.3 1'],
	})
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
	const notifyServerRequest = () => {
		if (language === 'DE') {
			toast.info(toastMessages.loadingProject.de)
		} else {
			toast.info(toastMessages.loadingProject.en)
		}
	}

	return (
		<React.Fragment>
			<section
				className='h-100% skill-banner relative flex w-full flex-col gap-2 overflow-x-clip'
				id='projects'
				ref={ref}
			>
				<ToastContainer
					className='block w-max p-3 text-3xl'
					position='bottom-center'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='light'
				/>
				<div
					className='quote-outer-container flex -rotate-3 scale-110 items-center justify-center bg-[--darkblue] pb-32 pt-32 max-lg:-ml-44 max-lg:-mr-44 max-lg:scale-100 max-lg:pb-16 max-lg:pt-16'
					style={{
						backgroundImage: `url(${bannerBg})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className='title-container mb-24 flex rotate-3 flex-col items-center justify-between gap-6 text-center max-lg:w-[100vw]'>
						<motion.div
							ref={animationReference}
							style={{
								scale: scaleProgess,
								opacity: opacityProgess,
								textAlign: 'center',
							}}
						>
							<p className='mb-6 mt-16 text-[--white]'>
								<span className='text-[--purple]'>&lt;</span>
								{language === 'DE' ? 'Projekte' : language === 'EN' ? 'Projects' : 'Dự Án'}
								<span className='text-[--purple]'>/&gt;</span>
							</p>
							<h2 className='mb-4 text-5xl text-[--white] md:text-6xl'>
								{language === 'DE'
									? 'Meine Projekte'
									: language === 'EN'
										? 'My Projects'
										: 'Một Vài Dự Án Của Tôi'}
							</h2>

							<a
								href='/projects'
								className='group mb-16 inline-flex items-center justify-center gap-2 text-[1.4rem] font-[300] text-[--white] transition-all duration-300 hover:gap-3'
							>
								<span className='relative'>
									{language === 'DE'
										? 'Mehr von meinen Projekten ansehen'
										: language === 'EN'
											? 'See more of my projects'
											: 'Xem thêm những dự án của tôi'}
									{/* Animated underline */}
									<span className='absolute -bottom-0.5 left-0 h-px w-0 bg-[--mint] transition-all duration-300 group-hover:w-full' />
								</span>
								<BsBoxArrowUpRight className='text-[--mint] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
							</a>
						</motion.div>
						<Swiper
							effect={'cards'}
							grabCursor={true}
							modules={[EffectCards, Autoplay, Pagination]}
							className='w-[45vw] max-lg:hidden min-[1921px]:px-20'
							loop={true}
							autoplay={{
								delay: 4000,
								disableOnInteraction: true,
								pauseOnMouseEnter: true,
							}}
							pagination={{
								clickable: true,
							}}
						>
							{projectsData.slice(0, 7).map((project, index: number) => (
								<SwiperSlide
									key={index}
									className='quote-outer-container flex flex-row justify-between rounded-2xl p-20 text-left text-[--white] max-lg:hidden'
									style={{
										background: 'rgba(26, 34, 56, 0.40)',
										backdropFilter: 'blur(25px)',
										WebkitBackdropFilter: 'blur(25px)',
										border: '1px solid rgba(139, 92, 246, 0.30)',
										boxShadow:
											'0 8px 32px rgba(26, 34, 56,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
									}}
								>
									<div className='flex w-[55%] flex-col justify-between gap-12'>
										<h2 className=''>{project.title}</h2>

										<p className='text-[1.2rem] leading-relaxed text-icewhite md:text-[1.5rem]'>
											{language === 'DE'
												? project.description
												: language === 'EN'
													? project.description_EN
													: project.description_VI}
										</p>
										<div className='technologies '>
											<h3 className='text-[1.5rem] underline'>
												{language === 'DE'
													? 'Technologien'
													: language === 'EN'
														? 'Technologies'
														: 'Công Nghệ'}
											</h3>
											<div className='mt-8 grid grid-cols-6 gap-6'>
												{project.technologies.map((technology, innerIndex: number) => (
													<img
														key={innerIndex}
														src={technology.icon}
														alt={`${project.title}-icon`}
														className='h-[4rem] w-[50%]'
														data-tooltip-id='my-tooltip'
														data-tooltip-content={technology.name}
													/>
												))}
											</div>
										</div>
										<div className='project-buttons flex gap-6'>
											<Button
												label='Live Demo'
												link={project.deploymenturl}
												iconSVG={project.deploymenticon}
												buttoncolor={project.colors.main}
												iconcolor={project.colors.icon}
												onClick={notifyServerRequest}
											/>
										</div>
									</div>

									<div className='right-content relative h-[40rem] w-[41%] overflow-hidden rounded-xl shadow-2xl transition-all duration-200'>
										<img
											src={project.image}
											alt={`${project.title}-project-mockup`}
											className={`h-auto w-full transform object-cover opacity-100 transition-all duration-[6000ms] hover:translate-y-[-50%]
                      `}
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						{projectsData.slice(0, 5).map((project, index: number) => (
							<article
								key={index}
								className='mb-10 flex h-full w-[80%] flex-col gap-10 rounded-xl p-8 max-lg:w-[90%] min-[1024px]:hidden'
								style={{
									background: 'rgba(255, 255, 255, 0.06)',
									backdropFilter: 'blur(24px)',
									WebkitBackdropFilter: 'blur(24px)',
									border: '2px solid rgba(139, 92, 246, 0.30)',
									boxShadow: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
								}}
							>
								<h2 className='text-white'>{project.title}</h2>
								<img
									src={project.image}
									alt={project.image}
									className='h-[35vh] w-full rounded-3xl object-cover object-top'
								/>
								<div className='project-buttons flex gap-4 max-lg:flex-col md:gap-10'>
									<Button
										label='Live Demo'
										link={project.deploymenturl}
										iconSVG={project.deploymenticon}
										buttoncolor={project.colors.main}
										iconcolor={project.colors.icon}
									/>
									<Button
										label='Github Repository'
										link={project.githuburl}
										iconSVG={project.githubicon}
										buttoncolor={project.colors.main}
										iconcolor={project.colors.icon}
									/>
								</div>
								<p className='text-3xl text-white md:text-4xl'>
									{language === 'DE'
										? project.description
										: language === 'EN'
											? project.description_EN
											: project.description_VI}
								</p>

								<div className='technologies'>
									<h3 className='text-3xl text-white'>
										{language === 'DE'
											? 'Technologien'
											: language === 'EN'
												? 'Technologies'
												: 'Công Nghệ'}
									</h3>
									<div className='grid grid-cols-5 items-center justify-center gap-3 p-2'>
										{project.technologies.map((technology, innerIndex: number) => (
											<img
												key={innerIndex}
												src={technology.icon}
												alt={`${project.title}-icon`}
												className='h-[5rem] w-[50%] object-contain'
												data-tooltip-id='my-tooltip'
												data-tooltip-content={technology.name}
											/>
										))}
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
				<LiveTicker />
			</section>
			<ReactTooltip
				place='top'
				id='my-tooltip'
				style={{
					fontSize: '1.5rem',
					backgroundColor: 'var(--purple)',
				}}
			/>
		</React.Fragment>
	)
}

export default ProjectSlider
