import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Loader() {
	const [letterIndex, setLetterIndex] = useState<number>(-1)
	const text = 'COZYDEV'

	useEffect(() => {
		if (letterIndex < text.length - 1) {
			const timer = setTimeout(() => {
				setLetterIndex(letterIndex + 1)
			}, 200) // Adjust timing as needed

			return () => clearTimeout(timer)
		}
	}, [letterIndex, text.length])
	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-blackblue'>
			<div className='relative'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
					className='text-3xl font-light tracking-[0.5em] text-white md:text-6xl'
				>
					{text.split('').map((letter, index) => (
						<motion.span
							key={index}
							initial={{ opacity: 0 }}
							animate={{
								opacity: index <= letterIndex ? 1 : 0,
							}}
							transition={{
								duration: 0.3,
								delay: index * 0.1,
							}}
							className='inline-block'
						>
							{letter}
						</motion.span>
					))}
				</motion.div>
				<motion.div
					className='absolute -bottom-3 left-0 h-2 bg-[--purple]'
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					transition={{ duration: 2.5, ease: 'easeInOut' }}
				/>
			</div>
		</div>
	)
}
