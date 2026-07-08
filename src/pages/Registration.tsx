import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../conteudo';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true, margin: "-50px" }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Registration() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = content.registration.documentTitle;
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <section className="relative w-full h-[65vh] md:h-[60vh] bg-[#F5F6F2] overflow-hidden flex items-center justify-center rounded-b-[40px]">
        {/* Background Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-no-repeat z-0 hidden md:block"
          style={{ 
            backgroundImage: "url('/images/decorative/subscribe-img.webp')",
            backgroundSize: '100%',
            backgroundPosition: '75% center',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 65% 50%, black 10%, transparent 60%)',
            maskImage: 'radial-gradient(ellipse 80% 80% at 65% 50%, black 10%, transparent 60%)'
          }}
        />
        {/* Content Container */}
        <div className="relative z-10 text-center px-6 max-w-[1300px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-4 md:gap-8 mb-6"
          >
            <div className="flex -space-x-2 md:-space-x-4 isolate [--dist:34px] md:[--dist:52px]">
              <motion.div 
                animate={{ 
                  x: [0, "var(--dist)", "var(--dist)", 0, 0],
                }}
                transition={{ 
                  duration: 21, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  times: [0, 0.024, 0.5, 0.524, 1]
                }}
                className="w-10 h-10 md:w-16 md:h-16 bg-[#f5a1c3] rounded-full mix-blend-multiply" 
              />
              <motion.div 
                animate={{ 
                  x: [0, "calc(-1 * var(--dist))", "calc(-1 * var(--dist))", 0, 0],
                }}
                transition={{ 
                  duration: 21, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  times: [0, 0.024, 0.5, 0.524, 1]
                }}
                className="w-10 h-10 md:w-16 md:h-16 bg-[#9ab2d4] rounded-full mix-blend-multiply" 
              />
            </div>
            <h1 className="text-[2.5rem] md:text-[3.75rem] font-black text-[#1A1A1A] tracking-tighter leading-[0.9]">
              {t(content.registration.hero.title.pt, content.registration.hero.title.es)}
            </h1>

          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block text-[clamp(1rem,1.1vw,1.125rem)] text-gray-700 font-normal leading-[1.65] tracking-normal max-w-xl mx-auto"
          >
            {t(content.registration.hero.description.pt, content.registration.hero.description.es)}
          </motion.p>
        </div>
      </section>

      <div className="py-10 md:py-20 px-6 md:px-12">
        <div className="max-w-5xl md:max-w-[1300px] mx-auto space-y-16">
          
          {/* Taxas */}
          {content.settings.showRegistrationFeesSection && (
            <section>
              <motion.h2 
                {...fadeInUp}
                className="text-[clamp(2rem,2.5vw,3rem)] font-bold text-[#1A1A1A] mb-10 tracking-[-0.03em] leading-[1.1]"
              >
                {t(content.registration.fees.title.pt, content.registration.fees.title.es)}
              </motion.h2>
              
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Lote 1 */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-white border-2 border-[#9ab2d4] rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  <div className="absolute top-0 right-0 bg-[#9ab2d4] text-white text-sm font-bold uppercase tracking-widest py-2 px-6 rounded-bl-2xl">
                    {t(content.registration.fees.batch1.label.pt, content.registration.fees.batch1.label.es)}
                  </div>
                  
                  <div className="mt-8 space-y-8">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-2">{t(content.registration.fees.batch1.studentLabel.pt, content.registration.fees.batch1.studentLabel.es)}</p>
                      <p className="text-4xl font-black text-[#1A1A1A]">R$ 130,00</p>
                    </div>
                    
                    <div className="w-full h-px bg-gray-100"></div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-2">{t(content.registration.fees.batch1.professionalLabel.pt, content.registration.fees.batch1.professionalLabel.es)}</p>
                      <p className="text-4xl font-black text-[#1A1A1A]">R$ 180,00</p>
                    </div>
                  </div>
                </motion.div>

                {/* Lote 2 */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-white border-2 border-gray-200 rounded-3xl p-8 relative overflow-hidden group hover:border-[#f7a36a] hover:shadow-xl transition-all"
                >
                  <div className="absolute top-0 right-0 bg-gray-200 group-hover:bg-[#f7a36a] transition-colors text-gray-700 group-hover:text-white text-sm font-bold uppercase tracking-widest py-2 px-6 rounded-bl-2xl">
                    {t(content.registration.fees.batch2.label.pt, content.registration.fees.batch2.label.es)}
                  </div>
                  
                  <div className="mt-8 space-y-8">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-2">{t(content.registration.fees.batch2.studentLabel.pt, content.registration.fees.batch2.studentLabel.es)}</p>
                      <p className="text-4xl font-black text-[#1A1A1A]">R$ 150,00</p>
                    </div>
                    
                    <div className="w-full h-px bg-gray-100"></div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-2">{t(content.registration.fees.batch2.professionalLabel.pt, content.registration.fees.batch2.professionalLabel.es)}</p>
                      <p className="text-4xl font-black text-[#1A1A1A]">R$ 200,00</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </section>
          )}

          {/* Call to Action */}
          {content.settings.registrationOpen && content.settings.showRegistrationCtaSection && !content.registration.cta_section.hide && (
            <motion.section 
              {...fadeInUp}
              className="flex flex-col items-center text-center bg-[#F5F6F2] text-[#1A1A1A] p-12 rounded-[40px] border border-gray-200 relative overflow-hidden mt-12"
            >
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-64 h-64 bg-white opacity-100 rounded-full -translate-y-1/2 translate-x-1/3" 
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: ["-25%", "-20%", "-25%"]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-40 h-40 bg-[#f7a36a] opacity-100 rounded-full translate-y-1/3 -translate-x-1/4" 
              />
              
              <h2 className="text-[clamp(2rem,2.5vw,3rem)] font-bold mb-4 relative z-10 tracking-[-0.03em] leading-[1.1]">
                {t(content.registration.cta_section.title.pt, content.registration.cta_section.title.es)}
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl relative z-10 text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal whitespace-pre-line">
                {t(content.registration.cta_section.description.pt, content.registration.cta_section.description.es)}
              </p>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-4">
                {!content.registration.cta_section.hideButton && (
                  <div className="flex flex-col items-center gap-3">
                    {content.registration.cta_section.link === "#" ? (
                      <button 
                        disabled
                        className="bg-gray-600 text-gray-300 font-bold text-sm py-4 px-12 rounded-full cursor-not-allowed shadow-inner uppercase w-[256px] md:w-auto"
                      >
                        {t(content.registration.cta_section.button.pt, content.registration.cta_section.button.es)}
                      </button>
                    ) : (
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={content.registration.cta_section.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#f7a36a] text-white font-bold text-sm py-4 px-12 rounded-full hover:bg-[#e69259] transition-all shadow-lg uppercase w-[256px] md:w-auto"
                      >
                        {t(content.registration.cta_section.button.pt, content.registration.cta_section.button.es)}
                      </motion.a>
                    )}
                    {content.registration.cta_section.link === "#" && (
                      <span className="text-sm font-medium text-[#fad062] tracking-widest uppercase">{t(content.registration.cta_section.soon.pt, content.registration.cta_section.soon.es)}</span>
                    )}
                  </div>
                )}

                {!content.registration.cta_section.hideTicketButton && (
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={content.registration.cta_section.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1A1A1A] text-white font-bold text-[12px] md:text-sm py-4 px-12 rounded-full hover:bg-black transition-all shadow-lg uppercase w-[256px] md:w-auto"
                  >
                    {t(content.registration.cta_section.ticketButton.pt, content.registration.cta_section.ticketButton.es)}
                  </motion.a>
                )}
              </div>
            </motion.section>
          )}

          {/* International Registration Info */}
          {content.settings.registrationOpen && content.settings.showRegistrationInternationalSection && !content.home.registration_cta.international_hide && (
            <motion.section 
              {...fadeInUp}
              className="flex flex-col items-center text-center bg-gray-50 text-[#1A1A1A] p-10 md:p-12 rounded-[40px] border border-[#989898]/30 relative overflow-hidden group"
            >
              {/* Decorative circles */}
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute top-0 left-0 w-32 h-32 bg-[#f4abb1] opacity-30 rounded-full -translate-y-1/2 -translate-x-1/2" 
              />
              <motion.div 
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, -10, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-0 right-0 w-40 h-40 bg-[#9ab2d4] opacity-30 rounded-full translate-y-1/3 translate-x-1/4" 
              />

              <h2 className="text-2xl md:text-3xl font-black mb-4 relative z-10 tracking-tighter">
                {t(content.home.registration_cta.international_title.pt, content.home.registration_cta.international_title.es)}
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl relative z-10 text-lg font-normal leading-relaxed">
                {t(content.home.registration_cta.international_description.pt, content.home.registration_cta.international_description.es)}
              </p>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={content.home.registration_cta.international_link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 bg-[#fad062] text-[#1A1A1A] font-bold text-sm py-4 px-12 rounded-full hover:shadow-lg transition-all uppercase shadow-md"
              >
                {t(content.home.registration_cta.international_button.pt, content.home.registration_cta.international_button.es)}
              </motion.a>
            </motion.section>
          )}
        </div>
      </div>
    </motion.div>
  );
}
