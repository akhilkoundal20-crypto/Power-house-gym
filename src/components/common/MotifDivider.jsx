import React from 'react';

export const MotifDivider = ({ className = '', title = '' }) => {
  return (
    <div className={`flex items-center justify-center my-6 gap-3 select-none ${className}`}>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C9BCAB] to-[#D49B35]" />
      
      {/* Traditional Indian Floral / Dehra Arch Motif */}
      <div className="flex items-center gap-1.5 text-[#D49B35]">
        <svg className="w-3.5 h-3.5 fill-current opacity-70" viewBox="0 0 24 24">
          <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" />
        </svg>
        <span className="w-1.5 h-1.5 rounded-full bg-[#852233]" />
        <svg className="w-5 h-5 fill-current text-[#2C4A3E]" viewBox="0 0 24 24">
          <path d="M12 3C8 3 5 6 5 10C5 15.5 12 21 12 21C12 21 19 15.5 19 10C19 6 16 3 12 3ZM12 12.5C10.6 12.5 9.5 11.4 9.5 10C9.5 8.6 10.6 7.5 12 7.5C13.4 7.5 14.5 8.6 14.5 10C14.5 11.4 13.4 12.5 12 12.5Z" />
        </svg>
        <span className="w-1.5 h-1.5 rounded-full bg-[#852233]" />
        <svg className="w-3.5 h-3.5 fill-current opacity-70" viewBox="0 0 24 24">
          <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" />
        </svg>
      </div>

      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#C9BCAB] to-[#D49B35]" />
    </div>
  );
};

export default MotifDivider;
