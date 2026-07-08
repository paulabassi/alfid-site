import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../conteudo';
import SetaDiagonal from './SetaDiagonal';

const SubmissionHeroTitle: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:flex-col md:items-start md:gap-6 text-[2.5rem] md:text-[3.75rem] font-black text-[#1A1A1A] tracking-[-0.06em] leading-[0.9] lowercase">
      
      {/* Line 1: [o->] submissão [arrow-up-right] */}
      <div className="flex flex-nowrap items-center gap-4 md:gap-8 mt-[30px] ml-[20px] md:mt-0 md:ml-0">
        <span>{t(content.submission.hero.title1.pt, content.submission.hero.title1.es)}</span>
        
        <div className="flex items-center gap-1 md:gap-4">
          {/* Upload/Export icon */}
          <div className="hidden md:block">
            <SetaDiagonal size={72} color="#1A1A1A" />
          </div>
          <div className="block md:hidden mt-[-8px] ml-[11px]">
            <SetaDiagonal size={40} color="#1A1A1A" />
          </div>
          
          {/* Blobi video */}
          <video 
            src="/images/decorative/blobi.webm" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-10 h-10 md:w-16 md:h-16 object-contain"
          />
        </div>
      </div>

      {/* Line 2: de [yellow pill] trabalhos. */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap items-center gap-2 md:gap-8 lg:ml-20 mt-[5px] ml-[20px] md:mt-0 md:ml-0"
      >
        <span>{t(content.submission.hero.title2.pt, content.submission.hero.title2.es)}</span>
        
        <div className="flex items-center gap-2 md:gap-8 flex-nowrap">
          {/* Three connected shapes (ellipse, wider ellipse, circle) */}
          <div className="flex items-center shrink-0">
            <div className="w-2 h-[30px] md:w-6 md:h-[70px] bg-[#fad062] rounded-[50%] -mr-1 md:-mr-2"></div>
            <div className="w-5 h-[30px] md:w-16 md:h-[70px] bg-[#fad062] rounded-[50%] -mr-1 md:-mr-2"></div>
            <div className="w-8 h-[30px] md:w-[70px] md:h-[70px] bg-[#fad062] rounded-full"></div>
          </div>

          <div className="flex items-end">
            <span>{t(content.submission.hero.title3.pt, content.submission.hero.title3.es)}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SubmissionHeroTitle;
