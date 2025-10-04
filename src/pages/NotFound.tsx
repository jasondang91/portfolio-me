import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 min-h-screen text-center'>
      <h2 className='font-bold text-[8rem]'>404</h2>
      <p className='text-3xl'>Oops! Page not found</p>
      <Link to='/' className='mt-8 px-6 py-3 secondary-btn'>
        Go back home
      </Link>
    </div>
  )
}

export default NotFound


