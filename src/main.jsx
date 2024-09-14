import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient,QueryClientProvider } from 'react-query'
import { BrowserRouter,createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'

const queryclient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
  {
    path: '/homepage',
    element: <HomePage/>
  }
])

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <StrictMode>
         <QueryClientProvider client={queryclient} >
    <RouterProvider router = {router} />
    
         </QueryClientProvider>
       </StrictMode>,
  </BrowserRouter>
)
