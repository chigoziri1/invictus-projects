import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Kids from './pages/Kids.jsx'
import Man from './pages/Man.jsx'
import Woman from './pages/Woman.jsx'

const router = createBrowserRouter([{
	element: <App />,
	path: "/",
	children: [
		{
			element: <Home/>,
			index: true,
		},
		{
			element: <About/>,
			path: 'about'
		},
		{
			element: <Contact/>,
			path: 'contact'
		},
		{
			element: <Kids/>,
			path: 'kids'
		},
		{
			element: <Man/>,
			path: 'man'
		},
		{
			element: <Woman/>,
			path: 'woman'
		}
	]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
