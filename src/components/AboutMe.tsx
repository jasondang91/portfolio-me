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
			<section className='about-me relative mt-16 ' id='about-me' ref={ref}>
				<div className='title-container flex w-1/2 flex-col items-center justify-center gap-6 p-32 max-lg:w-full max-lg:items-start max-lg:p-16'>
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

						<h2 className='break-words text-center text-[--black] max-lg:text-left'>
							{language === 'DE'
								? aboutMeData.description
								: language === 'EN'
									? aboutMeData.description_EN
									: aboutMeData.description_VI}
						</h2>
					</motion.div>
				</div>
				<div className='mb-16 flex flex-row items-center justify-center gap-6 pl-32 pr-32  max-lg:flex-col max-lg:p-16 min-[1921px]:mb-48 min-[1921px]:px-[45rem]'>
					<article className='pl-60 max-lg:p-0'>
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
						className='z-2 relative w-1/2 pb-32 pl-20 pr-20 pt-32 max-lg:w-full max-lg:pb-16 max-lg:pl-0 max-lg:pr-0 max-lg:pt-16 min-[1921px]:w-1/2'
					>
						{paragraphs.map((paragraph, index) => (
							<SwiperSlide
								className='flex cursor-grab flex-col items-start justify-center gap-24 rounded-2xl border-[0.4rem] border-solid border-[--lightblue] bg-[--darkblue] p-20 text-left text-[--white] transition-all duration-500 hover:border-purple max-lg:p-10'
								key={index}
							>
								<div className='flex flex-row items-center justify-start gap-6 max-lg:flex-col max-lg:justify-center max-lg:text-center '>
									<div>
										<img src={paragraph.icon} alt={paragraph.icon} className='w-24' />
									</div>
									<div>
										<h2>{paragraph.title}</h2>
									</div>
								</div>
								<div className='flex flex-row gap-10 max-lg:flex-col'>
									<div className='-mb-10 -mt-10 flex flex-col items-center justify-between gap-4 max-lg:m-0 max-lg:flex-row'>
										<p className='text-white'>
											<span className='text-purple'>&lt;</span>h3
											<span className='text-purple'>/&gt;</span>
										</p>
										<div className='flex h-[100%] w-1 items-center justify-between max-lg:w-[10rem] max-lg:flex-row  max-lg:bg-lightblue'>
											<div></div>
											<div className='h-[100%] w-[0.5rem] bg-[--lightblue] max-lg:h-[0.25rem]  max-lg:w-10 max-lg:bg-lightblue'></div>
											<div></div>
										</div>
										<p className='text-white'>
											<span className='text-purple'>&lt;</span>h3
											<span className='text-purple'>/&gt;</span>
										</p>
									</div>
									<div>
										<p className='text-4xl text-white'>{paragraph.description}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
						<div
							className='autoplay-progress absolute bottom-0 right-0 z-10 flex h-24 w-24 items-center justify-center text-4xl font-bold text-purple max-lg:h-16 max-lg:w-16 max-lg:text-3xl '
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
