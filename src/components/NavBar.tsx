import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../assets/lib/data'
import ScrollToAnchor from './Listener'
import { useActiveSectionContext } from '../context/active-section-context'
import { useTheme } from '../context/theme-context'
import { useLanguage } from '../context/language-context'
import LanguageSwitch from './LanguageSwitch'

const NavBar: React.FC = () => {
	const { theme } = useTheme()
	const { language } = useLanguage()

	const [isSticky, setIsSticky] = useState(false)
	const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
	const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY
			const threshold = window.outerHeight * 0.1
			setIsSticky(scrollY >= threshold)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 1024) {
				setIsMobileMenuActive(true)
				setIsSticky(false)
			} else {
				setIsMobileMenuActive(false)
				setIsSticky(true)
			}
		}

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const CustomNavLink: React.FC<CustomNavLinkProps> = ({ link, children, linkEn }) => {
		const [isHovered, setIsHovered] = useState(false)
		const isLinkActive = isHovered || linkEn === activeSection

		const linkClasses = isLinkActive
			? 'transition-all duration-200 relative'
			: 'opacity-20 transition-all duration-700'

		const leftArrow = isLinkActive && (
			<span className='max-lg:hidden top-0 -left-5 absolute text-[--purple]'>&lt;</span>
		)

		const rightArrow = isLinkActive && (
			<span className='max-lg:hidden top-0 -right-10 absolute text-[--purple]'>/&gt;</span>
		)

		return (
			<NavLink
				to={link}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className={`relative ${linkClasses}`}
				aria-aria-current={link}
			>
				<span>
					{leftArrow}
					{children}
					{rightArrow}
				</span>
			</NavLink>
		)
	}

	return (
		<React.Fragment>
			<ScrollToAnchor />
			{!isMobileMenuActive && (
				<nav
					className={`top-0 flex flex-row items-center justify-center gap-24 p-5 font-semibold max-lg:hidden ${isSticky && !isMobileMenuActive
						? `sticky top-10 z-50 ml-auto mr-auto  w-max  rounded-full border border-white border-opacity-40 bg-opacity-70 px-16 py-5 shadow-lg shadow-black/[0.03]  backdrop-blur-[0.5rem] transition-all duration-100 ease-in-out ${theme === 'dark' ? 'bg-darkblue' : 'bg-white'
						}`
						: ''
						}
   `}
				>
					{navLinks.map((link, index) => (
						<CustomNavLink key={index} link={link.hash} linkEn={link.en}>
							{link.en === activeSection ? (
								<div>
									<span className='top-0 -left-5 absolute text-[--purple]'>&lt;</span>
									{language === 'DE' ? link.de : language === 'EN' ? link.en : link.vi}
									{/* {link.de.toLocaleUpperCase()} */}
								</div>
							) : (
								<div
									onClick={() => {
										setActiveSection(link.en)
										setTimeOfLastClick(Date.now())
									}}
								>
									{language === 'DE' ? link.de : language === 'EN' ? link.en : link.vi}

									{/* {link.de.toLocaleUpperCase()} */}
								</div>
							)}
						</CustomNavLink>
					))}
					<LanguageSwitch />
				</nav>
			)}
			{isMobileMenuActive && (
				<nav
					className={` fixed bottom-0 left-0 z-50 w-[100vw] flex-row items-center justify-between rounded-t-3xl bg-darkblue  bg-opacity-100 py-6 px-10 text-center shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] transition-all duration-100 ease-in-out max-lg:flex ${theme === 'dark' ? 'bg-darkblue' : 'bg-white'
						}`}
				>
					{navLinks.map((link, mobileIndex) => (
						<CustomNavLink key={mobileIndex} link={link.hash} linkEn={link.en}>
							{link.en === activeSection ? (
								<div className='flex flex-col items-center text-[3.2rem]'>
									<link.icon />
								</div>
							) : (
								<div
									className='flex flex-col items-center text-[2rem]'
									onClick={() => {
										setActiveSection(link.en)
										setTimeOfLastClick(Date.now())
										if (link.en === 'Home') {
											document.body.scrollIntoView({
												behavior: 'smooth',
												block: 'start',
											})
										}
									}}
								>
									<link.icon />
								</div>
							)}
						</CustomNavLink>
					))}
					<LanguageSwitch />
				</nav>
			)}
		</React.Fragment>
	)
}

interface CustomNavLinkProps {
	link: string
	children: React.ReactNode
	linkEn?: string
}

export default NavBar
