import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import ThankYou from './pages/ThankYou'
import ActiveSectionContextProvider from './context/active-section-context'
import ThemeContextProvider from './context/theme-context'
import LanguageContextProvider from './context/language-context'
import { Fragment, Suspense, useEffect, useState } from 'react'
import Loader from './components/Loader'

function App() {

	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		// Simulate loading time
		const timer = setTimeout(() => {
			setLoading(false)
		}, 2800) // 3 seconds loading time

		return () => clearTimeout(timer)
	}, [])

	if (loading) {
		return <Loader />;
	}

	return (
		<Fragment>
			<BrowserRouter>
				<ThemeContextProvider>
					<LanguageContextProvider>
						<ActiveSectionContextProvider>
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/blogs' element={<Suspense fallback={<div>Loading...</div>}><Blogs /></Suspense>} />
								<Route path='/projects' element={<Projects scale="scale-[25]" opacity="opacity-50" />} />
								<Route path='/privacy' element={<Home />} />
								<Route path='/thank-you' element={<ThankYou />} />
								<Route path='*' element={<NotFound />} />
							</Routes>
						</ActiveSectionContextProvider>
					</LanguageContextProvider>
				</ThemeContextProvider>
			</BrowserRouter>
		</Fragment>
	)
}

export default App
