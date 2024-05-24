import type { Config } from 'tailwindcss';
import sharedConfig from '@wepl/tailwind-config';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [sharedConfig],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '359px' },
    },
  },
};

export default config;
