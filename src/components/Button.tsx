import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
	onClick?: () => void
	label?: string
	subtitle?: string
	value?: string
	className?: string
	link?: string
	iconcolor?: string
	iconSVG?: React.FC<{ className: string }>
	buttoncolor?: string
	buttonhovercolor?: string
	type?: 'button' | 'submit' | 'reset'
	elementType?: 'input' | 'button'
	disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
	onClick,
	label,
	subtitle,
	link,
	value,
	iconSVG: IconSVGComponent,
	type,
	elementType,
	disabled,
	className,
}) => {
	const baseClass = `group relative py-2 px-6 rounded-2xl border-2 border-purple/30 bg-gradient-to-br from-purple/20 via-blackblue/60 to-transparent shadow-2xl hover:shadow-purple/30 hover:border-purple/60 hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer overflow-hidden text-left backdrop-blur-xl ${disabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''} ${className ?? ''}`

	const inner = (displayLabel?: string) => (
		<>
			{/* Shimmer sweep */}
			<div className='absolute inset-0 bg-gradient-to-r from-transparent via-purple/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none' />
			{/* Glow overlay */}
			<div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-purple/10 via-purple/20 to-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

			<div className='relative z-10 flex items-center gap-2'>
				{/* Icon box */}
				{IconSVGComponent && (
					<div className='p-2 rounded-lg bg-gradient-to-br from-purple/30 to-purple/10 backdrop-blur-sm group-hover:from-purple/50 group-hover:to-purple/20 transition-all duration-300 flex-shrink-0'>
						<IconSVGComponent className='w-7 h-7 text-purple transition-all duration-300 group-hover:scale-110 drop-shadow-lg' />
					</div>
				)}

				{/* Label + subtitle */}
				<div className='flex-1'>
					<p className='text-purple font-bold text-[1.5rem] group-hover:brightness-125 transition-all duration-300 drop-shadow-sm leading-none mb-1'>
						{displayLabel}
					</p>
					{subtitle && (
						<p className='text-purple/60 text-lg group-hover:text-purple/80 transition-colors duration-300'>
							{subtitle}
						</p>
					)}
				</div>

				{/* Arrow */}
				<div className='opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0'>
					<svg viewBox='0 0 24 24' stroke='currentColor' fill='none' className='w-6 h-6 text-purple'>
						<path d='M9 5l7 7-7 7' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round' />
					</svg>
				</div>
			</div>
		</>
	)

	// Submit / standalone button (replaces old elementType='input' path too)
	if (elementType === 'input' || (type === 'submit' && !link)) {
		return (
			<button
				type={type ?? 'submit'}
				disabled={disabled}
				onClick={onClick}
				className={baseClass}
			>
				{inner(value ?? label)}
			</button>
		)
	}

	// Link button
	return (
		<Link to={link || ''} className='no-underline'>
			<button
				type={type ?? 'button'}
				disabled={disabled}
				onClick={onClick}
				className={baseClass}
			>
				{inner(label)}
			</button>
		</Link>
	)
}

export default Button
