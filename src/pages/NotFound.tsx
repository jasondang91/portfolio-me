import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center gap-4 text-center'>
			<h2 className='text-[8rem] font-bold'>404</h2>
			<p className='text-3xl'>Oops! Page not found</p>
			<Link to='/' className='secondary-btn mt-8 px-6 py-3'>
				Go back home
			</Link>
		</div>
	)
}

export default NotFound
