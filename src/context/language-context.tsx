/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState, createContext, useContext } from 'react'

type language = 'EN' | 'DE' | 'VI'

type LanguageContextProviderProps = {
	children: React.ReactNode
}

type LanguageContextType = {
	language: language
	toggleLanguage: (newLanguage: language) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export default function LanguageContextProvider({ children }: LanguageContextProviderProps) {
	const [language, setLanguage] = useState<language>('EN')

	const toggleLanguage = (newLanguage: language) => {
		setLanguage(newLanguage)
		window.localStorage.setItem('language', newLanguage)

		if (newLanguage === 'DE') {
			document.documentElement.classList.add('DE')
			document.documentElement.classList.remove('EN', 'VI')
		} else if (newLanguage === 'EN') {
			document.documentElement.classList.add('EN')
			document.documentElement.classList.remove('DE', 'VI')
		} else if (newLanguage === 'VI') {
			document.documentElement.classList.add('VI')
			document.documentElement.classList.remove('DE', 'EN')
		}
	}

	useEffect(() => {
		const localLanguage = window.localStorage.getItem('language') as language | null

		if (localLanguage) {
			setLanguage(localLanguage)

			if (localLanguage === 'DE') {
				document.documentElement.classList.add('DE')
				document.documentElement.classList.remove('EN', 'VI')
			} else if (localLanguage === 'EN') {
				document.documentElement.classList.add('EN')
				document.documentElement.classList.remove('DE', 'VI')
			} else if (localLanguage === 'VI') {
				document.documentElement.classList.add('VI')
				document.documentElement.classList.remove('DE', 'EN')
			}
		} else if (window.matchMedia('(prefers-color-scheme: DE)').matches) {
			setLanguage('DE')
			document.documentElement.classList.add('DE')
			document.documentElement.classList.remove('EN', 'VI')
		}
	}, [])

	return (
		<LanguageContext.Provider
			value={{
				language,
				toggleLanguage,
			}}
		>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLanguage() {
	const context = useContext(LanguageContext)

	if (context === null) {
		throw new Error('useLanguage must be used within a LanguageContextProvider')
	}

	return context
}
