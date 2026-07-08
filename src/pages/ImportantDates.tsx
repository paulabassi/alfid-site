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
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

interface Event {
  title: string;
}

interface DateEntry {
  day: string;
  weekday: string;
  monthYear: string;
  events: Event[];
  expired?: boolean;
}

export default function ImportantDates() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = content.dates.documentTitle;
  }, []);

  const dates: DateEntry[] = content.dates.list.map(item => ({
    day: item.day,
    weekday: t(item.weekday.pt, item.weekday.es),
    monthYear: t(item.monthYear.pt, item.monthYear.es),
    events: [{ title: t(item.title.pt, item.title.es) }],
    expired: (item as any).expired
  }));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section with Background Rectangle */}
      <div className="relative h-[40vh] md:h-[60vh] bg-[#F5F6F2] overflow-hidden flex flex-col rounded-b-[40px] px-6 md:px-12">
        {/* Background Image Layer with Dissolving Edges */}
        <motion.div 
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-cover bg-no-repeat hidden md:block"
          style={{ 
            backgroundImage: "url('/images/decorative/dates-1.webp')",
            backgroundPosition: "30% calc(50% - 50px)",
            WebkitMaskImage: 'radial-gradient(ellipse 40% 50% at 40% 55%, black 15%, transparent 95%)',
            maskImage: 'radial-gradient(ellipse 40% 50% at 40% 55%, black 15%, transparent 95%)'
          }}
        />
        <div className="max-w-[1300px] mx-auto w-full relative z-10 h-full">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-[150px] md:top-[50%] md:left-[75%] md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col items-start text-left"
          >
            <h1 className="text-[2.5rem] md:text-[3.75rem] font-black text-[#1A1A1A] tracking-tighter leading-[0.9] lowercase">
              <span className="block">{t(content.dates.hero.title1.pt, content.dates.hero.title1.es)}</span>
              <span className="block">{t(content.dates.hero.title2.pt, content.dates.hero.title2.es)}</span>
            </h1>
          </motion.div>
        </div>
        
      </div>

      <div className="py-10 md:py-20 px-6 md:px-12">
        <div className="max-w-4xl md:max-w-[1300px] mx-auto">
          <div className="space-y-16">
            {(() => {
              const groupedDates: { month: string; entries: DateEntry[] }[] = [];
              dates.forEach((date) => {
                const lastGroup = groupedDates[groupedDates.length - 1];
                if (lastGroup && lastGroup.month === date.monthYear) {
                  lastGroup.entries.push(date);
                } else {
                  groupedDates.push({ month: date.monthYear, entries: [date] });
                }
              });

              return groupedDates.map((group, gIdx) => (
                <motion.div 
                  key={gIdx} 
                  {...fadeInUp}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-1 w-12 bg-[#9ab2d4] rounded-full"></div>
                    <h2 className="text-[clamp(2rem,2.5vw,3rem)] font-semibold text-[#1A1A1A] tracking-[-0.03em] leading-[1.1] lowercase">
                      {group.month}
                    </h2>
                  </div>
                  
                  <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    {group.entries.map((entry, idx) => (
                      <motion.div 
                        key={idx} 
                        variants={itemVariants}
                        className="flex items-stretch border border-gray-200 rounded-xl overflow-hidden h-[65px] md:h-20 transition-transform hover:scale-[1.01] shadow-sm"
                      >
                        {/* Left Side: Day and Month */}
                        <div className="w-24 md:w-36 flex flex-col items-center justify-center bg-gray-50 border-r border-gray-200 shrink-0">
                          <span className="text-[#9ab2d4] text-[25px] md:text-4xl font-black tabular-nums leading-none">
                            {entry.day.padStart(2, '0')}
                          </span>
                          <span className="text-gray-400 text-[12px] md:text-xs font-semibold uppercase tracking-widest mt-1">
                            {entry.monthYear.split(',')[0]}
                          </span>
                        </div>

                        {/* Right Side: Event Title and Weekday */}
                        <div className="flex-grow flex items-center justify-center md:justify-start px-6 md:px-10 bg-[#fad062]">
                          <div className="flex flex-col items-start md:items-start text-left md:text-left">
                            <h3 className={`text-black font-semibold text-[14px] md:text-lg tracking-tight leading-tight ${entry.expired ? 'line-through opacity-50' : ''}`}>
                              {entry.events[0].title}
                            </h3>
                            <span className="text-[12px] md:text-[0.75rem] font-semibold text-black/50 mt-1 uppercase tracking-wider">
                              {entry.weekday}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ));
            })()}
          </div>
        </div>
      </div>
  </motion.div>
  );
}
