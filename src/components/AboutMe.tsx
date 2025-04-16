/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react'
import me from '../assets/img/profile.png'
import { aboutMeData } from '../assets/lib/data'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useSectionInView } from '../assets/lib/hooks'
import { useLanguage } from '../context/language-context'

const AboutMe: React.FC = () => {
	const progressCircle = useRef<SVGSVGElement | null>(null)
	const progressContent = useRef<HTMLSpanElement | null>(null)
	const { ref } = useSectionInView('About me')
	const { language } = useLanguage()
	const animationReference = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: animationReference,
		offset: ['0 1', '1.33 1'],
	})

	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

	const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
		if (progressCircle.current && progressContent.current) {
			progressCircle.current.style.setProperty('--progress', String(1 - progress))
			progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
		}
	}

	// Convert languages
	const paragraphs =
		language === 'DE'
			? aboutMeData.paragraphs_DE
			: language === 'EN'
				? aboutMeData.paragraphs_EN
				: aboutMeData.paragraphs_VI

	return (
		<React.Fragment>
			<section className='relative mt-16 about-me' id='about-me' ref={ref}>
				<div className='flex flex-col justify-center items-center max-lg:items-start gap-6 p-32 max-lg:p-16 w-1/2 max-lg:w-full title-container'>
					<motion.div
						ref={animationReference}
						style={{
							scale: scaleProgess,
							opacity: opacityProgess,
							textAlign: 'left',
						}}
					>
						<p className='mb-6 text-[--black]'>
							<span className='text-purple'>&lt;</span>
							{language === 'DE'
								? aboutMeData.title
								: language === 'EN'
									? aboutMeData.title_EN
									: aboutMeData.title_VI}
							<span className='text-purple'>/&gt;</span>
						</p>

						<h2 className='text-[--black] max-lg:text-left text-center break-words'>
							{language === 'DE'
								? aboutMeData.description
								: language === 'EN'
									? aboutMeData.description_EN
									: aboutMeData.description_VI}
						</h2>
					</motion.div>
				</div>
				<div className='flex flex-row max-lg:flex-col justify-center items-center gap-6 mb-16 min-[1921px]:mb-48 p-12 md:p-16 min-[1921px]:px-[45rem] pr-16 md:pr-32 pl-16 md:pl-32'>
					<article className='max-lg:p-0 pl-60'>
						<img src={me} alt={me} />
					</article>
					<Swiper
						spaceBetween={100}
						centeredSlides={true}
						autoplay={{
							delay: 10000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						modules={[Autoplay, Pagination, Navigation]}
						onAutoplayTimeLeft={onAutoplayTimeLeft}
						className='z-2 relative pt-32 max-lg:pt-16 pr-20 max-lg:pr-0 pb-32 max-lg:pb-16 pl-20 max-lg:pl-0 w-1/2 min-[1921px]:w-1/2 max-lg:w-full'
					>
						{paragraphs.map((paragraph, index) => (
							<SwiperSlide
								className='flex flex-col justify-center items-start gap-24 bg-[--darkblue] p-20 max-lg:p-10 border-[--lightblue] border-[0.4rem] hover:border-purple border-solid rounded-2xl text-[--white] text-left transition-all duration-500 cursor-grab'
								key={index}
							>
								<div className='flex flex-row max-lg:flex-col justify-start max-lg:justify-center items-center gap-6 max-lg:text-center'>
									<div>
										<img src={paragraph.icon} alt={paragraph.icon} className='w-24' />
									</div>
									<div>
										<h2>{paragraph.title}</h2>
									</div>
								</div>
								<div className='flex flex-row max-lg:flex-col gap-10'>
									<div className='flex max-lg:flex-row flex-col justify-between items-center gap-4 max-lg:m-0 -mt-10 -mb-10'>
										<p className='text-white'>
											<span className='text-purple'>&lt;</span>h3
											<span className='text-purple'>/&gt;</span>
										</p>
										<div className='flex max-lg:flex-row justify-between items-center max-lg:bg-lightblue w-1 max-lg:w-[10rem] h-[100%]'>
											<div></div>
											<div className='bg-[--lightblue] max-lg:bg-lightblue w-[0.5rem] max-lg:w-10 h-[100%] max-lg:h-[0.25rem]'></div>
											<div></div>
										</div>
										<p className='text-white'>
											<span className='text-purple'>&lt;</span>h3
											<span className='text-purple'>/&gt;</span>
										</p>
									</div>
									<div>
										<p className='text-white text-4xl'>{paragraph.description}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
						<div
							className='right-0 bottom-0 z-10 absolute flex justify-center items-center w-24 max-lg:w-16 h-24 max-lg:h-16 font-bold text-purple max-lg:text-3xl text-4xl autoplay-progress'
							slot='container-end'
						>
							<svg viewBox='0 0 48 48' ref={progressCircle}>
								<circle cx='24' cy='24' r='20'></circle>
							</svg>
							<span ref={progressContent}></span>
						</div>
					</Swiper>
				</div>
			</section>
		</React.Fragment>
	)
}

export default AboutMe
