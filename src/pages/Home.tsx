import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, Search, GraduationCap, BookOpen, Lightbulb, Globe, Languages, Users, Calendar, Info } from 'lucide-react';
import InterwindSpinner from '../components/InterwindSpinner';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../conteudo';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const heroTitleVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const heroTitleRightVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

export default function Home() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = content.home.documentTitle;
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full font-sans"
    >
      {/* New Hero (SmartHeart Marker Style) */}
      <section className="relative w-full h-[80vh] md:h-[90vh] bg-[#F5F6F2] overflow-hidden flex items-center justify-center rounded-b-[40px]">
        {/* Background Image Layer with Dissolving Edges */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 0.85, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center z-0 translate-y-[20px] md:translate-y-0"
          style={{ 
            backgroundImage: "url('/images/decorative/main-img.webp')",
            WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 50%, black 10%, transparent 60%)',
            maskImage: 'radial-gradient(ellipse 80% 65% at 50% 50%, black 10%, transparent 60%)'
          }}
        />

        {/* Hero Composition Container */}
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none z-20">
          
          {/* Left Part of Title - In Front of Image */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={heroTitleVariants}
            className="absolute left-[7%] md:left-[7%] top-[20%] md:top-[30%] -translate-y-1/2 mt-[30px] md:mt-[20px] md:ml-[-30px] z-20 pointer-events-auto w-[300px] md:w-auto"
          >
            <h1 className="text-[33px] md:text-[clamp(2.5rem,4vw,5rem)] font-black text-[#1A1A1A] tracking-[-0.04em] leading-[1] text-left md:text-left w-[300px] md:w-auto">
              <span className="relative">{t(content.home.hero.title1.pt, content.home.hero.title1.es)}</span> <br /> 
              <span className="relative">{t(content.home.hero.title2.pt, content.home.hero.title2.es)}</span>
            </h1>
          </motion.div>

          {/* Right Part of Title - Behind Image */}
          <div className="absolute right-[7%] md:right-[7%] top-[80%] md:top-[65%] -translate-y-1/2 mt-[10px] md:mt-[35px] z-5 pointer-events-auto hidden md:block">
            <h1 className="text-[33px] md:text-[clamp(2.5rem,4vw,5rem)] font-black text-[#1A1A1A] tracking-[-0.04em] leading-[1] text-right">
              <span className="relative">{t(content.home.hero.title3.pt, content.home.hero.title3.es)}</span> <br /> 
              <span className="relative">{t(content.home.hero.title4.pt, content.home.hero.title4.es)}</span>
            </h1>
            <div className="text-right mt-2 md:mt-4 invisible" aria-hidden="true">
              <span className="text-[1rem] font-normal tracking-tighter">
                {t(content.home.hero.dateLocation.pt, content.home.hero.dateLocation.es)} <br className="md:hidden" />
                <span className="hidden md:inline mx-1 md:mx-2 text-[1.25rem]">•</span> EEFE-USP
              </span>
            </div>
          </div>

          {/* Right Part of Title - In Front of Image */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={heroTitleRightVariants}
            className="absolute right-[7%] md:right-[7%] top-[80%] md:top-[65%] -translate-y-1/2 mt-[10px] md:mt-[35px] z-20 pointer-events-auto"
          >
            <h1 className="text-[33px] md:text-[clamp(2.5rem,4vw,5rem)] font-black text-[#1A1A1A] tracking-[-0.04em] leading-[1] text-right">
              <span className="relative">{t(content.home.hero.title3.pt, content.home.hero.title3.es)}</span> <br /> 
              <span className="relative">{t(content.home.hero.title4.pt, content.home.hero.title4.es)}</span>
            </h1>
            <div className="text-right mt-2 md:mt-4">
              <span className="text-[15px] md:text-[1rem] font-normal text-[#1A1A1A] tracking-tighter">
                {t(content.home.hero.dateLocation.pt, content.home.hero.dateLocation.es)} <br className="md:hidden" />
                <span className="hidden md:inline text-[#fed0b9] mx-1 md:mx-2 text-[1.25rem]">•</span> EEFE-USP
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Explore Sections */}
      <section className="max-w-[1400px] mx-auto px-6 pt-12 pb-24 md:pt-16 md:pb-[72px]">
        {content.settings.registrationOpen && content.settings.showNoticeBanner && (
          <div className="w-full flex justify-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#fad062]/20 border border-[#fad062] px-6 py-3 rounded-2xl md:rounded-full flex items-center gap-3 w-fit"
            >
              <Info size={20} className="text-[#1A1A1A] shrink-0 self-start mt-0.5 md:self-center md:mt-0" />
              <p className="text-[#1A1A1A] font-medium text-[12px] md:text-[17px] text-left md:text-center md:whitespace-nowrap w-auto">
                {(() => {
                  const text = t(content.home.explore.notice.pt, content.home.explore.notice.es);
                  const linkText = t("inscreva-se agora", "inscríbase ahora");
                  const parts = text.split(new RegExp(`(${linkText})`, 'i'));
                  return parts.map((part, i) => 
                    part.toLowerCase() === linkText.toLowerCase() 
                      ? <Link key={i} to="/inscricoes" className="font-bold underline hover:text-[#f7a36a] transition-colors">{part}</Link>
                      : part
                  );
                })()}
              </p>
            </motion.div>
          </div>
        )}
        
        {/* Registration CTAs Section */}
        {content.settings.registrationOpen && (content.settings.showHomeRegistrationCta || content.settings.showHomeInternationalCta) && (
          <div className="w-full flex flex-col md:flex-row gap-6 mb-16 px-0">
            {/* Main Registration CTA */}
            {content.settings.showHomeRegistrationCta && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1 bg-gray-50 border border-[#f7a36a] rounded-[32px] md:rounded-[40px] p-8 md:p-10 text-[#1A1A1A] flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all"
                onClick={() => navigate('/inscricoes')}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#f7a36a]/10 flex items-center justify-center text-[#f7a36a]">
                      <GraduationCap size={28} />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-[#f7a36a]/30 flex items-center justify-center group-hover:bg-[#f7a36a] group-hover:border-[#f7a36a] group-hover:text-white transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-4 text-[#1A1A1A]">
                    {t(content.home.registration_cta.title.pt, content.home.registration_cta.title.es)}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                    {t(content.home.registration_cta.description.pt, content.home.registration_cta.description.es)}
                  </p>
                </div>
                <button className="bg-[#f7a36a] text-white px-8 py-3.5 rounded-full font-bold uppercase text-sm tracking-tight transition-all self-start hover:bg-[#e69259] shadow-md">
                  {t(content.home.registration_cta.button.pt, content.home.registration_cta.button.es)}
                </button>
              </motion.div>
            )}

            {/* International Registration CTA */}
            {content.settings.showHomeInternationalCta && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex-1 bg-gray-50 border border-[#989898] rounded-[32px] md:rounded-[40px] p-8 md:p-10 text-[#1A1A1A] flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all"
                onClick={() => window.open(content.home.registration_cta.international_link, '_blank')}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#fad062]/10 flex items-center justify-center text-[#1A1A1A]">
                      <Globe size={28} className="text-[#fad062]" />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center group-hover:bg-[#fad062] group-hover:border-[#fad062] group-hover:text-[#1A1A1A] transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-4 text-[#1A1A1A]">
                    {t(content.home.registration_cta.international_title.pt, content.home.registration_cta.international_title.es)}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                    {t(content.home.registration_cta.international_description.pt, content.home.registration_cta.international_description.es)}
                  </p>
                </div>
                <button className="bg-[#fad062] text-[#1A1A1A] px-8 py-3.5 rounded-full font-bold uppercase text-sm tracking-tight transition-all self-start hover:shadow-lg shadow-md">
                  {t(content.home.registration_cta.international_button.pt, content.home.registration_cta.international_button.es)}
                </button>
              </motion.div>
            )}
          </div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
        >
          <div className="max-w-2xl md:ml-[7px]">
            <h2 className="text-[clamp(2rem,2.5vw,3rem)] font-bold text-[#1A1A1A] tracking-[-0.03em] leading-[1.1] mb-6">
              {t(content.home.explore.title.pt, content.home.explore.title.es)}
            </h2>
            <p className="text-[clamp(1rem,1.1vw,1.125rem)] md:text-[18px] text-gray-600 font-normal leading-[1.65] tracking-normal md:w-[606px]">
              {t(content.home.explore.description.pt, content.home.explore.description.es)}
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-[-20px]"
        >
          {/* Card 1: O Congresso */}
          {content.settings.showHomeCardCongress && (
            <motion.div 
              variants={fadeInUp}
              onClick={() => navigate('/congresso')}
              className="group cursor-pointer bg-[#9ab2d4] text-white p-5 md:p-6 rounded-[32px] md:rounded-[40px] h-auto md:h-[150px] overflow-hidden flex flex-row md:flex-col justify-between items-center md:items-start transition-all hover:scale-[1.02] w-full relative"
            >
              <div className="flex items-center justify-between w-full md:mb-0">
                <div className="flex items-center gap-4 md:gap-3">
                  <div className="w-12 h-12 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Search size={24} className="md:hidden" />
                    <Search size={20} className="hidden md:block" />
                  </div>
                  <h3 className="text-2xl md:text-xl font-black tracking-tighter leading-none lowercase">{t(content.home.cards.congress.title.pt, content.home.cards.congress.title.es)}</h3>
                </div>
                <div className="hidden md:flex w-8 h-8 rounded-full border-2 border-white/30 items-center justify-center group-hover:bg-white group-hover:text-[#9ab2d4] transition-all shrink-0">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="hidden md:block w-full">
                <p className="text-white/80 text-[12px] md:text-[14px] font-normal leading-[1.65] tracking-normal line-clamp-3">
                  {t(content.home.cards.congress.description.pt, content.home.cards.congress.description.es)}
                </p>
              </div>
              <div className="md:hidden w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#9ab2d4] transition-all">
                <ArrowUpRight size={20} />
              </div>
            </motion.div>
          )}

          {/* Card 2: Inscrições */}
          {content.settings.registrationOpen && content.settings.showHomeCardRegistration && (
            <motion.div 
              variants={fadeInUp}
              onClick={() => navigate('/inscricoes')}
              className="group cursor-pointer bg-[#f7a36a] text-white p-5 md:p-6 rounded-[32px] md:rounded-[40px] h-auto md:h-[150px] overflow-hidden flex flex-row md:flex-col justify-between items-center md:items-start transition-all hover:scale-[1.02] w-full relative"
            >
              <div className="flex items-center justify-between w-full md:mb-0">
                <div className="flex items-center gap-4 md:gap-3">
                  <div className="w-12 h-12 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <GraduationCap size={24} className="md:hidden" />
                    <GraduationCap size={20} className="hidden md:block" />
                  </div>
                  <h3 className="text-2xl md:text-xl font-black tracking-tighter leading-none lowercase">{t(content.home.cards.registration.title.pt, content.home.cards.registration.title.es)}</h3>
                </div>
                <div className="hidden md:flex w-8 h-8 rounded-full border-2 border-white/30 items-center justify-center group-hover:bg-white group-hover:text-[#f7a36a] transition-all shrink-0">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="hidden md:block w-full">
                <p className="text-white/80 text-[12px] md:text-[14px] font-normal leading-[1.65] tracking-normal line-clamp-3">
                  {t(content.home.cards.registration.description.pt, content.home.cards.registration.description.es)}
                </p>
              </div>
              <div className="md:hidden w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#f7a36a] transition-all">
                <ArrowUpRight size={20} />
              </div>
            </motion.div>
          )}

          {/* Card 3: Submissões */}
          {content.settings.showHomeCardSubmissions && (
            <motion.div 
              variants={fadeInUp}
              onClick={() => navigate('/submissao')}
              className="group cursor-pointer bg-[#56ad84] text-white p-5 md:p-6 rounded-[32px] md:rounded-[40px] h-auto md:h-[150px] overflow-hidden flex flex-row md:flex-col justify-between items-center md:items-start transition-all hover:scale-[1.02] w-full relative"
            >
              <div className="flex items-center justify-between w-full md:mb-0">
                <div className="flex items-center gap-4 md:gap-3">
                  <div className="w-12 h-12 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <BookOpen size={24} className="md:hidden" />
                    <BookOpen size={20} className="hidden md:block" />
                  </div>
                  <h3 className="text-2xl md:text-xl font-black tracking-tighter leading-none lowercase">{t(content.home.cards.submissions.title.pt, content.home.cards.submissions.title.es)}</h3>
                </div>
                <div className="hidden md:flex w-8 h-8 rounded-full border-2 border-white/30 items-center justify-center group-hover:bg-white group-hover:text-[#56ad84] transition-all shrink-0">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="hidden md:block w-full">
                <p className="text-white/80 text-[12px] md:text-[14px] font-normal leading-[1.65] tracking-normal line-clamp-3">
                  {t(content.home.cards.submissions.description.pt, content.home.cards.submissions.description.es)}
                </p>
              </div>
              <div className="md:hidden w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#56ad84] transition-all">
                <ArrowUpRight size={20} />
              </div>
            </motion.div>
          )}

          {/* Card 4: Programação */}
          {content.settings.showHomeCardSchedule && (
            <motion.div 
              variants={fadeInUp}
              onClick={() => navigate('/programacao')}
              className="group cursor-pointer bg-[#fad062] text-[#1A1A1A] p-5 md:p-6 rounded-[32px] md:rounded-[40px] h-auto md:h-[150px] overflow-hidden flex flex-row md:flex-col justify-between items-center md:items-start transition-all hover:scale-[1.02] w-full relative"
            >
              <div className="flex items-center justify-between w-full md:mb-0">
                <div className="flex items-center gap-4 md:gap-3">
                  <div className="w-12 h-12 md:w-10 md:h-10 rounded-xl bg-black/5 flex items-center justify-center shrink-0">
                    <Calendar size={24} className="md:hidden" />
                    <Calendar size={20} className="hidden md:block" />
                  </div>
                  <h3 className="text-2xl md:text-xl font-black tracking-tighter leading-none lowercase">{t(content.home.cards.schedule.title.pt, content.home.cards.schedule.title.es)}</h3>
                </div>
                <div className="hidden md:flex w-8 h-8 rounded-full border-2 border-black/10 items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all shrink-0">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="hidden md:block w-full">
                <p className="text-[#1A1A1A]/70 text-[12px] md:text-[14px] font-normal leading-[1.65] tracking-normal line-clamp-3">
                  {t(content.home.cards.schedule.description.pt, content.home.cards.schedule.description.es)}
                </p>
              </div>
              <div className="md:hidden w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all">
                <ArrowUpRight size={20} />
              </div>
            </motion.div>
          )}

          {/* Card 5: Datas */}
          {content.settings.showHomeCardDates && (
            <motion.div 
              variants={fadeInUp}
              onClick={() => navigate('/datas')}
              className="group cursor-pointer bg-[#f5f6f2] text-[#1A1A1A] border border-gray-200 p-5 md:p-6 rounded-[32px] md:rounded-[40px] h-auto md:h-[150px] overflow-hidden flex flex-row md:flex-col justify-between items-center md:items-start transition-all hover:scale-[1.02] w-full relative"
            >
              <div className="flex items-center justify-between w-full md:mb-0">
                <div className="flex items-center gap-4 md:gap-3">
                  <div className="w-12 h-12 md:w-10 md:h-10 rounded-xl bg-black/5 flex items-center justify-center shrink-0">
                    <Globe size={24} className="md:hidden" />
                    <Globe size={20} className="hidden md:block" />
                  </div>
                  <h3 className="text-2xl md:text-xl font-black tracking-tighter leading-none lowercase">{t(content.home.cards.dates.title.pt, content.home.cards.dates.title.es)}</h3>
                </div>
                <div className="hidden md:flex w-8 h-8 rounded-full border-2 border-black/10 items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all shrink-0">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="hidden md:block w-full">
                <p className="text-[#1A1A1A]/70 text-[12px] md:text-[14px] font-normal leading-[1.65] tracking-normal line-clamp-3">
                  {t(content.home.cards.dates.description.pt, content.home.cards.dates.description.es)}
                </p>
              </div>
              <div className="md:hidden w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all">
                <ArrowUpRight size={20} />
              </div>
            </motion.div>
          )}

          {/* Card 6: ALFiD */}
          {content.settings.showHomeCardAlfid && (
            <motion.div 
              variants={fadeInUp}
              onClick={() => navigate('/alfid')}
              className="group cursor-pointer bg-[#f5a1c3] text-[#1A1A1A] p-5 md:p-6 rounded-[32px] md:rounded-[40px] h-auto md:h-[150px] overflow-hidden flex flex-row md:flex-col justify-between items-center md:items-start transition-all hover:scale-[1.02] w-full relative"
            >
              <div className="flex items-center justify-between w-full md:mb-0">
                <div className="flex items-center gap-4 md:gap-3">
                  <div className="w-12 h-12 md:w-10 md:h-10 rounded-xl bg-black/5 flex items-center justify-center shrink-0">
                    <Users size={24} className="md:hidden" />
                    <Users size={20} className="hidden md:block" />
                  </div>
                  <h3 className="text-2xl md:text-xl font-black tracking-tighter leading-none lowercase">{t(content.home.cards.alfid.title.pt, content.home.cards.alfid.title.es)}</h3>
                </div>
                <div className="hidden md:flex w-8 h-8 rounded-full border-2 border-black/10 items-center justify-center group-hover:bg-white group-hover:text-[#f5a1c3] transition-all shrink-0">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="hidden md:block w-full">
                <p className="text-[#1A1A1A]/70 text-[12px] md:text-[14px] font-normal leading-[1.65] tracking-normal line-clamp-3">
                  {t(content.home.cards.alfid.description.pt, content.home.cards.alfid.description.es)}
                </p>
              </div>
              <div className="md:hidden w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#f5a1c3] transition-all">
                <ArrowUpRight size={20} />
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* IAPS CTA Section */}
      {content.settings.showIapsSection && !content.home.iaps.hide && (
        <section className="max-w-[1400px] mx-auto px-6 pt-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-[#F5F6F2] rounded-[40px] p-8 md:p-12 border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 relative overflow-hidden"
          >
            <div className="max-w-3xl text-left relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tighter leading-none lowercase mb-4 mt-[10px] md:mt-0">
                {t(content.home.iaps.title.pt, content.home.iaps.title.es)}
              </h3>
              <p className="text-[15px] md:text-[clamp(1rem,1.1vw,1.125rem)] w-[263px] md:w-auto text-[#1A1A1A] font-normal leading-[1.65] tracking-normal md:mb-0 mb-8">
                {t(content.home.iaps.description.pt, content.home.iaps.description.es)}
              </p>
            </div>
            <div className="flex flex-col items-center gap-6 shrink-0 z-10 w-full md:w-auto">
              <div className="flex flex-col items-center gap-4 w-full md:w-fit md:min-w-[320px] -mt-[30px] md:mt-0">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src={content.home.iaps.image} 
                  alt="IAPS Conference" 
                  className="w-[300px] h-[150px] md:w-auto md:h-auto md:max-h-28"
                  referrerPolicy="no-referrer"
                />
                <a 
                  href={content.home.iaps.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex group items-center justify-center gap-3 bg-[#26a9e1] text-white px-10 py-4 md:px-6 md:py-2.5 rounded-full text-base md:text-sm font-semibold tracking-[0.04em] transition-all hover:bg-[#1d8fbe] active:bg-[#15769c] focus:outline focus:outline-[3px] focus:outline-[#26a9e1] focus:outline-offset-[3px] w-full md:w-auto"
                >
                  {t(content.home.iaps.button.pt, content.home.iaps.button.es)}
                  <ArrowUpRight className="w-5 h-5 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Logos Section */}
      <section className="w-full bg-white py-12 md:pt-[104px] md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[0.625rem] md:text-[14px] text-gray-400 uppercase tracking-[0.2em] mb-8 text-left"
          >
            {t(content.home.logos.realization.pt, content.home.logos.realization.es)}
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-8 md:gap-24 flex-wrap"
          >
            {[
              { src: 'pula-eefe.svg', alt: 'PULA', url: 'http://pula-eefe.com.br/' },
              { src: 'ALFiD-newlogo.svg', alt: 'ALFiD', url: '/alfid', internal: true },
              { src: 'eefe-logo.svg', alt: 'EEFE', url: 'https://www.eefe.usp.br/' },
              { src: 'usp-logo.svg', alt: 'USP', url: 'https://www.usp.br/' }
            ].map((logo, index) => (
              <motion.div key={index} variants={fadeInUp}>
                {logo.internal ? (
                  <Link to={logo.url}>
                    <motion.img 
                      whileHover={{ y: -5 }}
                      src={`/images/logos/${logo.src}`} 
                      alt={logo.alt} 
                      className="h-[3.75rem] md:h-[100px] w-auto object-contain cursor-pointer" 
                    />
                  </Link>
                ) : (
                  <a href={logo.url} target="_blank" rel="noopener noreferrer">
                    <motion.img 
                      whileHover={{ y: -5 }}
                      src={`/images/logos/${logo.src}`} 
                      alt={logo.alt} 
                      className="h-[3.75rem] md:h-[100px] w-auto object-contain cursor-pointer" 
                    />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Support Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[0.625rem] md:text-[14px] text-gray-400 uppercase tracking-[0.2em] mb-8 text-left mt-16"
          >
            {t(content.home.logos.support.pt, content.home.logos.support.es)}
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-8 md:gap-24 flex-wrap"
          >
            {[
              { src: 'AEFD-logo.svg', alt: 'AEFD', url: 'https://www.instagram.com/aefd_filodeporte/' },
              { src: 'afdlp-logo.svg', alt: 'AFDLP', url: 'https://www.afdlp.org/' },
              { src: 'sfps-logo.svg', alt: 'SFPS', url: 'https://sfps.fr/' },
              { src: 'logo-prpi1.webp', alt: 'PRPI-USP', url: 'https://prpi.usp.br/' }
            ].map((logo, index) => (
              <motion.a
                key={index}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.img 
                  src={`/images/logos/${logo.src}`} 
                  alt={logo.alt} 
                  className={`h-[3rem] ${logo.alt === 'PRPI-USP' ? 'md:h-[75px]' : 'md:h-[80px]'} w-auto object-contain transition-all duration-300`} 
                  referrerPolicy="no-referrer"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

