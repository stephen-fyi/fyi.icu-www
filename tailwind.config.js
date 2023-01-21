/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        colors: {
            black: {
                DEFAULT: '#2D2D2D',
                50: '#575757',
                100: '#545454',
                200: '#4C4C4C',
                300: '#444444',
                400: '#3D3D3D',
                500: '#353535',
                600: '#2D2D2D',
                700: '#262626',
                800: '#1E1E1E',
                900: '#161616'
            },
            white: {
                DEFAULT: '#F5F5F5',
                100: '#F7F7F7',
                200: '#F7F7F7',
                300: '#F0F0F0',
                400: '#E8E8E8',
                500: '#E0E0E0',
                600: '#C7C7C7',
                700: '#ADADAD',
                800: '#949494',
                900: '#7A7A7A'
            },
            grey: {
                DEFAULT: '#7B8084',
                50: '#F2F2F3',
                100: '#E5E6E6',
                200: '#CACCCE',
                300: '#B0B3B5',
                400: '#95999D',
                500: '#7B8084',
                600: '#62666A',
                700: '#4A4D4F',
                800: '#313335',
                900: '#191A1A'
            },
            yellow: {
                DEFAULT: '#F4D31A',
                100: '#FDF9DD',
                200: '#FBEFAC',
                300: '#F9E67B',
                400: '#F7DD4B',
                500: '#F4D31A',
                600: '#D1B30A',
                700: '#A18A08',
                800: '#706005',
                900: '#3F3603'
            },
            red: {
                DEFAULT: '#92150C',
                100: '#F47F76',
                200: '#F05247',
                300: '#EC2618',
                400: '#C11C10',
                500: '#92150C',
                600: '#630E08',
                700: '#340704',
                800: '#050100',
                900: '#000000'
            },
            blue: {
                DEFAULT: '#345BEB',
                50: '#DBE2FB',
                100: '#C9D3FA',
                200: '#A3B5F6',
                300: '#7E97F2',
                400: '#5979EF',
                500: '#345BEB',
                600: '#153DD2',
                700: '#102E9F',
                800: '#0B1F6C',
                900: '#061139'
            },
            green: {
                DEFAULT: '#355834',
                100: '#ebeeeb',
                200: '#cdd5cc',
                300: '#aebcae',
                400: '#728a71',
                500: '#355834',
                600: '#304f2f',
                700: '#284227',
                800: '#20351f',
                900: '#1a2b19'
            },
            purple: {
                DEFAULT: '#54426B',
                50: '#8D76AA',
                100: '#866EA5',
                200: '#795F9A',
                300: '#6D558B',
                400: '#604C7B',
                500: '#54426B',
                600: '#48385B',
                700: '#3B2F4B',
                800: '#2F253C',
                900: '#221B2C'
            },
        },
        extend: {
            height:{
                'screen-50': '50vh'
            }
        },
    },
    plugins: [],
}