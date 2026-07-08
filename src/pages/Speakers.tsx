import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../conteudo';

export default function Speakers() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = content.speakers.documentTitle;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh] bg-[#f5f6f2] overflow-hidden flex flex-col rounded-b-[40px]">
        {/* Decorative Floating Dots Cluster */}
        <div className="absolute right-0 md:right-[5%] top-[10%] w-[85%] md:w-[48%] h-full pointer-events-none z-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-[450px] max-h-[350px]">
            {/* Dot 1 - Blue */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.85, 
                scale: 1,
                y: [0, -18, 0],
                x: [0, 8, 0]
              }}
              transition={{
                initial: { duration: 0.6, delay: 0.1 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-[15%] left-[20%] w-12 h-12 rounded-full bg-[#007cc2] shadow-sm"
            />
            {/* Dot 2 - Yellow */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.75, 
                scale: 1,
                y: [0, 20, 0],
                x: [0, -10, 0]
              }}
              transition={{
                initial: { duration: 0.6, delay: 0.3 },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-[35%] left-[55%] w-20 h-20 rounded-full bg-[#f8c301] shadow-sm"
            />
            {/* Dot 3 - Orange */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.85, 
                scale: 1,
                y: [0, -12, 0],
                x: [0, -6, 0]
              }}
              transition={{
                initial: { duration: 0.6, delay: 0.5 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-[65%] left-[15%] w-16 h-16 rounded-full bg-[#f7a36a] shadow-sm"
            />
            {/* Dot 4 - Pink */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.8, 
                scale: 1,
                y: [0, 15, 0],
                x: [0, 10, 0]
              }}
              transition={{
                initial: { duration: 0.6, delay: 0.2 },
                y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-[20%] left-[75%] w-9 h-9 rounded-full bg-[#dd127b] shadow-sm"
            />
            {/* Dot 5 - Green */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.8, 
                scale: 1,
                y: [0, -15, 0],
                x: [0, -8, 0]
              }}
              transition={{
                initial: { duration: 0.6, delay: 0.4 },
                y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 6.2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-[60%] left-[70%] w-11 h-11 rounded-full bg-[#56ad84] shadow-sm"
            />
            
            {/* Extra subtle decorative small dots for organic texture */}
            <div className="absolute top-[48%] left-[32%] w-3 h-3 rounded-full bg-gray-300 opacity-40 animate-pulse" />
            <div className="absolute top-[28%] left-[48%] w-2 h-2 rounded-full bg-gray-300 opacity-30" />
            <div className="absolute top-[58%] left-[44%] w-4 h-4 rounded-full bg-gray-300 opacity-40 animate-pulse" />
          </div>
        </div>
        <div className="relative z-20 max-w-[1300px] w-full mx-auto px-6 pt-[120px] md:pt-[140px] lg:pt-[160px] flex-grow flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl lg:max-w-4xl flex flex-col justify-center pb-12 md:pb-20 relative z-10 md:pl-[10%] lg:pl-[15%]"
          >
            <h1 className="text-[2.5rem] md:text-[3.75rem] font-black text-[#1A1A1A] tracking-tighter leading-[1.05] md:leading-[0.85] lowercase flex flex-col">
              <span>{t(content.speakers.hero.title.pt, content.speakers.hero.title.es)}</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Speakers List */}
      <div className="max-w-[1300px] mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16">
          {content.speakers.list.filter(speaker => !speaker.hide).map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row gap-6 md:gap-8 group"
            >
              {/* Photo Placeholder */}
              <div className="shrink-0">
                <div className="w-40 h-40 md:w-48 md:h-48 bg-gray-100 rounded-2xl overflow-hidden relative border border-gray-100 shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
                  {speaker.image ? (
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <User size={64} strokeWidth={1} />
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col pt-1">
                <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3 tracking-tight leading-tight">
                  {speaker.name}
                </h2>
                <p className="text-gray-600 text-base lg:text-sm leading-relaxed mb-4">
                  {t(speaker.bio.pt, speaker.bio.es)}
                </p>
                {speaker.website && (
                  <a 
                    href={speaker.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#f7a36a] font-bold hover:gap-3 transition-all duration-300 group/link text-sm md:text-base"
                  >
                    <Globe size={16} />
                    <span className="border-b-2 border-transparent group-hover/link:border-[#f7a36a] pb-0.5">
                      {t('Ver perfil acadêmico', 'Ver perfil académico')}
                    </span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
