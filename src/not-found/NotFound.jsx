import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function NotFound() {
  const siteUrl = 'https://sssafetysolutions.pk';

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-950 via-red-950 to-orange-950 px-6 py-20">
      <SEO
        title="Page Not Found | SS Safety Solutions"
        description="The page you requested could not be found on SS Safety Solutions. Return to the home page or browse our products."
        url={`${siteUrl}/404`}
        image={`${siteUrl}/og-image.jpg`}
        noindex
      />

      <div className="max-w-2xl w-full text-center text-white">
        <p className="text-sm uppercase tracking-[0.4em] text-orange-200/80 mb-4">404 error</p>
        <h1 className="text-5xl md:text-7xl font-black mb-6">Page not found</h1>
        <p className="text-lg md:text-xl text-white/75 mb-10 max-w-xl mx-auto">
          The URL may be outdated, moved, or never existed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-8 py-4 font-semibold hover:bg-orange-100 transition"
          >
            Back to Home
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 font-semibold hover:bg-white/20 transition"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;