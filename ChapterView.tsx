
import React, { useEffect } from 'react';
import { Chapter } from '../types';

interface ChapterViewProps {
  chapter: Chapter;
  onBack: () => void;
}

const ChapterView: React.FC<ChapterViewProps> = ({ chapter, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button 
        onClick={onBack}
        className="mb-12 flex items-center text-slate-400 hover:text-fuchsia-400 transition-colors group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:ml-4 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span>العودة للرئيسية</span>
      </button>

      <div className="glass-card p-10 md:p-16 rounded-3xl">
        <div className="text-fuchsia-500 font-bold mb-4 text-center">APYSSOS</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 to-indigo-200 leading-tight">
          {chapter.title}
        </h1>
        
        <div className="prose prose-invert max-w-none">
          {chapter.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg md:text-xl text-slate-300 leading-loose mb-8 text-justify">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col items-center">
            <p className="text-slate-500 mb-6 italic">انتهى الفصل {chapter.id}</p>
            <button 
              onClick={onBack}
              className="bg-gradient-to-l from-fuchsia-600 to-indigo-600 px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-fuchsia-500/20"
            >
              تمت القراءة - عودة
            </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterView;
