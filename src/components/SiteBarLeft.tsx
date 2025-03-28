/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Link } from 'react-router-dom'
import { sideBarLeftSocials } from '../assets/lib/data'

interface SocialLink {
	link: string
	icon: string | React.FC<{ className: string }>
	iconcolor?: string
	altimgname: any
}

const SiteBarLeft: React.FC = () => {
	return (
		<div
			className='absolute left-0 top-0 ml-8 flex flex-col items-center justify-center max-lg:ml-4 max-lg:h-[10%]'
			id='home'
		>
			<div className='flex flex-col items-center justify-center'>
				<div className='h-[40vh] w-[0.25rem] bg-[--lightblue]'></div>
			</div>
			<div className='mt-4 flex flex-col gap-4'>
				{sideBarLeftSocials.map((social: SocialLink, index: number) => (
					<Link
						to={social.link}
						className='mb-2 block hover:scale-110'
						key={index}
						target='_blank'
						rel='noopener noreferrer'
						aria-current={social.altimgname === 'true' ? social.altimgname : social.altimgname + ' button'}
					>
						{typeof social.icon === 'function' ? (
							<social.icon className={`stroke-purple`} />
						) : (
							<img src={social.icon} alt={social.altimgname} style={{ stroke: social.iconcolor }} />
						)}
					</Link>
				))}
			</div>
		</div>
	)
}

export default SiteBarLeft
