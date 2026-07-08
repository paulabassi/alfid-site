import React, { useState, useEffect } from 'react';
import { Globe, Lightbulb, BookOpen, Search, Languages, Eye, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import OrganicPattern from '../components/OrganicPattern';
import GravityBalls from '../components/GravityBalls';
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

export default function Congress() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = content.congress.documentTitle;
  }, []);

  const objectives = [
    {
      number: "01.",
      title: t(content.congress.objectives.list[0].title.pt, content.congress.objectives.list[0].title.es),
      description: t(content.congress.objectives.list[0].description.pt, content.congress.objectives.list[0].description.es),
      color: "bg-[#9ab2d4]",
      textColor: "text-white",
      icon: <Search size={32} />
    },
    {
      number: "02.",
      title: t(content.congress.objectives.list[1].title.pt, content.congress.objectives.list[1].title.es),
      description: t(content.congress.objectives.list[1].description.pt, content.congress.objectives.list[1].description.es),
      color: "bg-[#56ad84]",
      textColor: "text-white",
      icon: <Languages size={32} />
    },
    {
      number: "03.",
      title: t(content.congress.objectives.list[2].title.pt, content.congress.objectives.list[2].title.es),
      description: t(content.congress.objectives.list[2].description.pt, content.congress.objectives.list[2].description.es),
      color: "bg-[#f7a36a]",
      textColor: "text-white",
      icon: <Eye size={32} />
    },
    {
      number: "04.",
      title: t(content.congress.objectives.list[3].title.pt, content.congress.objectives.list[3].title.es),
      description: t(content.congress.objectives.list[3].description.pt, content.congress.objectives.list[3].description.es),
      color: "bg-[#fad062]",
      textColor: "text-[#1A1A1A]",
      icon: <GraduationCap size={32} />
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % objectives.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + objectives.length) % objectives.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      {/* Hero Section (Orange) */}
      <div className="relative h-[40vh] md:h-[60vh] bg-[#f5f6f2] overflow-hidden flex flex-col rounded-b-[40px]">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="hidden md:block absolute inset-0 bg-cover bg-center z-0 translate-y-[20px] md:translate-y-0"
          style={{ 
            backgroundImage: "url('/images/decorative/dance-1.webp')",
            WebkitMaskImage: 'radial-gradient(ellipse 50% 60% at 60% 50%, black 5%, transparent 75%)',
            maskImage: 'radial-gradient(ellipse 50% 60% at 60% 50%, black 5%, transparent 75%)'
          }}
        />
        {/* Content */}
        <div className="relative z-20 max-w-[1300px] w-full mx-auto px-6 pt-[120px] md:pt-[140px] lg:pt-[160px] flex-grow flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl lg:max-w-4xl flex flex-col justify-center pb-12 md:pb-20 relative z-10"
          >
            <h1 className="text-[2.5rem] md:text-[3.75rem] font-black text-[#1A1A1A] tracking-tighter leading-[1.05] md:leading-[0.85] lowercase flex flex-col">
              <div className="flex items-center gap-4 md:gap-6">
                <span>{t(content.congress.hero.title1.pt, content.congress.hero.title1.es)}</span>
                <div className="flex items-center -space-x-2 md:-space-x-3 isolate">
                  {/* Laranja */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-[2.5rem] h-[2.5rem] md:w-[50px] md:h-[50px] bg-[#f7a36a] rounded-full flex-shrink-0 relative z-30 shadow-sm" 
                  />
                  {/* Rosa */}
                  <motion.div 
                    initial={{ x: -20, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                    className="w-[2.5rem] h-[2.5rem] md:w-[50px] md:h-[50px] bg-[#f5a1c3] rounded-full flex-shrink-0 relative z-20 shadow-sm" 
                  />
                  {/* Amarela */}
                  <motion.div 
                    initial={{ x: -20, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
                    className="w-[2.5rem] h-[2.5rem] md:w-[50px] md:h-[50px] bg-[#fad062] rounded-full flex-shrink-0 relative z-10 shadow-sm" 
                  />
                </div>
              </div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="ml-8 md:ml-16"
              >
                {t(content.congress.hero.title2.pt, content.congress.hero.title2.es)}
              </motion.span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* New Section inspired by the image */}
      <div className="max-w-[1300px] mx-auto px-6 pt-12 pb-5 md:pt-20 md:pb-5 overflow-x-hidden">
        {/* Top Row: Title and Description + Decorative Element */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 max-w-4xl lg:w-2/3"
          >
            <h2 className="text-[clamp(2rem,2.5vw,3rem)] font-bold text-[#1A1A1A] leading-[1.1] tracking-[-0.03em]">
              {/* Mobile version */}
              <div className="md:hidden">
                {t(content.congress.intro.titleLine1.pt + ' ' + content.congress.intro.titleLine2.pt, content.congress.intro.titleLine1.es + ' ' + content.congress.intro.titleLine2.es)}
              </div>
              
              {/* Desktop version */}
              <div className="hidden md:block">
                {t(content.congress.intro.titleLine1.pt, content.congress.intro.titleLine1.es)} <br /> 
                {t(content.congress.intro.titleLine2.pt, content.congress.intro.titleLine2.es)}
              </div>
            </h2>
            <p className="text-[17px] mb-[-30px] md:mb-0 md:text-[clamp(1rem,1.1vw,1.125rem)] text-gray-600 font-normal leading-[1.65] tracking-normal max-w-2xl md:w-[600px]">
              {t(content.congress.intro.description.p1.pt, content.congress.intro.description.p1.es)}
              <a 
                href="http://eefe.usp.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-[#f7a36a] transition-colors"
              >
                {t(content.congress.intro.description.link.pt, content.congress.intro.description.link.es)}
              </a>
              {t(content.congress.intro.description.p2.pt, content.congress.intro.description.p2.es)}
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
              className="mt-12 pt-10 border-t border-gray-100"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-[14px] md:text-[clamp(0.875rem,1vw,1.125rem)] font-black text-[#1A1A1A] tracking-tight leading-tight">
                  {t(content.congress.intro.location.pt, content.congress.intro.location.es)}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#56ad84] shadow-sm" />
                <span className="text-[14px] md:text-[clamp(0.875rem,1vw,1.125rem)] font-black text-[#1A1A1A] tracking-tight leading-tight">
                  {t(content.congress.intro.institution.pt, content.congress.intro.institution.es)}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#9ab2d4] shadow-sm" />
                <span className="text-[14px] md:text-[clamp(0.875rem,1vw,1.125rem)] font-black text-[#1A1A1A] tracking-tight leading-tight">
                  {t(content.congress.intro.format.pt, content.congress.intro.format.es)}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Event Info Stats */}
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="w-full lg:w-1/3 grid grid-cols-3 lg:grid-cols-1 gap-2 md:gap-4 lg:gap-5 lg:pl-12"
          >
            {[
              { value: '+12', label: t(content.congress.stats.years.pt, content.congress.stats.years.es), color: '#f7a36a' },
              { value: '5ª', label: t(content.congress.stats.edition.pt, content.congress.stats.edition.es), color: '#56ad84' },
              { value: '4', label: t(content.congress.stats.languages.pt, content.congress.stats.languages.es), color: '#9ab2d4' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="flex flex-col p-3 md:p-5 rounded-2xl md:rounded-3xl bg-[#F5F6F2]/60 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300 w-[100px] md:w-[250px] items-center"
              >
                <span className="text-[32px] md:text-[55px] font-black leading-none tracking-tighter text-center" style={{ color: stat.color }}>
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-[13px] font-bold text-[#1A1A1A] uppercase tracking-[0.15em] mt-2 text-center">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Presentation Section */}
      <div className="max-w-[1300px] mx-auto px-6 pt-5 md:pt-5 border-t border-gray-100 md:mb-[-30px]">
          <motion.h2 
            {...fadeInUp}
            className="text-[clamp(2rem,2.5vw,3rem)] font-bold text-[#1A1A1A] mb-8 tracking-[-0.03em] leading-[1.1] lowercase"
          >
            {t(content.congress.presentation.title.pt, content.congress.presentation.title.es)}
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-8 flex flex-col"
            >
              <div className="space-y-6 flex-grow">
                <motion.p variants={itemVariants} className="text-[16px] md:text-[18px] text-gray-700 leading-[1.65] tracking-normal font-normal md:mb-[38px]">
                  {t(content.congress.presentation.p1_1.pt, content.congress.presentation.p1_1.es)}
                  <a 
                    href="https://asociacionlatinafild.wixsite.com/alfid-website" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline hover:text-[#f7a36a] transition-colors"
                  >
                    {t(content.congress.presentation.p1_link.pt, content.congress.presentation.p1_link.es)}
                  </a>
                  {t(content.congress.presentation.p1_2.pt, content.congress.presentation.p1_2.es)}
                </motion.p>
                <motion.p variants={itemVariants} className="text-[16px] md:text-[clamp(1rem,1.1vw,1.125rem)] text-gray-700 leading-[1.65] tracking-normal font-normal md:mb-[38px]">
                  {t(content.congress.presentation.p2_1.pt, content.congress.presentation.p2_1.es)}
                  <span className="font-bold">{t(content.congress.presentation.p2_bold.pt, content.congress.presentation.p2_bold.es)}</span>
                  {t(content.congress.presentation.p2_2.pt, content.congress.presentation.p2_2.es)}
                </motion.p>
                <motion.p variants={itemVariants} className="text-[16px] md:text-[clamp(1rem,1.1vw,1.125rem)] text-gray-700 leading-[1.65] tracking-normal font-normal md:mt-0 md:mb-[38px]">
                  {t(content.congress.presentation.p3.pt, content.congress.presentation.p3.es)}
                </motion.p>
                <motion.p variants={itemVariants} className="text-[16px] md:text-[clamp(1rem,1.1vw,1.125rem)] text-gray-700 leading-[1.65] tracking-normal font-normal md:mt-0">
                  {t(content.congress.presentation.p4.pt, content.congress.presentation.p4.es)}
                </motion.p>
              </div>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-12 flex flex-col"
            >
              <div className="space-y-8 flex-grow mb-auto">
                <motion.p variants={itemVariants} className="text-[16px] md:text-[clamp(1rem,1.1vw,1.125rem)] text-gray-700 leading-[1.65] tracking-normal font-normal">
                  {t(content.congress.presentation.p5.pt, content.congress.presentation.p5.es)}
                </motion.p>

                <div className="space-y-4">
                  <motion.div 
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="flex flex-wrap gap-2 py-2 md:pt-[9px] md:mt-[-20px] md:mb-[12px] md:text-[18px]"
                  >
                    {Object.entries(content.congress.presentation.areas).map(([key, area], index) => (
                      <motion.span
                        key={index}
                        variants={itemVariants}
                        className="px-4 py-1.5 bg-[#f5f6f2] rounded-full text-sm font-bold text-[#f7a36a] lowercase border border-[#f7a36a]/10 md:text-[14px]"
                      >
                        {t(area.pt, area.es)}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="pt-8 md:pt-0 space-y-6">
                    <motion.p variants={itemVariants} className="text-[16px] md:text-[clamp(1rem,1.1vw,1.125rem)] text-gray-700 leading-[1.65] tracking-normal font-normal">
                      {t(content.congress.presentation.p6.pt, content.congress.presentation.p6.es)}
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-[16px] md:text-[clamp(1rem,1.1vw,1.125rem)] text-gray-700 leading-[1.65] tracking-normal font-normal">
                      {t(content.congress.presentation.p7.pt, content.congress.presentation.p7.es)}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            {...fadeInUp}
            className="mt-12 space-y-4 p-8 border border-gray-200 md:border-[#a9a9a9] rounded-3xl bg-[#f5f6f2]/30 w-full"
          >
            <p className="text-[clamp(1rem,1.1vw,1.125rem)] text-gray-700 leading-[1.65] tracking-normal font-normal">
              {t(content.congress.presentation.p8.pt, content.congress.presentation.p8.es)}
            </p>
            <p className="text-sm text-gray-500 italic font-medium">
              {t(content.congress.presentation.p8_note.pt, content.congress.presentation.p8_note.es)}
            </p>
          </motion.div>
        </div>

        {/* Objectives Section */}
        <div className="max-w-[1300px] mx-auto px-6 pt-10 md:pt-20 mt-10 md:mt-20 border-t border-gray-100">
          <motion.div 
            {...fadeInUp}
            className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-10"
          >
            <div className="lg:w-1/3">
              <h2 className="text-[clamp(2rem,2.5vw,3rem)] font-bold text-[#1A1A1A] tracking-[-0.03em] leading-[1.1] lowercase">
                {t(content.congress.objectives.title.pt, content.congress.objectives.title.es)}
              </h2>
            </div>
            <div className="lg:w-2/3">
              <p className="text-[16px] md:text-[clamp(1rem,1.1vw,1.125rem)] text-[#1A1A1A] font-normal leading-[1.65] tracking-normal">
                {t(content.congress.objectives.description.pt, content.congress.objectives.description.es)}
              </p>
            </div>
          </motion.div>

          {/* Mobile: Stacked Cards Deck */}
          <div className="md:hidden relative h-[400px] flex items-center justify-center py-10 -mt-10">
            <div className="relative w-full max-w-[320px] h-full flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {objectives.map((obj, index) => {
                  // Calculate position relative to active index
                  let position = index - activeIndex;
                  
                  // Handle wrapping for infinite feel
                  if (position > objectives.length / 2) position -= objectives.length;
                  if (position < -objectives.length / 2) position += objectives.length;

                  const isActive = position === 0;
                  const isVisible = Math.abs(position) <= 1;

                  if (!isVisible && !isActive) return null;

                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        x: position * 160,
                        scale: isActive ? 1 : 0.85,
                        zIndex: isActive ? 10 : 5 - Math.abs(position),
                        opacity: isActive ? 1 : 0.85,
                        rotateY: position * 10,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                      onClick={() => setActiveIndex(index)}
                      className={`absolute w-full h-[300px] md:h-auto md:min-h-[340px] ${obj.color} ${obj.textColor} p-8 rounded-[40px] shadow-2xl cursor-pointer preserve-3d flex flex-col`}
                      style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden'
                      }}
                    >
                      {/* Symbol - Top Left and Smaller */}
                      <div className="mb-6 opacity-80 scale-75 origin-left">
                        {obj.icon}
                      </div>
                      
                      <div className="flex flex-col">
                        <div className="flex flex-row items-baseline gap-3 mb-4">
                          <span className="text-xl font-black opacity-50">
                            {obj.number}
                          </span>
                          
                          <h4 className={`text-[20px] md:text-[clamp(1.25rem,1.2vw,1.5rem)] font-semibold leading-[1.3] tracking-[-0.01em] lowercase ${index === 0 ? 'whitespace-nowrap' : ''}`}>
                            {obj.title}
                          </h4>
                        </div>
                        
                        <div className={`w-full h-[1px] ${obj.textColor === 'text-white' ? 'bg-white/20' : 'bg-black/10'} mb-6`} />
                        
                        <p className="text-[17px] font-normal leading-[1.5] tracking-normal opacity-90">
                          {obj.description}
                        </p>

                        {/* Removed arrow circle */}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
              <button 
                onClick={prevCard}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {objectives.map((_, i) => (
                  <div 
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'w-8 bg-[#1A1A1A]' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextCard}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

      {/* Desktop: Full-Width Grid Strip Layout */}
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        className="hidden md:grid grid-cols-4 grid-rows-2 min-h-[500px] md:h-auto lg:h-[500px] w-full overflow-hidden relative z-30"
      >
        {/* Cell 1: Obj 1 */}
        <motion.div 
          variants={itemVariants}
          className={`${objectives[0].color} ${objectives[0].textColor} p-8 lg:p-12 flex flex-col justify-center group cursor-default relative`}
        >
          <div className="max-w-[32ch]">
            <h4 className="text-[clamp(1.25rem,1.2vw,1.5rem)] font-semibold leading-[1.3] tracking-[-0.01em] mb-4 lowercase">
              {objectives[0].title}
            </h4>
            <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal opacity-80 leading-[1.5] tracking-normal">
              {objectives[0].description}
            </p>
          </div>
          <span className="absolute top-[10%] left-[85%] -translate-x-1/2 text-[3.25rem] font-black opacity-20 leading-none">{objectives[0].number}</span>
        </motion.div>

        {/* Cell 2: Empty Decorative Cell */}
        <motion.div variants={itemVariants} className="bg-[#f7a36a] relative overflow-hidden flex items-center justify-center">
          {/* White semi-circles (230px height) */}
          <div className="absolute right-[345px] top-1/2 -translate-y-1/2 w-[115px] h-[230px] bg-white rounded-l-full" />
          <div className="absolute right-[230px] top-1/2 -translate-y-1/2 w-[115px] h-[230px] bg-white rounded-l-full" />
          <div className="absolute right-[115px] top-1/2 -translate-y-1/2 w-[115px] h-[230px] bg-white rounded-l-full" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[115px] h-[230px] bg-white rounded-l-full" />
        </motion.div>

        {/* Cell 3: Obj 2 */}
        <motion.div 
          variants={itemVariants}
          className={`${objectives[1].color} ${objectives[1].textColor} p-12 flex flex-col justify-between group cursor-default relative`}
        >
          <div>
            <h4 className="text-[clamp(1.25rem,1.2vw,1.5rem)] font-semibold leading-[1.3] tracking-[-0.01em] mb-4 lowercase">
              {objectives[1].title}
            </h4>
            <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal opacity-80 leading-[1.5] tracking-normal">
              {objectives[1].description}
            </p>
          </div>
          <span className="absolute top-[10%] left-[85%] -translate-x-1/2 text-[3.25rem] font-black opacity-20 leading-none">{objectives[1].number}</span>
        </motion.div>

        {/* Cell 4: Obj 3 (Vertical Span) */}
        <motion.div 
          variants={itemVariants}
          className={`${objectives[2].color} ${objectives[2].textColor} row-span-2 p-12 flex flex-col justify-between group cursor-default relative`}
        >
          <div className="flex flex-col gap-8">
            <h4 className="text-[clamp(1.25rem,1.2vw,1.5rem)] font-semibold leading-[1.3] tracking-[-0.01em] lowercase">
              {objectives[2].title}
            </h4>
            <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal opacity-80 leading-[1.5] tracking-normal">
              {objectives[2].description}
            </p>
          </div>
          <span className="absolute top-[10%] left-[85%] -translate-x-1/2 text-[3.25rem] font-black opacity-20 leading-none">{objectives[2].number}</span>
          {/* Removed arrow circle */}
        </motion.div>

        {/* Cell 5 & 6: Obj 4 (Horizontal Span - Now 3 columns) */}
        <motion.div 
          variants={itemVariants}
          className={`${objectives[3].color} ${objectives[3].textColor} col-span-3 p-8 lg:p-12 flex items-center justify-end gap-6 lg:gap-12 group cursor-default relative overflow-hidden`}
        >
          {/* Black balls pattern on the left */}
          <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 scale-50 md:scale-75 lg:scale-100 origin-left">
            <div className="flex gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={`top-${i}`} className="w-16 h-16 bg-black rounded-full" />
              ))}
            </div>
            <div className="flex gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={`bottom-${i}`} className="w-16 h-16 bg-black rounded-full" />
              ))}
            </div>
          </div>

          <span className="text-[3rem] lg:text-[4rem] font-black opacity-20 leading-none shrink-0">{objectives[3].number}</span>
          <div className="max-w-xl mr-4 lg:mr-12 relative z-10">
            <h4 className="text-[clamp(1.25rem,1.2vw,1.5rem)] font-semibold leading-[1.3] tracking-[-0.01em] mb-4 lowercase">
              {objectives[3].title}
            </h4>
            <p className="text-[clamp(0.875rem,1.1vw,1.125rem)] font-normal opacity-80 leading-[1.5] tracking-normal">
              {objectives[3].description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
