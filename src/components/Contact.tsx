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
import 'react-toastify/dist/ReactToastify.css'

import animationData from '../assets/blob/earth.json'

const BlobObject = React.lazy(() => import('../components/Blob.tsx'))

const Contact: React.FC = () => {
	const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || ''

	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [subject, setSubject] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	const [cursor, setCursor] = useState<string>('')
	const [, setLastUpdatedField] = useState<string | null>(null)
	const { ref } = useSectionInView('Contact')
	const { language } = useLanguage()
	const { theme } = useTheme()
	const [error, setError] = useState<string | null>(null)

	const animationReference = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: animationReference,
		offset: ['0 1', '1.33 1'],
	})
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

	const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
		setError(null)
		console.log(error)

		e.preventDefault()
		const data = new FormData(e.currentTarget)

		try {
			const response = await axios.post(apiBaseUrl, data)
			console.log(response)
			if (language === 'DE') {
				toast.success(toastMessages.successEmailSent.de)
			} else {
				toast.success(toastMessages.successEmailSent.en)
			}
		} catch (error) {
			console.log(error)
			if (language === 'DE') {
				toast.error(toastMessages.failedEmailSent.de)
			} else {
				toast.error(toastMessages.failedEmailSent.en)
			}
			setError('An Error occured, try again later')
		}
	}

	const handleInputFocus = (fieldName: string) => {
		setCursor(`${fieldName}${cursor}`)
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target

		if (name === 'name') {
			setName(value)
		} else if (name === 'email') {
			setEmail(value)
		} else if (name === 'subject') {
			setSubject(value)
		} else if (name === 'message') {
			setMessage(value)
		}

		setLastUpdatedField(name)
	}

	return (
		<React.Fragment>
			<section className='contact-container mt-16 w-full min-[1921px]:px-[55rem]' id='contact'>
				<div
					className='title-container flex flex-col items-center justify-center gap-6 py-16  max-lg:p-16'
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
					<div className='flex w-1/2 flex-col items-start justify-center gap-24 p-20 text-left text-[--white] max-lg:hidden'>
						<div className='flex w-full items-center justify-center'>
							<BlobObject animationData={animationData} height={550} width={550} />
						</div>
					</div>
					<form
						className='flex w-1/2 flex-col items-center justify-center  gap-6 px-32 max-lg:w-full max-lg:p-10'
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
											: input.name === 'subject'
												? subject
												: message
								}
								required
								onFocus={() => {
									handleInputFocus(input.name)
									setLastUpdatedField(input.name)
								}}
								onMouseEnter={() => {
									handleInputFocus(input.name)
									setLastUpdatedField(input.name)
								}}
								onChange={handleInputChange}
								className={`${
									theme === 'dark'
										? 'dark-mode-shadow bg-[--blackblue] '
										: 'dark-shadow bg-[--icewhite] '
								}`}
							/>
						))}
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
							onFocus={() => {
								handleInputFocus(contactData.textarea.name)
								setLastUpdatedField(contactData.textarea.name)
							}}
							onMouseEnter={() => {
								handleInputFocus(contactData.textarea.name)
								setLastUpdatedField(contactData.textarea.name)
							}}
							onChange={handleInputChange}
							className={`${
								theme === 'dark' ? 'dark-mode-shadow bg-[--blackblue]' : 'dark-shadow bg-[--icewhite]'
							}`}
						/>
						<div className='privacy-checkbox flex gap-16'>
							<label className='block h-2 w-2 cursor-pointer' htmlFor='checkbox-label'>
								<input type='checkbox' required name='checkbox-label' id='checkbox-label' />
								<span className='checkbox'></span>
							</label>
							<p>
								{language === 'DE'
									? `${contactData.privacyOptIn.checkbox.de}`
									: language === 'EN'
										? `${contactData.privacyOptIn.checkbox.en}`
										: `${contactData.privacyOptIn.checkbox.vi}`}
							</p>
						</div>
						<p>
							{language === 'DE'
								? `${contactData.privacyOptIn.description.de}`
								: language === 'EN'
									? `${contactData.privacyOptIn.description.en}`
									: `${contactData.privacyOptIn.description.vi}`}
						</p>
						<Button
							value={
								language === 'DE'
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
						/>
						<ToastContainer
							className='block w-max p-3 text-3xl max-lg:w-full '
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
