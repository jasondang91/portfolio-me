import React from 'react'
import { useLanguage } from '../context/language-context'

type language = 'EN' | 'DE' | 'VI'

const LanguageSwitch: React.FC = () => {
	const { language, toggleLanguage } = useLanguage()

	const handleLanguageChange = (newLanguage: language) => {
		if (language !== newLanguage) {
			toggleLanguage(newLanguage)
		}
	}

	return (
		<React.Fragment>
			<div className='language-switch-container flex flex-row justify-center'>
				<div className='flex flex-row items-center gap-x-2'>
					<button
						className={`px-2 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/20 transition text-[13px] font-medium ${language === 'EN' ? 'border-3 border-tastycolor text-tastycolor' : ''}`}
						onClick={() => handleLanguageChange('EN')}
					>
						<span className={`${language === 'EN' ? 'text-mint' : ''}`}>EN</span>
					</button>
					<button
						className={`px-2 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/20 transition text-[13px] font-medium ${language === 'VI' ? 'border-3 border-tastycolor text-tastycolor' : ''}`}
						onClick={() => handleLanguageChange('VI')}
					>
						<span className={`${language === 'VI' ? 'text-mint' : ''}`}>VN</span>
					</button>
					<button
						className={`px-2 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/20 transition text-[13px] font-medium ${language === 'DE' ? 'border-3 border-tastycolor text-tastycolor' : ''}`}
						onClick={() => handleLanguageChange('DE')}
					>
						<span className={`${language === 'DE' ? 'text-mint' : ''}`}>DE</span>
					</button>
				</div>
			</div>
		</React.Fragment>
	)
}

export default LanguageSwitch
