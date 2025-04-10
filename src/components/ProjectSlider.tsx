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
import { BsBoxArrowUpRight } from "react-icons/bs";



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
				className='relative flex flex-col gap-2 w-full h-100% overflow-x-clip skill-banner'
				id='projects'
				ref={ref}
			>
				<ToastContainer
					className='block p-3 w-max text-3xl'
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
					className='flex justify-center items-center bg-[--darkblue] max-lg:-mr-44 max-lg:-ml-44 pt-32 max-lg:pt-16 pb-32 max-lg:pb-16 -rotate-3 scale-110 max-lg:scale-100 quote-outer-container'
					style={{
						backgroundImage: `url(${bannerBg})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className='flex flex-col justify-between items-center gap-6 mb-24 max-lg:w-[100vw] text-center rotate-3 title-container'>
						<motion.div
							ref={animationReference}
							style={{
								scale: scaleProgess,
								opacity: opacityProgess,
								textAlign: 'center',
							}}
						>
							<p className='mt-16 mb-6 text-[--white]'>
								<span className='text-[--purple]'>&lt;</span>
								{language === 'DE' ? 'Projekte' : language === 'EN' ? 'Projects' : 'Dự Án'}
								<span className='text-[--purple]'>/&gt;</span>
							</p>
							<h2 className='mb-4 text-[--white]'>
								{language === 'DE'
									? 'Meine Projekte'
									: language === 'EN'
										? 'My Projects'
										: 'Một Vài Dự Án Của Tôi'}
							</h2>

							<a href='/projects' className='flex justify-center items-center gap-x-2 mb-16 font-[200] text-[--white] text-[16px] text-mint underline'>
								{language === 'DE'
									? 'Mehr von meinen Projekten ansehen'
									: language === 'EN'
										? 'See more of my projects'
										: 'Xem thêm những dự án của tôi'}
								<BsBoxArrowUpRight />
							</a>
						</motion.div>
						<Swiper
							effect={'cards'}
							grabCursor={true}
							modules={[EffectCards, Autoplay, Pagination]}
							className='max-lg:hidden min-[1921px]:px-96 w-[60vw]'
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
							{projectsData.slice(0, 4).map((project, index: number) => (
								<SwiperSlide
									key={index}
									className='max-lg:hidden flex flex-row justify-between bg-[--darkblue] p-20 rounded-2xl text-[--white] text-left quote-outer-container'
								>
									<div className='flex flex-col justify-between gap-12 w-[55%]'>
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
											<div className='gap-10 grid grid-cols-6 p-4'>
												{project.technologies.map((technology, innerIndex: number) => (
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
										</div>
										<div className='flex gap-10 buttons'>
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

									<div className='right-content relative shadow-2xl rounded-xl w-[41%] h-[40rem] overflow-hidden transition-all duration-200'>
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
						{projectsData.slice(0, 4).map((project, index: number) => (
							<article
								key={index}
								className='min-[1024px]:hidden flex flex-col gap-10 bg-darkblue mb-10 p-8 border-[0.4rem] border-lightblue rounded-xl w-[80%] max-lg:w-[90%] h-full'
							>
								<h2 className='text-white'>{project.title}</h2>
								<img
									src={project.image}
									alt={project.image}
									className='rounded-3xl w-full h-[35vh] object-cover object-top'
								/>
								<div className='flex max-lg:flex-col gap-10 buttons'>
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
								<p className='text-white max-lg:text-4xl'>
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
									<div className='gap-10 grid grid-cols-3 p-4'>
										{project.technologies.map((technology, innerIndex: number) => (
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
