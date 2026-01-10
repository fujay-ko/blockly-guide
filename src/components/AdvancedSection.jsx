import React from 'react';

const AdvancedSection = ({ blocks }) => {
  return (
    <section id="advanced" className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-4">進階特訓：C 型積木大解密</h2>
          <p className="text-xl text-indigo-700 max-w-2xl mx-auto">
            這些積木像英文字母 C，中間可以「夾住」其他的積木。讓我們來看看它們的「肚子」與「參數」是什麼意思。
          </p>
        </div>

        <div className="space-y-12">
          {blocks.map((block, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-indigo-100">
              <div className="md:w-1/3 bg-gray-50 p-8 flex justify-center items-center border-b md:border-b-0 md:border-r border-gray-100">
                <img 
                  src={`${import.meta.env.BASE_URL}images/${block.image}`} 
                  alt={block.name} 
                  className="max-w-full max-h-64 object-contain filter drop-shadow-md transform hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">{block.detailed.title}</h3>
                <p className="text-gray-600 mb-6 italic">{block.desc}</p>
                
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                    <span className="font-bold text-amber-800 block mb-1">🔶 參數 (六角形洞或數字)</span>
                    <p className="text-amber-900">{block.detailed.param}</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <span className="font-bold text-blue-800 block mb-1">🔷 肚子裡 (夾住的積木)</span>
                    <p className="text-blue-900">{block.detailed.body}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedSection;
