/** @type {import('tailwindcss').Config} */
import sharedConfig from '@wepl/tailwind-config';
module.exports = {
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        'primary-500': '#0b7285',
      },
    },
  },
};
