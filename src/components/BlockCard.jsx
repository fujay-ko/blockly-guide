import React from 'react';

const BlockCard = ({ block }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="p-4 bg-gray-50 flex justify-center items-center h-48">
        <img 
          src={`${import.meta.env.BASE_URL}images/${block.image}`} 
          alt={block.name} 
          className="max-h-full max-w-full object-contain filter drop-shadow-sm"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{block.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{block.desc}</p>
        {block.python && (
          <div className="mt-2">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Python</span>
            <pre className="mt-1 p-2 bg-gray-900 text-blue-300 rounded text-xs font-mono overflow-x-auto">
              <code>{block.python}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlockCard;
