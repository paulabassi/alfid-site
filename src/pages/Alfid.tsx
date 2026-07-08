import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import BolinhasAnimadas from '../components/BolinhasAnimadas';
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

export default function Alfid() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = content.alfid.documentTitle;
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section with Background Rectangle */}
      <div className="relative h-[40vh] md:h-[60vh] bg-[#F5F6F2] overflow-hidden flex flex-col rounded-b-[40px] justify-center pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 relative pt-10 flex items-center gap-4 md:gap-6"
          >
            <h1 className="text-[2.5rem] md:text-[3.75rem] font-black text-[#1A1A1A] tracking-tighter leading-none shrink-0 relative z-10 md:absolute md:left-[35%] md:top-[50%] md:-translate-x-1/2 md:-translate-y-1/2">
              {t(content.alfid.hero.title1.pt, content.alfid.hero.title1.es)} <br className="block md:hidden" /><span className="whitespace-nowrap">{t(content.alfid.hero.title2.pt, content.alfid.hero.title2.es)}</span>
            </h1>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="hidden md:block absolute right-[10%] top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <BolinhasAnimadas width={800} />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="block md:hidden absolute right-[-10%] top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <BolinhasAnimadas width={450} />
            </motion.div>
          </motion.div>


        </div>
      </div>

      {/* Content Section */}
      <div className="py-10 md:py-20 px-6 md:px-12">
        <div className="max-w-4xl md:max-w-[1300px] mx-auto space-y-16">
          
          <motion.section {...fadeInUp} className="space-y-6">
            <h2 className="text-[clamp(2rem,2.5vw,3rem)] font-bold text-[#1A1A1A] tracking-[-0.03em] leading-[1.1]">{t(content.alfid.sections.philosophy.title.pt, content.alfid.sections.philosophy.title.es)}</h2>
            <div className="text-[clamp(1rem,1.1vw,1.125rem)] text-gray-700 leading-[1.65] tracking-normal font-normal space-y-6 md:pt-[13.5px] md:mt-[9px] md:mb-[50px]">
              <p>
                {t(content.alfid.sections.philosophy.description.pt, content.alfid.sections.philosophy.description.es)}
              </p>
            </div>
          </motion.section>

          <motion.section {...fadeInUp} className="space-y-6">
            <h2 className="text-[clamp(2rem,2.5vw,3rem)] font-bold text-[#1A1A1A] tracking-[-0.03em] leading-[1.1]">{t(content.alfid.sections.foundation.title.pt, content.alfid.sections.foundation.title.es)}</h2>
            <div className="text-[clamp(1rem,1.1vw,1.125rem)] text-gray-700 leading-[1.65] tracking-normal font-normal space-y-6">
              <p>
                {t(content.alfid.sections.foundation.p1.pt, content.alfid.sections.foundation.p1.es)}
              </p>
              <p>
                {t(content.alfid.sections.foundation.p2.pt, content.alfid.sections.foundation.p2.es)}
              </p>
              <p>
                {t(content.alfid.sections.foundation.p3.pt, content.alfid.sections.foundation.p3.es)}
              </p>
            </div>
          </motion.section>

          <motion.section {...fadeInUp} className="bg-gray-50 p-10 md:p-16 rounded-[40px] space-y-8">
            <h2 className="text-[clamp(2rem,2.5vw,3rem)] font-bold text-[#1A1A1A] tracking-[-0.03em] leading-[1.1]">{t(content.alfid.sections.congresses.title.pt, content.alfid.sections.congresses.title.es)}</h2>
            <div className="space-y-8 text-[clamp(1rem,1.1vw,1.125rem)] text-gray-700 leading-[1.65] tracking-normal font-normal">
              <div className="space-y-2">
                <p className="font-bold text-[#1A1A1A] text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] tracking-normal">{t(content.alfid.sections.congresses.ed1.title.pt, content.alfid.sections.congresses.ed1.title.es)}</p>
                <p>
                  {t(content.alfid.sections.congresses.ed1.description.pt, content.alfid.sections.congresses.ed1.description.es)}
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-[#1A1A1A] text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] tracking-normal">{t(content.alfid.sections.congresses.ed2.title.pt, content.alfid.sections.congresses.ed2.title.es)}</p>
                <p>
                  {t(content.alfid.sections.congresses.ed2.description.pt, content.alfid.sections.congresses.ed2.description.es)}
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-[#1A1A1A] text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] tracking-normal">{t(content.alfid.sections.congresses.ed3.title.pt, content.alfid.sections.congresses.ed3.title.es)}</p>
                <p>
                  {t(content.alfid.sections.congresses.ed3.description.pt, content.alfid.sections.congresses.ed3.description.es)}
                </p>
                <p>
                  {t(content.alfid.sections.congresses.ed3.p2.pt, content.alfid.sections.congresses.ed3.p2.es)}
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-[#1A1A1A] text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] tracking-normal">{t(content.alfid.sections.congresses.ed4.title.pt, content.alfid.sections.congresses.ed4.title.es)}</p>
                <p>
                  {t(content.alfid.sections.congresses.ed4.description.pt, content.alfid.sections.congresses.ed4.description.es)}
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-[#1A1A1A] text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] tracking-normal">{t(content.alfid.sections.congresses.ed5.title.pt, content.alfid.sections.congresses.ed5.title.es)}</p>
                <p>
                  {t(content.alfid.sections.congresses.ed5.description.pt, content.alfid.sections.congresses.ed5.description.es)}
                </p>
                <p>
                  {t(content.alfid.sections.congresses.ed5.p2.pt, content.alfid.sections.congresses.ed5.p2.es)}
                </p>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </motion.div>
  );
}
