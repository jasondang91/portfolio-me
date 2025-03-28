/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { sideBarLeftSocials, FooterLinks } from '../assets/lib/data'
import { useLanguage } from '../context/language-context'
import { useTheme } from '../context/theme-context'

import Popup from 'reactjs-popup'
import { VscChromeClose } from 'react-icons/vsc'
// const LazyServiceStatus = lazy(() => import('../components/ServiceStatus'))

interface SocialLink {
	link: string
	icon: string | React.FC<{ className: string }>
	strokeColor?: string
	altimgname: string
	iconcolor?: string
}

const Footer: React.FC = () => {
	const { language } = useLanguage()
	const { theme } = useTheme()

	return (
		<footer className='relative z-[1] flex items-center justify-around gap-10 bg-darkblue p-10 max-lg:flex-col max-lg:pb-48'>
			<div className='flex gap-10'>
				{FooterLinks.map((link, index) => (
					<Popup
						trigger={
							<Link to='#' className='text-2xl font-bold text-white hover:text-purple'>
								{language === 'DE' ? link.de : link.en}
							</Link>
						}
						modal
						key={index}
					>
						{(close: () => void) =>
							(
								<>
									<div
										className={`dark-shadow relative  max-h-[80vh] overflow-y-auto rounded-3xl p-32 max-lg:p-16 ${
											theme === 'dark' ? 'bg-darkblue' : 'bg-white'
										}`}
									>
										<button
											className='dark-shadow fixed right-0 top-0 z-10 m-4 rounded-2xl bg-purple p-4 text-white transition-all duration-500 hover:bg-lightblue'
											onClick={() => {
												close()
											}}
										>
											<VscChromeClose />
										</button>
										{link.data}
									</div>
								</>
							) as React.ReactNode
						}
					</Popup>
				))}
			</div>
			<div className='socials flex gap-10 '>
				{sideBarLeftSocials.map((social: SocialLink, index: number) => (
					<Link
						to={social.link}
						className='mb-2 block '
						key={index}
						target='_blank'
						rel='noopener noreferrer'
						aria-current={
							social.altimgname === 'true' ? social.altimgname + ' button' : social.altimgname + ' button'
						}
					>
						{typeof social.icon === 'function' ? (
							<social.icon className={`stroke-purple`} />
						) : (
							<img src={social.icon} alt={social.altimgname} style={{ stroke: social.iconcolor || '' }} />
						)}
					</Link>
				))}
			</div>
			<div>
				<Suspense fallback={<div>Loading...</div>}>{/* <LazyServiceStatus /> */}</Suspense>
			</div>
		</footer>
	)
}

export default Footer
