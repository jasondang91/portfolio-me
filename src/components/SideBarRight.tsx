import { Link } from 'react-router-dom'
import { sideBarRightMail } from '../assets/lib/data'
import React from 'react'

const SiteBarLeft: React.FC = () => {
	return (
		<div className='absolute bottom-0 right-0 mr-8  flex h-[60vh] flex-col  items-center max-lg:hidden '>
			<div className=' flex h-[65%] w-[4rem] items-center justify-center '>
				<Link
					to={sideBarRightMail.link}
					className=' absolute right-0 top-0 mb-2 h-[50%] text-[--purple]  text-gray-700 transition-all duration-200 [writing-mode:vertical-lr] hover:text-[--lightblue] '
				>
					{sideBarRightMail.text}
				</Link>
			</div>
			<div className='flex h-[70%] flex-col items-center justify-center '>
				<div className=' h-[100%] w-[0.25rem] bg-[--lightblue]'></div>
			</div>
		</div>
	)
}

export default SiteBarLeft
