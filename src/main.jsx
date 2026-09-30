import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './home/Home.jsx'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from './context/CartContext.jsx'
import { HelmetProvider } from 'react-helmet-async'


const About = lazy(() => import('./about-us/About.jsx'))
const Service = lazy(() => import('./services/Service.jsx'))
const Contact = lazy(() => import('./contact-us/Contact.jsx'))
const Products = lazy(() => import('./products/Products.jsx'))
const ProductDetails = lazy(() => import('./Details/Details.jsx'))
const Checkout = lazy(() => import('./Checkout/Checkout.jsx'))
const Placeorder = lazy(() => import('./final-order/Placeorder.jsx'))
const PrivacyPolicy = lazy(() => import('./privacy-policy/PrivacyPolicy.jsx'))
const TermsConditions = lazy(() => import('./terms-conditions/TermsConditions.jsx'))
const FAQ = lazy(() => import('./faq/FAQ.jsx'))
const ReturnPolicy = lazy(() => import('./return-policy/ReturnPolicy.jsx'))
const RefundPolicy = lazy(() => import('./refund-policy/RefundPolicy.jsx'))
const NotFound = lazy(() => import('./not-found/NotFound.jsx'))
const Signup = lazy(() => import('./LOGINS/Signup.jsx'))
const Login = lazy(() => import('./LOGINS/Login.jsx'))

const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-10 h-10 border-3 border-orange-600/20 border-t-orange-600 rounded-full animate-spin" />
  </div>
)

const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: withSuspense(About) },
      { path: "/services", element: withSuspense(Service) },
      { path: "/contact", element: withSuspense(Contact) },
      { path: "/products", element: withSuspense(Products) },
      { path: "/products/:id", element: withSuspense(ProductDetails) },
      { path: "/checkout", element: withSuspense(Checkout) },
      { path: "/placeorder", element: withSuspense(Placeorder) },
      { path: "/privacy-policy", element: withSuspense(PrivacyPolicy) },
      { path: "/terms-conditions", element: withSuspense(TermsConditions) },
      { path: "/faq", element: withSuspense(FAQ) },
      { path: "/return-policy", element: withSuspense(ReturnPolicy) },
      { path: "/refund-policy", element: withSuspense(RefundPolicy) },
      { path: "*", element: withSuspense(NotFound) }
    ]
  },
  { path: "/signup", element: withSuspense(Signup) },
  { path: "/login", element: withSuspense(Login) }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <CartProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <RouterProvider router={router} />
      </CartProvider>
    </HelmetProvider>
  </StrictMode>
)