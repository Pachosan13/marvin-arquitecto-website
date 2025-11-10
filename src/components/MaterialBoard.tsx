import React from 'react';

const MaterialBoard = () => {
  const materials = [
    {
      name: 'Maderas nobles',
      description: 'Selección de especies duraderas y sostenibles',
      color: '#C8A98B',
      texture: 'linear-gradient(45deg, #C8A98B 25%, #B8996B 25%, #B8996B 50%, #C8A98B 50%, #C8A98B 75%, #B8996B 75%)'
    },
    {
      name: 'Piedras naturales',
      description: 'Mármoles, granitos y travertinos de calidad',
      color: '#D4C2A8',
      texture: 'radial-gradient(circle at 30% 30%, #E4D2B8 0%, #D4C2A8 40%, #C4B298 100%)'
    },
    {
      name: 'Cerámicas premium',
      description: 'Porcelanatos de gran formato y acabados especiales',
      color: '#E8E2D5',
      texture: 'linear-gradient(135deg, #F8F2E5 0%, #E8E2D5 50%, #D8D2C5 100%)'
    },
    {
      name: 'Textiles naturales',
      description: 'Linos, algodones y fibras orgánicas',
      color: '#F2EDE6',
      texture: 'repeating-linear-gradient(90deg, #F2EDE6 0px, #F2EDE6 2px, #E8E1DA 2px, #E8E1DA 4px)'
    },
    {
      name: 'Metales cálidos',
      description: 'Latón, cobre y acabados mate de calidad',
      color: '#B89968',
      texture: 'linear-gradient(180deg, #C8A978 0%, #B89968 50%, #A88958 100%)'
    },
    {
      name: 'Vidrios selectos',
      description: 'Cristales templados y laminados de seguridad',
      color: '#F0F8FF',
      texture: 'linear-gradient(45deg, rgba(240,248,255,0.9) 0%, rgba(240,248,255,0.7) 100%)'
    }
  ];

  return (
    <section id="materials" className="py-20 bg-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-heading-2 font-serif text-text-hi mb-4">
            Selección de materiales
          </h2>
          <p className="text-body text-text-lo max-w-2xl mx-auto">
            Trabajamos únicamente con proveedores certificados y materiales de primera calidad
            que garantizan durabilidad y estética perdurable
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-divider hover:shadow-lg transition-all duration-300"
            >
              {/* Material Swatch */}
              <div
                className="h-32 relative overflow-hidden"
                style={{ background: material.texture || material.color }}
              >
                {/* Subtle overlay for text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                
                {/* Material type indicator */}
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-divider" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-heading-4 font-serif text-text-hi mb-3">
                  {material.name}
                </h3>
                <p className="text-text-lo leading-relaxed text-sm">
                  {material.description}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="h-1 bg-divider group-hover:bg-cta transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="bg-section rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-heading-3 font-serif text-text-hi mb-4">
              Garantía de Calidad y Durabilidad
            </h3>
            <p className="text-body text-text-lo mb-6">
              
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-text-lo">
              <span className="bg-white px-4 py-2 rounded-full border border-divider">
                Certificados de calidad
              </span>
              <span className="bg-white px-4 py-2 rounded-full border border-divider">
                Resistencia climática
              </span>
              <span className="bg-white px-4 py-2 rounded-full border border-divider">
                Garantías extendidas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialBoard;