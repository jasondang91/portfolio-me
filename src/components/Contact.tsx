/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import axios from 'axios'
import { contactData, toastMessages } from '../assets/lib/data.tsx'
import { useSectionInView } from '../assets/lib/hooks'
import { useLanguage } from '../context/language-context'
import { ToastContainer, toast } from 'react-toastify'
import { useTheme } from '../context/theme-context'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import 'react-toastify/dist/ReactToastify.css'

import animationData from '../assets/blob/earth.json'

const BlobObject = React.lazy(() => import('../components/Blob.tsx'))

const Contact: React.FC = () => {
	const navigate = useNavigate()
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
		],
	}

	const questions = {
		services: {
			de: 'Welche Dienstleistungen benötigen Sie für Ihr Projekt?',
			en: 'What services do you need for your project?',
			vi: 'Bạn đang quan tâm dịch vụ nào cho dự án của mình?',
		},
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
				service: selectedService,
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

				// Redirect to thank you page
				navigate('/thank-you')
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
			<section className='contact-container mt-16 w-full min-[1921px]:px-[55rem]' id='contact'>
				<div
					className='title-container flex flex-col items-center justify-center gap-6 py-16 max-lg:p-16'
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

						<h2 className='text-center text-[--black]'>
							{language === 'DE'
								? contactData.description.de
								: language === 'EN'
									? contactData.description.en
									: contactData.description.vi}
						</h2>
					</motion.div>
				</div>
				<div className='mb-32 flex flex-row items-start justify-center px-32 pt-32 max-lg:flex-col max-lg:p-10'>
					<div className='flex w-1/2 flex-col items-start justify-center gap-16 px-20 text-left text-[--white] max-lg:hidden'>
						<div className='flex flex-col gap-6 text-left'>
							<div className='flex gap-4 text-left'>
								<div className=''>
									<div className='mt-2 h-4 w-4 rounded-full bg-[--purple]'></div>
								</div>
								<div className='flex-1'>
									<p className='text-gray-800'>
										{language === 'DE'
											? `Denken Sie über ein neues Projekt nach, möchten Sie ein Problem lösen oder möchten Sie einfach nur Kontakte knüpfen? Los geht's!`
											: language === 'EN'
												? `Thinking about a new project, a problem to solve, or just want to connect? Let's do it!`
												: `Bạn đang nghĩ đến một dự án mới, một vấn đề cần giải quyết hay chỉ muốn kết nối? Hãy thực hiện thôi!`}
									</p>
								</div>
							</div>
							<div className='flex gap-4 text-left'>
								<div className=''>
									<div className='mt-2 h-4 w-4 rounded-full bg-[--purple]'></div>
								</div>
								<div className='flex-1'>
									<p className='text-gray-800'>
										{language === 'DE'
											? `Nutzen Sie das Formular auf dieser Seite oder nehmen Sie auf anderem Wege Kontakt mit uns auf.`
											: language === 'EN'
												? `Use the form on this page or get in touch by other means.`
												: `Bạn sử dụng form trên trang này để liên hệ trực tiếp với tôi.`}
									</p>
								</div>
							</div>
							<div className='flex gap-4 text-left'>
								<div className=''>
									<div className='mt-2 h-4 w-4 rounded-full bg-[--purple]'></div>
								</div>
								<div className='flex-1'>
									<p className='text-gray-800'>
										{language === 'DE'
											? `Ich freue mich über Fragen und Feedback – und helfe Ihnen gerne weiter! Hier finden Sie einige Möglichkeiten, mich zu kontaktieren.`
											: language === 'EN'
												? `I love questions and feedback - and i am always happy to help! Here are some ways to contact me.`
												: `Tôi hứng thú với các câu hỏi và phản hồi - và tôi luôn sẵn lòng được hỗ trợ! Sau đây là một số cách để liên hệ với tôi.`}
									</p>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-6 text-left'>
							{/* Email */}
							<div className='flex items-center gap-4'>
								<MdEmail size={24} className='text-[--purple]' />
								<div className='flex items-center gap-3'>
									<p className='text-gray-800'>Email:</p>
									<a
										href='mailto:jasondangx91@gmail.com'
										className='font-semibold text-[--purple] transition-colors hover:text-[--purple] dark:hover:text-[--purple]'
									>
										jasondangx91@gmail.com
									</a>
								</div>
							</div>
							{/* Linkedin */}
							<div className='flex items-center gap-4'>
								<FaLinkedin size={24} className='text-[--purple]' />
								<div className='flex items-center gap-3'>
									<p className='text-gray-800'>LinkedIn:</p>
									<a
										href='https://linkedin.com'
										target='_blank'
										rel='noopener noreferrer'
										className='font-semibold text-[--purple] transition-colors hover:text-[--purple] dark:hover:text-[--purple]'
									>
										Quang Dang
									</a>
								</div>
							</div>
							{/* Whatsapp */}
							<div className='flex items-center gap-4'>
								<FaWhatsapp size={24} className='text-[--purple]' />
								<div className='flex items-center gap-3'>
									<p className='text-gray-800'>Whatsapp:</p>
									<a
										href='https://wa.link/bh7ydm'
										target='_blank'
										rel='noopener noreferrer'
										className='font-semibold text-[--purple] transition-colors hover:text-[--purple] dark:hover:text-[--purple]'
									>
										@quangdang
									</a>
								</div>
							</div>
							{/* Telegram */}
							<div className='flex items-center gap-4'>
								<FaTelegramPlane size={24} className='text-[--purple]' />
								<div className='flex items-center gap-3'>
									<p className='text-gray-800'>Telegram:</p>
									<a
										href='https://t.me/jasdang47'
										target='_blank'
										rel='noopener noreferrer'
										className='font-semibold text-[--purple] transition-colors hover:text-[--purple] dark:hover:text-[--purple]'
									>
										@jasdang47
									</a>
								</div>
							</div>
						</div>
						<div className='flex w-full items-center justify-center'>
							<BlobObject animationData={animationData} height={550} width={550} />
						</div>
					</div>
					<form
						className='flex w-1/2 flex-col items-center justify-center gap-6 px-8 max-lg:w-full md:px-32'
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
								value={input.name === 'name' ? name : input.name === 'email' ? email : message}
								required
								onFocus={() => setLastUpdatedField(input.name)}
								onMouseEnter={() => setLastUpdatedField(input.name)}
								onChange={handleInputChange}
								className={`${
									theme === 'dark'
										? 'dark-mode-shadow bg-[--blackblue] '
										: 'dark-shadow bg-[--icewhite] '
								}`}
							/>
						))}
						<div className='mb-8 w-full'>
							<p className='mb-6 text-3xl font-normal'>
								{language === 'DE'
									? questions.services.de
									: language === 'EN'
										? questions.services.en
										: questions.services.vi}
							</p>
							<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
								{(language === 'DE' ? services.de : language === 'EN' ? services.en : services.vi).map(
									(service) => (
										<label
											key={service}
											className={`cursor-pointer rounded-lg p-4 text-[16px] text-[#9ca3af] transition-all ${
												theme === 'dark'
													? 'dark-mode-shadow bg-[--blackblue]'
													: 'dark-shadow bg-[--icewhite]'
											}`}
										>
											<div className='flex items-center gap-3'>
												<input
													type='radio'
													name='service'
													value={service}
													checked={selectedService === service}
													onChange={(e) => setSelectedService(e.target.value)}
													className='hidden'
													required
												/>
												<div
													className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-[--mint] ${
														selectedService === service ? 'bg-[--mint]' : ''
													}`}
												>
													{selectedService === service && (
														<div className='h-4 w-4 rounded-full bg-mint'></div>
													)}
												</div>
												<span className={selectedService === service ? 'text-[--mint]' : ''}>
													{service}
												</span>
											</div>
										</label>
									),
								)}
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
							className={`${
								theme === 'dark' ? 'dark-mode-shadow bg-[--blackblue]' : 'dark-shadow bg-[--icewhite]'
							}`}
						/>
						<div className='privacy-checkbox flex gap-12'>
							<label className='block h-2 w-2 cursor-pointer' htmlFor='checkbox-label'>
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
									? language === 'DE'
										? 'Wird gesendet...'
										: language === 'VI'
											? 'Đang gửi...'
											: 'Sending...'
									: language === 'DE'
										? `${contactData.button.value.de}`
										: language === 'EN'
											? `${contactData.button.value.en}`
											: `${contactData.button.value.vi}`
							}
							iconSVG={contactData.icon}
							buttoncolor={contactData.colors.main}
							iconcolor={contactData.colors.icon}
							type='submit'
							elementType='input'
							disabled={isLoading}
						/>
						<ToastContainer
							className='block w-max p-3 text-3xl max-lg:w-full'
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
