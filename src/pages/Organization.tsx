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

export default function Organization() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = content.organization.documentTitle;
  }, []);

  const committees = [
    {
      title: t(content.organization.committees.promotion.pt, content.organization.committees.promotion.es),
      members: [
        { name: t(content.organization.members.cesc.pt, content.organization.members.cesc.es), url: "https://www.eefe.usp.br/grupo/cesc" },
        { name: t(content.organization.members.pedagogy.pt, content.organization.members.pedagogy.es), url: "https://www.eefe.usp.br/pedagogia" },
        { name: "Grupo PULA", logo: "/images/logos/pula-eefe.svg", url: "https://www.pulaeefeusp.com.br/" },
        { name: "ALFID", logo: "/images/logos/alfid-newest.svg", url: "https://asociacionlatinafild.wixsite.com/alfid-website" },
        { name: t(content.organization.members.eefe.pt, content.organization.members.eefe.es), logo: "/images/logos/eefe-logo.svg", url: "https://www.eefe.usp.br/" },
        { name: "USP", logo: "/images/logos/usp-logo.svg" }
      ]
    },
    {
      title: t(content.organization.committees.support.pt, content.organization.committees.support.es),
      members: [
        { name: t(content.organization.members.aefd.pt, content.organization.members.aefd.es), logo: "/images/logos/AEFD-logo.svg", url: "https://www.instagram.com/aefd_filodeporte/" },
        { name: t(content.organization.members.afdlp.pt, content.organization.members.afdlp.es), logo: "/images/logos/afdlp-logo.svg", url: "https://www.afdlp.org/" },
        { name: "Société Francophone de Philosophie du Sport - SFPS", logo: "/images/logos/sfps-logo.svg", url: "https://sfps.fr/" },
        { name: "Gymnusp/EEFE/USP", logo: "/images/logos/gymnusp-logo.svg" },
        { name: t(content.organization.members.prpi.pt, content.organization.members.prpi.es), logo: "/images/logos/logo-prpi1.webp", url: "https://prpi.usp.br/" }
      ]
    },
    {
      title: t(content.organization.committees.scientific.pt, content.organization.committees.scientific.es),
      members: content.organization.members.scientific_list.map(m => ({ name: t(m.pt, m.es) }))
    }
  ];

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
        <motion.div 
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center z-0 translate-y-[20px] md:translate-y-0 hidden md:block"
          style={{ 
            backgroundImage: "url('/images/decorative/capoeira.webp')",
            WebkitMaskImage: 'radial-gradient(ellipse 60% 65% at 60% 55%, black 10%, transparent 65%)',
            maskImage: 'radial-gradient(ellipse 60% 65% at 60% 55%, black 10%, transparent 65%)'
          }}
        />
        <div className="max-w-[1300px] mx-auto w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 relative pt-10"
          >
            <div className="flex flex-col gap-0 text-[2.5rem] md:text-[3.75rem] font-black text-[#1A1A1A] tracking-[-0.06em] leading-[1] lowercase relative z-10">
              
              {/* Line 1: organização */}
              <div className="flex flex-wrap items-center gap-3 md:gap-5">
                <span>{t(content.organization.hero.title1.pt, content.organization.hero.title1.es)}</span>
              </div>

              {/* Line 2: do evento */}
              <div className="flex items-center relative min-h-[40px] md:min-h-[60px]">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-wrap items-center gap-3 md:gap-4 relative z-10"
                >
                  <div className="flex items-center -space-x-2 md:-space-x-3 isolate">
                    {/* Azul */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                      className="w-[2.5rem] h-[2.5rem] md:w-[50px] md:h-[50px] bg-[#9ab2d4] rounded-full flex-shrink-0 relative z-30 shadow-sm" 
                    />
                    {/* Verde */}
                    <motion.div 
                      initial={{ x: -20, opacity: 0, scale: 0.5 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
                      className="w-[2.5rem] h-[2.5rem] md:w-[50px] md:h-[50px] bg-[#56ad84] rounded-full flex-shrink-0 relative z-20 shadow-sm" 
                    />
                    {/* Laranja */}
                    <motion.div 
                      initial={{ x: -20, opacity: 0, scale: 0.5 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
                      className="w-[2.5rem] h-[2.5rem] md:w-[50px] md:h-[50px] bg-[#f7a36a] rounded-full flex-shrink-0 relative z-10 shadow-sm" 
                    />
                  </div>
                  <span>{t(content.organization.hero.title2.pt, content.organization.hero.title2.es)}</span>
                </motion.div>
              </div>
            </div>
          </motion.div>


        </div>
      </div>

      {/* Committees Section */}
      <div className="py-10 md:py-20 px-6 md:px-12">
        <div className="max-w-5xl md:max-w-[1300px] mx-auto">
          <div className="space-y-20">
            {committees.map((committee, index) => (
              <motion.div 
                key={index} 
                {...fadeInUp}
                className="space-y-10"
              >
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-[#9ab2d4] rounded-full"></div>
                  <h2 className="text-[clamp(2rem,2.5vw,3rem)] font-bold text-[#1A1A1A] tracking-[-0.03em] leading-[1.1] lowercase">
                    {committee.title}
                  </h2>
                </div>
                
                {committee.title === t(content.organization.committees.scientific.pt, content.organization.committees.scientific.es) ? (
                  <motion.ul 
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4"
                  >
                    {committee.members.map((member, mIndex) => (
                      <motion.li 
                        key={mIndex} 
                        variants={itemVariants}
                        className="text-gray-700 font-normal flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#fad062] shrink-0"></div>
                        <span className="text-[14px] md:text-[clamp(0.875rem,1vw,1rem)] leading-[1.65] tracking-normal">{member.name}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                ) : (
                  <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-100"
                  >
                    {committee.members.map((member, mIndex) => (
                      <motion.div 
                        key={mIndex} 
                        variants={itemVariants}
                        className={`flex flex-col items-center justify-center p-8 border-r border-b border-gray-100 ${member.name === 'Gymnusp/EEFE/USP' || member.name === t(content.organization.members.prpi.pt, content.organization.members.prpi.es) ? 'h-[160px] md:min-h-[160px]' : 'min-h-[160px]'} group transition-all hover:bg-gray-50/50`}
                      >
                        {member.logo ? (
                          <div className="flex flex-col items-center justify-center text-center">
                            {member.url ? (
                              <a href={member.url} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-105">
                                <img 
                                  src={member.logo} 
                                  alt={member.name} 
                                  className={`${member.name === 'Gymnusp/EEFE/USP' || member.name === t(content.organization.members.prpi.pt, content.organization.members.prpi.es) ? 'h-[130px] w-[130px]' : 'h-[100px] w-[300px]'} md:h-24 md:w-auto object-contain`}
                                  referrerPolicy="no-referrer"
                                />
                              </a>
                            ) : (
                              <img 
                                src={member.logo} 
                                alt={member.name} 
                                className={`${member.name === 'Gymnusp/EEFE/USP' || member.name === t(content.organization.members.prpi.pt, content.organization.members.prpi.es) ? 'h-[130px] w-[130px]' : 'h-[100px] w-[300px]'} md:h-24 md:w-auto object-contain transition-transform group-hover:scale-105`}
                                referrerPolicy="no-referrer"
                              />
                            )}
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 text-center mx-auto">
                            {!(member.name.includes("CESC") || 
                               member.name === t(content.organization.members.pedagogy.pt, content.organization.members.pedagogy.es)) && (
                              <div className="w-1.5 h-1.5 rounded-full bg-[#fad062] shrink-0"></div>
                            )}
                            {member.url ? (
                              <a 
                                href={member.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[16px] md:text-[18px] font-normal text-[#1A1A1A] leading-[1.65] tracking-normal hover:text-[#9ab2d4] transition-colors underline underline-offset-4 decoration-[#fad062]/30"
                              >
                                {member.name}
                              </a>
                            ) : (
                              <span className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal text-[#1A1A1A] leading-[1.65] tracking-normal">{member.name}</span>
                            )}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </motion.div>
  );
}
