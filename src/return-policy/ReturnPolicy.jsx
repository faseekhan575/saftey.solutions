import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, CheckCircle2, AlertCircle, Truck, CreditCard, Mail, Phone, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

function ReturnPolicy() {
  const siteUrl = "https://sssafetysolutions.pk";
  const returnUrl = `${siteUrl}/return-policy`;

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Return Policy", url: returnUrl }
  ];

  const steps = [
    {
      icon: Mail,
      title: "Step 1: Contact Support",
      description: "Email our returns department at info@sssafetysolutions.com within 7 days of delivery with your order number and photos/details of the items you wish to return."
    },
    {
      icon: Truck,
      title: "Step 2: Pack & Ship",
      description: "Once approved, securely pack the safety equipment in its original brand packaging, including all manuals, accessories, and tags, then ship it back to our Lahore warehouse."
    },
    {
      icon: CreditCard,
      title: "Step 3: Verification & Refund",
      description: "After inspecting the returned items to verify they are unused and in original resale condition, we will process your refund or store credit within 5-7 business days."
    }
  ];

  const conditions = [
    {
      title: "Eligible Items",
      icon: CheckCircle2,
      color: "text-green-600",
      bgColor: "bg-green-500/10",
      items: [
        "Standard safety wear and apparel (unused, in original packaging).",
        "Personal protective equipment (PPE) with seals and tags intact.",
        "Unopened, unused industrial safety tools and road safety gears.",
        "Defective or damaged items reported within 48 hours of delivery."
      ]
    },
    {
      title: "Non-Returnable Items",
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-500/10",
      items: [
        "Customized or printed corporate safety wear and customized logos.",
        "Opened or unsealed respiration masks, medical kits, and chemical containment systems.",
        "Specially fabricated rescue vehicles, customized fire fighting trucks, and built-to-order systems.",
        "Products returned after 7 days from the delivery date."
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Return & Refund Policy | SS Safety Solutions"
        description="Read the Return and Refund Policy of SS Safety Solutions. Learn about eligibility, return timelines, shipping, and refund processes in Pakistan."
        keywords="return policy, refund policy, safety equipment returns, product warranty exchange"
        url={returnUrl}
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
            <RotateCcw className="w-12 h-12" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wider mb-6"
          >
            Return <span className="text-orange-500">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Last Updated: June 19, 2026. We want you to be completely satisfied with your safety solutions purchase. Learn about our easy return and exchange policy.
          </motion.p>
        </div>
      </section>

      {/* Content Section - Light theme */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            
            {/* Overview / Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-8 md:p-10 rounded-2xl shadow-sm max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
                <ShieldCheck className="w-6 h-6 text-orange-600" />
                Our Commitment to Quality
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
                At SS Safety Solutions, we supply premium life-saving and industrial protection gear. We stand behind our quality. If a product is defective, damaged, or doesn't meet your requirements, we facilitate quick returns and exchanges under the guidelines below.
              </p>
            </motion.div>

            {/* Conditions: Eligible vs Non-Returnable */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {conditions.map((cond, idx) => {
                const Icon = cond.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${cond.bgColor}`}>
                        <Icon className={`w-6 h-6 ${cond.color}`} />
                      </div>
                      {cond.title}
                    </h3>
                    <ul className="space-y-4">
                      {cond.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-3 text-gray-600 text-base md:text-lg">
                          <span className={`font-extrabold ${cond.color}`}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            {/* Return Process Steps */}
            <div className="space-y-10 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 text-center uppercase tracking-wider">
                How to Process a Return
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-white border border-gray-200 p-6 rounded-2xl text-center relative hover:border-orange-500/20 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      {/* Step Number Badge */}
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white font-extrabold px-3 py-1 rounded-full text-xs">
                        0{idx + 1}
                      </span>
                      <div className="inline-flex p-4 bg-orange-500/10 rounded-full text-orange-600 mb-4 mt-2">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Contact Support Footer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-50 via-white to-orange-50 border border-orange-250 p-8 rounded-2xl shadow-sm max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Need Help with a Return or Warranty?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our support team is here to guide you through returning your safety products or claiming manufacturer warranties.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="mailto:info@sssafetysolutions.com"
                  className="flex items-center gap-3 bg-white hover:bg-gray-50 px-6 py-4 rounded-xl border border-gray-200 hover:border-orange-500/20 transition-all duration-300 flex-1"
                >
                  <Mail className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">info@sssafetysolutions.com</span>
                </a>
                <a
                  href="tel:+923347616779"
                  className="flex items-center gap-3 bg-white hover:bg-gray-50 px-6 py-4 rounded-xl border border-gray-200 hover:border-orange-500/20 transition-all duration-300 flex-1"
                >
                  <Phone className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">+92 334 7616779</span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

export default ReturnPolicy;
