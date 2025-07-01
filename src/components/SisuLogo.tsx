"use client";

import Image from 'next/image';
import { getAssetPath } from '@/utils/paths';

interface SisuLogoProps {
  className?: string;
  size?: number;
}

const SisuLogo: React.FC<SisuLogoProps> = ({ 
  className = "w-6 h-6", 
  size = 24 
}) => {
  return (
    <Image
      src={getAssetPath('/logo_24x24.svg')}
      alt="Sisu Speak Logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
};

export default SisuLogo;
