/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef } from 'react'
import Button from './Button'
import axios from 'axios'
import { contactData, toastMessages } from '../assets/lib/data.tsx'
import { useSectionInView } from '../assets/lib/hooks'
import { useLanguage } from '../context/language-context'
import { ToastContainer, toast } from 'react-toastify'
import { useTheme } from '../context/theme-context'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin, FaWhatsappSquare } from 'react-icons/fa'
import 'react-toastify/dist/ReactToastify.css'

import animationData from '../assets/blob/earth.json'

const BlobObject = React.lazy(() => import('../components/Blob.tsx'))

const Contact: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	const [selectedService, setSelectedService] = useState<string>('')
	const [, setLastUpdatedField] = useState<string | null>(null)
	const { ref } = useSectionInView('Contact')
	const { language } = useLanguage()
	const { theme } = useTheme()

	const services = {
		de: [
			'Benutzerdefinierte Website-Entwicklung',
			'E-Commerce-Website',
			'Landing Page',
			'Blog/Hochzeitswebsite',
			'UX/UI Design',
			'Figma, PSD zu Code konvertieren',
			'Unternehmensverwaltungssoftware',
			'Mobile Anwendung',
		],
		en: [
			'Custom Website Development',
			'E-commerce Site',
			'Landing Page',
			'Blog/Wedding Website',
			'UX/UI Design',
			'Convert figma, psd to code',
			'Business Management Software',
			'Mobile Application',
		],
		vi: [
			'Phát triển Website tuỳ chỉnh',
			'Website thương mại điện tử',
			'Landing Page',
			'Trang Blog hoặc Wedding',
			'Thiết kế UX/UI',
			'Cắt HTML từ figma hoặc PSD',
			'Phần mềm quản lý doanh nghiệp',
			'Ứng dụng di động',
		]
	}

	const questions = {
		services: {
			de: 'Welche Dienstleistungen benötigen Sie für Ihr Projekt?',
			en: 'What services do you need for your project?',
			vi: 'Bạn đang quan tâm dịch vụ nào cho dự án của mình?'
		}
	}

	const animationReference = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: animationReference,
		offset: ['0 1', '1.33 1'],
	})
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

	const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()
		setIsLoading(true)

		try {
			const formData = {
				access_key: import.meta.env.VITE_API_WEB_THREE_FORM_KEY,
				name,
				email,
				message,
				service: selectedService
			}

			const response = await axios.post('https://api.web3forms.com/submit', formData)

			if (response.status === 200) {
				// Reset form
				setName('')
				setEmail('')
				setMessage('')
				setSelectedService('')

				if (language === 'DE') {
					toast.success(toastMessages.successEmailSent.de)
				} else if (language === 'VI') {
					toast.success(toastMessages.successEmailSent.vi)
				} else {
					toast.success(toastMessages.successEmailSent.en)
				}
			}
		} catch (error) {
			console.error('Error submitting form:', error)
			if (language === 'DE') {
				toast.error(toastMessages.failedEmailSent.de)
			} else if (language === 'VI') {
				toast.error(toastMessages.failedEmailSent.vi)
			} else {
				toast.error(toastMessages.failedEmailSent.en)
			}
		} finally {
			setIsLoading(false)
		}
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target

		if (name === 'name') {
			setName(value)
		} else if (name === 'email') {
			setEmail(value)
		} else if (name === 'message') {
			setMessage(value)
		}

		setLastUpdatedField(name)
	}

	return (
		<React.Fragment>
			<section className='mt-16 min-[1921px]:px-[55rem] w-full contact-container' id='contact'>
				<div
					className='flex flex-col justify-center items-center gap-6 max-lg:p-16 py-16 title-container'
					ref={ref}
				>
					<motion.div
						ref={animationReference}
						style={{
							scale: scaleProgess,
							opacity: opacityProgess,
							textAlign: 'center',
						}}
					>
						<p className='mb-6 text-[--black]'>
							<span className='text-[--purple]'>&lt;</span>
							{language === 'DE'
								? contactData.title.de
								: language === 'EN'
									? contactData.title.en
									: contactData.title.vi}
							<span className='text-[--purple]'>/&gt;</span>
						</p>

						<h2 className='text-[--black] text-center'>
							{language === 'DE'
								? contactData.description.de
								: language === 'EN'
									? contactData.description.en
									: contactData.description.vi}
						</h2>
					</motion.div>
				</div>
				<div className='flex flex-row max-lg:flex-col justify-center items-start mb-32 max-lg:p-10 px-32 pt-32'>
					<div className='max-lg:hidden flex flex-col justify-center items-start gap-16 px-20 w-1/2 text-[--white] text-left'>
						<div className='flex flex-col gap-6 text-left'>
							<div className='flex gap-4 text-left'>
								<div className=''>
									<div className='bg-[--purple] mt-2 rounded-full w-4 h-4'></div>
								</div>
								<div className='flex-1'>
									<p className='text-gray-800'>
										{language === 'DE'
											? `Denken Sie über ein neues Projekt nach, möchten Sie ein Problem lösen oder möchten Sie einfach nur Kontakte knüpfen? Los geht's!`
											: language === 'EN'
												? `Thinking about a new project, a problem to solve, or just want to connect? Let's do it!`
												: `Bạn đang nghĩ đến một dự án mới, một vấn đề cần giải quyết hay chỉ muốn kết nối? Hãy thực hiện thôi!`
										}
									</p>
								</div>
							</div>
							<div className='flex gap-4 text-left'>
								<div className=''>
									<div className='bg-[--purple] mt-2 rounded-full w-4 h-4'></div>
								</div>
								<div className='flex-1'>
									<p className='text-gray-800'>
										{language === 'DE'
											? `Nutzen Sie das Formular auf dieser Seite oder nehmen Sie auf anderem Wege Kontakt mit uns auf.`
											: language === 'EN'
												? `Use the form on this page or get in touch by other means.`
												: `Bạn sử dụng form trên trang này để liên hệ trực tiếp với tôi.`
										}
									</p>
								</div>
							</div>
							<div className='flex gap-4 text-left'>
								<div className=''>
									<div className='bg-[--purple] mt-2 rounded-full w-4 h-4'></div>
								</div>
								<div className='flex-1'>
									<p className='text-gray-800'>
										{language === 'DE'
											? `Ich freue mich über Fragen und Feedback – und helfe Ihnen gerne weiter! Hier finden Sie einige Möglichkeiten, mich zu kontaktieren.`
											: language === 'EN'
												? `I love questions and feedback - and i am always happy to help! Here are some ways to contact me.`
												: `Tôi hứng thú với các câu hỏi và phản hồi - và tôi luôn sẵn lòng được hỗ trợ! Sau đây là một số cách để liên hệ với tôi.`
										}
									</p>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-6 text-left'>
							{/* Email */}
							<div className='flex items-center gap-4'>
								<MdEmail size={24} className="text-[--purple]" />
								<div className='flex items-center gap-3'>
									<p className='text-gray-800'>Email:</p>
									<a href="mailto:jasondangx91@gmail.com" className='font-semibold text-[--purple] hover:text-[--purple] dark:hover:text-[--purple] transition-colors'>
										jasondangx91@gmail.com
									</a>
								</div>
							</div>
							{/* Linkedin */}
							<div className='flex items-center gap-4'>
								<FaLinkedin size={24} className="text-[--purple]" />
								<div className='flex items-center gap-3'>
									<p className='text-gray-800'>LinkedIn:</p>
									<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='font-semibold text-[--purple] hover:text-[--purple] dark:hover:text-[--purple] transition-colors'>
										Quang Dang
									</a>
								</div>
							</div>
							{/* Whatsapp */}
							<div className='flex items-center gap-4'>
								<FaWhatsappSquare size={24} className="text-[--purple]" />
								<div className='flex items-center gap-3'>
									<p className='text-gray-800'>Whatsapp:</p>
									<a href="https://wa.link/bh7ydm" target="_blank" rel="noopener noreferrer" className='font-semibold text-[--purple] hover:text-[--purple] dark:hover:text-[--purple] transition-colors'>
										@quangdang
									</a>
								</div>
							</div>
						</div>
						<div className='flex justify-center items-center w-full'>
							<BlobObject animationData={animationData} height={550} width={550} />
						</div>
					</div>
					<form
						className='flex flex-col justify-center items-center gap-6 px-8 md:px-32 w-1/2 max-lg:w-full'
						onSubmit={notifySentForm}
						autoComplete='off'
					>
						{contactData.inputfields.map((input, index) => (
							<input
								key={index}
								type={input.type}
								placeholder={
									language === 'DE'
										? `${input.placeholder.de}`
										: language === 'EN'
											? `${input.placeholder.en}`
											: `${input.placeholder.vi}`
								}
								name={input.name}
								value={
									input.name === 'name'
										? name
										: input.name === 'email'
											? email
											: message
								}
								required
								onFocus={() => setLastUpdatedField(input.name)}
								onMouseEnter={() => setLastUpdatedField(input.name)}
								onChange={handleInputChange}
								className={`${theme === 'dark'
									? 'dark-mode-shadow bg-[--blackblue] '
									: 'dark-shadow bg-[--icewhite] '
									}`}
							/>
						))}
						<div className='mb-8 w-full'>
							<p className='mb-6 font-normal text-3xl'>
								{language === 'DE' ? questions.services.de : language === 'EN' ? questions.services.en : questions.services.vi}
							</p>
							<div className='gap-4 grid grid-cols-1 md:grid-cols-2'>
								{(language === 'DE' ? services.de : language === 'EN' ? services.en : services.vi).map((service) => (
									<label
										key={service}
										className={`cursor-pointer rounded-lg p-4 text-[16px] text-[#9ca3af] transition-all ${theme === 'dark'
											? 'dark-mode-shadow bg-[--blackblue]'
											: 'dark-shadow bg-[--icewhite]'
											}`}
									>
										<div className='flex items-center gap-3'>
											<input
												type="radio"
												name="service"
												value={service}
												checked={selectedService === service}
												onChange={(e) => setSelectedService(e.target.value)}
												className="hidden"
												required
											/>
											<div className={`h-7 w-7 rounded-full border-2 border-[--mint] flex items-center justify-center ${selectedService === service ? 'bg-[--mint]' : ''
												}`}>
												{selectedService === service && (
													<div className='bg-mint rounded-full w-4 h-4'></div>
												)}
											</div>
											<span className={selectedService === service ? 'text-[--mint]' : ''}>{service}</span>
										</div>
									</label>
								))}
							</div>
						</div>

						<textarea
							rows={contactData.textarea.rows}
							placeholder={
								language === 'DE'
									? `${contactData.textarea.placeholder.de}`
									: language === 'EN'
										? `${contactData.textarea.placeholder.en}`
										: `${contactData.textarea.placeholder.vi}`
							}
							name={contactData.textarea.name}
							onFocus={() => setLastUpdatedField(contactData.textarea.name)}
							onMouseEnter={() => setLastUpdatedField(contactData.textarea.name)}
							onChange={handleInputChange}
							className={`${theme === 'dark' ? 'dark-mode-shadow bg-[--blackblue]' : 'dark-shadow bg-[--icewhite]'
								}`}
						/>
						<div className='flex gap-12 privacy-checkbox'>
							<label className='block w-2 h-2 cursor-pointer' htmlFor='checkbox-label'>
								<input type='checkbox' required name='checkbox-label' id='checkbox-label' />
								<span className='checkbox'></span>
							</label>
							<p className='text-[16px]'>
								{language === 'DE'
									? `${contactData.privacyOptIn.checkbox.de}`
									: language === 'EN'
										? `${contactData.privacyOptIn.checkbox.en}`
										: `${contactData.privacyOptIn.checkbox.vi}`}
							</p>
						</div>
						<p className='text-[16px]'>
							{language === 'DE'
								? `${contactData.privacyOptIn.description.de}`
								: language === 'EN'
									? `${contactData.privacyOptIn.description.en}`
									: `${contactData.privacyOptIn.description.vi}`}
						</p>
						<Button
							value={
								isLoading
									? (language === 'DE'
										? 'Wird gesendet...'
										: language === 'VI'
											? 'Đang gửi...'
											: 'Sending...')
									: (language === 'DE'
										? `${contactData.button.value.de}`
										: language === 'EN'
											? `${contactData.button.value.en}`
											: `${contactData.button.value.vi}`)
							}
							iconSVG={contactData.icon}
							buttoncolor={contactData.colors.main}
							iconcolor={contactData.colors.icon}
							type='submit'
							elementType='input'
							disabled={isLoading}
						/>
						<ToastContainer
							className='block p-3 w-max max-lg:w-full text-3xl'
							position='bottom-center'
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme={theme}
						/>
					</form>
				</div>
			</section>
		</React.Fragment>
	)
}

export default Contact
