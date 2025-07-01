import React from 'react';

const TrustedCompanies = () => {
  const companies = [
    { name: "TechFlow", icon: "TF" },
    { name: "DataSync", icon: "DS" },
    { name: "CloudPeak", icon: "CP" },
    { name: "InnovateLabs", icon: "IL" },
    { name: "NexusCore", icon: "NC" },
    { name: "QuantumEdge", icon: "QE" },
    { name: "VelocityTech", icon: "VT" },
    { name: "StreamlinePro", icon: "SP" },
    { name: "AlphaVision", icon: "AV" },
    { name: "ByteCraft", icon: "BC" },
    { name: "MetaForge", icon: "MF" },
    { name: "ZenithCorp", icon: "ZC" },
    { name: "InfinityTech", icon: "IT" },
    { name: "PulseDrive", icon: "PD" },
    { name: "FlexCore", icon: "FC" }
  ];

  // Duplicate the companies array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-2 leading-tight">
            More than 2.5 million people across
          </h2>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 leading-tight">
            500,000 companies choose us
          </h2>
        </div>

        {/* Scrolling Companies Row */}
        <div className="relative overflow-hidden">
          <div 
            className="flex space-x-12 animate-scroll"
            style={{
              width: 'fit-content'
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap flex-shrink-0"
              >
                <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm">
                    {company.icon}
                  </span>
                </div>
                <span className="text-xl font-light text-gray-700 tracking-wide">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedCompanies;