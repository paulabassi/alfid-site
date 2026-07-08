import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import InterwindSpinner from '../components/InterwindSpinner';
import { content } from '../conteudo';

export default function Schedule() {
  const { t } = useLanguage();
  const [activeDay, setActiveDay] = useState(0);

  useEffect(() => {
    document.title = content.schedule.documentTitle;
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Simple Centered Header */}
      <div className="relative h-[40vh] md:h-[60vh] bg-[#f5f6f2] overflow-hidden flex flex-col rounded-b-[40px] justify-center pt-32 pb-16 px-6 md:px-12 text-center">
        <div className="max-w-[1300px] mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 md:gap-8"
          >
            <InterwindSpinner className="w-16 h-16 md:w-24 md:h-24 shrink-0" />
            <h1 className="text-[2.5rem] md:text-[3.75rem] font-black text-[#1A1A1A] tracking-tighter leading-none lowercase">
              {t(content.schedule.hero.title.pt, content.schedule.hero.title.es)}
            </h1>
          </motion.div>
        </div>
      </div>

      {content.settings.showDetailedSchedule && content.schedule.days && content.schedule.days.length > 0 ? (
        <div className="max-w-[1000px] mx-auto px-6 py-16 md:py-24">
          {/* Day Selector Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {content.schedule.days.map((day, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDay(idx)}
                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-sm border ${
                  activeDay === idx
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-white text-[#1A1A1A] hover:bg-gray-50 border-gray-200'
                }`}
              >
                {t(day.date.pt, day.date.es)}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative border-l border-gray-200 pl-6 md:pl-8 ml-4 md:ml-6 space-y-12 animate-fade-in">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="space-y-8"
              >
                {content.schedule.days[activeDay].events.map((event, index) => (
                  <div key={index} className="relative group">
                    {/* Event Node Dot on the timeline */}
                    <div className="absolute -left-[31px] md:-left-[39px] top-6 w-4 h-4 rounded-full bg-[#fad062] border-4 border-white group-hover:scale-125 group-hover:bg-[#f7a36a] transition-all duration-300" />

                    <div className="bg-[#f5f6f2] hover:bg-white hover:border-[#9ab2d4] border border-transparent p-6 rounded-[28px] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                      {/* Time Column */}
                      <div className="md:w-32 shrink-0">
                        <span className="inline-block bg-white text-[#1A1A1A] font-black text-xs px-3 py-1.5 rounded-full border border-gray-200/50">
                          {event.time}
                        </span>
                      </div>

                      {/* Content Column */}
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-bold text-[#1A1A1A] tracking-tight lowercase">
                          {t(event.title.pt, event.title.es)}
                        </h3>
                        {event.description && (
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {t(event.description.pt, event.description.es)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ) : (
        /* White Section Below - Only the text */
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-10 md:py-20 px-6 md:px-12 bg-white flex flex-col items-center text-center"
        >
          {/* Coming Soon Dots Animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-10 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-base font-medium text-gray-500 tracking-tighter">{t(content.schedule.construction.pt, content.schedule.construction.es)}</span>
              <div className="flex items-center gap-6">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                  className="w-5 h-5 rounded-full bg-[#9ab2d4]"
                ></motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  className="w-5 h-5 rounded-full bg-[#fad062]"
                ></motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  className="w-5 h-5 rounded-full bg-[#f7a36a]"
                ></motion.div>
              </div>
            </div>
          </motion.div>

          <p className="text-[clamp(1rem,1.1vw,1.125rem)] text-gray-600 font-normal max-w-2xl leading-[1.65] tracking-normal">
            {t(content.schedule.description.pt, content.schedule.description.es)}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
