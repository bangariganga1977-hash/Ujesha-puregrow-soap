import React from 'react';
import { ASSET_IMAGES } from '../assets/images';

interface PureGlowLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  variant?: 'light' | 'dark' | 'auto';
  className?: string;
  onClick?: () => void;
}

export const PureGlowLogo: React.FC<PureGlowLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  variant = 'auto',
  className = '',
  onClick,
}) => {
  const sizeConfig = {
    sm: {
      imgSize: 'w-7 h-7 sm:w-8 sm:h-8',
      titleSize: 'text-lg sm:text-xl font-serif font-bold tracking-tight',
      subSize: 'text-[9px] tracking-[0.2em] font-sans font-semibold',
    },
    md: {
      imgSize: 'w-10 h-10 sm:w-11 sm:h-11',
      titleSize: 'text-2xl sm:text-3xl font-serif font-bold tracking-tight',
      subSize: 'text-[10px] sm:text-[11px] tracking-[0.25em] font-sans font-semibold uppercase',
    },
    lg: {
      imgSize: 'w-14 h-14 sm:w-16 sm:h-16',
      titleSize: 'text-3xl sm:text-4xl font-serif font-bold tracking-tight',
      subSize: 'text-xs sm:text-sm tracking-[0.25em] font-sans font-semibold uppercase',
    },
    xl: {
      imgSize: 'w-20 h-20 sm:w-24 sm:h-24',
      titleSize: 'text-4xl sm:text-5xl font-serif font-bold tracking-tight',
      subSize: 'text-sm tracking-[0.3em] font-sans font-medium uppercase',
    },
  }[size];

  const titleColor =
    variant === 'light'
      ? 'text-[#FAF7F2]'
      : 'text-[#4A3728] group-hover:text-[#8C6547] transition-colors';

  const subColor =
    variant === 'light'
      ? 'text-[#EFE8DE]/80'
      : 'text-[#8C6547]';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none ${
        onClick ? 'cursor-pointer group' : ''
      } ${className}`}
    >
      {/* Official PureGlow Handcrafted Brand Mark */}
      <div className={`relative ${sizeConfig.imgSize} rounded-full overflow-hidden shrink-0 shadow-sm border border-[#D5C2A5]/60 bg-[#FAF7F2] p-0.5 transition-transform duration-300 group-hover:scale-105 ring-2 ring-[#8C6547]/10`}>
        <img
          src={ASSET_IMAGES.logo}
          alt="PureGlow Handcrafted Soap Brand Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center rounded-full"
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`${sizeConfig.titleSize} ${titleColor}`}>
            Pure Glow
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#5F7F67] mb-1 shrink-0"></span>
        </div>
        {showSubtitle && (
          <p className={`${sizeConfig.subSize} ${subColor} mt-0.5 leading-tight`}>
            Handcrafted Botanical Soaps
          </p>
        )}
      </div>
    </div>
  );
};
