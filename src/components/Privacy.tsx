import React from 'react'
import { useLanguage } from '../context/language-context'
// import { Link } from "react-router-dom";

const Privacy = () => {
	const { language } = useLanguage()

	return (
		<React.Fragment>
			{language === 'DE' ? (
				<article className='flex flex-col gap-6 max-w-[70vw] break-words'>
					<h1>Datenschutz&shy;erkl&auml;rung</h1>
					<p className='text-2xl'>Gültig ab: 12/05/2025</p>
					<p className='text-2xl'>Diese Datenschutzerklärung beschreibt, wie Quang Dang ("ich", "mein" oder "meine") Ihre Informationen sammelt, verwendet und schützt, wenn Sie meine Portfolio-Website <a className='text-2xl' href="/">https://dxq-portfolio.netlify.app/</a> besuchen.</p>

					<p className='text-3xl underline'><b>Informationen, die ich sammle:</b></p>
					<p className='text-2xl'>Ich kann folgende Arten von Informationen sammeln:</p>
					<ol className='flex flex-col gap-y-0'>
						<li className='my-0 text-2xl'>Persönliche Informationen: Informationen, die Sie freiwillig bereitstellen, wie Ihren Namen, Ihre E-Mail-Adresse und andere Details, die Sie über Kontaktformulare übermitteln.</li>
						<li className='my-0 text-2xl'>Nutzungsdaten: Informationen darüber, wie Sie die Website nutzen, einschließlich Ihrer IP-Adresse, Browsertyp, besuchte Seiten, auf den Seiten verbrachte Zeit und andere analytische Daten.</li>
					</ol>

					<p className='text-3xl underline'><b>Wie ich Ihre Informationen verwende:</b></p>
					<p className='text-2xl'>Ich kann die gesammelten Informationen für verschiedene Zwecke verwenden, einschließlich:</p>
					<ol className='flex flex-col gap-y-0'>
						<li className='my-0 text-2xl'>Um auf Ihre Anfragen zu antworten und Kundensupport zu bieten.</li>
						<li className='my-0 text-2xl'>Um unsere Website zu verbessern und die Benutzererfahrung zu optimieren.</li>
						<li className='my-0 text-2xl'>Um die Nutzung unserer Website zu überwachen.</li>
					</ol>

					<p className='text-3xl underline'><b>Cookies</b></p>
					<p className='text-2xl'>Meine Website kann Cookies und ähnliche Tracking-Technologien verwenden, um Aktivitäten zu verfolgen und bestimmte Informationen zu speichern. Sie können Ihren Browser anweisen, alle Cookies abzulehnen oder anzuzeigen, wenn ein Cookie gesendet wird. Wenn Sie keine Cookies akzeptieren, können Sie möglicherweise einige Teile meiner Website nicht nutzen.</p>

					<p className='text-3xl underline'><b>Datensicherheit</b></p>
					<p className='text-2xl'>Ich ergreife angemessene Maßnahmen, um Ihre Informationen vor unbefugtem Zugriff, Verwendung oder Offenlegung zu schützen. Allerdings ist keine Methode der Übertragung über das Internet oder der elektronischen Speicherung zu 100% sicher.</p>

					<p className='text-3xl underline'><b>Links zu Drittanbietern</b></p>
					<p className='text-2xl'>Meine Website kann Links zu anderen Websites enthalten, die nicht von mir betrieben werden. Ich habe keine Kontrolle über diese Websites und bin nicht verantwortlich für deren Inhalt oder Datenschutzrichtlinien. Ich empfehle Ihnen, die Datenschutzrichtlinien aller von Ihnen besuchten Websites von Drittanbietern zu überprüfen.</p>

					<p className='text-3xl underline'><b>Änderungen dieser Datenschutzerklärung</b></p>
					<p className='text-2xl'>Ich kann meine Datenschutzerklärung von Zeit zu Zeit aktualisieren. Ich werde Sie über Änderungen informieren, indem ich die neue Datenschutzerklärung auf dieser Seite mit einem neuen Gültigkeitsdatum veröffentliche.</p>

					<p className='text-3xl underline'><b>Kontakt</b></p>
					<p className='text-2xl'>Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie mich bitte unter: <span className='text-2xl'><a className='text-2xl' href="mailto:jasondangx91@gmail.com">jasondangx91@gmail.com</a></span></p>
				</article>
			) : language === 'VI' ? (
				<article className='flex flex-col gap-6 max-w-[70vw] break-words'>
					<h1>Chính sách bảo mật</h1>
					<p className='text-2xl'>Ngày có hiệu lực: 12/05/2025</p>
					<p className='text-2xl'>Chính sách bảo mật này mô tả cách Quang Dang ("tôi", "của tôi") thu thập, sử dụng và bảo vệ thông tin của bạn khi bạn truy cập trang web portfolio của tôi, <a className='text-2xl' href="/">https://dxq-portfolio.netlify.app/</a>.</p>

					<p className='text-3xl underline'><b>Thông tin tôi thu thập:</b></p>
					<p className='text-2xl'>Tôi có thể thu thập các loại thông tin sau:</p>
					<ol className='flex flex-col gap-y-0'>
						<li className='my-0 text-2xl'>Thông tin cá nhân: Thông tin bạn cung cấp tự nguyện, như tên, địa chỉ email và các chi tiết khác bạn gửi qua biểu mẫu liên hệ.</li>
						<li className='my-0 text-2xl'>Dữ liệu sử dụng: Thông tin về cách bạn sử dụng trang web, bao gồm địa chỉ IP, loại trình duyệt, các trang đã truy cập, thời gian truy cập và các dữ liệu phân tích khác.</li>
					</ol>

					<p className='text-3xl underline'><b>Cách tôi sử dụng thông tin của bạn:</b></p>
					<p className='text-2xl'>Tôi có thể sử dụng thông tin thu thập được cho nhiều mục đích, bao gồm:</p>
					<ol className='flex flex-col gap-y-0'>
						<li className='my-0 text-2xl'>Để phản hồi các yêu cầu của bạn và cung cấp hỗ trợ khách hàng.</li>
						<li className='my-0 text-2xl'>Để cải thiện trang web và nâng cao trải nghiệm người dùng.</li>
						<li className='my-0 text-2xl'>Để theo dõi việc sử dụng trang web.</li>
					</ol>

					<p className='text-3xl underline'><b>Cookies</b></p>
					<p className='text-2xl'>Trang web của tôi có thể sử dụng cookies và các công nghệ theo dõi tương tự để theo dõi hoạt động và lưu trữ thông tin nhất định. Bạn có thể hướng dẫn trình duyệt từ chối tất cả cookies hoặc thông báo khi một cookie được gửi. Tuy nhiên, nếu bạn không chấp nhận cookies, bạn có thể không sử dụng được một số phần của trang web.</p>

					<p className='text-3xl underline'><b>Bảo mật dữ liệu</b></p>
					<p className='text-2xl'>Tôi thực hiện các biện pháp hợp lý để bảo vệ thông tin của bạn khỏi truy cập, sử dụng hoặc tiết lộ trái phép. Tuy nhiên, không có phương pháp truyền tải qua internet hoặc lưu trữ điện tử nào an toàn 100%.</p>

					<p className='text-3xl underline'><b>Liên kết bên thứ ba</b></p>
					<p className='text-2xl'>Trang web của tôi có thể chứa liên kết đến các trang web khác không do tôi vận hành. Tôi không kiểm soát các trang web này và không chịu trách nhiệm về nội dung hoặc chính sách bảo mật của chúng. Tôi khuyến khích bạn xem xét chính sách bảo mật của bất kỳ trang web bên thứ ba nào bạn truy cập.</p>

					<p className='text-3xl underline'><b>Thay đổi chính sách bảo mật</b></p>
					<p className='text-2xl'>Tôi có thể cập nhật chính sách bảo mật của mình theo thời gian. Tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách đăng chính sách bảo mật mới trên trang này với ngày có hiệu lực mới.</p>

					<p className='text-3xl underline'><b>Liên hệ</b></p>
					<p className='text-2xl'>Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này, vui lòng liên hệ với tôi tại: <span className='text-2xl'><a className='text-2xl' href="mailto:jasondangx91@gmail.com">jasondangx91@gmail.com</a></span></p>
				</article>
			) : (
				<article className='flex flex-col gap-6 max-w-[70vw] break-words'>
					<h1>Privacy Policy</h1>
					<p className='text-2xl'>Effective Date: 12/05/2025</p>
					<p className='text-2xl'>This Privacy Policy outlines how Quang Dang ("I," "my," or "mine") collects, uses, and protects your information when you visit my portfolio website,  <a className='text-2xl' href="/">https://dxq-portfolio.netlify.app/</a>.</p>

					<p className='text-3xl underline'><b>Information I Collect:</b></p>
					<p className='text-2xl'>I may collect the following types of information:</p>
					<ol className='flex flex-col gap-y-0'>
						<li className='my-0 text-2xl'>Personal Information: Information that you provide voluntarily, such as your name, email address, and any other details you submit through contact forms.</li>
						<li className='my-0 text-2xl'>Usage Data: Information about how you use the Site, including your IP address, browser type, pages visited, time spent on pages, and other analytical data.</li>
					</ol>

					<p className='text-3xl underline'><b>How I Use Your Information:</b></p>
					<p className='text-2xl'>I may use the information i collect for various purposes, including:</p>
					<ol className='flex flex-col gap-y-0'>
						<li className='my-0 text-2xl'>To respond to your inquiries and provide customer support.</li>
						<li className='my-0 text-2xl'>To improve our Site and enhance user experience.</li>
						<li className='my-0 text-2xl'>To monitor the usage of our Site.</li>
					</ol>

					<p className='text-3xl underline'><b>Cookies</b></p>
					<p className='text-2xl'>My site may use cookies and similar tracking technologies to track activity and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of my site.</p>

					<p className='text-3xl underline'><b>Data Security</b></p>
					<p className='text-2xl'>I take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.</p>

					<p className='text-3xl underline'><b>Third-Party Links</b></p>
					<p className='text-2xl'>My site may contain links to other websites that are not operated by mine. I have no control over these sites and are not responsible for their content or privacy policies. I encourage you to review the privacy policies of any third-party sites you visit.</p>

					<p className='text-3xl underline'><b>Changes to This Privacy Policy</b></p>
					<p className='text-2xl'>I may update my Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page with a new effective date.</p>

					<p className='text-3xl underline'><b>Contact Us</b></p>
					<p className='text-2xl'>If you have any questions about this Privacy Policy, please contact me at: <span className='text-2xl'><a className='text-2xl' href="mailto:jasondangx91@gmail.com">jasondangx91@gmail.com</a></span></p>

				</article>
			)}
		</React.Fragment>
	)
}

export default Privacy
