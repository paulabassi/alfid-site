import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../conteudo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const currentPage = location.pathname;

  const navItems = [
    { id: '/', label: t(content.navbar.home.pt, content.navbar.home.es) },
    { id: '/congresso', label: t(content.navbar.congress.pt, content.navbar.congress.es) },
    { id: '/datas', label: t(content.navbar.dates.pt, content.navbar.dates.es) },
    { id: '/programacao', label: t(content.navbar.schedule.pt, content.navbar.schedule.es) },
    { id: '/submissao', label: t(content.navbar.submission.pt, content.navbar.submission.es) },
    ...(content.settings.registrationOpen ? [{ id: '/inscricoes', label: t(content.navbar.registration.pt, content.navbar.registration.es) }] : []),
    ...(content.settings.showNavbarSpeakersLink ? [{ id: '/palestrantes', label: t(content.navbar.speakers.pt, content.navbar.speakers.es) }] : []),
    ...(content.settings.showNavbarOrganizationLink ? [{ id: '/organizacao', label: t(content.navbar.organization.pt, content.navbar.organization.es) }] : []),
    ...(content.settings.showNavbarPhotosLink ? [{ id: '/fotos', label: t(content.navbar.photos.pt, content.navbar.photos.es) }] : []),
    ...(content.settings.showNavbarAlfidLink ? [{ id: '/alfid', label: t(content.navbar.alfid.pt, content.navbar.alfid.es) }] : []),
  ];

  return (
    <nav className="absolute top-8 left-8 right-8 flex items-center z-50 pointer-events-none">
      {/* Logo / Brand */}
      <Link 
        to="/"
        className="flex items-center gap-3 cursor-pointer pointer-events-auto relative z-50 shrink-0 mt-[10px] md:mt-0" 
        onClick={() => setIsMenuOpen(false)}
      >
        <span className="text-[28px] md:text-4xl font-black text-[#1A1A1A] tracking-tighter">ALFiD</span>
        <div className="flex flex-col text-[0.55rem] md:text-xs font-bold text-gray-600 leading-tight max-w-[130px] md:max-w-[220px]">
          <span className="text-[10px] md:text-inherit ml-[-5px] md:ml-0">{t(content.navbar.logoLine1.pt, content.navbar.logoLine1.es)}</span>
          <span className="text-[10px] md:text-inherit ml-[-5px] md:ml-0">{t(content.navbar.logoLine2.pt, content.navbar.logoLine2.es)}</span>
        </div>
      </Link>
      
      {/* Desktop Nav Links - Centered in the remaining space */}
      <div className="hidden xl:flex flex-1 justify-center items-center gap-5 pointer-events-auto">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            className={`text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${
              currentPage === item.id
                ? 'text-[#1A1A1A] border-b-2 border-[#1A1A1A]'
                : 'text-gray-500 hover:text-[#1A1A1A]'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Language Toggle */}
      <div className="hidden xl:flex items-center ml-4 pointer-events-auto">
        <div className="relative flex items-center bg-transparent p-1 rounded-full border border-black/10">
          <div 
            className="absolute h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full transition-all duration-[250ms] ease-in-out"
            style={{
              left: '4px',
              transform: language === 'pt' ? 'translateX(0)' : 'translateX(100%)',
              backgroundColor: language === 'pt' ? '#007cc2' : '#dd127b'
            }}
          />
          <button
            onClick={() => setLanguage('pt')}
            className={`relative z-10 text-[0.625rem] font-bold px-3 py-1.5 rounded-full transition-colors duration-250 ${
              language === 'pt' ? 'text-white' : 'text-gray-500 hover:text-[#1A1A1A]'
            }`}
          >
            PT
          </button>
          <button
            onClick={() => setLanguage('es')}
            className={`relative z-10 text-[0.625rem] font-bold px-3 py-1.5 rounded-full transition-colors duration-250 ${
              language === 'es' ? 'text-white' : 'text-gray-500 hover:text-[#1A1A1A]'
            }`}
          >
            ES
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="flex xl:hidden pointer-events-auto relative z-50 ml-[12px] mt-[6px] xl:ml-auto gap-2 items-center w-[122.203px] text-[14px] md:w-auto md:text-inherit">
        <div className="relative flex items-center bg-transparent p-1 rounded-full border border-black/10 mr-0 md:mr-2 text-[14px] md:text-inherit">
          <div 
            className="absolute h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full transition-all duration-[250ms] ease-in-out"
            style={{
              left: '4px',
              transform: language === 'pt' ? 'translateX(0)' : 'translateX(100%)',
              backgroundColor: language === 'pt' ? '#007cc2' : '#dd127b'
            }}
          />
          <button
            onClick={() => setLanguage('pt')}
            className={`relative z-10 text-[8px] md:text-[0.625rem] font-bold px-3 py-1.5 rounded-full transition-colors duration-250 ${
              language === 'pt' ? 'text-white' : 'text-gray-500 hover:text-[#1A1A1A]'
            }`}
          >
            PT
          </button>
          <button
            onClick={() => setLanguage('es')}
            className={`relative z-10 text-[8px] md:text-[0.625rem] font-bold px-3 py-1.5 rounded-full transition-colors duration-250 ${
              language === 'es' ? 'text-white' : 'text-gray-500 hover:text-[#1A1A1A]'
            }`}
          >
            ES
          </button>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 ml-[-6px] mr-0 text-[#1A1A1A] hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-4 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 flex flex-col gap-2 xl:hidden pointer-events-auto z-40 w-[240px]">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              onClick={() => setIsMenuOpen(false)}
              className={`text-left py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors ${
                currentPage === item.id
                  ? 'bg-[#f5f6f2] text-[#1A1A1A]'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-[#1A1A1A]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
