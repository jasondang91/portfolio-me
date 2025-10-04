/* eslint-disable react-refresh/only-export-components */
import photoshopicon from '../../assets/icons/photoshopicon.svg'
import canvaicon from '../../assets/icons/canvaicon.svg'
import figmaicon from '../../assets/icons/figmaicon.svg'
import htmlicon from '../../assets/icons/htmlicon.svg'
import cssicon from '../../assets/icons/cssicon.svg'
import javascripticon from '../../assets/icons/javascripticon.svg'
import typescripticon from '../../assets/icons/typescripticon.svg'
import reacticon from '../../assets/icons/reacticon.svg'
import nextjsicon from '../../assets/icons/nextjsicon.svg'
import nodejsicon from '../../assets/icons/nodejsicon.svg'
import tailwindcssicon from '../../assets/icons/tailwindicon.svg'
import bootstrapicon from '../../assets/icons/bootstrapicon.svg'
import pugicon from '../../assets/icons/pugicon.svg'
import mongodbicon from '../../assets/icons/mongoicon.svg'
import mysqlicon from '../../assets/icons/mysqlicon.svg'
import expressicon from '../../assets/icons/expressicon.svg'
import sassscssicon from '../../assets/icons/sassicon.svg'
import framermotionicon from '../../assets/icons/framermotion.svg'
import tanstackqueryicon from '../../assets/icons/reactqueryicon.svg'
import gulpicon from '../../assets/icons/gulpicon.svg'
import grunticon from '../../assets/icons/grunticon.svg'
import reduxicon from '../../assets/icons/reduxicon.svg'
import yiiicon from '../../assets/icons/yiiicon.svg'
import axiosicon from '../../assets/icons/axiosicon.svg'
import phpicon from '../../assets/icons/phpicon.svg'
import dearbornmockup from '../../assets/img/1100northdearborn.jpg'
import polyconsmockup from '../../assets/img/ploycons.jpg'
import heritagesalumimockup from '../../assets/img/heritagesalumi.jpg'
import lbrmockup from '../../assets/img/lbr.jpg'
import allstatemovemockup from '../../assets/img/allstatemover.jpg'
import elstonmockup from '../../assets/img/elstonmaterials.jpg'
import lakesidemockup from '../../assets/img/lakeside.jpg'
import marinabeachmockup from '../../assets/img/marinabeachmotel.jpg'
import sculptedmockup from '../../assets/img/sculptedbylagree.jpg'
import przmockup from '../../assets/img/prz-new.jpg'
import jwticon from '../../assets/icons/jwticon.svg'
import wordpressicon from '../../assets/icons/wordpressicon.svg'
import shopifyicon from '../../assets/icons/shopifyicon.svg'
import strapiicon from '../../assets/icons/strapiicon.svg'
import jqueryicon from '../../assets/icons/jqueryicon.svg'
import boBeDoMockup from '../../assets/img/bo-be-do.jpg'
import identitybodypiercingMockup from '../../assets/img/identitybodypiercing.jpg'
import directLakesideMockup from '../../assets/img/direct-lakeside.jpg'
import newParadiseBakeryMockup from '../../assets/img/bakery.jpg'
import zingmockup from '../../assets/img/zing.jpg'
import profilepicture from '../img/profile-me.jpg'
import caricon from '../../assets/icons/car-icon.svg'
import drawio from '../../assets/icons/draw-io.svg'
import awsicon from '../../assets/icons/aws.svg'
import s3icon from '../../assets/icons/s3.svg'
import travelicon from '../../assets/icons/travel-icon.svg'
import hardwareicon from '../../assets/icons/hardware-icon.svg'
import nextjsiconwhite from '../../assets/icons/nextjsiconwhite.svg'
import expressiconwhite from '../../assets/icons/expressiconwhite.svg'
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from 'react-icons/go'
import { FiGithub, FiLink, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import Imprint from '../../components/Imprint'
import Privacy from '../../components/Privacy'
import myCv from '../../assets/cv/jasondangx91@gmail.com.pdf'

export const headerIntroData = {
	title: {
		de: 'Hallo, ich bin Quang Dang',
		en: "Hi, I'm Quang Dang",
		vi: 'Xin chào, Tôi là Quang Đặng',
	},
	subtitle: 'Software Engineer ',
	description: {
		de: 'Ich bin Quang Dang, ein Frontend-Ingenieur mit dem Ziel, meine Karriere voranzutreiben und an inspirierenden Projekten mitzuwirken. Hier stelle ich meine Arbeit und meine Leidenschaft für die Webentwicklung vor und freue mich darauf, an inspirierenden Projekten mitzuarbeiten, die digitale Lösungen gestalten und zur Zukunft beitragen!',
		en: "I'm Quang Dang, a frontend engineer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development and I'm excited to collaborate on inspiring projects that shape digital solutions and contribute to the future!",
		vi: 'Tôi là Quang Dang, một kỹ sư Frontend với mục tiêu thúc đẩy sự nghiệp của tôi và tham gia vào các dự án truyền cảm hứng. Ở đây tôi trình bày công việc của mình và niềm đam mê phát triển web của tôi và tôi đã hào hứng hợp tác trong các dự án truyền cảm hứng hình thành các giải pháp kỹ thuật số và đóng góp cho tương lai!',
	},
	buttons: [
		{
			name: 'Contact',
			label: {
				de: 'Kontaktiere mich',
				en: 'Contact me',
				vi: 'Liên Hệ',
			},
			icon: FiMail,
			color: 'main-btn',
			download: false,
			fileUrl: '',
		},
		{
			name: 'Resume',
			label: {
				de: 'CV herunterladen',
				en: 'Download CV',
				vi: 'Tải CV',
			},
			icon: FiDownload,
			color: 'secondary-btn',
			download: true,
			fileUrl: myCv,
		},
	],
	profilepicture: profilepicture,
} as const

export const projectsData = [
	{
		title: 'Purezawood',
		description:
			'Purezawood ist eine Website, die Parkettböden und Bodenverlegedienste vorstellt, hochwertige Holzmaterialien, die in den Vereinigten Staaten beliebt und hoch geschätzt sind. Dies ist ein Produkt, das ich für die Firma eines meiner geliebten Chefs entwickelt habe.',
		description_EN:
			'Purezawood is a website that introduces hardwood floors and flooring installation services, high quality wood materials that are popular and highly appreciated in the United States. This is a product I built for a company owned by a beloved boss of mine.',
		description_VI:
			'Purezawood là một trang web giới thiệu sàn gỗ cứng và dịch vụ lắp đặt sàn, vật liệu gỗ chất lượng cao được ưa chuộng và đánh giá cao tại Hoa Kỳ. Đây là sản phẩm tôi xây dựng cho một công ty do một ông chủ đáng kính của tôi làm chủ.',
		technologies: [
			{ name: 'NextJS', icon: nextjsicon },
			{ name: 'Strapi', icon: strapiicon },
			{ name: 'TailwindCSS', icon: tailwindcssicon },
			{ name: 'Redux', icon: reduxicon },
			{ name: 'Typescript', icon: typescripticon },
			{ name: 'Figma', icon: figmaicon },
			{ name: 'MySQL', icon: mysqlicon },
			{ name: 'Axios', icon: axiosicon },
			{ name: 'Tanstack Query', icon: tanstackqueryicon },
			{ name: 'AWS', icon: awsicon },
			{ name: 'S3', icon: s3icon },
		],
		image: przmockup,
		deploymenturl: '#',
		githuburl: '#',
		githubicon: FiGithub,
		deploymenticon: FiLink,
		colors: {
			main: 'main-btn',
			second: 'secondary-btn',
			icon: 'white',
			projectcolor: '#70B9BE',
		},
	},
	{
		title: 'Bo Be Do',
		description:
			'Bo Be Do ist eine Restaurantkette, die Restaurantküche auf die Straße bringt, mit dem Motto "Servieren" und "Lieferkosten minimieren" für Kunden. Die Website verfügt auch über einen Verwaltungsbereich, mit dem Eigentümer Gerichte und Preise einfach anpassen und tägliche Bestellungen kontrollieren können. Dieser Bereich wurde entwickelt und bereitgestellt, um Kunden zu bedienen.',
		description_EN:
			'Bo Be Do is a chain of eateries that brings restaurant cuisine to the streets with the motto "Serve" and "Minimize delivery costs" for customers. The website also has a management section that helps owners easily adjust dishes, prices, and control daily orders. It has been built and deployed to serve customers.',
		description_VI:
			'Bò Bê Đồ là chuỗi quán ăn đưa ẩm thực nhà hàng ra phố với phương châm "Phục vụ" và "Giảm thiểu chi phí giao hàng" cho khách hàng. Website còn có phần quản lý giúp chủ quán dễ dàng điều chỉnh món ăn, giá cả, kiểm soát đơn hàng hàng ngày. Nó đã được xây dựng và triển khai để phục vụ khách hàng.',
		technologies: [
			{ name: 'Html', icon: htmlicon },
			{ name: 'CSS', icon: cssicon },
			{ name: 'JavaScript', icon: javascripticon },
			{ name: 'JQuery', icon: jqueryicon },
			{ name: 'Glup', icon: gulpicon },
			{ name: 'PHP', icon: phpicon },
			{ name: 'Yii', icon: yiiicon },
			{ name: 'Boostrap', icon: bootstrapicon },
			{ name: 'Figma', icon: figmaicon },
			{ name: 'Photoshop', icon: photoshopicon },
			{ name: 'MySQL', icon: mysqlicon },
		],
		image: boBeDoMockup,
		deploymenturl: '#',
		githuburl: '#',
		githubicon: FiGithub,
		deploymenticon: FiLink,
		colors: {
			main: 'main-btn',
			second: 'secondary-btn',
			icon: 'white',
			projectcolor: '#70B9BE',
		},
	},
	{
		title: 'Zing MP3 Player (Cloned)',
		description:
			'Zing MP3 Player ist eine von der VNG Group entwickelte Webanwendung zum Online-Hören von Musik nach Thema, nach Charts und zum einfachen Suchen nach gewünschter Musik. Ich habe die Webanwendung so vollständig wie möglich geklont.',
		description_EN:
			'Zing MP3 Player is a web application developed by VNG Group for listening to music online, by topic, by chart, and easily searching for desired music. I have cloned the website application in the most complete way.',
		description_VI:
			'Zing MP3 là một ứng dụng web được phát triển bởi tập đoàn VNG dành cho việc nghe nhạc trực tuyến, theo chủ đề, theo bảng xếp hạng, và dễ dàng tìm kiếm nhạc theo mong muốn. Tôi đã clone lại ứng dụng website theo cách đầy đủ nhất.',
		technologies: [
			{ name: 'Html', icon: htmlicon },
			{ name: 'CSS', icon: cssicon },
			{ name: 'Tailwind', icon: tailwindcssicon },
			{ name: 'Typescript', icon: typescripticon },
			{ name: 'React', icon: reacticon },
			{ name: 'Redux', icon: reduxicon },
			{ name: 'JWT & Bcrypt', icon: jwticon },
			{ name: 'Axios', icon: axiosicon },
			{ name: 'MongoDB', icon: mongodbicon },
			{ name: 'Express', icon: expressiconwhite },
			{ name: 'Node.js', icon: nodejsicon },
		],
		image: zingmockup,
		deploymenturl: '#',
		githuburl: '##',
		githubicon: FiGithub,
		deploymenticon: FiLink,
		colors: {
			main: 'main-btn',
			second: 'secondary-btn',
			icon: 'white',
			projectcolor: '#FFD5BD',
		},
	},
	{
		title: 'Identity Body Piercing',
		description:
			'Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.',
		description_EN:
			'A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.',
		description_VI:
			'Bò Bê Đồ là chuỗi quán ăn đưa ẩm thực nhà hàng ra phố với phương châm "Phục vụ" và "Giảm thiểu chi phí giao hàng" cho khách hàng. Website còn có phần quản lý giúp chủ quán dễ dàng điều chỉnh món ăn, giá cả, kiểm soát đơn hàng hàng ngày. Nó đã được xây dựng và triển khai.',
		technologies: [
			{ name: 'Html', icon: htmlicon },
			{ name: 'CSS', icon: cssicon },
			{ name: 'JavaScript', icon: javascripticon },
			{ name: 'Wordpress', icon: wordpressicon },
			{ name: 'PHP', icon: phpicon },
			{ name: 'MySQL', icon: mysqlicon },
			{ name: 'Adobe Photoshop', icon: photoshopicon },
		],
		image: identitybodypiercingMockup,
		deploymenturl: '#',
		githuburl: '##',
		githubicon: FiGithub,
		deploymenticon: FiLink,
		colors: {
			main: 'main-btn',
			second: 'secondary-btn',
			icon: 'white',
			projectcolor: '#E3964A',
		},
	},
	{
		title: 'Sculptedbylagree',
		description:
			'Sculpted By Agree ist eine Website über ein Fitnessstudio in Chicago, Illinois, die Kunden beim Kauf von Trainingspaketen in vielen verschiedenen Formen unterstützt, kombiniert mit dem Mindbody-System.',
		description_EN:
			'Sculpted By Agree is a website about a fitness gym in Chicago, Illinois that supports customers to buy training packages in many different forms, combined with the mindbody system.',
		description_VI:
			'Sculpted By Agree là trang web về một studio gym fitness tại Chicago, Illinois, Mỹ hỗ trợ khách hàng mua gói tập theo nhiều dạng khác nhau, được kết hợp với hệ thống của mindbody. ',
		technologies: [
			{ name: 'NextJS', icon: nextjsicon },
			{ name: 'Strapi', icon: strapiicon },
			{ name: 'TailwindCSS', icon: tailwindcssicon },
			{ name: 'Redux', icon: reduxicon },
			{ name: 'Typescript', icon: typescripticon },
			{ name: 'Figma', icon: figmaicon },
			{ name: 'MySQL', icon: mysqlicon },
			{ name: 'Axios', icon: axiosicon },
			{ name: 'Tanstack Query', icon: tanstackqueryicon },
			{ name: 'AWS', icon: awsicon },
			{ name: 'S3', icon: s3icon },
		],
		image: sculptedmockup,
		deploymenturl: '#',
		githuburl: '##',
		githubicon: FiGithub,
		deploymenticon: FiLink,
		colors: {
			main: 'main-btn',
			second: 'secondary-btn',
			icon: 'white',
			projectcolor: '#E3964A',
		},
	},
	{
		title: 'Polycons',
		description:
			'Bach Khoa Viet Company (Polycons) wurde 2007 gegründet und ist seit 15 Jahren ein junges Unternehmen in der Baubranche. Durch die Teilnahme an Projekten vieler großer in- und ausländischer Wirtschaftsgruppen hat sich das Unternehmen schrittweise weiterentwickelt und sich auf dem heimischen Baumarkt einen Namen gemacht.',
		description_EN:
			'Established in 2007, after 15 years of operation, Bach Khoa Viet Company (Polycons) from a young enterprise in the construction industry has gradually developed and shaped its name in the domestic construction market through participating in projects of many large domestic and foreign economic groups.',
		description_VI:
			'Thành lập từ năm 2007, trải qua 15 năm hoạt động Công ty Bách Khoa Việt (Polycons) từ một doanh nghiệp non trẻ trong ngành xây dựng đã từng bước phát triển và định hình được tên tuổi trên thị trường xây dựng trong nước thông qua việc đã và đang tham gia các dự án của nhiều tập đoàn kinh tế lớn trong và ngoài nước.',
		technologies: [
			{ name: 'Html', icon: htmlicon },
			{ name: 'CSS', icon: cssicon },
			{ name: 'Tailwind', icon: tailwindcssicon },
			{ name: 'JavaScript', icon: javascripticon },
			{ name: 'Jquery', icon: jqueryicon },
			{ name: 'PHP', icon: phpicon },
			{ name: 'MySQL', icon: mysqlicon },
			{ name: 'Figma', icon: figmaicon },
		],
		image: polyconsmockup,
		deploymenturl: '#',
		githuburl: '##',
		githubicon: FiGithub,
		deploymenticon: FiLink,
		colors: {
			main: 'main-btn',
			second: 'secondary-btn',
			icon: 'white',
			projectcolor: '#E3964A',
		},
	},
	{
		title: '1100 N Dearborn',
		description:
			'Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.',
		description_EN:
			'A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.',
		description_VI:
			'Bò Bê Đồ là chuỗi quán ăn đưa ẩm thực nhà hàng ra phố với phương châm "Phục vụ" và "Giảm thiểu chi phí giao hàng" cho khách hàng. Website còn có phần quản lý giúp chủ quán dễ dàng điều chỉnh món ăn, giá cả, kiểm soát đơn hàng hàng ngày. Nó đã được xây dựng và triển khai.',
		technologies: [
			{ name: 'Html', icon: htmlicon },
			{ name: 'CSS', icon: cssicon },
			{ name: 'JavaScript', icon: javascripticon },
			{ name: 'Jquery', icon: jqueryicon },
			{ name: 'Wordpress', icon: wordpressicon },
			{ name: 'PHP', icon: phpicon },
			{ name: 'MySQL', icon: mysqlicon },
			{ name: 'Adobe Photoshop', icon: photoshopicon },
		],
		image: dearbornmockup,
		deploymenturl: '#',
		githuburl: '##',
		githubicon: FiGithub,
		deploymenticon: FiLink,
		colors: {
			main: 'main-btn',
			second: 'secondary-btn',
			icon: 'white',
			projectcolor: '#E3964A',
		},
	},
	{
		title: 'Heritage Salumi',
		description:
			'Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.',
		description_EN:
			'A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.',
		description_VI:
			'Bò Bê Đồ là chuỗi quán ăn đưa ẩm thực nhà hàng ra phố với phương châm "Phục vụ" và "Giảm thiểu chi phí giao hàng" cho khách hàng. Website còn có phần quản lý giúp chủ quán dễ dàng điều chỉnh món ăn, giá cả, kiểm soát đơn hàng hàng ngày. Nó đã được xây dựng và triển khai.',
		technologies: [
			{ name: 'Html', icon: htmlicon },
			{ name: 'CSS', icon: cssicon },
			{ name: 'JavaScript', icon: javascripticon },
			{ name: 'Jquery', icon: jqueryicon },
			{ name: 'Shopify', icon: shopifyicon },
			{ name: 'PHP', icon: phpicon },
			{ name: 'MySQL', icon: mysqlicon },
			{ name: 'Figma', icon: figmaicon },
		],
		image: heritagesalumimockup,
		deploymenturl: '#',
		githuburl: '##',
		githubicon: FiGithub,
		deploymenticon: FiLink,
		colors: {
			main: 'main-btn',
			second: 'secondary-btn',
			icon: 'white',
			projectcolor: '#E3964A',
		},
	},
	{
		title: 'New Paradise Backery',
		description:
			'New Paradise Bakery ist eine Produkteinführungswebsite eines auf Kuchen und Desserts spezialisierten Geschäfts in Chicago, USA.',
		description_EN:
			'New Paradise Bakery is a product introduction website of a shop specializing in cakes and desserts in Chicago, USA.',
		description_VI:
			'Trang New Paradise Backery là trang web giới thiệu sản phẩm của một cửa hàng chuyên về các loại bánh ngọt và tráng miệng tại Chicago, USA.',
		technologies: [
			{ name: 'Html', icon: htmlicon },
			{ name: 'CSS', icon: cssicon },
			{ name: 'JavaScript', icon: javascripticon },
			{ name: 'Jquery', icon: jqueryicon },
			{ name: 'Shopify', icon: shopifyicon },
			{ name: 'PHP', icon: phpicon },
			{ name: 'MySQL', icon: mysqlicon },
			{ name: 'Figma', icon: figmaicon },
		],
		image: newParadiseBakeryMockup,
		deploymenturl: '#',
		githuburl: '##',
		githubicon: FiGithub,
		deploymenticon: FiLink,
		colors: {
			main: 'main-btn',
			second: 'secondary-btn',
			icon: 'white',
			projectcolor: '#E3964A',
		},
	},
	{
		title: 'LBR',
		description:
			'LBR ist eine Website für Brautkleider mit Sitz in Chicago, USA. Auf der Website können Kunden Kleideranproben vereinbaren und Designs durchstöbern.',
		description_EN:
			'LBR is a wedding dress website located in Chicago, USA. The website allows customers to schedule dress fittings and browse designs.',
		description_VI:
			'LBR là một trang web váy cưới có trụ sở tại Chicago, Hoa Kỳ. Trang web cho phép khách hàng lên lịch thử váy và duyệt các thiết kế.',
		technologies: [
			{ name: 'Html', icon: htmlicon },
			{ name: 'CSS', icon: cssicon },
			{ name: 'JavaScript', icon: javascripticon },
			{ name: 'Jquery', icon: jqueryicon },
			{ name: 'Wordpress', icon: wordpressicon },
			{ name: 'PHP', icon: phpicon },
			{ name: 'MySQL', icon: mysqlicon },
			{ name: 'Figma', icon: figmaicon },
		],
		image: lbrmockup,
		deploymenturl: '#',
		githuburl: '##',
		githubicon: FiGithub,
		deploymenticon: FiLink,
		colors: {
			main: 'main-btn',
			second: 'secondary-btn',
			icon: 'white',
			projectcolor: '#E3964A',
		},
	},
	{
		title: 'All State Mover',
		description:
			'All State Mover ist eine in Chicago ansässige Website zur Buchung von Umzugsdiensten für Privathaushalte und Unternehmen. Die Website ermöglicht es Benutzern, Dienste online zu buchen.',
		description_EN:
			'All state Mover is a Chicago-based website for booking moving services for home and business. The website allows users to book services online.',
		description_VI:
			'All state Mover là một website đặt vận chuyển hàng hoá, nội thất nhà, công ty, được đặt tại Chicago, Website cho phép người dùng đặt dịch vụ online',
		technologies: [
			{ name: 'Html', icon: htmlicon },
			{ name: 'CSS', icon: cssicon },
			{ name: 'JavaScript', icon: javascripticon },
			{ name: 'Jquery', icon: jqueryicon },
			{ name: 'Wordpress', icon: wordpressicon },
			{ name: 'PHP', icon: phpicon },
			{ name: 'MySQL', icon: mysqlicon },
			{ name: 'Adobe Photoshop', icon: photoshopicon },
		],
		image: allstatemovemockup,
		deploymenturl: '#',
		githuburl: '##',
		githubicon: FiGithub,
		deploymenticon: FiLink,
		colors: {
			main: 'main-btn',
			second: 'secondary-btn',
			icon: 'white',
			projectcolor: '#E3964A',
		},
	},
	{
		title: 'Elston Material',
		description:
			'Elston Material ist eine kleine E-Commerce-Website mit Sitz in Chicago, die auf den Verkauf und die Lieferung von Baumaterialien spezialisiert ist.',
		description_EN:
			'Elston Material is a small ecommerce website specializing in selling and supplying construction materials located in Chicago.',
		description_VI:
			'Elston Material là website thương mại nhỏ chuyên bán và cung cấp vật liệu xây dựng toạ lạc tại Chicago.',
		technologies: [
			{ name: 'Html', icon: htmlicon },
			{ name: 'CSS', icon: cssicon },
			{ name: 'JavaScript', icon: javascripticon },
			{ name: 'Jquery', icon: jqueryicon },
			{ name: 'Wordpress', icon: wordpressicon },
			{ name: 'PHP', icon: phpicon },
			{ name: 'MySQL', icon: mysqlicon },
			{ name: 'Adobe Photoshop', icon: photoshopicon },
		],
		image: elstonmockup,
		deploymenturl: '#',
		githuburl: '##',
		githubicon: FiGithub,
		deploymenticon: FiLink,
		colors: {
			main: 'main-btn',
			second: 'secondary-btn',
			icon: 'white',
			projectcolor: '#E3964A',
		},
	},
	{
		title: 'Lakeside Lodge & Suites',
		description:
			'Das Lake Chelan Resort ist das ganze Jahr über ein tolles Urlaubsziel. Eingebettet in ein friedliches Tal der North Cascades ist Chelan WA unser Zuhause und Ihr perfekter Zufluchtsort im pazifischen Nordwesten. Auf der Website können Benutzer die Zimmerverfügbarkeit überprüfen und Zimmer bequem online buchen',
		description_EN:
			'Lake Chelan Resort is a great vacation destination year round. Nestled in a peaceful valley of the North Cascades, Chelan WA is our home and your perfect Pacific Northwest getaway. The website allows users to check room availability and book rooms online conveniently',
		description_VI:
			'Khách sạn nghỉ dưỡng Lake Chelan là điểm đến nghỉ dưỡng tuyệt vời quanh năm. Nằm trong một thung lũng yên bình của North Cascades, Chelan WA là nhà của chúng tôi và là nơi nghỉ dưỡng hoàn hảo của bạn ở Tây Bắc Thái Bình Dương. Website cho phép người dùng kiểm tra khoảng thời gian phòng trống và có thể đặt phòng online thuận tiện',
		technologies: [
			{ name: 'Html', icon: htmlicon },
			{ name: 'CSS', icon: cssicon },
			{ name: 'JavaScript', icon: javascripticon },
			{ name: 'Jquery', icon: jqueryicon },
			{ name: 'Wordpress', icon: wordpressicon },
			{ name: 'PHP', icon: phpicon },
			{ name: 'MySQL', icon: mysqlicon },
			{ name: 'Adobe Photoshop', icon: photoshopicon },
		],
		image: lakesidemockup,
		deploymenturl: '#',
		githuburl: '##',
		githubicon: FiGithub,
		deploymenticon: FiLink,
		colors: {
			main: 'main-btn',
			second: 'secondary-btn',
			icon: 'white',
			projectcolor: '#E3964A',
		},
	},
	{
		title: 'Direct Booking Lakeside',
		description:
			'Direct Booking Lakeside ist ein in die Lakeside-Website integriertes Buchungsmodul, mit dem Kunden die Zimmerverfügbarkeit prüfen und Zimmer mit bequemen Zahlungsmethoden buchen können.',
		description_EN:
			'Direct Booking Lakeside is a booking module integrated into the lakeside website to help customers check room availability and book rooms through convenient payment methods.',
		description_VI:
			'Direct Booking Lakeside là một module đặt phòng được tích hợp trong website lakeside để giúp khách hàng có thể kiểm tra khoảng thời gian phòng trống và có thể đặt phòng thông qua các phương thức thanh toán tiện lợi.',
		technologies: [
			{ name: 'Typescript', icon: typescripticon },
			{ name: 'Bootstrap', icon: bootstrapicon },
			{ name: 'SCSS', icon: sassscssicon },
			{ name: 'React', icon: reacticon },
			{ name: 'Redux', icon: reduxicon },
			{ name: 'PHP', icon: phpicon },
			{ name: 'MySQL', icon: mysqlicon },
			{ name: 'AWS', icon: awsicon },
			{ name: 'S3', icon: s3icon },
			{ name: 'Figma', icon: figmaicon },
		],
		image: directLakesideMockup,
		deploymenturl: '#',
		githuburl: '##',
		githubicon: FiGithub,
		deploymenticon: FiLink,
		colors: {
			main: 'main-btn',
			second: 'secondary-btn',
			icon: 'white',
			projectcolor: '#E3964A',
		},
	},
	{
		title: 'Marina Beach Motel',
		description:
			'Das Marina Beach Motel ist das ganze Jahr über ein tolles Urlaubsziel. Eingebettet in ein friedliches Tal der North Cascades ist Chelan WA unser Zuhause und Ihr perfekter Zufluchtsort im pazifischen Nordwesten. Auf der Website können Benutzer die Zimmerverfügbarkeit überprüfen und Zimmer bequem online buchen',
		description_EN:
			'Marina Beach Motel is a great vacation destination year round. Nestled in a peaceful valley of the North Cascades, Chelan WA is our home and your perfect Pacific Northwest getaway. The website allows users to check room availability and book rooms online conveniently',
		description_VI:
			'Khách sạn nghỉ dưỡng Marina Beach Motel là điểm đến nghỉ dưỡng tuyệt vời quanh năm. Nằm trong một thung lũng yên bình của North Cascades, Chelan WA là nhà của chúng tôi và là nơi nghỉ dưỡng hoàn hảo của bạn ở Tây Bắc Thái Bình Dương. Website cho phép người dùng kiểm tra khoảng thời gian phòng trống và có thể đặt phòng online thuận tiện',
		technologies: [
			{ name: 'Html', icon: htmlicon },
			{ name: 'CSS', icon: cssicon },
			{ name: 'JavaScript', icon: javascripticon },
			{ name: 'Jquery', icon: jqueryicon },
			{ name: 'Wordpress', icon: wordpressicon },
			{ name: 'PHP', icon: phpicon },
			{ name: 'MySQL', icon: mysqlicon },
			{ name: 'Adobe Photoshop', icon: photoshopicon },
		],
		image: marinabeachmockup,
		deploymenturl: '#',
		githuburl: '##',
		githubicon: FiGithub,
		deploymenticon: FiLink,
		colors: {
			main: 'main-btn',
			second: 'secondary-btn',
			icon: 'white',
			projectcolor: '#E3964A',
		},
	},
] as const

export const liveTickerData = {
	content: {
		de: 'Weitere Projekte auf Github',
		en: 'More Projects on Github',
		vi: 'Xem Thêm Dự Án Trên Github',
	},
} as const

export const skillsDataWeb = [
	{
		skillsTitle: 'Development',
		skills: [
			{
				title: 'HTML',
				hash: '#html',
				icon: htmlicon,
				color: '#F1662A',
			},
			{
				title: 'CSS',
				hash: '#CSS',
				icon: cssicon,
				color: '#1572B6',
			},
			{
				title: 'JavaScript',
				hash: '#JavaScript',
				icon: javascripticon,
				color: '#F7DF1E',
			},
			{
				title: 'TypeScript',
				hash: '#TypeScript',
				icon: typescripticon,
				color: '#007ACC',
			},
			{
				title: 'React',
				hash: '#React',
				icon: reacticon,
				color: '#61DAFB',
			},
			{
				title: 'Next.js',
				hash: '#Next.js',
				icon: [nextjsicon, nextjsiconwhite],
				color: ['#000000', '#FFFFFF'],
			},
			{
				title: 'Node.js',
				hash: '#Node.js',
				icon: nodejsicon,
				color: '#339933',
			},
			{
				title: 'Express',
				hash: '#Express',
				icon: [expressicon, expressiconwhite],
				color: ['#000000', '#FFFFFF'],
			},
			{
				title: 'Tailwind',
				hash: '#Tailwind',
				icon: tailwindcssicon,
				color: '#38B2AC',
			},
			{
				title: 'Bootstrap',
				hash: '#Bootstrap',
				icon: bootstrapicon,
				color: '#7952b3',
			},
			{
				title: 'Pug',
				hash: '#Pug',
				icon: pugicon,
				color: '#56332b',
			},
			{
				title: 'SASS/SCSS',
				hash: '#SASS/SCSS',
				icon: sassscssicon,
				color: '#CC6699',
			},
			{
				title: 'MongoDB',
				hash: '#MongoDB',
				icon: mongodbicon,
				color: '#449C45',
			},
			{
				title: 'MySQL DB',
				hash: '#MySQL',
				icon: mysqlicon,
				color: '#F1662A',
			},
			{
				title: 'GulpJS',
				hash: '#GulpJS',
				icon: gulpicon,
				color: '#d34b47',
			},
			{
				title: 'GruntJS',
				hash: '#GruntJS',
				icon: grunticon,
				color: '#fba91a',
			},
			{
				title: 'Redux Toolkit',
				hash: '#Redux',
				icon: reduxicon,
				color: '#7952b3',
			},
			{
				title: 'Json Web Token',
				hash: '#jwt',
				icon: jwticon,
				color: '#38B2AC',
			},
			{
				title: 'Framer Motion',
				hash: '#framermotion',
				icon: framermotionicon,
				color: '#CC6699',
			},
			{
				title: 'Tanstack Query',
				hash: '#tanstackquery',
				icon: tanstackqueryicon,
				color: '#d34b47',
			},
		],
	},
] as const

export const skillsDataDesign = [
	{
		skillsTitle: 'Design',
		skills: [
			{ title: 'Figma', hash: '#Figma', icon: figmaicon, color: '#F24E1E' },
			{
				title: 'Adobe Photoshop',
				hash: '#Adobe Photoshop',
				icon: photoshopicon,
				color: '#21759B',
			},
			{ title: 'Canva', hash: '#Canva', icon: canvaicon, color: '#00C4CC' },
			{ title: 'Draw IO', hash: '#DrawIO', icon: drawio, color: '#F24E1E' },
		],
	},
] as const

export const skillsDataCMS = [
	{
		skillsTitle: 'CMS',
		skills: [
			{
				title: 'WordPress',
				hash: '#WordPress',
				icon: wordpressicon,
				color: '#21759B',
			},
			{
				title: 'Shopify',
				hash: '#Shopify',
				icon: shopifyicon,
				color: '#7AB55C',
			},
			{
				title: 'Strapi IO',
				hash: '#Strapi',
				icon: strapiicon,
				color: '#4945ff',
			},
		],
	},
] as const

export const navLinks = [
	{ de: 'Home', en: 'Home', vi: 'Trang Chủ', hash: '#home', icon: GoHome },
	{
		de: 'Skills',
		en: 'Skills',
		vi: 'Kỹ Năng',
		hash: '#skills',
		icon: GoStack,
	},
	{
		de: 'Projekte',
		en: 'Projects',
		vi: 'Dự Án',
		hash: '#projects',
		icon: GoProject,
	},
	{
		de: 'Über mich',
		en: 'About me',
		vi: 'Giới Thiệu',
		hash: '#about-me',
		icon: GoPerson,
	},
	{
		de: 'Kontakt',
		en: 'Contact',
		vi: 'Liên Hệ',
		hash: '#contact',
		icon: GoMail,
	},
] as const

export const FooterLinks = [
	{ de: 'Blog', en: 'Blog', vn: 'Tin tức', hash: '#blog', data: <Imprint /> },
	{ de: 'Datenschutz', en: 'Privacy', vn: 'Bảo mật', hash: '#privacy', data: <Privacy /> },
] as const

export const sideBarRightMail = {
	link: 'mailto:jasondangx91@gmail.com',
	text: 'jasondangx91@gmail.com',
} as const

export const sideBarLeftSocials = [
	{
		link: 'https://www.linkedin.com/in/quang-dang-7a00aab2/',
		icon: FiLinkedin,
		altimgname: 'linkedin',
	},
	{
		link: 'https://wa.link/bh7ydm',
		icon: FaWhatsapp,
		altimgname: 'whatsapp',
	},
	{
		link: 'https://t.me/jasdang47',
		icon: FaTelegramPlane,
		altimgname: 'telegram',
	},
	{
		link: 'mailto:jasondangx91@gmail.com',
		icon: FiMail,
		altimgname: 'mail',
	},
] as const

export const quotesData = [
	{
		de: '"Alles ins Gleichgewicht zu bringen ist gut, alles in Harmonie zu bringen ist besser."',
		en: `"To put everything in balance is good, to put everything in harmony is better."`,
		vi: `"Cân bằng mọi thứ là tốt, hài hòa mọi thứ là tốt hơn."`,
		author: 'Victor Hugo',
	},
	{
		de: '"Das Web dient als Leinwand und der Code als Pinselstrich. Verwenden Sie es, um Ihr digitales Meisterwerk zu erstellen."',
		en: `"The web serves as a canvas, and code acts as the brushstroke. Use it to create your digital masterpiece."`,
		vi: `"Trang web đóng vai trò như một khung vẽ và những dòng code đóng vai trò là nét vẽ. Hãy sử dụng nó để tạo ra kiệt tác kỹ thuật số của bạn."`,
	},
] as const

export const aboutMeData = {
	title: 'Über mich',
	title_EN: 'About me',
	title_VI: 'Giới thiệu',
	description: 'Ein paar Codeschnippsel über mich',
	description_EN: 'A few code snippets about me',
	description_VI: 'Một vài đoạn mã về tôi',
	paragraphs_DE: [
		{
			title: 'Der Weg zur Programmierung!',
			description:
				'Ich war früher professionelle Turnerin und trat für mein Land an. Ich nahm an vielen internationalen Turnieren teil. Als ich mich verletzte und nicht mehr zu meiner Form zurückkam, beschloss ich, meine Karriere zu beenden und wurde eine richtige Programmiererin.',
			icon: hardwareicon,
		},
		{
			title: 'Instabilität ist die Natur des Lebens',
			description:
				'Es gibt nur eine Konstante: den Wandel. Wenn uns Veränderungen überraschen oder das Ungewöhnliche beunruhigt, dann verstehen wir das Gesetz nicht.',
			icon: caricon,
		},
		{
			title: 'Entdeckungsfreude als Lebensmotto',
			description:
				'Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.',
			icon: travelicon,
		},
	],
	paragraphs_EN: [
		{
			title: 'The path to programming!',
			description:
				"I used to be a professional gymnast, competing for the nation. I played in many international tournaments, when I got injured and couldn't regain my form so I decided to retire and I became a real programmer.",
			icon: hardwareicon,
		},
		{
			title: 'Instability is the nature of life',
			description:
				'There is only one constant: change. If we are surprised by change, or alarmed by the unusual, then we do not understand the law.',
			icon: caricon,
		},
		{
			title: 'The Joy of Discovery as a Life Motto',
			description:
				'My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.',
			icon: travelicon,
		},
	],
	paragraphs_VI: [
		{
			title: 'Con đường đến với lập trình!',
			description:
				'Tôi từng là vận động viên thể dục chuyên nghiệp, thi đấu cho quốc gia. Tôi đã thi đấu ở nhiều giải đấu quốc tế, khi bị chấn thương và không thể lấy lại phong độ nên tôi quyết định giải nghệ và trở thành một lập trình viên thực thụ.',
			icon: hardwareicon,
		},
		{
			title: 'Sự bất ổn là bản chất của cuộc sống!',
			description:
				'Chỉ có duy nhất sự đổi thay là không bao giờ thay đổi. Nếu như mình ngạc nhiên về sự đổi thay, mình hốt hoảng về những cái bất bình thường, như vậy mình chưa hiểu về quy luật.',
			icon: caricon,
		},
		{
			title: 'Niềm vui khám phá như một phương châm sống',
			description:
				'Hành trình của tôi với tư cách là một nhà phát triển web chỉ là một phần trong con đường cuộc sống của tôi. Tôi sống theo phương châm rằng cuộc phiêu lưu chỉ bắt đầu khi bạn rời xa những điều quen thuộc. Khám phá những địa điểm và nền văn hóa mới là nguồn cảm hứng sáng tạo của tôi.',
			icon: travelicon,
		},
	],
}

export const contactData = {
	title: {
		de: 'Kontakt',
		en: 'Contact',
		vi: 'Liên hệ',
	},
	description: {
		de: 'Schreib mir eine Nachricht und ich melde mich bei dir.',
		en: 'Write me a message and I will get back to you.',
		vi: 'Hãy viết cho tôi một tin nhắn và tôi sẽ liên lạc lại với bạn.',
	},
	inputfields: [
		{
			name: 'name',
			placeholder: {
				de: 'Dein Name',
				en: 'Your Name',
				vi: 'Họ & tên',
			},
			type: 'text',
			validation: {
				de: 'Bitte gebe deinen Namen ein',
				en: 'Please fill in your name',
				vi: 'Vui lòng điền đầy đủ họ & tên',
			},
			pattern: '{2}',
		},
		{
			name: 'email',
			placeholder: {
				de: 'Deine E-Mail Adresse',
				en: 'Your E-Mail',
				vi: 'Địa chỉ email',
			},
			type: 'email',
			validation: {
				de: 'Bitte gebe deine Email ein',
				en: 'Please fill in your email',
				vi: 'Vui lòng điền địa chỉ email',
			},
			pattern: '[@]{4}',
		}
	],
	textarea: {
		placeholder: {
			de: 'Deine Nachricht',
			en: 'Your Message',
			vi: 'Nội dung',
		},
		name: 'message',
		rows: 10,
		validation: {
			de: 'Bitte gebe deine Nachricht ein',
			en: 'Please fill in your message',
			vi: 'Vui lòng điền nội dung',
		},
		pattern: '{10}',
	},
	button: {
		value: {
			de: 'Absenden',
			en: 'Send',
			vi: 'Gửi',
		},
	},
	icon: FiMail,
	iconcolor: '#FFFFFF',
	colors: {
		main: 'main-btn',
		second: 'secondary-btn',
		icon: 'white',
	},
	privacyOptIn: {
		checkbox: {
			de: 'Ich stimme zu, dass Quang Dang meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.',
			en: 'I agree that Quang Dang may use my personal data (name and e-mail address) to contact me.',
			vi: 'Tôi đồng ý với Quang Đăng rằng có thể sử dụng dữ liệu cá nhân của tôi (tên và địa chỉ email) để liên hệ với tôi.',
		},
		description: {
			de: 'Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben',
			en: 'By submitting this request, you acknowledge that you have read the Private Policy',
			vi: 'Bằng cách gửi yêu cầu này, bạn thừa nhận rằng bạn đã đọc Chính sách riêng tư.',
		},
	},
} as const

export const toastMessages = {
	loadingProject: {
		de: '🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...',
		en: '🦄 The live demo will open shortly. Starting servers...',
	},
	successEmailSent: {
		de: 'Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden',
		en: 'Thank you for your email. I will get back to you as soon as possible',
		vi: 'Cảm ơn vì lá thư của bạn! Tôi sẽ liên hệ lại với bạn sớm nhất có thể.',
	},
	failedEmailSent: {
		de: 'Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal',
		en: 'Unfortunately the sending of your email did not work. Please try again later',
		vi: 'Rất tiếc, việc gửi email của bạn không thành công. Vui lòng thử lại sau.',
	},
	failedValidationName: {
		de: 'Bitte gebe deinen Namen ein',
		en: 'Please fill in your name',
		vi: 'Xin vui lòng điền tên của bạn.',
	},
} as const

export const buttonLabels = {
	language: {
		de: 'DE',
		en: 'EN',
		vi: 'VI',
	},
} as const

export const directionStyles: Record<string, React.CSSProperties> = {
	'outer-right-to-inner-left': {
		marginRight: '4rem',
	},
	'outer-left-to-inner-right': {
		marginLeft: '4rem',
		transform: 'scaleX(-1)',
	},
	'inner-right-to-middle': {
		width: '100%',
		transform: 'scaleY(1)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	'inner-left-to-middle': {
		width: '100%',
		transform: 'scaleX(-1)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
	},
	'middle-to-inner-right': {
		width: '100%',
		transform: 'scale(1,-1)',
	},
	'middle-to-inner-left': {
		width: '100%',
		transform: 'scale(-1,-1)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	middle: {
		width: '100%',
		transform: 'scaleX(-1)',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}

export const heightStyles: Record<string, { heights: [string, string] }> = {
	small: {
		heights: ['25rem', '5rem'],
	},
	middle: {
		heights: ['35rem', '25rem'],
	},
	large: {
		heights: ['45rem', '35rem'],
	},
	extraLarge: {
		heights: ['55rem', '45rem'],
	},
}

export const spaceStyles: Record<string, React.CSSProperties> = {
	'outer-right-to-inner-left': {
		marginTop: '-6rem',
		width: '100%',
	},
	'outer-left-to-inner-right': {
		marginTop: '-6rem',
		width: '100%',
	},
	'inner-right-to-middle': {
		marginTop: '-20rem',
		width: '50%',
		zIndex: '-10',
	},
	'inner-left-to-middle': {
		marginTop: '-10rem',
		width: '50%',
		zIndex: '-10',
	},
	'middle-to-inner-right': {
		width: '75%',
	},
	'middle-to-inner-left': {
		marginTop: '-2.5rem',
		width: '50%',
	},
	middle: {
		marginTop: '-2.5rem',
		width: '0%',
		display: 'none',
	},
}

export const widthStyles: Record<string, { widths: [string, string] }> = {
	'outer-right-to-inner-left': {
		widths: ['74.45%', '74.45%'],
	},
	'outer-left-to-inner-right': {
		widths: ['75%', '75%'],
	},
	'inner-right-to-middle': {
		widths: ['50.1%', '49%'],
	},
	'inner-left-to-middle': {
		widths: ['50.1%', '49%'],
	},
	'middle-to-inner-right': {
		widths: ['33.4%', '50.03%'],
	},
	'middle-to-inner-left': {
		widths: ['50.1%', '49%'],
	},
	middle: {
		widths: ['0%', '0%'],
	},
}
