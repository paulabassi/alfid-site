import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Camera, Calendar, MapPin, Sparkles, Image as ImageIcon, FileText, ExternalLink } from 'lucide-react';
import BolinhasAnimadas from '../components/BolinhasAnimadas';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../conteudo';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

export default function Fotos() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = content.photos.documentTitle;
  }, []);

  const albums = [
    {
      title: t(content.photos.events.title1.pt, content.photos.events.title1.es),
      year: "2018",
      location: "São Paulo, Brasil",
      gradient: "from-[#007cc2]/10 to-[#007cc2]/30",
      accent: "#007cc2",
      icon: Camera,
      image: "/images/decorative/alfid-2018.webp",
      photosLink: "https://drive.google.com/drive/folders/1mQqrrrgb-EGNubF46eBH2a-ezMKbYhxI?usp=sharing",
      bookLink: {
        url: "https://drive.google.com/file/d/1ndEUO8TtG_qKF8zvOggalmJvBQr6GhDn/view?usp=drive_link",
        label: {
          pt: "Caderno de Resumos",
          es: "Cuaderno de Resúmenes"
        }
      }
    },
    {
      title: t(content.photos.events.title2.pt, content.photos.events.title2.es),
      year: "2024",
      location: "Salamanca, Espanha",
      gradient: "from-[#dd127b]/10 to-[#dd127b]/30",
      accent: "#dd127b",
      icon: Sparkles,
      image: "/images/decorative/alfid-2024.webp",
      photosLink: "https://drive.google.com/drive/folders/1GVDpw0udigvXtHdV4G0lDvd0qxKGE0c2?usp=drive_link"
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
      <div className="relative h-[40vh] md:h-[60vh] bg-[#F5F6F2] overflow-hidden flex flex-col rounded-b-[40px]">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[85%] md:w-[48%] bg-contain bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('/images/decorative/bg-fotos.webp')",
            WebkitMaskImage: 'radial-gradient(ellipse 55% 40% at 50% 50%, black 20%, transparent 95%)',
            maskImage: 'radial-gradient(ellipse 55% 40% at 50% 50%, black 20%, transparent 95%)'
          }}
        />
        <div className="relative z-20 max-w-[1300px] w-full mx-auto px-6 pt-[120px] md:pt-[140px] lg:pt-[160px] flex-grow flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl lg:max-w-4xl flex flex-col justify-center items-start text-left pb-12 md:pb-20 relative z-10"
          >
            <h1 className="text-[2.5rem] md:text-[3.75rem] font-black text-[#1A1A1A] tracking-tighter leading-[1.05] md:leading-[0.85] lowercase flex flex-col items-start">
              <span className="text-[#1A1A1A] max-w-full text-left">{t(content.photos.hero.title2.pt, content.photos.hero.title2.es)}</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {albums.map((album, index) => {
              const Icon = album.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group flex flex-col bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Visual Cover Image / Placeholder */}
                  <div className="relative h-64 md:h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
                    {album.image ? (
                      <>
                        <img 
                          src={album.image} 
                          alt={album.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        {/* Overlay to ensure nice contrast/integration */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                      </>
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${album.gradient}`} />
                    )}
                    
                    {/* Background Graphic Grid */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    {/* Decorative Circle floating behind */}
                    {!album.image && (
                      <div className="absolute w-40 h-40 rounded-full blur-2xl opacity-40 mix-blend-multiply transition-transform duration-700 group-hover:scale-125" style={{ backgroundColor: album.accent }} />
                    )}
                  </div>

                  {/* Album details */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {/* Year badge */}
                      <span className="flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                        <Calendar size={13} />
                        {album.year}
                      </span>
                      {/* Location badge */}
                      <span className="flex items-center gap-1.5 text-xs font-bold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                        <MapPin size={13} />
                        {album.location}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] tracking-tight mb-4 group-hover:text-gray-700 transition-colors">
                      {album.title}
                    </h3>

                    {/* Action buttons */}
                    <div className="mt-2 mb-6 flex flex-wrap gap-3">
                      {album.photosLink && (
                        <a
                          href={album.photosLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-semibold rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer"
                          style={{ backgroundColor: album.accent }}
                        >
                          <ImageIcon size={16} />
                          <span>{t("Ver Fotos", "Ver Fotos")}</span>
                          <ExternalLink size={14} className="ml-0.5 opacity-80" />
                        </a>
                      )}

                      {album.bookLink && (
                        <a
                          href={album.bookLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-2xl transition-all duration-300 active:scale-[0.98] cursor-pointer"
                        >
                          <FileText size={16} />
                          <span>{t(album.bookLink.label.pt, album.bookLink.label.es)}</span>
                          <ExternalLink size={14} className="ml-0.5 opacity-80" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
