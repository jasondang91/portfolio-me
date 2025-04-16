import React from 'react'
import Button from './Button'
import RadialGradient from './RadialGradient'
import { headerIntroData } from '../assets/lib/data'
import { useSectionInView } from '../assets/lib/hooks'
import { useActiveSectionContext } from '../context/active-section-context'
import { useLanguage } from '../context/language-context'
import { BsMouse } from 'react-icons/bs'

const HeaderIntro: React.FC = () => {
	const { language } = useLanguage()
	const { ref } = useSectionInView('Home', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	return (
		<section
			className='flex flex-col justify-center items-center gap-10 max-lg:gap-6 h-full max-lg:h-full hero'
			ref={ref}
			id='home'
		>
			<RadialGradient scale='scale-y-125' opacity='opacity-30' />

			<img
				src={headerIntroData.profilepicture}
				alt={headerIntroData.profilepicture}
				className='shadow-2xl drop-shadow-2xl rounded-full w-1/6 max-lg:w-3/4 avatar-img'
			/>
			<h1 className='mt-12 md:mt-0 text-4xl md:text-6xl'>
				{language === 'DE'
					? headerIntroData.title.de
					: language === 'EN'
						? headerIntroData.title.en
						: headerIntroData.title.vi}
				<span className='ms-2 text-4xl md:text-7xl wave'>&#128075;&#127997;</span>
			</h1>
			<h2 className='text-4xl md:text-6xl'>{headerIntroData.subtitle}</h2>
			<p className='max-lg:hidden w-1/2 text-center'>
				{language === 'DE'
					? headerIntroData.description.de
					: language === 'EN'
						? headerIntroData.description.en
						: headerIntroData.description.vi}
			</p>

			<div className='flex max-lg:flex-col justify-center items-center max-lg:items-center gap-10 md:mr-8 mb-12 button-container'>
				{headerIntroData.buttons.map((button, index) => (
					<Button
						key={index}
						className='px-12 py-7'
						label={
							language === 'DE' ? button.label.de : language === 'EN' ? button.label.en : button.label.vi
						}
						iconSVG={button.icon}
						link={`#${button.name.toLocaleLowerCase()}`}
						buttoncolor={button.color}
						onClick={() => {
							setActiveSection(button.name)
							setTimeOfLastClick(Date.now())
						}}
					/>
				))}
			</div>
			<div className='flex gap-6 animate-bounce scroll-down-container'>
				<BsMouse className='text-[2.6rem]' />
			</div>
		</section>
	)
}

export default HeaderIntro
