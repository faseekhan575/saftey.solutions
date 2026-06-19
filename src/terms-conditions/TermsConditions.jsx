import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, UserCheck, ShoppingCart, ShieldAlert, Award, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';

function TermsConditions() {
  const siteUrl = "https://sssafetysolutions.pk";
  const termsUrl = `${siteUrl}/terms-conditions`;

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Terms & Conditions", url: termsUrl }
  ];

  const sections = [
    {
      icon: Scale,
      title: "1. Acceptance of Terms",
      content: "By accessing or using the website of SS Safety Solutions, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms govern your use of our site, purchases, and relationships with SS Safety Solutions."
    },
    {
      icon: UserCheck,
      title: "2. User Accounts & Security",
      content: "When registering on our website, you agree to provide accurate, current, and complete information. You are solely responsible for maintaining the confidentiality of your account credentials and passwords, and you accept responsibility for all activities that occur under your account."
    },
    {
      icon: ShoppingCart,
      title: "3. Product Availability & Pricing",
      content: "We offer certified security, rescue, and fire-fighting equipment. All products and prices listed are subject to availability. We reserve the right to modify prices, descriptions, and availability specifications without prior notice. While we strive for accuracy, errors in pricing or specification may occur; in such cases, we reserve the right to cancel any orders placed for affected items."
    },
    {
      icon: ShieldAlert,
      title: "4. Intellectual Property Rights",
      content: "All content on this website, including logos, graphics, text, product names, images, button icons, and digital downloads, is the property of SS Safety Solutions or its content providers and is protected by Pakistani and international copyright, trademark, and intellectual property laws."
    },
    {
      icon: Award,
      title: "5. Warranty & Limitation of Liability",
      content: "SS Safety Solutions warrants that our safety equipment conforms to stated technical specification certificates. To the maximum extent permitted by applicable law, we exclude liability for direct, indirect, incidental, or consequential damages arising from the use or inability to use our products, except where such exclusion is prohibited by law."
    },
    {
      icon: FileText,
      title: "6. Prohibited Activities",
      content: "Users are strictly prohibited from utilizing this website for any unlawful purpose, executing denial-of-service attacks, transmitting malware, uploading unauthorized code, attempting to gain unauthorized access to our servers, or copying site styling and content for unauthorized commercial reproduction."
    },
    {
      icon: HelpCircle,
      title: "7. Governing Law",
      content: "These Terms and Conditions are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any disputes arising out of or related to these terms, website access, or purchases shall be subject to the exclusive jurisdiction of the competent courts in Pakistan."
    }
  ];

  return (
    <>
      <SEO
        title="Terms & Conditions | SS Safety Solutions"
        description="Read the Terms and Conditions of SS Safety Solutions. Understand your rights and responsibilities when ordering safety equipment and fire alarm systems."
        keywords="terms and conditions, user agreement, legal terms, safety solutions terms"
        url={termsUrl}
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
            <Scale className="w-12 h-12" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wider mb-6"
          >
            Terms & <span className="text-orange-500">Conditions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Last Updated: June 19, 2026. Please read these terms carefully before accessing or placing orders on our safety solutions portal.
          </motion.p>
        </div>
      </section>

      {/* Content Section - Light theme with white cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-orange-500/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-500/10 rounded-xl text-orange-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">{section.title}</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {section.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default TermsConditions;
