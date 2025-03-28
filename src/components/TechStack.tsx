import React, { useRef } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { useSectionInView } from '../assets/lib/hooks'
import { skillsDataCMS, skillsDataDesign, skillsDataWeb } from '../assets/lib/data'
import { useTheme } from '../context/theme-context'
import { useLanguage } from '../context/language-context'
import SkillSection from './SkillSection'
import RadialGradient from './RadialGradient'
import { motion, useScroll, useTransform } from 'framer-motion'

const TechStack: React.FC = () => {
	const { ref } = useSectionInView('Skills')
	const { theme } = useTheme()
	const { language } = useLanguage()
	const animationReference = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: animationReference,
		offset: ['0 1', '1.33 1'],
	})
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
	return (
		<React.Fragment>
			<section className='tech-stack relative max-lg:p-16 ' id='skills' ref={ref}>
				<RadialGradient
					scale='scale-y-[3]'
					opacity={theme === 'light' ? 'opacity-30' : 'opacity-30'}
					position='top-[55rem]'
				/>
				<div className='title-container flex w-1/2 flex-col items-center justify-center gap-6   p-32 max-lg:w-full max-lg:items-start  max-lg:p-0 max-lg:py-16 min-[1921px]:px-[55rem] '>
					<motion.div
						ref={animationReference}
						style={{
							scale: scaleProgess,
							opacity: opacityProgess,
						}}
					>
						<p className='mb-6 font-black'>
							<span className='text-[--purple]'>&lt;</span>Skills
							<span className='text-[--purple]'>/&gt;</span>
						</p>
						<h2>
							{language === 'DE'
								? 'Meine Techstack und Skills'
								: language === 'EN'
									? 'My TechStack and Skills'
									: 'Các kỹ năng của tôi'}
						</h2>
					</motion.div>
				</div>
				<div className='flex justify-center gap-40 max-lg:flex-col'>
					<div className='w-1/3 max-lg:w-full'>
						<SkillSection skillsData={skillsDataWeb} theme={theme} />
					</div>
					<div className='flex h-[inherit] flex-col  justify-around max-lg:gap-40'>
						<SkillSection skillsData={skillsDataDesign} theme={theme} />
						<SkillSection skillsData={skillsDataCMS} theme={theme} />
					</div>
				</div>
			</section>
			<ReactTooltip
				place='top'
				id='my-tooltip'
				style={{
					fontSize: '1.5rem',
					zIndex: 10,
					backgroundColor: 'var(--purple)',
				}}
			/>
		</React.Fragment>
	)
}

export default TechStack
