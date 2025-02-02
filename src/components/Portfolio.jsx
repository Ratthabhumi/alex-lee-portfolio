import React, { useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'EcoPack Branding',
      category: 'branding',
      description: 'Sustainable packaging system for organic skincare line'
    },
    {
      id: 2,
      title: 'Fintech Dashboard',
      category: 'digital',
      description: 'Data visualization interface for financial analytics'
    },
    {
      id: 3,
      title: 'Urban Brew Co.',
      category: 'packaging',
      description: 'Coffee shop chain identity and merchandise'
    },
    {
      id: 4,
      title: 'Health App UI',
      category: 'digital',
      description: 'Mobile fitness tracking application interface'
    },
    {
      id: 5,
      title: 'Art Gallery Identity',
      category: 'branding',
      description: 'Visual system for contemporary art space'
    },
    {
      id: 6,
      title: 'Boutique Wine Labels',
      category: 'packaging',
      description: 'Luxury wine bottle packaging series'
    }
  ];

  const categories = ['all', 'branding', 'digital', 'packaging'];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="container">
      <section className="portfolio-section">
        <div className="portfolio-header">
          <h2>Creative Portfolio</h2>
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? 'active' : ''}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="image-placeholder"></div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="category-tag">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;