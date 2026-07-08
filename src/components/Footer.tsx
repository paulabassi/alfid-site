import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram, Mail, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { content } from '../conteudo';

export default function Footer() {
  const { t } = useLanguage();
  const location = useLocation();
  const currentPage = location.pathname;
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const isBeigePage = currentPage === '/programacao';
  
  const categories = [
    {
      title: t(content.footer.category1.pt, content.footer.category1.es),
      links: [
        { id: '/congresso', label: t(content.navbar.congress.pt, content.navbar.congress.es) },
        { id: '/programacao', label: t(content.navbar.schedule.pt, content.navbar.schedule.es) },
        { id: '/datas', label: t(content.navbar.dates.pt, content.navbar.dates.es) },
      ]
    },
    {
      title: t(content.footer.category2.pt, content.footer.category2.es),
      links: [
        { id: '/submissao', label: t(content.navbar.submission.pt, content.navbar.submission.es) },
        ...(content.settings.registrationOpen ? [{ id: '/inscricoes', label: t(content.navbar.registration.pt, content.navbar.registration.es) }] : []),
      ]
    },
    {
      title: t(content.footer.category3.pt, content.footer.category3.es),
      links: [
        { id: '/organizacao', label: t(content.navbar.organization.pt, content.navbar.organization.es) },
        { id: '/alfid', label: t(content.navbar.alfid.pt, content.navbar.alfid.es) },
        { id: '/fotos', label: t(content.navbar.photos.pt, content.navbar.photos.es) },
      ]
    }
  ];

  return (
    <footer className={`bg-[#F5F6F2] text-[#1A1A1A] ${isBeigePage ? '' : 'rounded-t-[40px] mt-16 md:mt-[10px]'} pt-0 md:pt-20 pb-8 px-6 md:px-12 relative font-sans h-auto`}>
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Top Title & Buttons */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mt-[30px] mb-[15px] md:mt-0 md:mb-12">
          <div className="flex items-center gap-3">
            <span className="text-[40px] md:text-5xl font-black text-[#1A1A1A] tracking-tighter transition-all">ALFiD</span>
            <div className="flex flex-col text-[12px] md:text-sm font-bold text-gray-600 leading-tight max-w-[160px] md:max-w-[250px]">
              <span>{t(content.navbar.logoLine1.pt, content.navbar.logoLine1.es)}</span>
              <span>{t(content.navbar.logoLine2.pt, content.navbar.logoLine2.es)}</span>
            </div>
          </div>
          
          {/* Buttons removed as requested */}
        </div>

        {/* Bottom Section: Contact & Social */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 pt-8 border-t border-black/10">
          
          {/* Left: Contact & Copyright */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[16px] font-medium mb-4 text-[#1A1A1A] ml-[5px] md:ml-0">{t(content.footer.contact.pt, content.footer.contact.es)}</h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-3 ml-[5px] md:ml-0">
                  <a 
                    href="https://www.instagram.com/alfideporte" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 md:px-4 md:py-2 md:bg-gradient-to-tr md:from-[#f9ce34] md:via-[#ee2a7b] md:to-[#6228d7] text-[#1A1A1A] md:text-white md:rounded-full hover:opacity-90 transition-all md:shadow-md group"
                  >
                    <Instagram size={20} className="mr-[10px] md:mr-0 md:w-4 md:h-4" />
                    <span className="text-[12px] md:text-[13px] font-bold">{content.footer.instagram.pt}</span>
                  </a>
                  <a 
                    href="https://asociacionlatinafild.wixsite.com/alfid-website" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 md:px-4 md:py-2 md:bg-[#1A1A1A] text-[#1A1A1A] md:text-white md:rounded-full hover:bg-black md:shadow-md transition-all group"
                  >
                    <Globe size={20} className="mr-[10px] md:mr-0 md:w-4 md:h-4" />
                    <span className="text-[12px] md:text-[13px] font-bold">{content.footer.website.pt}</span>
                  </a>
                  <a 
                    href="mailto:alfid.info@gmail.com" 
                    className="flex items-center gap-2 md:px-4 md:py-2 md:bg-[#1A1A1A] text-[#1A1A1A] md:text-white md:rounded-full hover:bg-black md:shadow-md transition-all group"
                  >
                    <Mail size={20} className="mr-[10px] md:mr-0 md:w-4 md:h-4" />
                    <span className="text-[12px] md:text-[13px] font-bold">Email</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-gray-500 text-[12px] font-normal leading-[1.65] tracking-normal hidden md:block">
              <p>{t(content.footer.rights.pt, content.footer.rights.es)}</p>
            </div>
          </div>

          {/* Right: Navigation Links by Categories */}
          <div className="w-full md:w-auto md:pt-2 -mt-[35px] md:mt-0 ml-[5px] md:ml-0">
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-12">
              {categories.map((category) => (
                <div key={category.title}>
                  <h4 className="text-[10px] font-light tracking-widest text-[#1A1A1A] mb-4 opacity-50 uppercase">
                    {category.title}
                  </h4>
                  <div className="flex flex-col gap-3">
                    {category.links.map((link) => (
                      <Link
                        key={link.id}
                        to={link.id}
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`text-left text-[12px] font-normal tracking-widest transition-colors ${
                          currentPage === link.id
                            ? 'text-[#1A1A1A]'
                            : 'text-gray-500 hover:text-[#1A1A1A]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Accordion */}
            <div className="block md:hidden w-full border-t border-black/10 mt-8">
              {categories.map((category) => (
                <div key={category.title} className="border-b border-black/10">
                  <button
                    onClick={() => setOpenCategory(openCategory === category.title ? null : category.title)}
                    className="w-full py-4 flex justify-between items-center text-left"
                  >
                    <span className="text-[12px] font-medium text-[#1A1A1A] tracking-wider">
                      {category.title}
                    </span>
                    <motion.div
                      animate={{ rotate: openCategory === category.title ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} className="text-gray-500" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openCategory === category.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 pb-6 px-2">
                          {category.links.map((link) => (
                            <Link
                              key={link.id}
                              to={link.id}
                              onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className={`text-left text-[12px] font-normal tracking-widest transition-colors ${
                                currentPage === link.id
                                  ? 'text-[#1A1A1A]'
                                  : 'text-gray-500'
                              }`}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Copyright */}
          <div className="text-gray-500 text-sm font-medium block md:hidden mt-4 text-left w-full">
            <p className="text-[11.25px] -mt-[30px] md:mt-0">{t(content.footer.rights.pt, content.footer.rights.es)}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
