/** @type {import('tailwindcss').Config}; */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/*.{js,ts,jsx,tsx}',
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: { min: '0px', max: '767px' },
      md: { min: '768px', max: '975px' },
      lg: { min: '976px', max: '1439px' },
      xl: { min: '1440px' }
    },
    height: {
      '1px': '0.0625rem',
      '2px': '0.125rem',
      '3px': '0.1875rem',
      '7px': '0.4375rem',
      '10px': '0.625rem',
      '16px': '1rem',
      '21px': '1.3125rem',
      '38px': '2.375rem',
      '40px': '2.5rem',
      '50px': '3.125rem',
      '54px': '3.375rem',
      '66px': '4.125rem',
      '137px': '8.5625rem',
      '140px': '8.75rem',
      '150px': '9.375rem',
      '212px': '13.25rem',
      '261px': '16.3125rem',
      '439px': '27.3125rem',
      'full-vh': '100vh',
      'full-percent': '100%',
      'half-vh': '50vh',
      '65-vh': '65vh',
      '75-vh': '75vh',
      '85-vh': '85vh'
    },
    width: {
      '21px': '1.3125rem',
      '40px': '2.5rem',
      '50px': '3.125rem',
      '54px': '3.375rem',
      '105px': '6.5625rem',
      '108px': '6.75rem',
      '133px': '8.3125rem',
      '149px': '9.3125rem',
      '216px': '13.5rem',
      '280px': '17.5rem',
      '352px': '22rem',
      '535px': '33.4375rem',
      '152px': '9.5rem',
      '159px': '9.9375rem',
      '211px': '13.1875rem',
      '340px': '21.25rem',
      '400px': '25rem',
      '453px': '28.3125rem',
      '629px': '39.3125rem',
      '1440px': '90rem',
      'full-percent': '100%',
      'full-vw': '100vw',
      'half-percent': '50%'
    },
    maxWidth: {
      '211px': '13.1875rem'
    },
    minWidth: {
      '159px': '9.9375rem'
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      greenDark: '#015F43',
      greenLight: '#00B37E',
      green: '#00875F',
      green1: '#0DAE7F',
      redDark: '#AA2834',
      red: '#F75A68',
      gray: '#8D8D99',
      gray1: '#121214',
      gray2: '#202024',
      gray3: '#29292E',
      gray4: '#323238',
      gray5: '#7C7C8A',
      gray6: '#C4C4CC',
      gray7: '#E1E1E6',
      gray8: '#A7A7A7',
      gray9: '#8E8C8C',
      white: '#FFFFFF',
      white1: '#FDFDFD',
      blue: '#3391FF',
      blueMedium: '#00A2AD'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    fontWeight: {
      regular: 300,
      semiBold: 500,
      medium: 400,
      bold: 700
    },
    lineHeight: {
      '70px': '4.375rem'
    },
    fontSize: {
      '10px': '0.625rem',
      '14px': '0.875rem',
      '16px': '1rem',
      '20px': '1.25rem',
      '21px': '1.3125rem',
      '24px': '1.5rem',
      '32px': '2rem',
      '60px': '3.75rem'
    },
    padding: {
      '2px': '0.125rem',
      '4px': '0.25rem',
      '8px': '0.5rem',
      '12px': '0.75rem',
      '16px': '1rem',
      '20px': '1.25rem',
      '24px': '1.5rem',
      '29px': '1.8125rem',
      '32px': '2rem',
      '36px': '2.25rem',
      '40px': '2.5rem',
      '48px': '3rem',
      '90px': '5.625rem',
      '112px': '7rem',
      '160px': '10rem',
      '192px': '12rem'
    },
    gap: {
      '4px': '0.25rem',
      '8px': '0.5rem',
      '12px': '0.75rem',
      '16px': '1rem',
      '17px': '1.0625rem',
      '20px': '1.25rem',
      '24px': '1.5rem',
      '30px': '1.875rem',
      '32px': '2rem'
    },
    extend: {
      borderRadius: {
        '1px': '0.063rem',
        '2px': '0.125rem',
        '3px': '0.188rem',
        '4px': '0.25rem',
        '5px': '0.313rem',
        '6px': '0.375rem',
        '7px': '0.438rem',
        '8px': '0.5rem',
        '9px': '0.563rem',
        '10px': '0.625rem',
        '11px': '0.688rem',
        '12px': '0.75rem',
        '13px': '0.813rem',
        '14px': '0.875rem',
        '15px': '0.938rem',
        '16px': '1rem',
        '17px': '1.063rem',
        '18px': '1.125rem',
        '19px': '1.188rem',
        '20px': '1.25rem'
      },
      borderWidth: {
        '1px': '0.063rem'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
};
