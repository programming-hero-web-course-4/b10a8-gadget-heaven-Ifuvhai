import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Statistics from './components/statistics/Statistics.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Home from './components/home/Home.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import toast, { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/public/category.json')
      },
      {
        path: "/product_details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/public/fake.json')
      }
      
    ],
  },
  {
    path: "/statistics",
    element: <Statistics></Statistics>
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
    <Toaster></Toaster>
  </StrictMode>,
)
