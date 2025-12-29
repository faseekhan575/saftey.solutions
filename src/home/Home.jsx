import React from 'react'
import { useState } from 'react';
import { Menu, X, User, ShoppingCart } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {  Star, Heart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay,Scrollbar,A11y } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Home() {
    const products = [
  {
    id: 1,
    name: "Premium Safety Boots Pro-X",
    price: 7000,
    oldPrice: 10000,
    rating: 4.9,
    badge: "BEST SELLER",
    image: "https://m.media-amazon.com/images/I/71Dn8rcuo7L._AC_UY900_.jpg",
    description: "Steel-toe protection with anti-slip sole. EN ISO 20345 certified for ultimate comfort in heavy-duty environments."
  },
  {
    id: 2,
    name: "Tactical Ballistic Helmet",
    price: 4000,
    oldPrice: 6000,
    rating: 4.8,
    badge: "NEW ARRIVAL",
    image: "https://acelinkarmor.com/wp-content/uploads/2024/08/helmet-category-banner.jpg",
    description: "NIJ Level IIIA protection. Lightweight, adjustable fit for security and tactical operations."
  },
  {
    id: 3,
    name: "High-Visibility Safety Vest",
    price: 9000,
    oldPrice: 12000,
    rating: 4.7,
    badge: null,
    image: "https://cdn.prod.website-files.com/647888ca92d03e3fca3f1ea0/647888ca92d03e3fca3f23a6_Safety%20yellow%20and%20orange%20vests.jpg",
    description: "ANSI Class 2 reflective vest. Breathable mesh for all-day comfort in road and construction zones."
  },
  {
    id: 4,
    name: "Full-Body Fall Arrest Harness",
    price: 3500,
    oldPrice: 5000,
    rating: 5.0,
    badge: "TOP RATED",
    image: "https://sbc-content.s3.amazonaws.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/S/a/Safety-Lanyards_1.jpg",
    description: "OSHA compliant full-body harness with quick-connect buckles and padded support."
  },
  {
    id: 5,
    name: "Fire-Resistant Gloves Pro",
    price: 4000,
    oldPrice: 7000,
    rating: 4.6,
    badge: "LIMITED STOCK",
    image: "https://cdn11.bigcommerce.com/s-tumf4kk1l4/images/stencil/original/l/apikrtmf9__92534.original.jpg",
    description: "Heat-resistant up to 500°C. Dexterity and grip for firefighting and industrial use."
  }
  ,{
     id: 6,
    name: "Fire-Resistant Gloves Pro",
    price: 3400,
    oldPrice: 2500,
    rating: 4.6,
    badge: "LIMITED STOCK",
    image: "https://cdn11.bigcommerce.com/s-tumf4kk1l4/images/stencil/original/l/apikrtmf9__92534.original.jpg",
    description: "Heat-resistant up to 500°C. Dexterity and grip for firefighting and industrial use."
  }
];

const categories = [
  {
    title: "Security Equipment",
    desc: "Tactical gear, body armor, helmets & protective suits for high-risk operations.",
    img: "https://acelinkarmor.com/wp-content/uploads/2024/08/helmet-category-banner.jpg",
  },
  {
    title: "Rescue Equipment",
    desc: "Ropes, harnesses, stretchers & specialized tools for emergency response.",
    img: "https://www.cmcpro.com/wp-content/uploads/wd/products/500104_AZTEK_ProSeries_System__5.jpg?ver=1731612266",
  },
  {
    title: "Fire Fighting Equipment",
    desc: "Extinguishers, hoses, nozzles & essential firefighting tools.",
    img: "https://i0.wp.com/newelaf.com/wp-content/uploads/2023/05/Fire-Fighting-Equipments.webp",
  },
  {
    title: "Safety Shoes",
    desc: "Steel-toe, anti-slip boots meeting international safety standards.",
    img: "https://m.media-amazon.com/images/I/71Dn8rcuo7L._AC_UY900_.jpg",
  },
  {
    title: "Road Safety",
    desc: "Cones, reflective signs, barriers & safety signage.",
    img: "https://skyk.in/wp-content/uploads/2025/03/13146690_Traffic-barriers-collection-min-800x600.jpg",
  },
  {
    title: "Fire Fighting Vehicles",
    desc: "Specialized fire trucks for rapid emergency deployment.",
    img: "https://www.fireapparatusmagazine.com/wp-content/uploads/2025/01/2501FA_appshow_p01.jpg",
  },
  {
    title: "Fire Alarm Systems",
    desc: "Smoke detectors, sensors & early warning panels.",
    img: "https://douglaselectric.us/wp-content/uploads/2023/06/fire-alarm-system-installation-2-859x600.jpg",
  },
  {
    title: "Fall Arrest Systems",
    desc: "Harnesses, lanyards & anchors for height safety.",
    img: "https://sbc-content.s3.amazonaws.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/S/a/Safety-Lanyards_1.jpg",
  },
  {
    title: "Personal Protective Wear",
    desc: "High-visibility jackets & weather-resistant clothing.",
    img: "https://cdn.prod.website-files.com/647888ca92d03e3fca3f1ea0/647888ca92d03e3fca3f23a6_Safety%20yellow%20and%20orange%20vests.jpg",
  },
  {
    title: "Medical Equipment for Ambulance",
    desc: "Defibrillators, oxygen systems & emergency kits.",
    img: "http://mfimedical.com/cdn/shop/articles/stretcher-in-ambulance-1_7982e7b7-ef61-4213-8138-fcb05ceeddc7.jpg?v=1748437823",
  },
  {
    title: "Personal Protective Equipment",
    desc: "Helmets, gloves, glasses & full PPE kits.",
    img: "https://cdn11.bigcommerce.com/s-tumf4kk1l4/images/stencil/original/l/apikrtmf9__92534.original.jpg",
  },
];


    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
  <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:h-20 h-26">
          
          {/* Hamburger - Mobile only (left) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Ultimate Logo - Centered on mobile, left on desktop */}
          <div className="flex items-center absolute inset-x-0 justify-center pointer-events-none lg:pointer-events-auto lg:static lg:inset-auto">
            <a href="/" className="flex lg:flex-row flex-col items-center lg:space-x-3 pointer-events-auto group px-4">
              
              {/* Flame Icon - Bigger on mobile */}
              <img 
                src="data:image/png;base64,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" 
                alt="Flame Icon"
                className="md:h-20 md:w-12  h-12 w-8 object-contain drop-shadow-md group-hover:scale-110 group-hover:drop-shadow-lg transition-all duration-300"
              />

              {/* Brand Text - "SOLUTIONS" on next line ONLY on mobile */}
              <span className="font-extrabold tracking-tight text-gray-900 text-center lg:text-left">
                <span className="block text-xl lg:text-2xl">
                  <span className="text-orange-600">SS</span>.SAFETY
                </span>
                <span className="block text-xl lg:hidden">
                  SOLUTIONS
                </span>
                <span className="hidden lg:inline lg:ml-1 text-2xl">
                  SOLUTIONS
                </span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition">Products</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition">Services</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition">About Us</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition">Contact</a>
          </div>

          {/* Login & Cart Icons - Right side */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <button className="text-gray-700 hover:text-orange-600 p-2 rounded-full hover:bg-gray-100 transition">
              <User size={24} />
            </button>
            <button className="text-gray-700 hover:text-orange-600 p-2 rounded-full hover:bg-gray-100 transition">
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <a href="#" className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition">Home</a>
            <a href="#" className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition">Products</a>
            <a href="#" className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition">Services</a>
            <a href="#" className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition">About Us</a>
            <a href="#" className="block px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition">Contact</a>
          </div>
        </div>
      )}
    </nav>


<main>
  <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden ">
    
    {/* Your Original Background Image */}
    <img 
      src="https://wallpapercave.com/wp/wp2592365.jpg" 
      alt="Fire Safety"
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />

    {/* Lighter Dim Overlay - So image is visible */}
    <div className="absolute inset-0 bg-opacity-50  -z-10"></div>

    {/* Content - Simple */}
    <div className="max-w-4xl mx-auto">
      
      {/* Logo + Name */}
      <div className="mb-8 opacity-0 animate-fadeIn">
        <img 
          src="https://png.pngtree.com/png-vector/20250112/ourmid/pngtree-bright-orange-flame-icon-illustration-with-vibrant-yellow-and-red-tones-png-image_15160948.png" 
          alt="Flame Icon"
          className="h-20 w-20 mx-auto mb-4"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">
          <span className="text-orange-500">SS</span>.SAFETY SOLUTIONS
        </h1>
      </div>

      {/* 5 Simple Lines */}
      <p className="text-lg sm:text-xl text-white mb-10 leading-relaxed opacity-0 animate-fadeIn animation-delay-500 drop-shadow-lg">
        We deal in high-quality fire safety products<br />
        Advanced fire extinguishers and alarm systems<br />
        Reliable and certified equipment<br />
        Trusted for homes, offices, and industries<br />
        Your partner in safety and protection
      </p>

      {/* Read More Button */}
      <div className="opacity-0 animate-fadeIn animation-delay-1000">
        <button className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg rounded-lg shadow-2xl transition transform hover:scale-105">
          Read More
        </button>
      </div>
    </div>
  </section>

  {/* Fade-In Animation */}
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 1s ease-out forwards;
    }
    .animation-delay-500 { animation-delay: 0.5s; }
    .animation-delay-1000 { animation-delay: 1s; }
  `}</style>
</main>


<div className='w-full h-[1px] mt-20 bg-orange-500'></div>

 
<main className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50/30 to-gray-50 py-20 px-4">

  <motion.h1
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-4xl md:text-6xl font-extrabold text-center text-red-800 uppercase tracking-wider mb-20"
  >
    Premium Safety Equipment Categories
  </motion.h1>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
    
    {categories.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border-t-4 border-red-700"
      >
        <div className="relative overflow-hidden">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-red-700 mb-3">
            {item.title}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {item.desc}
          </p>
          <button className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-red-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Explore <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    ))}

  </div>
</main>


<products>
      <motion.h1 
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-4xl md:text-6xl font-extrabold text-center text-red-800 uppercase tracking-wider mb-20"
  >
    Our Featured Products
  </motion.h1>

 
     


      <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="your-classes-here"
>
  <Swiper
    modules={[Navigation, Pagination, A11y, Autoplay]}
    slidesPerView={2}
    slidesPerGroup={1}
    spaceBetween={20}
    loop={true}
    centeredSlides={false}
    className="w-full max-w-6xl ml-10"
    pagination={{
      el: ".custom-pagination",
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className}">${index + 1}</span>`;
      },
    }}
    scrollbar={{ draggable: true }}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    breakpoints={{
      0: { slidesPerView: 1, slidesPerGroup: 1 },
      640: { slidesPerView: 2, slidesPerGroup: 1 },
    }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    {products.map((product) => (
      <SwiperSlide key={product.id}>
        <div className="group bg-white rounded-2xl border-1 border-red-900 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Badge */}
            {product.badge && (
              <div className="absolute top-4 left-4 bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg">
                {product.badge}
              </div>
            )}

            {/* Rating */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1 shadow-md">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span className="text-sm font-bold text-gray-800">{product.rating}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-red-700 mb-3">
              {product.name}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-extrabold text-red-700">
                Rs.{product.price.toFixed()}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-gray-500 line-through ml-3">
                  Rs.{product.oldPrice.toFixed()}
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-3">
              <button className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-red-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>

              {/* Replaced Heart with Details button */}
              <button className="px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-md font-semibold text-gray-700 hover:text-gray-900">
                Details
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}

    <div className="custom-pagination flex justify-center mt-8 gap-2"></div>
  </Swiper>
</motion.div>


   <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="bg-white py-16 md:py-24"
>
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading - Matching your website style exactly */}
    <h2 className="text-4xl md:text-6xl font-extrabold text-center text-red-800 uppercase tracking-wider mb-16 md:mb-20">
      Message from the <span className="text-orange-600">CEO</span>
    </h2>

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: CEO Image with Straight CEO Badge on Top-Right */}
      <div className="flex justify-center lg:justify-end order-first lg:order-first">
        <div className="relative group">
          {/* Subtle Orange Glow - Responsive */}
          <div className="absolute -inset-4 md:-inset-6 bg-orange-400/20 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition duration-700"></div>
          
          {/* Main Circular Image - Responsive Size */}
          <div className="relative w-72 h-72 md:w-96 md:h-96  rounded-full overflow-hidden shadow-2xl border-8 md:border-12 border-white " >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdwNykcGgRL1r-sexfy1CJJ7GeHXNolyS2w&s"  // Replace with your actual CEO photo URL
              alt="Mr. Sanjay Kumar - CEO"
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 bg-black"
            />
          </div>

          {/* Straight CEO Badge - Top Right, Responsive Positioning & Size */}
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-gradient-to-br from-orange-600 to-red-700 text-white px-8 py-4 md:px-10 md:py-5 rounded-full shadow-2xl border-4 border-white animate-pulse">
            <p className="text-xl md:text-2xl font-extrabold tracking-wider">
              CEO
            </p>
          </div>

          {/* Subtle Flame Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-tr from-orange-500 via-transparent to-red-600 opacity-30"></div>
        </div>
      </div>

      {/* Right: Clean & Professional Message - Appears below image on mobile */}
      <div className="text-gray-700 space-y-8 order-last lg:order-last">
        <div className="bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-lg border border-gray-100">
          <p className="text-lg md:text-xl leading-relaxed text-justify">
            At <span className="font-bold text-orange-600">SS.SAFETY SOLUTIONS</span>, we believe safety is the foundation of progress. 
            We are dedicated to providing <span className="font-semibold text-red-700">world-class, certified safety equipment</span> 
            that protects lives and empowers industries, workplaces, and families across the nation.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-justify mt-6">
            Every product we offer is built on trust, innovation, and uncompromising quality. 
            Our commitment is simple: to deliver reliable protection you can count on, every single time.
          </p>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-2xl md:text-3xl font-bold text-red-800">
              — Mr. SUFYAIN ALI
            </p>
            <p className="text-lg font-medium text-orange-700 mt-1">
              Founder & Chief Executive Officer
            </p>
            <p className="text-base text-gray-600">
              SS.SAFETY SOLUTIONS
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</motion.div>
    



  
     
</products>

<footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      {/* Logo & Company Name Section */}
      <div className="md:col-span-1">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 ">
           <img className="" src="data:image/png;base64,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" alt="" srcset="" />
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight">
            <span className="text-red-500">SS.</span>saftey solutions
          </h2>
        </div>
        <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
          Your trusted partner in premium safety equipment and protective solutions since 2010.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-red-500">Quick Links</h3>
        <ul className="space-y-4">
          {['Home', 'About Us', 'Products', 'Safety Standards', 'Blog', 'Contact'].map((item) => (
            <li key={item}>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-lg flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-8"></span>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Categories */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-red-500">Product Categories</h3>
        <ul className="space-y-4">
          {['Head Protection', 'Eye & Face Protection', 'Hearing Protection', 'Respiratory Protection', 'Hand Protection', 'Fall Protection', 'Foot Protection'].map((item) => (
            <li key={item}>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-lg flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-8"></span>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact & Newsletter */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-red-500">Stay Connected</h3>
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-gray-300">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-lg">Ss.safetysolutions25@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-lg">+92 334 7616779</span>
          </div>

          {/* Newsletter */}
          <div className="mt-8">
            <p className="text-gray-300 mb-4 text-lg">Subscribe for latest safety updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-6 py-4 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-red-600 w-full"
              />
              <button className="px-8 py-4 bg-red-700 rounded-xl font-bold hover:bg-red-800 transition-all duration-300 shadow-lg hover:shadow-red-700/50 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-gray-400 text-center md:text-left">
        © 2025 SafeGuard Pro. All rights reserved. | Premium Safety Equipment Provider
      </p>

      <div className="flex items-center gap-8">
        <span className="text-gray-500 text-sm">Developed by</span>
        <span className="text-2xl font-extrabold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          Fasee Developer
        </span>
        <span className="text-gray-400 text-lg font-semibold">→ conatact for websites</span>
      </div>
    </div>
  </div>

  {/* Subtle Background Glow */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
  </div>
</footer>



    </>
  )
}

export default Home;