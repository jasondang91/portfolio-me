import React from 'react'

import bannerBg from '../assets/img/bannerbg.webp'
import { quotesData } from '../assets/lib/data'
import { useLanguage } from '../context/language-context'
import { useQuoteAnimation } from '../hooks/useQuoteAnimation'

interface BannerProps {
	style: 'withBG' | 'noBG'
	quoteIndex: number
	containerType: string
}

const BannerQuote: React.FC<BannerProps> = ({ style, quoteIndex, containerType }) => {
	const { language } = useLanguage()

	const quoteTranslation =
		language === 'DE'
			? quotesData[quoteIndex].de
			: language === 'EN'
				? quotesData[quoteIndex].en
				: quotesData[quoteIndex].vi

	useQuoteAnimation(`.${containerType}-container h2`)

	return style === 'withBG' ? (
		<React.Fragment>
			<section className='quote-banner relative z-[1] overflow-x-clip'>
				<div
					className='quote-outer-container flex h-[50vh] -rotate-3 scale-110 items-center justify-center bg-[--darkblue] max-lg:h-full min-[1921px]:px-96'
					style={{
						backgroundImage: `url(${bannerBg})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<div className='quote-container flex rotate-3 flex-col items-center justify-center p-56 max-lg:p-20 '>
						<h2 className='mb-20 mt-20 text-center text-8xl text-[--white] max-lg:mb-10 max-lg:text-[3rem] max-lg:leading-tight'>
							{quoteTranslation}
						</h2>
						<p className='text-[--grey]'>{quotesData[0].author}</p>
					</div>
				</div>
			</section>
		</React.Fragment>
	) : (
		<React.Fragment>
			<section className='quote-banner relative overflow-x-clip min-[1921px]:px-96'>
				<div className='flex h-[50vh] -rotate-3 scale-110 items-center justify-center'>
					<div className='statement-container flex rotate-3 flex-col items-center justify-center p-56 max-lg:p-20'>
						<h2 className='mb-20 mt-20 text-center text-9xl text-[--black] max-lg:mb-10 max-lg:text-[3rem] max-lg:leading-tight'>
							{quoteTranslation}
						</h2>
					</div>
				</div>
			</section>
		</React.Fragment>
	)
}

export default BannerQuote
