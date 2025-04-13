import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ActiveSectionContextProvider from './context/active-section-context'
import ThemeContextProvider from './context/theme-context'
import LanguageContextProvider from './context/language-context'
import { Fragment } from 'react'

function App() {
	return (
		<Fragment>
			<BrowserRouter>
				<ThemeContextProvider>
					<LanguageContextProvider>
						<ActiveSectionContextProvider>
							<Routes>
								<Route path='/' element={<Home />}></Route>
								<Route path='/projects' element={<Projects scale="scale-[25]" opacity="opacity-50" />}></Route>
								<Route path='/privacy' element={<Home />}></Route>
							</Routes>
						</ActiveSectionContextProvider>
					</LanguageContextProvider>
				</ThemeContextProvider>
			</BrowserRouter>
		</Fragment>
	)
}

export default App
