import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['selector'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
    '../../packages/ui/shadcn-ui/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    screens: {
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
    },
    colors: {
      neutral: {
        black: '#000000',
        white: '#ffffff',
      },
      gray: {
        25: '#f6f8fc',
        50: '#f1f4f9',
        100: '#e2e8f0',
        200: '#c8d4e1',
        300: '#b3c4d5',
        400: '#92a4b9',
        500: '#64748b',
        600: '#475569',
        700: '#27364b',
        800: '#1e2a3b',
        900: '#152032',
      },
      primary: {
        25: '#f9ffff',
        50: '#eefcfc',
        100: '#dcf7f7',
        200: '#b4ebec',
        300: '#7ddde1',
        400: '#38abb5',
        500: '#0b7285',
        600: '#085972',
        700: '#05435f',
        800: '#03304d',
        900: '#022542',
      },
      auxiliary: {
        rad: '#f64c4c',
        blue: '#3b82f6',
        orange: '#fe9a74',
        green: '#c7f9cc',
      },
      semantic: {
        error: {
          100: '#ffebee',
          200: '#ffccd2',
          300: '#f49898',
          400: '#eb6470',
          500: '#f64c4c',
          600: '#ecc2d30',
        },
        warning: {
          100: '#fff7e1',
          200: '#ffeab3',
          300: '#ffdd82',
          400: '#ffc62b',
          500: '#ffad0d',
          600: '#fe9b0e',
        },
        success: {
          100: '#e5f5ec',
          200: '#c0e5d1',
          300: '#97d4b4',
          400: '#6bc497',
          500: '#47b881',
          600: '#0c9d61',
        },
        info: {
          100: '#e4f2ff',
          200: '#bdddff',
          300: '#93c8ff',
          400: '#4ba1ff',
          500: '#3b82f6',
          600: '#3a70e2',
        },
      },
    },

    fontSize: {
      headline1: [
        '48px',
        {
          fontWeight: '700',
          lineHeight: '64px',
          letterSpacing: '-0.2px',
        },
      ],
      headline2: [
        '40px',
        {
          fontWeight: '700',
          lineHeight: '56px',
          letterSpacing: '-0.2px',
        },
      ],
      headline3: [
        '32px',
        {
          fontWeight: '700',
          lineHeight: '48px',
          letterSpacing: '-0.2px',
        },
      ],
      headline4: [
        '24px',
        {
          fontWeight: '700',
          lineHeight: '34px',
          letterSpacing: '-0.2px',
        },
      ],
      headline5: [
        '20px',
        {
          fontWeight: '700',
          lineHeight: '30px',
          letterSpacing: '-0.2px',
        },
      ],
      headline6: [
        '18px',
        {
          fontWeight: '700',
          lineHeight: '28px',
          letterSpacing: '-0.2px',
        },
      ],
      'sub-title1': [
        '16px',
        {
          lineHeight: '22px',
          letterSpacing: '-0.02px',
          fontWeight: '600',
        },
      ],

      'sub-title2': [
        '14px',
        {
          lineHeight: '20px',
          letterSpacing: '-0.02px',
          fontWeight: '600',
        },
      ],
      body1: [
        '16px',
        {
          lineHeight: '22px',
          letterSpacing: '-0.02px',
          fontWeight: '500',
        },
      ],
      'body-long': [
        '16px',
        {
          lineHeight: '28px',
          letterSpacing: '-0.02px',
          fontWeight: '500',
        },
      ],
      body2: [
        '14px',
        {
          lineHeight: '20px',
          letterSpacing: '-0.02px',
          fontWeight: '500',
        },
      ],
      'body-long2': [
        '14px',
        {
          lineHeight: '24px',
          letterSpacing: '-0.02px',
          fontWeight: '500',
        },
      ],
      caption: [
        '12px',
        {
          lineHeight: '18px',
          letterSpacing: '-0.02px',
          fontWeight: '500',
        },
      ],
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [plugin],
};

export default config;
