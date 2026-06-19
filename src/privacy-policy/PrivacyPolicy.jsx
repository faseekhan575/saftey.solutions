import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Globe, Mail, Phone, MapPin, FileText } from 'lucide-react';
import SEO from '../components/SEO';

function PrivacyPolicy() {
  const siteUrl = "https://sssafetysolutions.pk";
  const policyUrl = `${siteUrl}/privacy-policy`;

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Privacy Policy", url: policyUrl }
  ];

  const sections = [
    {
      icon: Shield,
      title: "1. Introduction",
      content: "Welcome to SS Safety Solutions. We respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or purchase our safety equipment and services in Pakistan. By using our website and services, you consent to the data practices described in this policy."
    },
    {
      icon: Eye,
      title: "2. Information We Collect",
      content: "We collect information that identifies, relates to, describes, or is reasonably capable of being associated with you. This includes Personal Identifiers (such as name, email address, phone number, shipping and billing address, and company name) and Technical Information (IP address, browser type, device information, and pages viewed on our site via cookies and analytics tools)."
    },
    {
      icon: Lock,
      title: "3. How We Use Your Information",
      content: "We use the information we collect to process and fulfill your safety equipment orders, communicate with you regarding your inquiries, manage your account, improve website performance, comply with legal obligations, and send promotional materials if you have consented to receive them. We do not sell or rent your personal information to third parties."
    },
    {
      icon: Globe,
      title: "4. Information Sharing & Disclosure",
      content: "We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or shipping products to you (e.g., courier services in Pakistan). We ensure these partners adhere to strict confidentiality agreements. We may also disclose your information if required by law or to protect our rights, safety, and property."
    },
    {
      icon: FileText,
      title: "5. Cookies & Tracking Technologies",
      content: "Our website uses cookies to enhance user experience, remember preferences, and analyze web traffic. You can choose to accept or decline cookies through your browser settings. Declining cookies may prevent you from taking full advantage of the features on our website."
    },
    {
      icon: Shield,
      title: "6. Data Security",
      content: "We implement industry-standard technical and organizational security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no transmission of data over the internet or mobile networks can be guaranteed to be 100% secure."
    },
    {
      icon: FileText,
      title: "7. Your Legal Rights",
      content: "Depending on your location, you may have rights regarding your personal information, including the right to request access to the data we hold about you, request corrections to inaccurate information, request deletion of your personal data under certain conditions, or withdraw your consent at any time."
    }
  ];

  return (
    <>
      <SEO
        title="Privacy Policy | SS Safety Solutions"
        description="Read the Privacy Policy of SS Safety Solutions. Learn how we collect, use, and protect your personal information when purchasing safety equipment in Pakistan."
        keywords="privacy policy, data protection, personal information security, safety equipment store privacy"
        url={policyUrl}
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
            <Shield className="w-12 h-12" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wider mb-6"
          >
            Privacy <span className="text-orange-500">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Last Updated: June 19, 2026. Your privacy and trust are our top priorities. Discover how we protect and manage your personal data.
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

            {/* Contact info section - Clean light styled card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-orange-50 via-white to-orange-50 border border-orange-200 p-8 rounded-2xl shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-850 mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-orange-600" />
                Contact Us Regarding Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have any questions or concerns about our Privacy Policy or your personal information, please feel free to reach out to our team:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200">
                  <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm md:text-base truncate font-medium">info@sssafetysolutions.com</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200">
                  <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm md:text-base font-medium">+92 334 7616779</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm md:text-base font-medium">47 Brandreth Road, near UBL Bank, Lahore, Pakistan</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
