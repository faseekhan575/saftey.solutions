import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import SEO from '../components/SEO';

function FAQ() {
  const siteUrl = "https://sssafetysolutions.pk";
  const faqUrl = `${siteUrl}/faq`;

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "FAQ", url: faqUrl }
  ];

  const categories = [
    { id: "general", label: "General Questions", icon: HelpCircle },
    { id: "products", label: "Products & Certifications", icon: ShieldCheck },
    { id: "shipping", label: "Shipping & Ordering", icon: Truck },
    { id: "returns", label: "Returns & Warranty", icon: RotateCcw }
  ];

  const faqData = [
    {
      category: "general",
      question: "What is SS Safety Solutions?",
      answer: "SS Safety Solutions is a leading provider of premium, certified safety equipment, fire alarm systems, personal protective equipment (PPE), rescue gear, and road safety solutions across Pakistan. We cater to industrial, residential, and institutional needs."
    },
    {
      category: "general",
      question: "Where are you located and do you deliver nationwide?",
      answer: "Our main head offices and warehouses are in Pakistan. We offer secure, reliable, and fast delivery of safety equipment to all cities across Pakistan, including Karachi, Lahore, Islamabad, Faisalabad, Multan, and Peshawar."
    },
    {
      category: "products",
      question: "Are your safety products certified?",
      answer: "Yes, our safety equipment conforms to international quality standards. We offer certified products with OSHA, CE, EN, and relevant safety approvals. You can request copies of certifications for batch shipments when placing your corporate orders."
    },
    {
      category: "products",
      question: "Do you supply customized fire protection vehicles and systems?",
      answer: "Absolutely. We specialize in assembling and supplying fire fighting vehicles, ambulances, and customized fire alarm containment systems tailored to standard regulatory requirements for industries and municipal entities."
    },
    {
      category: "shipping",
      question: "How long does shipping take within Pakistan?",
      answer: "For standard orders, shipping takes 2 to 5 business days depending on your location. Large corporate consignments, customized protective wear, or bulk system equipment deliveries are coordinated directly through our logistics team to set clear timelines."
    },
    {
      category: "shipping",
      question: "What payment methods do you accept?",
      answer: "We support multiple secure payment options, including Bank Transfer (IBFT), Cash on Delivery (COD) for selected retail products, and corporate credit agreements for registered repeat clients."
    },
    {
      category: "returns",
      question: "What is your return policy?",
      answer: "We accept returns for unused, original-packaged safety gear within 7 days of delivery. Custom-tailored fire fighting vehicles, customized apparel, or specially ordered international systems are non-refundable unless verified to be defective upon delivery."
    },
    {
      category: "returns",
      question: "How do I claim a product warranty?",
      answer: "If a product carries a manufacturer warranty and experiences a defect under normal use, contact our support team at info@sssafetysolutions.com with your invoice. We will inspect the item and offer repair, replacement, or store credit accordingly."
    }
  ];

  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleIndex = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const filteredFaqs = faqData.filter(faq => faq.category === activeCategory);

  return (
    <>
      <SEO
        title="Frequently Asked Questions (FAQ) | SS Safety Solutions"
        description="Find answers to common questions about safety equipment, ordering, shipping, and return policies at SS Safety Solutions Pakistan."
        keywords="safety faq, security gear questions, fire alarm systems help, safety solutions help"
        url={faqUrl}
        breadcrumbs={breadcrumbs}
      />

      {/* Header section - Dark, premium hero with orange accent */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-red-950/40 to-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-red-700/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex p-4 bg-orange-500/10 rounded-full text-orange-500 mb-6 border border-orange-500/20"
          >
            <HelpCircle className="w-12 h-12" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wider mb-6"
          >
            FAQ <span className="text-orange-500">Center</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Got questions? We have answers. Browse our frequently asked questions grouped by categories to find the safety guidance you need.
          </motion.p>
        </div>
      </section>

      {/* FAQ content section - Light background */}
      <section className="py-20 bg-slate-50 min-h-[600px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left sidebar: categories */}
            <div className="lg:col-span-4 space-y-3">
              <h2 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wider pl-2 border-l-4 border-orange-600">Categories</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-4 px-6 py-4 rounded-xl font-semibold transition-all duration-300 text-left border ${
                        isActive
                          ? "bg-orange-600 text-white border-orange-600 shadow-md shadow-orange-600/10"
                          : "bg-white text-gray-700 border-gray-200 hover:text-orange-600 hover:border-orange-500/20"
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm md:text-base">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right sidebar: accordion list */}
            <div className="lg:col-span-8 space-y-5">
              <h2 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wider pl-2 border-l-4 border-orange-600">
                {categories.find(c => c.id === activeCategory)?.label}
              </h2>

              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    {filteredFaqs.map((faq, idx) => {
                      const isOpen = !!openIndexes[`${activeCategory}-${idx}`];
                      return (
                        <div
                          key={idx}
                          className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-500/20"
                        >
                          <button
                            onClick={() => toggleIndex(`${activeCategory}-${idx}`)}
                            className="w-full flex items-center justify-between px-6 py-5 text-left text-gray-800 font-bold text-base md:text-lg focus:outline-none"
                          >
                            <span>{faq.question}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-orange-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          
                          <motion.div
                            initial={false}
                            animate={{ height: isOpen ? "auto" : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-1 text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-150 bg-gray-50/50">
                              {faq.answer}
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Still have questions banner */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-orange-50 via-white to-orange-50 border border-orange-250 p-8 rounded-2xl shadow-sm mt-12 flex flex-col md:flex-row items-center justify-between gap-6"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 bg-orange-500/10 rounded-full text-orange-600 flex-shrink-0">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Still have questions?</h3>
                    <p className="text-gray-500 text-sm md:text-base">Contact our customer safety consultants 24/7.</p>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center flex-shrink-0"
                >
                  Contact Support
                </a>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
