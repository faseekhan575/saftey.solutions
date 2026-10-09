import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Service() {
  const siteUrl = "https://sssafetysolutions.pk";
  const servicesUrl = `${siteUrl}/services`;

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Services", url: servicesUrl }
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Safety Equipment Supply",
    "provider": {
      "@type": "Organization",
      "name": "SS Safety Solutions"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Pakistan"
    },
    "description": "Premium safety equipment and services including security equipment, rescue equipment, fire fighting systems, PPE, and more."
  };

  const services = [
    {
      title: "Security Equipment",
      desc: "Tactical gear, body armor, helmets & protective suits for high-risk operations.",
      img: "/images/categories/security-equipment.png",
    },
    {
      title: "Rescue Equipment",
      desc: "Ropes, harnesses, stretchers & specialized tools for emergency response.",
      img: "/images/categories/rescue-equipment.jpg",
    },
    {
      title: "Fire Fighting Equipment",
      desc: "Extinguishers, hoses, nozzles & essential firefighting tools.",
      img: "/images/categories/fire-fighting-equipment.jpg",
    },
    {
      title: "Safety Shoes",
      desc: "Steel-toe, anti-slip boots meeting international safety standards.",
      img: "/images/categories/safety-shoes.jpg",
    },
    {
      title: "Road Safety",
      desc: "Cones, reflective signs, barriers & safety signage.",
      img: "/images/categories/road-safety.jpg",
    },
    {
      title: "Fire Fighting Vehicle",
      desc: "Specialized fire trucks for rapid emergency deployment.",
      img: "/images/categories/fire-fighting-vehicle.jpg",
    },
    {
      title: "Fire Alarm System",
      desc: "Smoke detectors, sensors & early warning panels.",
      img: "/images/categories/fire-alarm-system.jpg",
    },
    {
      title: "Fall Arrest System",
      desc: "Harnesses, lanyards & anchors for height safety.",
      img: "/images/categories/fall-arrest-system.jpg",
    },
    {
      title: "Personal Protective Wear",
      desc: "High-visibility jackets & weather-resistant clothing.",
      img: "/images/categories/personal-protective-wear.jpg",
    },
    {
      title: "Medical Equipment For Ambulance",
      desc: "Defibrillators, oxygen systems & emergency kits.",
      img: "/images/categories/medical-equipment-ambulance.jpg",
    },
    {
      title: "Personal Protective Equipments",
      desc: "Helmets, gloves, glasses & full PPE kits.",
      img: "/images/categories/personal-protective-equipment.jpg",
    },
    {
      title: "Laboratory safety System",
      desc: "Goggles, lab coats, gloves & safety equipment for laboratory work.",
      img: "/images/categories/laboratory-safety-system.jpg",
    },
    {
      title: "Safety Containment System",
      desc: "Secondary containment solutions for hazardous materials storage.",
      img: "/images/categories/safety-containment-system.jpg",
    },
    {
      title: "Spill Prevention Containment and Control",
      desc: "Spill kits, absorbents & containment systems for emergency response.",
      img: "/images/categories/spill-prevention-containment.jpg",
    },
    {
      title: "Industrial Tools",
      desc: "Heavy-duty machinery & equipment for industrial applications.",
      img: "/images/categories/industrial-tools.jpg",
    },
    {
      title: "Hand tools",
      desc: "Wrenches, hammers, pliers & essential manual tools.",
      img: "/images/categories/hand-tools.jpg",
    },
    {
      title: "Power Tools",
      desc: "Drills, saws, grinders & electric power tools.",
      img: "/images/categories/power-tools.jpg",
    },
  ];

  const getHashId = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
  };

  return (
    <>
      <SEO
        title="Our Services | Safety Equipment Solutions Pakistan - SS Safety Solutions"
        description="Explore our comprehensive range of safety equipment services including security equipment, rescue equipment, fire fighting systems, PPE, road safety, and more."
        keywords="safety equipment services, fire fighting equipment Pakistan, rescue equipment, security gear, PPE supplier, safety solutions Pakistan"
        url={servicesUrl}
        image={`${siteUrl}/services-og.jpg`}
        type="website"
        breadcrumbs={breadcrumbs}
        schema={[servicesSchema]}
      />
      {}
      <section className="relative py-28 md:py-40 overflow-hidden bg-gradient-to-br from-gray-900 via-red-900/40 to-gray-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <img
          src="/images/hero/services-hero.jpg"
          alt="Brave Firefighters Battling Intense Flames"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-wider mb-8 drop-shadow-2xl"
          >
            Our <span className="text-orange-500">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Premium, certified safety solutions designed to protect lives in every critical situation.
          </motion.p>
        </div>
      </section>

      {}
      <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 via-red-50/30 to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-center text-red-800 uppercase tracking-wider mb-20"
          >
            Explore Our Safety Categories
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {services.map((service, index) => {
              const hashId = getHashId(service.title);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl md:text-3xl font-extrabold drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-8 bg-white">
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <Link to={`/products?id=${service.title}`}>
                      <button className="inline-flex items-center gap-3 bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-800 transition-all duration-400 shadow-lg hover:shadow-xl transform group-hover:translate-x-2">
                        Explore <ArrowRight className="w-6 h-6" />
                      </button>
                    </Link>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-1 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              );
            })}
          </div>

          {}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-32 text-center bg-white rounded-3xl shadow-2xl py-16 px-10 md:px-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-6">
              Ready to Secure Your Safety?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto">
              Let us know your requirements — our experts are here to provide tailored solutions.
            </p>
            <a href='https://wa.me/923347616779?text=Hi%20I%20am%20Mr.%20Sufyan%20from%20S.S%20Safety%20Solutions.%20How%20can%20I%20help%20you?'>
              <button className="px-12 py-6 bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-2xl rounded-full shadow-2xl transition transform hover:scale-105">
                Contact Us Today
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Service;
