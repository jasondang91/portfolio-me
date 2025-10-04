import { Link } from 'react-router-dom'
import { sideBarRightMail } from '../assets/lib/data'
import React from 'react'

const SiteBarLeft: React.FC = () => {
	return (
		<div className='max-lg:hidden right-0 bottom-0 absolute flex flex-col items-center mr-8 h-[60vh]'>
			<div className='flex justify-center items-center w-[4rem] h-[65%]'>
				<Link
					to={sideBarRightMail.link}
					className='top-0 right-0 absolute mb-2 h-[50%] text-[--lightblue] hover:text-[--mint] transition-all duration-200 [writing-mode:vertical-lr]'
				>
					{sideBarRightMail.text}
				</Link>
			</div>
			<div className='flex flex-col justify-center items-center h-[70%]'>
				<div className='bg-[--lightblue] w-[0.25rem] h-[100%]'></div>
			</div>
		</div>
	)
}

export default SiteBarLeft
