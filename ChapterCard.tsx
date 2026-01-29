
import React from 'react';
import { Chapter } from '../types';

interface ChapterCardProps {
  chapter: Chapter;
  onSelect: (chapter: Chapter) => void;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(chapter)}
      className="glass-card p-8 rounded-2xl cursor-pointer purple-glow transition-all duration-300 transform hover:-translate-y-2 group"
    >
      <div className="text-fuchsia-500 font-bold mb-2">الفصل {chapter.id}</div>
      <h3 className="text-xl font-bold mb-4 group-hover:text-fuchsia-300 transition-colors">{chapter.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">
        {chapter.summary}
      </p>
      <div className="flex items-center text-fuchsia-400 text-sm font-bold">
        <span>ابدأ القراءة</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 group-hover:mr-4 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </div>
  );
};

export default ChapterCard;
