import React from 'react';

const BrandLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        <div className="w-16 h-16 border border-white/10 rounded-none flex items-center justify-center overflow-hidden bg-[#0c0e14] shadow-2xl">
           <img 
             src="https://scontent-lga3-2.cdninstagram.com/v/t51.82787-19/670014532_18082989308096711_3808227042619397257_n.jpg?cb=8438d1d6-89aba764&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDI0LmMyIn0&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=111&_nc_oc=Q6cZ2gH3wA1fG29CfPrB-gGG3dFdmYVxgsVnuDex-WM2p9GYEyXsUHZCpfAq75S7hR7hEdBW6FtRXX9TznvPmByYNvnM&_nc_ohc=mqq9uyskdo8Q7kNvwH8vplu&_nc_gid=vwTfAKm_eay9tm1xaIBefA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af5Yw90zJFg25Qi_PFCEh35sARdyLtVVd0sh7xaGCaoZ-A&oe=6A0671B8&_nc_sid=7a9f4b" 
             alt="Split Chrono Logo"
             className="w-full h-full object-cover"
             referrerPolicy="no-referrer"
           />
        </div>
      </div>
      <div className="mt-4 text-[12px] uppercase tracking-[0.5em] text-accent font-serif font-bold border-t border-accent/20 pt-2 text-center uppercase">
        Split Chrono
      </div>
    </div>
  );
};

export default BrandLogo;
