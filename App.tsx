
import React, { useState } from 'react';
import Header from './components/Header';
import ChapterCard from './components/ChapterCard';
import ChapterView from './components/ChapterView';
import { CHAPTERS } from './constants';
import { Chapter, ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const handleSelectChapter = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setView('reader');
  };

  const handleBackHome = () => {
    setView('home');
    setSelectedChapter(null);
  };

  const pdfLink1 = "https://pdfhost.io/v/fUUFTpEKja_APYSSOS_الفصل_الاول";
  const pdfLink2 = "https://pdfhost.io/v/xGYVTC5m8p_APYSSOS_الفصل_الثاني";
  const pdfLink3 = "https://pdfhost.io/v/yzbDk9u27z_APYSSOS__الفصل_الثالث";

  return (
    <div className="min-h-screen">
      <Header onBackHome={handleBackHome} />
      
      <main className="container mx-auto">
        {view === 'home' ? (
          <div className="px-6 md:px-0">
            {/* Hero Section */}
            <header className="text-center py-16 md:py-24 animate-in fade-in zoom-in duration-1000">
              <h1 className="text-7xl md:text-9xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-l from-fuchsia-400 via-purple-300 to-indigo-400">
                APYSSOS
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                اكتشف عالم الهاوية في رواية سحرية تأخذك إلى أقصى حدود الخيال. قصة مليئة بالأسرار، الثلج، والضوء الأصفر.
              </p>
              
              {/* PDF CTA Buttons */}
              <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-6 px-4">
                {/* Chapter 1 Button */}
                <a 
                  href={pdfLink1} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-fuchsia-600 to-indigo-600 rounded-2xl hover:scale-105 active:scale-95 shadow-xl shadow-fuchsia-500/20 w-full md:w-auto min-w-[200px]"
                >
                  <span className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 opacity-0 group-hover:opacity-40 blur-2xl transition-opacity"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-base">الفصل الأول</span>
                </a>

                {/* Chapter 2 Button - Instagram Style */}
                <a 
                  href={pdfLink2} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-2xl hover:scale-105 active:scale-95 shadow-xl shadow-pink-500/20 w-full md:w-auto min-w-[200px] overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] opacity-0 group-hover:opacity-40 blur-2xl transition-opacity"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-base drop-shadow-md">الفصل الثاني</span>
                </a>

                {/* Chapter 3 Button - Emerald/Ocean Style */}
                <a 
                  href={pdfLink3} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 rounded-2xl hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20 w-full md:w-auto min-w-[200px] overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 opacity-0 group-hover:opacity-40 blur-2xl transition-opacity"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-base drop-shadow-md">الفصل الثالث</span>
                </a>
              </div>

              <div className="mt-12 flex justify-center gap-4 opacity-50">
                  <div className="h-1 w-20 bg-gradient-to-l from-fuchsia-500 to-transparent rounded-full"></div>
                  <div className="h-1 w-4 bg-fuchsia-500 rounded-full"></div>
                  <div className="h-1 w-20 bg-gradient-to-r from-fuchsia-500 to-transparent rounded-full"></div>
              </div>
            </header>

            {/* Chapters Grid Section Title */}
            <div className="max-w-6xl mx-auto mb-12 flex items-center gap-6 px-4 md:px-0">
              <h2 className="text-2xl font-bold text-slate-100">فصول القصة</h2>
              <div className="flex-grow h-[1px] bg-gradient-to-l from-white/10 to-transparent"></div>
            </div>

            {/* Chapters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 max-w-6xl mx-auto px-4 md:px-0">
              {CHAPTERS.map((chapter) => (
                <ChapterCard 
                  key={chapter.id} 
                  chapter={chapter} 
                  onSelect={handleSelectChapter} 
                />
              ))}
            </div>

            {/* Footer Text */}
            <footer className="text-center pb-20 text-slate-500 text-sm">
              <p>© 2024 جميع الحقوق محفوظة لرواية APYSSOS</p>
            </footer>
          </div>
        ) : (
          selectedChapter && (
            <ChapterView 
              chapter={selectedChapter} 
              onBack={handleBackHome} 
            />
          )
        )}
      </main>
    </div>
  );
};

export default App;
