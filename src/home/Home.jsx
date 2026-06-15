import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight, ShoppingCart, Star, Shield, Award, Users, Zap } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, animate, useMotionValue, useSpring } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';
import SEO from '../components/SEO';

/* ─── Animated Counter ─────────────────────────────────────────────────── */
function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplayed(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target, duration]);

  return <span ref={ref}>{displayed.toLocaleString()}{suffix}</span>;
}

/* ─── Magnetic Button ───────────────────────────────────────────────────── */
function MagneticButton({ children, className, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  }, [x, y]);

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={className}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.button>
  );
}

/* ─── Floating Particles ────────────────────────────────────────────────── */
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 8 + 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-orange-400/30"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-red-700/10 blur-3xl" />
    </div>
  );
}

/* ─── Section Wrapper with fade-up ─────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Category Card ─────────────────────────────────────────────────────── */
function CategoryCard({ item, index }) {
  const getHashId = (title) =>
    title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');

  return (
    <motion.div
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 border border-gray-100"
      style={{ willChange: 'transform' }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ transform: 'scale(1.02)' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1.02)')}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        {/* Category label pill */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-red-700 text-xs font-bold px-3 py-1 rounded-full shadow">
          {item.title}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">{item.desc}</p>
        <Link to={`/products?id=${item.title}`}>
          <motion.button
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="inline-flex items-center gap-2 text-red-700 font-semibold text-sm group/btn"
          >
            Explore
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </motion.button>
        </Link>
      </div>

      {/* Animated border accent */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-700 w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

/* ─── Product Slide Card ────────────────────────────────────────────────── */
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100">
      {/* Image */}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {product.badge && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-3 left-3 bg-red-700 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg"
          >
            {product.badge}
          </motion.div>
        )}

        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-md">
          <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
          <span className="text-xs font-bold text-gray-800">{product.rating}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1 text-center">
        <h3 className="text-lg font-bold text-red-700 mb-2 leading-snug">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{product.description}</p>

        <div className="mb-4">
          {typeof product.price === 'number' ? (
            <span className="text-2xl font-extrabold text-red-700">
              Rs.{product.price.toFixed()}
            </span>
          ) : (
            <span className="text-xl font-bold text-red-700">{product.price}</span>
          )}
        </div>

        <MagneticButton
          onClick={() => onAddToCart(product)}
          className="inline-flex items-center justify-center gap-2 bg-red-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-red-800 transition-colors duration-300 shadow-md hover:shadow-red-200 hover:shadow-lg w-full"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </MagneticButton>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────────── */
function Home() {
  const siteUrl = 'https://www.sssafetysolutions.com';
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const breadcrumbs = [{ name: 'Home', url: siteUrl }];
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'SS Safety Solutions - Home',
    description:
      'Leading supplier of premium safety equipment, protective gear, fire fighting systems, and rescue equipment in Pakistan.',
    url: siteUrl,
    publisher: {
      '@type': 'Organization',
      name: 'SS Safety Solutions',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/android-chrome-192x192.png` },
    },
  };

  const stats = [
    { icon: Shield, value: 5000, suffix: '+', label: 'Products Delivered' },
    { icon: Award, value: 12, suffix: '+', label: 'Years of Trust' },
    { icon: Users, value: 800, suffix: '+', label: 'Happy Clients' },
    { icon: Zap, value: 99, suffix: '%', label: 'Satisfaction Rate' },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Safety Boots Pro-X',
      price: 'Call for Price',
      rating: 4.9,
      badge: 'BEST SELLER',
      image: 'https://m.media-amazon.com/images/I/71Dn8rcuo7L._AC_UY900_.jpg',
      description: 'Steel-toe protection with anti-slip sole. EN ISO 20345 certified for ultimate comfort in heavy-duty environments.',
    },
    {
      id: 2,
      name: 'Tactical Ballistic Helmet',
      price: 'Call for Price',
      rating: 4.8,
      badge: 'NEW ARRIVAL',
      image: 'https://acelinkarmor.com/wp-content/uploads/2024/08/helmet-category-banner.jpg',
      description: 'NIJ Level IIIA protection. Lightweight, adjustable fit for security and tactical operations.',
    },
    {
      id: 3,
      name: 'High-Visibility Safety Vest',
      price: 'Call for Price',
      rating: 4.7,
      badge: null,
      image: 'https://cdn.prod.website-files.com/647888ca92d03e3fca3f1ea0/647888ca92d03e3fca3f23a6_Safety%20yellow%20and%20orange%20vests.jpg',
      description: 'ANSI Class 2 reflective vest. Breathable mesh for all-day comfort in road and construction zones.',
    },
    {
      id: 4,
      name: 'Full-Body Fall Arrest Harness',
      price: 'Call for Price',
      rating: 5.0,
      badge: 'TOP RATED',
      image: 'https://sbc-content.s3.amazonaws.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/S/a/Safety-Lanyards_1.jpg',
      description: 'OSHA compliant full-body harness with quick-connect buckles and padded support.',
    },
    {
      id: 5,
      name: 'Fire-Resistant Gloves Pro',
      price: 'Call for Price',
      rating: 4.6,
      badge: 'LIMITED STOCK',
      image: 'https://cdn11.bigcommerce.com/s-tumf4kk1l4/images/stencil/original/l/apikrtmf9__92534.original.jpg',
      description: 'Heat-resistant up to 500°C. Dexterity and grip for firefighting and industrial use.',
    },
    {
      id: 6,
      name: 'Fire-Resistant Gloves Pro',
      price: 'Call for Price',
      rating: 4.6,
      badge: 'LIMITED STOCK',
      image: 'https://cdn11.bigcommerce.com/s-tumf4kk1l4/images/stencil/original/l/apikrtmf9__92534.original.jpg',
      description: 'Heat-resistant up to 500°C. Dexterity and grip for firefighting and industrial use.',
    },
  ];

  const categories = [
    { title: 'Security Equipment', desc: 'Tactical gear, body armor, helmets & protective suits for high-risk operations.', img: 'https://acelinkarmor.com/wp-content/uploads/2024/08/helmet-category-banner.jpg' },
    { title: 'Rescue Equipment', desc: 'Ropes, harnesses, stretchers & specialized tools for emergency response.', img: 'https://www.cmcpro.com/wp-content/uploads/wd/products/500104_AZTEK_ProSeries_System__5.jpg?ver=1731612266' },
    { title: 'Fire Fighting Equipment', desc: 'Extinguishers, hoses, nozzles & essential firefighting tools.', img: 'https://i0.wp.com/newelaf.com/wp-content/uploads/2023/05/Fire-Fighting-Equipments.webp' },
    { title: 'Safety Shoes', desc: 'Steel-toe, anti-slip boots meeting international safety standards.', img: 'https://m.media-amazon.com/images/I/71Dn8rcuo7L._AC_UY900_.jpg' },
    { title: 'Road Safety', desc: 'Cones, reflective signs, barriers & safety signage.', img: 'https://skyk.in/wp-content/uploads/2025/03/13146690_Traffic-barriers-collection-min-800x600.jpg' },
    { title: 'Fire Fighting Vehicle', desc: 'Specialized fire trucks for rapid emergency deployment.', img: 'https://media.gettyimages.com/id/89909590/photo/modern-red-fire-engine-truck-isolated-on-white-clipping-path.jpg?s=612x612&w=gi&k=20&c=prDUir8GOlpxi-ul0Pa7m4oKTG6X9tWNEoJk2MAFqNY=' },
    { title: 'Fire Alarm System', desc: 'Smoke detectors, sensors & early warning panels.', img: 'https://douglaselectric.us/wp-content/uploads/2023/06/fire-alarm-system-installation-2-859x600.jpg' },
    { title: 'Fall Arrest System', desc: 'Harnesses, lanyards & anchors for height safety.', img: 'https://www.shutterstock.com/image-photo/harness-fall-arrest-lanyard-260nw-2535477175.jpg' },
    { title: 'Personal Protective Wear', desc: 'High-visibility jackets & weather-resistant clothing.', img: 'https://cdn.prod.website-files.com/647888ca92d03e3fca3f1ea0/647888ca92d03e3fca3f23a6_Safety%20yellow%20and%20orange%20vests.jpg' },
    { title: 'Medical Equipment For Ambulance', desc: 'Defibrillators, oxygen systems & emergency kits.', img: 'http://mfimedical.com/cdn/shop/articles/stretcher-in-ambulance-1_7982e7b7-ef61-4213-8138-fcb05ceeddc7.jpg?v=1748437823' },
    { title: 'Personal Protective Equipments', desc: 'Helmets, gloves, glasses & full PPE kits.', img: 'https://thumbs.dreamstime.com/b/personal-protective-equipment-ppe-kit-hospital-doctors-nurses-personal-protective-equipment-ppe-kit-180073267.jpg' },
    { title: 'Laboratory safety System', desc: 'Goggles, lab coats, gloves & safety equipment for laboratory work.', img: 'https://media.istockphoto.com/id/918825222/photo/woman-scientist-adjusts-protective-goggles-staring-intently.jpg?s=612x612&w=0&k=20&c=SC0wMROl6EG69TUoKXnlQ-lssKlQzVAHjswjUTWiGSk=' },
    { title: 'Safety Containment System', desc: 'Secondary containment solutions for hazardous materials storage.', img: 'https://assets.production.denios.io/article/327073_20220809-092005.jpg' },
    { title: 'Spill Prevention Containment and Control', desc: 'Spill kits, absorbents & containment systems for emergency response.', img: 'https://www.absorbentsonline.com/spill-containment-blog/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3J/jPWh0dHBzJTNBJTJGJTJGd3d3LmFic29yYmVudHNvbmxpbmUuY29tJTJGc3BpbGwtY29udGFpbm1lbnQtYmxvZyUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA0JTJGV2hhdC1Jcy1BLVNwaWxsLUtpdC0xMDI0eDY4My5qcGcmY2FjaGVNYXJrZXI9MTY0OTE2MzIzNi00NDgwNyZ0b2tlbj0xY2E2YmU1NWQ5ZGU5YmRk.q.jpg' },
    { title: 'Industrial Tools', desc: 'Heavy-duty machinery & equipment for industrial applications.', img: 'https://media.istockphoto.com/id/1157027831/photo/industrial-factory-interior-with-equipment-conveyor-line-and-steel-tools-industry-background.jpg?s=612x612&w=0&k=20&c=YsNqcfwIgc8V_FU--eztNOQrZB1PWRFruUVS0M1w36U=' },
    { title: 'Hand tools', desc: 'Wrenches, hammers, pliers & essential manual tools.', img: 'https://media.istockphoto.com/id/596042932/photo/set-of-hand-various-work-tools-on-grey-background.jpg?s=612x612&w=0&k=20&c=Tpz6mmcCZs_tVPd_yq0lmDvPqkvp0Zo5XMWpICP6rZk=' },
    { title: 'Power Tools', desc: 'Drills, saws, grinders & electric power tools.', img: 'https://www.shutterstock.com/image-photo/construction-carpentry-tools-electric-corded-260nw-1990855535.jpg' },
  ];

  const { addToCart } = useCart();

  const handleAddToCart = useCallback((product) => {
    addToCart({ id: product.id, title: product.name, price: product.price, image: product.image, quantity: 1 });
    toast.success(`${product.name} × 1 added to cart!`);
  }, [addToCart]);

  /* Headline stagger */
  const headline = ['S.S SAFETY', 'SOLUTIONS'];
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
  };
  const word = {
    hidden: { opacity: 0, y: 60, skewY: 6 },
    show: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      <SEO
        title="SS Safety Solutions | Premium Safety Equipment & Protective Gear Pakistan"
        description="Leading supplier of premium safety equipment, protective gear, fire fighting systems, and rescue equipment in Pakistan."
        keywords="safety equipment Pakistan, protective gear, fire fighting equipment, rescue equipment, PPE, safety shoes, road safety, fire alarm systems, fall arrest systems, laboratory safety"
        url={siteUrl}
        image={`${siteUrl}/og-image.jpg`}
        type="website"
        breadcrumbs={breadcrumbs}
        schema={[homeSchema]}
      />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[640px] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        aria-label="Hero"
      >
        {/* Ken Burns bg */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ scale: heroScale, y: heroY }}
        >
          <img
            src="https://wallpapercave.com/wp/wp2592365.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            fetchpriority="high"
          />
        </motion.div>

        {/* Layered overlays */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-950/40 via-transparent to-orange-950/30" />

        {/* Particles */}
        <Particles />

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-5xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <img
              src="https://png.pngtree.com/png-vector/20250112/ourmid/pngtree-bright-orange-flame-icon-illustration-with-vibrant-yellow-and-red-tones-png-image_15160948.png"
              alt="Flame Icon"
              className="h-16 w-16 mx-auto drop-shadow-[0_0_24px_rgba(251,146,60,0.8)]"
            />
          </motion.div>

          {/* Headline with stagger */}
          <motion.div variants={container} initial="hidden" animate="show" className="overflow-hidden mb-6">
            {headline.map((line, i) => (
              <motion.div key={i} variants={word} className="overflow-hidden block">
                <span
                  className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none ${
                    i === 0 ? 'text-white' : 'text-orange-400'
                  }`}
                  style={{ textShadow: '0 4px 32px rgba(0,0,0,0.5)' }}
                >
                  {line}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/75 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide"
          >
            Pakistan's trusted source for certified fire safety, rescue, and industrial protection equipment.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton className="relative overflow-hidden px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-base rounded-full shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-shadow duration-300 group">
              <span className="relative z-10 flex items-center gap-2">
                Explore Products <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </MagneticButton>

            <MagneticButton className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-base rounded-full border border-white/25 hover:bg-white/20 transition-colors duration-300">
              Contact Us
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent rounded-full"
          />
        </motion.div>
      </section>

      {/* ── STATS BAND ─────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 py-16 overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <FadeUp key={i} delay={i * 0.1} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur mb-3 mx-auto">
                <s.icon className="w-5 h-5 text-orange-300" />
              </div>
              <div className="text-3xl md:text-4xl font-black text-white mb-1">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/60 text-sm font-medium tracking-wide">{s.label}</div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ─────────────────────────────────────────────────────── */}
      <section className="py-28 px-4 bg-gray-50 relative overflow-hidden">
        {/* bg decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-100/60 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-red-100/50 blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <FadeUp className="text-center mb-20">
            <p className="text-orange-600 text-sm font-bold tracking-widest uppercase mb-3">What We Offer</p>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-5">
              Premium Safety<br />
              <span className="text-red-700">Equipment Categories</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Every category backed by international certifications and years of field experience.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <CategoryCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ──────────────────────────────────────────────── */}
      <section className="py-28 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-red-50/80 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <FadeUp className="text-center mb-16">
            <p className="text-orange-600 text-sm font-bold tracking-widest uppercase mb-3">Top Picks</p>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Featured <span className="text-red-700">Products</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              loop
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              spaceBetween={24}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-14"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} className="h-auto">
                  <ProductCard product={product} onAddToCart={handleAddToCart} />
                </SwiperSlide>
              ))}
            </Swiper>
          </FadeUp>
        </div>
      </section>

      {/* ── CEO MESSAGE ────────────────────────────────────────────────────── */}
      <section className="py-28 px-4 bg-gradient-to-br from-gray-50 via-red-50/20 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-orange-100/60 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-red-100/50 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <FadeUp className="text-center mb-20">
            <p className="text-orange-600 text-sm font-bold tracking-widest uppercase mb-3">Leadership</p>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900">
              Message from the <span className="text-red-700">CEO</span>
            </h2>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <FadeUp delay={0.1} className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-orange-400/30 to-red-600/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Photo circle */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-orange-200/60">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHBhISBwgPFhUXFRUXExcSFhcVGBcXFxEWFhYXFRcYHSggGBolHxUWITEhJSkrMS4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADcQAQABAgIHBQUGBwAAAAAAAAABAgMEEQUSIUFRYXETMZGh0SIygbHhIzM0UqLBFEJDcrLw8f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM7dqq7P2duZ6Rm6KdGXao+68ZgHIOydGXY/p+Ew57tiq195bqjrGzxBrAAAAAAAAAAAAAAAAAAAAAAB7bom5XEURnM9wPbVubtcRbpzlM4TRVNEZ3/anhuj1dOBwkYW1lHfvnj9HSDymmKYypjLo9AB5MZxtegODFaMpvbbcas8u74whcRYqw9zK7T9ei0tOKw8Ym1q3I6cp4wCsDZiLM4e7NNz/scWsAAAAAAAAAAAAAAAAAABMaEw2VM11R37I6b/8AeSHiM52LVZt9laimN0RAMwAAAAAAAR+l8N2uH1qY207fhv8AVBLZMZxtVa/b7K9VTwmY8wYAAAAAAAAAAAAAAAAAA24SNbFUZ/mp+a0KthqtXE0TO6qPmtIAAAAAAAACu6VjLH1Zcv8AGFiVzSlWtj68uUeEQDlAAAAAAAAAAAAAAAAAB4tOFu9vh6auMee9V0noXE6lU0Vz37aeu+ATQAAAAAAAMblWpRM1d0RnPwVa5X2lyZnfMz4yl9NYnVt6lE7Z7+iGAAAAAAAAAAAAAAAAAAAInKdkgCe0dj4xFOrcn2vnzh3qlE5TslJ4TS00RliIz5x3/HiCaGmziqL8fZXInlv8G4AGq7iKbMfa3Ijr6A2uTHY2MLRxq3R+88nHitL7MsNT8Z/aPVFV1TXVnXOc7wLlc3K5muc5nveAAAAAAAAAAAAAAAAAAAAAADO1ZqvT9lbmenqDW2U3qqI9m7VHSZdlvRFdXvzTHn8m+nQv5r/6fqCNqv11e9er8Za0tOheF/8AT9Wm5oiun3KqZ8gR423sNXZ+9tTHy8WoAAAAAAAAAAAAAAAAAAAABtw+GqxNWVqnrO6Pi68Bo2b+VV7OKd0b59ITduiLdGVFOUA4cLoqm3tve1Pl4b3fTTFMZUxl0egAAAAExnG1w4nRlF7bRGrPLu8HcArWKwdWGn26dnGO76OdbKo1oyqhD4/RernVho60+noCLAAAAAAAAAAAAAAAASei9H9plXfjZ/LHHnPJp0Xg/wCJu51x7Mec8E/EZRsB6AAAAAAAAAAACL0no/XzrsRt3xx5xzQy2oTS+D7OrXtxsn3o4TxBGgAAAAAAAAAAAMrVubtyKaI2zOTFK6DsZzNdUco/cEph7MWLMU0bmwAAAAAAAAAAAAAGNdEXKJiqNk97IBV8XYnDX5pn4c43NSb01Y17MVx3x39JQgAAAAAAAAAACzYG12OFpjLdt6ztlXMPR2l+mONUR5rVAAAAAAAAAAAAAAAAAArGlPx09I+QA4gAAAAAf/Z"
                    alt="Mr. Sufyain Ali – CEO, SS Safety Solutions"
                    className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* CEO badge */}
                <motion.div
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -right-3 bg-gradient-to-br from-orange-500 to-red-700 text-white px-6 py-3 rounded-full shadow-xl border-4 border-white font-black text-sm tracking-widest"
                >
                  CEO
                </motion.div>
              </div>
            </FadeUp>

            {/* Quote */}
            <FadeUp delay={0.2}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative">
                {/* Quotation mark */}
                <div className="text-8xl font-black text-red-100 leading-none absolute top-4 left-6 select-none" aria-hidden="true">"</div>

                <div className="relative">
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify mb-6">
                    At <span className="font-bold text-orange-600">S.S SAFETY SOLUTIONS</span>, we believe safety is the foundation of progress.
                    We are dedicated to providing <span className="font-semibold text-red-700">world-class, certified safety equipment</span>{' '}
                    that protects lives and empowers industries, workplaces, and families across the nation.
                  </p>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
                    Every product we offer is built on trust, innovation, and uncompromising quality.
                    Our commitment is simple: to deliver reliable protection you can count on, every single time.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-xl md:text-2xl font-black text-red-800">— Mr. SUFYAIN ALI</p>
                  <p className="text-orange-600 font-semibold mt-0.5">Founder & Chief Executive Officer</p>
                  <p className="text-gray-400 text-sm mt-0.5">S.S SAFETY SOLUTIONS</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-800 to-orange-800 py-20 px-4 text-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <FadeUp className="relative max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
            Ready to make your workplace <span className="text-orange-300">safer?</span>
          </h3>
          <p className="text-white/65 text-lg mb-8">
            Talk to our safety specialists and get a customised quote for your project.
          </p>
          <MagneticButton className="inline-flex items-center gap-2 bg-white text-red-800 font-bold text-base px-10 py-4 rounded-full shadow-2xl hover:shadow-white/20 transition-shadow duration-300 group">
            Get in Touch <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
          </MagneticButton>
        </FadeUp>
      </section>

      {/* Global Swiper pagination style overrides */}
      <style>{`
        .swiper-pagination-bullet {
          background: #b91c1c !important;
          opacity: 0.35;
          width: 8px;
          height: 8px;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </>
  );
}

export default Home;