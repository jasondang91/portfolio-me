import React from 'react'
import Button from './Button'
import RadialGradient from './RadialGradient'
import { headerIntroData } from '../assets/lib/data'
import { useSectionInView } from '../assets/lib/hooks'
import { useActiveSectionContext } from '../context/active-section-context'
import { useLanguage } from '../context/language-context'
import { BsMouse } from 'react-icons/bs'
import { IconType } from 'react-icons'

const HeaderIntro: React.FC = () => {
	const { language } = useLanguage()
	const { ref } = useSectionInView('Home', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	const handleButtonClick = (button: {
		name: 'Home' | 'Skills' | 'Projects' | 'About me' | 'Contact' | 'Resume'
		label: { de: string; en: string; vi: string }
		icon: IconType
		color: string
		download?: boolean
		fileUrl?: string
	}) => {
		if (button.download) {
			window.open(button.fileUrl, '_blank')
		} else if (button.name !== 'Resume') {
			setActiveSection(button.name)
			setTimeOfLastClick(Date.now())
		}
	}

	return (
		<section
			className='hero flex h-full flex-col items-center justify-center gap-10 max-lg:h-full max-lg:gap-6'
			ref={ref}
			id='home'
		>
			<RadialGradient scale='scale-y-125' opacity='opacity-30' />

			<img
				src={headerIntroData.profilepicture}
				alt={headerIntroData.profilepicture}
				className='avatar-img w-1/6 rounded-full shadow-2xl drop-shadow-2xl max-lg:w-3/4'
			/>
			<h1 className='mt-12 text-4xl md:mt-0 md:text-6xl'>
				{language === 'DE'
					? headerIntroData.title.de
					: language === 'EN'
						? headerIntroData.title.en
						: headerIntroData.title.vi}
				<span className='wave ms-2 text-4xl md:text-7xl'>&#128075;&#127997;</span>
			</h1>
			<h2 className='text-4xl md:text-6xl'>{headerIntroData.subtitle}</h2>
			<p className='w-1/2 text-center max-lg:hidden'>
				{language === 'DE'
					? headerIntroData.description.de
					: language === 'EN'
						? headerIntroData.description.en
						: headerIntroData.description.vi}
			</p>

			<div className='button-container mb-12 flex items-center justify-center gap-10 max-lg:flex-col max-lg:items-center md:mr-8'>
				{headerIntroData.buttons.map((button, index) => (
					<Button
						key={index}
						className=''
						label={
							language === 'DE' ? button.label.de : language === 'EN' ? button.label.en : button.label.vi
						}
						iconSVG={button.icon}
						link={button.download ? undefined : `#${button.name.toLocaleLowerCase()}`}
						buttoncolor={button.color}
						onClick={() => handleButtonClick(button)}
					/>
				))}
			</div>
			<div className='scroll-down-container flex animate-bounce gap-6'>
				<BsMouse className='text-[2.6rem]' />
			</div>
		</section>
	)
}

export default HeaderIntro
