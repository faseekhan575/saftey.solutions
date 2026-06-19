import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Landmark, Clock, FileText, CheckCircle2, Mail, Phone, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

function RefundPolicy() {
  const siteUrl = "https://sssafetysolutions.pk";
  const refundUrl = `${siteUrl}/refund-policy`;

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Refund Policy", url: refundUrl }
  ];

  const sections = [
    {
      icon: CreditCard,
      title: "1. Refund Eligibility",
      content: "Refunds are processed for safety equipment that is returned in accordance with our Return Policy (unused, unopened, in original resale condition, and reported within 7 days of delivery). Once our quality assurance team inspects and approves the returned items, we will initiate the refund process."
    },
    {
      icon: Landmark,
      title: "2. Refund Methods",
      content: "Approved refunds will be credited back to your original payment method. For payments made via Bank Transfer (IBFT), the refund will be credited directly to your bank account. For cash on delivery (COD) orders, our accounts team will coordinate to send the refund via bank transfer or easy mobile payment systems (such as Easypaisa or JazzCash) according to your preference."
    },
    {
      icon: Clock,
      title: "3. Processing Timelines",
      content: "Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. Approved refunds are processed immediately. The funds typically take between 5 to 7 business days to reflect in your account, depending on your banking institution's processing cycles."
    },
    {
      icon: FileText,
      title: "4. Late or Missing Refunds",
      content: "If you haven't received your refund yet, first check your bank account statement again. Then contact your bank or credit card company, as it may take some time before your refund is officially posted. If you've done all of this and still have not received your refund, please contact us at info@sssafetysolutions.com."
    },
    {
      icon: CheckCircle2,
      title: "5. Shipping Costs on Refunds",
      content: "Original shipping charges and handling fees are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund amount, except in cases where the return is due to a defect or an incorrect item shipped by SS Safety Solutions."
    }
  ];

  return (
    <>
      <SEO
        title="Refund Policy | SS Safety Solutions"
        description="Read the Refund Policy of SS Safety Solutions. Understand our processing timelines, refund methods, and shipping cost deductions in Pakistan."
        keywords="refund policy, money back guarantee, bank transfer refund, safety equipment return refund"
        url={refundUrl}
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
            <CreditCard className="w-12 h-12" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wider mb-6"
          >
            Refund <span className="text-orange-500">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Last Updated: June 19, 2026. Review our transparent refund procedures, processing timelines, and banking credits system.
          </motion.p>
        </div>
      </section>

      {/* Content Section - Light theme */}
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

            {/* Help and Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-50 via-white to-orange-50 border border-orange-250 p-8 rounded-2xl shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Have questions about a refund?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our finance and customer service department is available to check your refund status and coordinate secure bank credits.
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

export default RefundPolicy;
