import React from 'react';
import BlockCard from './BlockCard';

const CategorySection = ({ category }) => {
  return (
    <section id={category.id} className="py-12 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className={`inline-block px-4 py-2 rounded-full text-white font-bold text-xl mb-4 ${category.color}`}>
          {category.name}
        </div>
        <p className="text-xl text-gray-700 mb-8">{category.description}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {category.blocks.map((block, index) => (
            <BlockCard key={index} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
