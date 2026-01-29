
import React from 'react';

interface HeaderProps {
  onBackHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBackHome }) => {
  return (
    <nav className="sticky top-0 z-50 py-6 px-8 flex justify-between items-center glass-card border-b-0 mb-8">
      <div 
        className="text-3xl font-bold tracking-widest cursor-pointer hover:text-fuchsia-400 transition-colors"
        onClick={onBackHome}
      >
        APYSSOS
      </div>
      <div className="hidden md:flex space-x-reverse space-x-8">
        <button onClick={onBackHome} className="hover:text-fuchsia-400 transition-colors">الرئيسية</button>
        <button className="hover:text-fuchsia-400 transition-colors opacity-50 cursor-not-allowed">عن الكاتب</button>
        <button className="hover:text-fuchsia-400 transition-colors opacity-50 cursor-not-allowed">تواصل معنا</button>
      </div>
    </nav>
  );
};

export default Header;
