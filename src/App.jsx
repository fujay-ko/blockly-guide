import React, { useState, useEffect } from 'react';
import { categories } from './data/blocks';
import CategorySection from './components/CategorySection';
import AdvancedSection from './components/AdvancedSection';

function App() {
  const [activeSection, setActiveSection] = useState('');

  // Collect advanced blocks
  const advancedBlocks = categories.flatMap(cat => cat.blocks.filter(b => b.detailed));

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 opacity-95 backdrop-blur-sm">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex items-center h-16 space-x-1 whitespace-nowrap">
            <span className="font-extrabold text-xl text-indigo-600 mr-4 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
              Blockly 積木指南
            </span>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeSection === cat.id 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat.name.split('.')[1].split('(')[0].trim()}
              </button>
            ))}
            <div className="w-px h-6 bg-gray-300 mx-2"></div>
            <button
              onClick={() => scrollToSection('advanced')}
              className="px-3 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md"
            >
              特訓班
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4 text-center bg-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Blockly 積木功能全攻略
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          專為國中生設計的積木程式說明書。<br/>
          搞不懂「如果」、「迴圈」怎麼用？這裡都有解答！
        </p>
        <button 
          onClick={() => scrollToSection(categories[0].id)}
          className="px-8 py-3 bg-indigo-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-indigo-700 transition-all hover:scale-105"
        >
          開始學習
        </button>
      </header>

      {/* Main Content */}
      <main className="pb-20">
        {categories.map(category => (
          <CategorySection key={category.id} category={category} />
        ))}

        {/* Divider */}
        <div className="container mx-auto px-4 my-16">
          <div className="h-px bg-gray-200"></div>
        </div>

        <AdvancedSection blocks={advancedBlocks} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p className="text-gray-400">© 2026 Blockly 積木教學指南. Created for Learning.</p>
      </footer>
    </div>
  );
}

export default App;