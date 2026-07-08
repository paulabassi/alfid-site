import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import SetaDiagonal from '../components/SetaDiagonal';
import SubmissionHeroTitle from '../components/SubmissionHeroTitle';
import { X, Download, Info } from 'lucide-react';
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

export default function Submission() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedLang, setSelectedLang] = useState<string | null>(null);

  useEffect(() => {
    document.title = content.submission.documentTitle;
  }, []);

  const themes = [
    t(content.submission.themes.list[0].pt, content.submission.themes.list[0].es), 
    t(content.submission.themes.list[1].pt, content.submission.themes.list[1].es), 
    t(content.submission.themes.list[2].pt, content.submission.themes.list[2].es),
    t(content.submission.themes.list[3].pt, content.submission.themes.list[3].es), 
    t(content.submission.themes.list[4].pt, content.submission.themes.list[4].es), 
    t(content.submission.themes.list[5].pt, content.submission.themes.list[5].es),
    t(content.submission.themes.list[6].pt, content.submission.themes.list[6].es), 
    t(content.submission.themes.list[7].pt, content.submission.themes.list[7].es), 
    t(content.submission.themes.list[8].pt, content.submission.themes.list[8].es),
    t(content.submission.themes.list[9].pt, content.submission.themes.list[9].es), 
    t(content.submission.themes.list[10].pt, content.submission.themes.list[10].es), 
    t(content.submission.themes.list[11].pt, content.submission.themes.list[11].es),
    t(content.submission.themes.list[12].pt, content.submission.themes.list[12].es), 
    t(content.submission.themes.list[13].pt, content.submission.themes.list[13].es), 
    t(content.submission.themes.list[14].pt, content.submission.themes.list[14].es),
    t(content.submission.themes.list[15].pt, content.submission.themes.list[15].es), 
    t(content.submission.themes.list[16].pt, content.submission.themes.list[16].es)
  ];

  const languages = [
    {
      id: 'pt',
      name: 'Português',
      instruction: t(content.submission.guidelines.languages.pt.instruction.pt, content.submission.guidelines.languages.pt.instruction.es),
      buttonText: t(content.submission.guidelines.languages.pt.buttonText.pt, content.submission.guidelines.languages.pt.buttonText.es),
      closeText: t(content.submission.guidelines.languages.pt.closeText.pt, content.submission.guidelines.languages.pt.closeText.es),
      downloadText: t(content.submission.guidelines.languages.pt.downloadText.pt, content.submission.guidelines.languages.pt.downloadText.es),
      downloadPath: '/images/download/_Portugues - Convocatória para submissão de resumos V congresso ALFID 2026.docx (1).pdf',
      bgColor: '#9ab2d4',
      textColor: 'text-white',
      subTextColor: 'text-white/90',
      content: (
        <div className="space-y-6 text-[#1A1A1A]">
          <p className="font-bold text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] tracking-normal">{t(content.submission.guidelines.languages.pt.content.p1_bold.pt, content.submission.guidelines.languages.pt.content.p1_bold.es)}</p>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.pt.content.p2.pt, content.submission.guidelines.languages.pt.content.p2.es)}
          </p>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.pt.content.p3.pt, content.submission.guidelines.languages.pt.content.p3.es)}
          </p>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.pt.content.p4.pt, content.submission.guidelines.languages.pt.content.p4.es)}
          </p>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.pt.content.p5.pt, content.submission.guidelines.languages.pt.content.p5.es)}
          </p>

          <h4 className="text-xl font-black lowercase tracking-tighter pt-4">{t(content.submission.guidelines.languages.pt.content.format_title.pt, content.submission.guidelines.languages.pt.content.format_title.es)}</h4>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.pt.content.format_p1.pt, content.submission.guidelines.languages.pt.content.format_p1.es)}
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>{t(content.submission.guidelines.languages.pt.content.format_list[0].pt, content.submission.guidelines.languages.pt.content.format_list[0].es)}</li>
            <li>{t(content.submission.guidelines.languages.pt.content.format_list[1].pt, content.submission.guidelines.languages.pt.content.format_list[1].es)}</li>
            <li>{t(content.submission.guidelines.languages.pt.content.format_list[2].pt, content.submission.guidelines.languages.pt.content.format_list[2].es)}</li>
            <li>{t(content.submission.guidelines.languages.pt.content.format_list[3].pt, content.submission.guidelines.languages.pt.content.format_list[3].es)}</li>
            <li>{t(content.submission.guidelines.languages.pt.content.format_list[4].pt, content.submission.guidelines.languages.pt.content.format_list[4].es)}</li>
            <li>{t(content.submission.guidelines.languages.pt.content.format_list[5].pt, content.submission.guidelines.languages.pt.content.format_list[5].es)}</li>
          </ol>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm font-medium pt-2">
            {themes.map((theme, i) => (
              <li key={i}>• {theme}</li>
            ))}
          </ul>

          <h4 className="text-xl font-black lowercase tracking-tighter pt-4">{t(content.submission.guidelines.languages.pt.content.submission_title.pt, content.submission.guidelines.languages.pt.content.submission_title.es)}</h4>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.pt.content.submission_p1.pt, content.submission.guidelines.languages.pt.content.submission_p1.es)}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t(content.submission.guidelines.languages.pt.content.submission_list[0].pt, content.submission.guidelines.languages.pt.content.submission_list[0].es)}</li>
            <li>{t(content.submission.guidelines.languages.pt.content.submission_list[1].pt, content.submission.guidelines.languages.pt.content.submission_list[1].es)}</li>
          </ul>

          <p className="text-sm italic opacity-70">
            {t(content.submission.guidelines.languages.pt.content.additional_info.pt, content.submission.guidelines.languages.pt.content.additional_info.es)}
          </p>
        </div>
      )
    },
    {
      id: 'es',
      name: 'Espanhol',
      instruction: t(content.submission.guidelines.languages.es.instruction.pt, content.submission.guidelines.languages.es.instruction.es),
      buttonText: t(content.submission.guidelines.languages.es.buttonText.pt, content.submission.guidelines.languages.es.buttonText.es),
      closeText: t(content.submission.guidelines.languages.es.closeText.pt, content.submission.guidelines.languages.es.closeText.es),
      downloadText: t(content.submission.guidelines.languages.es.downloadText.pt, content.submission.guidelines.languages.es.downloadText.es),
      downloadPath: '/images/download/_Español - Convocatoria para la presentación de resúmenes V Congreso ALFID 2026.docx (2).pdf',
      bgColor: '#fad062',
      textColor: 'text-[#1A1A1A]',
      subTextColor: 'text-[#1A1A1A]/80',
      content: (
        <div className="space-y-6 text-[#1A1A1A]">
          <p className="font-bold text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] tracking-normal">{t(content.submission.guidelines.languages.es.content.p1_bold.pt, content.submission.guidelines.languages.es.content.p1_bold.es)}</p>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.es.content.p2.pt, content.submission.guidelines.languages.es.content.p2.es)}
          </p>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.es.content.p3.pt, content.submission.guidelines.languages.es.content.p3.es)}
          </p>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.es.content.p4.pt, content.submission.guidelines.languages.es.content.p4.es)}
          </p>

          <h4 className="text-xl font-black lowercase tracking-tighter pt-4">{t(content.submission.guidelines.languages.es.content.format_title.pt, content.submission.guidelines.languages.es.content.format_title.es)}</h4>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.es.content.format_p1.pt, content.submission.guidelines.languages.es.content.format_p1.es)}
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>{t(content.submission.guidelines.languages.es.content.format_list[0].pt, content.submission.guidelines.languages.es.content.format_list[0].es)}</li>
            <li>{t(content.submission.guidelines.languages.es.content.format_list[1].pt, content.submission.guidelines.languages.es.content.format_list[1].es)}</li>
            <li>{t(content.submission.guidelines.languages.es.content.format_list[2].pt, content.submission.guidelines.languages.es.content.format_list[2].es)}</li>
            <li>{t(content.submission.guidelines.languages.es.content.format_list[3].pt, content.submission.guidelines.languages.es.content.format_list[3].es)}</li>
            <li>{t(content.submission.guidelines.languages.es.content.format_list[4].pt, content.submission.guidelines.languages.es.content.format_list[4].es)}</li>
            <li>{t(content.submission.guidelines.languages.es.content.format_list[5].pt, content.submission.guidelines.languages.es.content.format_list[5].es)}</li>
          </ol>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm font-medium pt-2">
            {themes.map((theme, i) => (
              <li key={i}>• {theme}</li>
            ))}
          </ul>

          <h4 className="text-xl font-black lowercase tracking-tighter pt-4">{t(content.submission.guidelines.languages.es.content.submission_title.pt, content.submission.guidelines.languages.es.content.submission_title.es)}</h4>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.es.content.submission_p1.pt, content.submission.guidelines.languages.es.content.submission_p1.es)}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t(content.submission.guidelines.languages.es.content.submission_list[0].pt, content.submission.guidelines.languages.es.content.submission_list[0].es)}</li>
            <li>{t(content.submission.guidelines.languages.es.content.submission_list[1].pt, content.submission.guidelines.languages.es.content.submission_list[1].es)}</li>
          </ul>
          <p className="text-sm italic opacity-70">
            {t(content.submission.guidelines.languages.es.content.additional_info.pt, content.submission.guidelines.languages.es.content.additional_info.es)}
          </p>
        </div>
      )
    },
    {
      id: 'fr',
      name: 'Francês',
      instruction: t(content.submission.guidelines.languages.fr.instruction.pt, content.submission.guidelines.languages.fr.instruction.es),
      buttonText: t(content.submission.guidelines.languages.fr.buttonText.pt, content.submission.guidelines.languages.fr.buttonText.es),
      closeText: t(content.submission.guidelines.languages.fr.closeText.pt, content.submission.guidelines.languages.fr.closeText.es),
      downloadText: t(content.submission.guidelines.languages.fr.downloadText.pt, content.submission.guidelines.languages.fr.downloadText.es),
      downloadPath: '/images/download/_Français - Appel à soumission de résumés V congrès ALFID 2026.docx.pdf',
      bgColor: '#56ad84',
      textColor: 'text-white',
      subTextColor: 'text-white/90',
      content: (
        <div className="space-y-6 text-[#1A1A1A]">
          <p className="font-bold text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] tracking-normal">{t(content.submission.guidelines.languages.fr.content.p1_bold.pt, content.submission.guidelines.languages.fr.content.p1_bold.es)}</p>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.fr.content.p2.pt, content.submission.guidelines.languages.fr.content.p2.es)}
          </p>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.fr.content.p3.pt, content.submission.guidelines.languages.fr.content.p3.es)}
          </p>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.fr.content.p4.pt, content.submission.guidelines.languages.fr.content.p4.es)}
          </p>

          <h4 className="text-xl font-black lowercase tracking-tighter pt-4">{t(content.submission.guidelines.languages.fr.content.format_title.pt, content.submission.guidelines.languages.fr.content.format_title.es)}</h4>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.fr.content.format_p1.pt, content.submission.guidelines.languages.fr.content.format_p1.es)}
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>{t(content.submission.guidelines.languages.fr.content.format_list[0].pt, content.submission.guidelines.languages.fr.content.format_list[0].es)}</li>
            <li>{t(content.submission.guidelines.languages.fr.content.format_list[1].pt, content.submission.guidelines.languages.fr.content.format_list[1].es)}</li>
            <li>{t(content.submission.guidelines.languages.fr.content.format_list[2].pt, content.submission.guidelines.languages.fr.content.format_list[2].es)}</li>
            <li>{t(content.submission.guidelines.languages.fr.content.format_list[3].pt, content.submission.guidelines.languages.fr.content.format_list[3].es)}</li>
            <li>{t(content.submission.guidelines.languages.fr.content.format_list[4].pt, content.submission.guidelines.languages.fr.content.format_list[4].es)}</li>
            <li>{t(content.submission.guidelines.languages.fr.content.format_list[5].pt, content.submission.guidelines.languages.fr.content.format_list[5].es)}</li>
          </ol>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm font-medium pt-2">
            {themes.map((theme, i) => (
              <li key={i}>• {theme}</li>
            ))}
          </ul>

          <h4 className="text-xl font-black lowercase tracking-tighter pt-4">{t(content.submission.guidelines.languages.fr.content.submission_title.pt, content.submission.guidelines.languages.fr.content.submission_title.es)}</h4>
          <p>
            {t(content.submission.guidelines.languages.fr.content.submission_p1.pt, content.submission.guidelines.languages.fr.content.submission_p1.es)}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t(content.submission.guidelines.languages.fr.content.submission_list[0].pt, content.submission.guidelines.languages.fr.content.submission_list[0].es)}</li>
            <li>{t(content.submission.guidelines.languages.fr.content.submission_list[1].pt, content.submission.guidelines.languages.fr.content.submission_list[1].es)}</li>
          </ul>
          <p className="text-sm italic opacity-70">
            {t(content.submission.guidelines.languages.fr.content.additional_info.pt, content.submission.guidelines.languages.fr.content.additional_info.es)}
          </p>
        </div>
      )
    },
    {
      id: 'it',
      name: 'Italiano',
      instruction: t(content.submission.guidelines.languages.it.instruction.pt, content.submission.guidelines.languages.it.instruction.es),
      buttonText: t(content.submission.guidelines.languages.it.buttonText.pt, content.submission.guidelines.languages.it.buttonText.es),
      closeText: t(content.submission.guidelines.languages.it.closeText.pt, content.submission.guidelines.languages.it.closeText.es),
      downloadText: t(content.submission.guidelines.languages.it.downloadText.pt, content.submission.guidelines.languages.it.downloadText.es),
      downloadPath: '/images/download/_Italiano - Convocazione per la presentazione degli abstract al V congresso ALFID 2026.docx.pdf',
      bgColor: '#f7a36a',
      textColor: 'text-white',
      subTextColor: 'text-white/90',
      content: (
        <div className="space-y-6 text-[#1A1A1A]">
          <p className="font-bold text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] tracking-normal">{t(content.submission.guidelines.languages.it.content.p1_bold.pt, content.submission.guidelines.languages.it.content.p1_bold.es)}</p>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.it.content.p2.pt, content.submission.guidelines.languages.it.content.p2.es)}
          </p>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.it.content.p3.pt, content.submission.guidelines.languages.it.content.p3.es)}
          </p>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.it.content.p4.pt, content.submission.guidelines.languages.it.content.p4.es)}
          </p>

          <h4 className="text-xl font-black lowercase tracking-tighter pt-4">{t(content.submission.guidelines.languages.it.content.format_title.pt, content.submission.guidelines.languages.it.content.format_title.es)}</h4>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal">
            {t(content.submission.guidelines.languages.it.content.format_p1.pt, content.submission.guidelines.languages.it.content.format_p1.es)}
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>{t(content.submission.guidelines.languages.it.content.format_list[0].pt, content.submission.guidelines.languages.it.content.format_list[0].es)}</li>
            <li>{t(content.submission.guidelines.languages.it.content.format_list[1].pt, content.submission.guidelines.languages.it.content.format_list[1].es)}</li>
            <li>{t(content.submission.guidelines.languages.it.content.format_list[2].pt, content.submission.guidelines.languages.it.content.format_list[2].es)}</li>
            <li>{t(content.submission.guidelines.languages.it.content.format_list[3].pt, content.submission.guidelines.languages.it.content.format_list[3].es)}</li>
            <li>{t(content.submission.guidelines.languages.it.content.format_list[4].pt, content.submission.guidelines.languages.it.content.format_list[4].es)}</li>
            <li>{t(content.submission.guidelines.languages.it.content.format_list[5].pt, content.submission.guidelines.languages.it.content.format_list[5].es)}</li>
          </ol>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm font-medium pt-2">
            {themes.map((theme, i) => (
              <li key={i}>• {theme}</li>
            ))}
          </ul>

          <h4 className="text-xl font-black lowercase tracking-tighter pt-4">{t(content.submission.guidelines.languages.it.content.submission_title.pt, content.submission.guidelines.languages.it.content.submission_title.es)}</h4>
          <p>
            {t(content.submission.guidelines.languages.it.content.submission_p1.pt, content.submission.guidelines.languages.it.content.submission_p1.es)}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t(content.submission.guidelines.languages.it.content.submission_list[0].pt, content.submission.guidelines.languages.it.content.submission_list[0].es)}</li>
            <li>{t(content.submission.guidelines.languages.it.content.submission_list[1].pt, content.submission.guidelines.languages.it.content.submission_list[1].es)}</li>
          </ul>
          <p className="text-sm italic opacity-70">
            {t(content.submission.guidelines.languages.it.content.additional_info.pt, content.submission.guidelines.languages.it.content.additional_info.es)}
          </p>
        </div>
      )
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
      <div className="relative h-[40vh] md:h-[60vh] bg-[#F5F6F2] overflow-hidden flex flex-col rounded-b-[40px] justify-center pt-32 pb-16 px-6 md:px-0">
        {/* Background Image Layer */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-cover bg-no-repeat hidden md:block [--mask-pos-x:50%] [--mask-pos-y:50%] md:[--mask-pos-x:60%] md:[--mask-pos-y:55%]"
          style={{ 
            backgroundImage: "url('/images/decorative/rio.webp')",
            backgroundPosition: "center",
            WebkitMaskImage: 'radial-gradient(ellipse 50% 60% at var(--mask-pos-x) var(--mask-pos-y), black 10%, transparent 70%)',
            maskImage: 'radial-gradient(ellipse 50% 60% at var(--mask-pos-x) var(--mask-pos-y), black 10%, transparent 70%)'
          } as React.CSSProperties}
        />
        <div className="max-w-[1300px] mx-auto md:mx-0 md:ml-[12%] w-full relative z-10 md:pr-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <SubmissionHeroTitle />
          </motion.div>

          {/* Introduction */}
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 py-10 md:pt-10 md:pb-20 space-y-16">
          
          {/* Themes */}
          {content.settings.showSubmissionThemesSection && (
            <section className="text-left">
              <motion.div
                {...fadeInUp}
                className="mb-6 md:mb-8 bg-[#fad062]/20 border border-[#fad062] px-6 py-3 rounded-2xl md:rounded-full flex items-center gap-3 w-fit mx-auto"
              >
                <Info size={20} className="text-[#1A1A1A] shrink-0 self-start mt-0.5 md:self-center md:mt-0" />
                <p className="text-[#1A1A1A] font-medium text-base text-left">
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
              <motion.h2 
                {...fadeInUp}
                className="text-[24px] md:text-[clamp(2rem,2.5vw,3rem)] font-bold text-[#1A1A1A] mb-8 tracking-[-0.03em] leading-[1.1] lowercase text-left"
              >
                {t(content.submission.themes.title.pt, content.submission.themes.title.es)}
              </motion.h2>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-2 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-4"
              >
                {themes.map((theme, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="flex items-center gap-3 p-3 sm:p-4 bg-white border border-gray-200 rounded-xl hover:border-[#9ab2d4] transition-colors group w-fit sm:w-auto"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#fad062] group-hover:bg-[#9ab2d4] transition-colors shrink-0" />
                    <span className="text-gray-700 font-bold text-xs sm:text-sm uppercase tracking-tight">{theme}</span>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          )}

          {/* Criteria */}
          <motion.section 
            {...fadeInUp}
            className="bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100"
          >
            <h2 className="text-[clamp(2rem,2.5vw,3rem)] font-bold text-[#1A1A1A] mb-6 tracking-[-0.03em] leading-[1.1] lowercase">
              {t(content.submission.criteria.title.pt, content.submission.criteria.title.es)}
            </h2>
            <p className="text-[clamp(1rem,1.1vw,1.125rem)] text-gray-700 leading-[1.65] tracking-normal font-normal">
              {t(content.submission.criteria.description.pt, content.submission.criteria.description.es)}
            </p>
          </motion.section>

          {/* Rules and Formatting */}
          {content.settings.showSubmissionGuidelinesSection && (
            <section id="guidelines">
              <motion.h2 
                {...fadeInUp}
                className="text-[24px] w-[312px] md:w-auto md:text-[clamp(2rem,2.5vw,3rem)] font-bold text-[#1A1A1A] mb-8 tracking-[-0.03em] leading-[1.1] lowercase"
              >
                {t(content.submission.guidelines.title.pt, content.submission.guidelines.title.es)}
              </motion.h2>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.id}
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setSelectedLang(lang.name)}
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : hoveredIndex !== null ? 0.95 : 1,
                      opacity: hoveredIndex === index ? 1 : hoveredIndex !== null ? 0.6 : 1,
                      zIndex: hoveredIndex === index ? 10 : 1
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative flex flex-col p-8 rounded-[40px] h-[200px] md:h-[320px] ${lang.id === 'fr' ? 'w-[318px] md:w-auto' : ''} shadow-sm hover:shadow-xl overflow-hidden cursor-pointer`}
                    style={{ backgroundColor: lang.bgColor }}
                  >
                    <div className="flex flex-col">
                      <span className={`${lang.textColor} text-[2rem] md:text-[3.5rem] font-black lowercase tracking-tighter leading-none mb-2`}>
                        {lang.id}
                      </span>
                      <span className={`${lang.subTextColor} font-bold text-base lowercase leading-tight ${lang.id === 'fr' ? 'w-[300px] md:max-w-[140px]' : 'max-w-[140px]'}`}>
                        {lang.instruction}
                      </span>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="w-full bg-[#F5F6F2] group-hover:bg-white text-[#1A1A1A] font-black py-4 rounded-3xl text-sm lowercase tracking-tight transition-all duration-300 shadow-sm text-center">
                        {lang.buttonText}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          )}

          {/* Call to Action */}
          {content.settings.showSubmissionCtaSection && (
            <motion.section 
              {...fadeInUp}
              className="flex flex-col items-center text-center bg-[#F5F6F2] text-[#1A1A1A] p-12 rounded-[40px] border border-gray-200 relative overflow-hidden"
            >
              {/* Animated Circles Pattern */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {[
                  { color: '#9ab2d4', top: '10%', left: '15%', delay: 0 },
                  { color: '#f7a36a', top: '25%', left: '75%', delay: 1.5 },
                  { color: '#56ad84', top: '65%', left: '10%', delay: 0.8 },
                  { color: '#fad062', top: '80%', left: '85%', delay: 2.2 },
                  { color: '#f5a1c3', top: '45%', left: '45%', delay: 1.2 },
                  { color: '#9ab2d4', top: '15%', left: '60%', delay: 3.0 },
                  { color: '#f7a36a', top: '70%', left: '30%', delay: 0.5 },
                  { color: '#56ad84', top: '40%', left: '80%', delay: 1.8 },
                  { color: '#fad062', top: '55%', left: '20%', delay: 2.5 },
                  { color: '#f5a1c3', top: '85%', left: '55%', delay: 0.3 },
                  { color: '#9ab2d4', top: '5%', left: '40%', delay: 2.0 },
                  { color: '#f7a36a', top: '50%', left: '5%', delay: 1.0 },
                ].map((circle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-[60px] h-[60px] rounded-full"
                    style={{ 
                      backgroundColor: circle.color,
                      top: circle.top,
                      left: circle.left,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: circle.delay,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
              
               <h2 className="text-[24px] w-[240px] md:w-auto text-[clamp(2rem,2.5vw,2.5rem)] font-bold mb-4 relative z-10 tracking-[-0.03em] leading-[1.1] lowercase">
                 {t(content.submission.cta_section.title.pt, content.submission.cta_section.title.es)}
               </h2>
               <p className="text-gray-600 max-w-2xl relative z-10 text-[clamp(1rem,1.1vw,1.125rem)] font-normal leading-[1.65] tracking-normal mb-8 whitespace-pre-line">
                 {t(content.submission.cta_section.description.pt, content.submission.cta_section.description.es)}
               </p>
   
               {!content.submission.cta_section.hide && (
                 <motion.a 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   href={content.submission.cta_section.link}
                   className="relative z-10 bg-[#f7a36a] text-white font-bold text-sm py-4 px-12 rounded-full hover:bg-[#e69259] transition-all shadow-lg uppercase tracking-wider flex items-center gap-3"
                 >
                   {t(content.submission.cta_section.button.pt, content.submission.cta_section.button.es)}
                   <SetaDiagonal size={16} color="white" animated={true} />
                 </motion.a>
               )}
            </motion.section>
          )}
        </div>

      {/* Language Modal */}
      <AnimatePresence>
        {selectedLang && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLang(null)}
              className="absolute inset-0 bg-[#1A1A1A]/40 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-3xl bg-[#F5F6F2] rounded-[40px] p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedLang(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-200 transition-colors z-20"
              >
                <X size={24} className="text-[#1A1A1A]" />
              </button>

              <div className="space-y-6">
                <div className="max-w-none">
                  {languages.find(l => l.name === selectedLang)?.content}
                </div>

                <div className="pt-8 flex items-center gap-4">
                  {languages.find(l => l.name === selectedLang)?.downloadPath ? (
                    <a 
                      href={languages.find(l => l.name === selectedLang)?.downloadPath}
                      download
                      className="bg-white border-2 border-[#9ab2d4] text-[#9ab2d4] font-black px-8 py-4 rounded-2xl lowercase tracking-tight hover:bg-gray-50 transition-colors flex items-center gap-2"
                    >
                      <Download size={20} />
                      {languages.find(l => l.name === selectedLang)?.downloadText}
                    </a>
                  ) : (
                    <button 
                      className="bg-white border-2 border-[#9ab2d4] text-[#9ab2d4] font-black px-8 py-4 rounded-2xl lowercase tracking-tight hover:bg-gray-50 transition-colors flex items-center gap-2"
                      onClick={() => {
                        alert(t(content.submission.guidelines.download_soon.pt, content.submission.guidelines.download_soon.es));
                      }}
                    >
                      <Download size={20} />
                      {languages.find(l => l.name === selectedLang)?.downloadText}
                    </button>
                  )}
                  <button 
                    onClick={() => setSelectedLang(null)}
                    className="bg-[#9ab2d4] text-white font-black px-8 py-4 rounded-2xl lowercase tracking-tight hover:bg-[#4A7FC6] transition-colors"
                  >
                    {languages.find(l => l.name === selectedLang)?.closeText}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
