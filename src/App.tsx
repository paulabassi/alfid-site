import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Congress from './pages/Congress';
import ImportantDates from './pages/ImportantDates';
import Submission from './pages/Submission';
import Schedule from './pages/Schedule';
import Organization from './pages/Organization';
import Alfid from './pages/Alfid';
import Registration from './pages/Registration';
import Speakers from './pages/Speakers';
import Fotos from './pages/Fotos';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { content } from './conteudo';

function AppContent() {
  const { t } = useLanguage();
  const location = useLocation();
  const path = location.pathname;

  const isSchedulePage = path === '/programacao';

  return (
    <div className={`min-h-screen ${isSchedulePage ? 'bg-[#f5f6f2]' : 'bg-white'} font-sans overflow-x-hidden flex flex-col relative`}>
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div 
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-grow flex flex-col"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/congresso" element={<Congress />} />
              <Route path="/datas" element={<ImportantDates />} />
              <Route path="/submissao" element={<Submission />} />
              <Route path="/programacao" element={<Schedule />} />
              <Route path="/organizacao" element={<Organization />} />
              <Route path="/alfid" element={<Alfid />} />
              <Route path="/palestrantes" element={<Speakers />} />
              <Route path="/inscricoes" element={<Registration />} />
              <Route path="/fotos" element={<Fotos />} />
              
              {/* Fallback for construction pages or 404 */}
              <Route path="*" element={
                <div className="flex flex-col items-center justify-center h-[400px] text-center px-6">
                  <h2 className="text-[2.5rem] md:text-3xl font-bold text-[#1A1A1A] mb-4">{t(content.app.fallback.title.pt, content.app.fallback.title.es)}</h2>
                  <p className="text-gray-500">{t(content.app.fallback.description.pt, content.app.fallback.description.es)}</p>
                </div>
              } />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}
