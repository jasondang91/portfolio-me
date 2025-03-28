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
				className=' skill-banner h-100% relative flex w-full flex-col gap-2 overflow-x-clip '
				id='projects'
				ref={ref}
			>
				<ToastContainer
					className='block w-max p-3 text-3xl '
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
					className='quote-outer-container flex -rotate-3 scale-110 items-center justify-center bg-[--darkblue] pb-32 pt-32 max-lg:-ml-44 max-lg:-mr-44 max-lg:scale-100 max-lg:pb-16 max-lg:pt-16 '
					style={{
						backgroundImage: `url(${bannerBg})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className='title-container mb-24 flex rotate-3 flex-col items-center justify-between gap-6 max-lg:w-[100vw]'>
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
							<h2 className='mb-16 text-[--white]'>
								{language === 'DE'
									? 'Meine Projekte'
									: language === 'EN'
										? 'My Projects'
										: 'Một Vài Dự Án Của Tôi'}
							</h2>
						</motion.div>
						<Swiper
							effect={'cards'}
							grabCursor={true}
							modules={[EffectCards, Autoplay, Pagination]}
							className=' w-[60vw] max-lg:hidden min-[1921px]:px-96'
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
							{projectsData.map((project, index: number) => (
								<SwiperSlide
									key={index}
									className='quote-outer-container flex flex-row justify-between rounded-2xl bg-[--darkblue]  p-20 text-left text-[--white] max-lg:hidden '
								>
									<div className=' flex w-[55%] flex-col justify-between gap-12 '>
										<h2>{project.title}</h2>

										<p className='text-white'>
											{language === 'DE'
												? project.description
												: language === 'EN'
													? project.description_EN
													: project.description_VI}
										</p>
										<div className='technologies'>
											<h3>
												{language === 'DE'
													? 'Technologien'
													: language === 'EN'
														? 'Technologies'
														: 'Công Nghệ'}
											</h3>
											<div className='grid grid-cols-6 gap-10 p-4'>
												{project.technologies.map((technology, innerIndex: number) => (
													<img
														key={innerIndex}
														src={technology.icon}
														alt={`${project.title}-icon`}
														className='h-[5rem] w-[60%] '
														data-tooltip-id='my-tooltip'
														data-tooltip-content={technology.name}
													/>
												))}
											</div>
										</div>
										<div className='buttons flex gap-10'>
											<Button
												label='Live Demo'
												link={project.deploymenturl}
												iconSVG={project.deploymenticon}
												buttoncolor={project.colors.main}
												iconcolor={project.colors.icon}
												onClick={notifyServerRequest}
											/>
											<Button
												label='Github Repository'
												link={project.githuburl}
												iconSVG={project.githubicon}
												buttoncolor={project.colors.main}
												iconcolor={project.colors.icon}
											/>
										</div>
									</div>

									<div className='right-content relative h-[40rem] w-[41%] overflow-hidden rounded-xl shadow-2xl transition-all duration-200'>
										<img
											src={project.image}
											alt={`${project.title}-project-mockup`}
											className={`h-auto w-full transform opacity-100 transition-all duration-[6000ms] hover:translate-y-[-50%] 
                      `}
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						{projectsData.map((project, index: number) => (
							<article
								key={index}
								className='mb-10 flex h-full w-[80%] flex-col gap-10  rounded-xl border-[0.4rem] border-lightblue bg-darkblue p-8 max-lg:w-[90%] min-[1024px]:hidden'
							>
								<h2 className='text-white'>{project.title}</h2>
								<img
									src={project.image}
									alt={project.image}
									className='h-[35vh] w-full rounded-3xl object-cover object-top'
								/>
								<div className='buttons flex gap-10 max-lg:flex-col'>
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
								<p className='text-white  max-lg:text-4xl'>
									{language === 'DE'
										? project.description
										: language === 'EN'
											? project.description_EN
											: project.description_VI}
								</p>

								<div className='technologies'>
									<h3 className='text-white'>
										{language === 'DE'
											? 'Technologien'
											: language === 'EN'
												? 'Technologies'
												: 'Công Nghệ'}
									</h3>
									<div className='grid grid-cols-3 gap-10 p-4'>
										{project.technologies.map((technology, innerIndex: number) => (
											<img
												key={innerIndex}
												src={technology.icon}
												alt={`${project.title}-icon`}
												className='h-[5rem] w-[60%] '
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
