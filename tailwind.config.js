module.exports = {
    // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false,
    theme: {
        fontFamily: {
            sans: ['sweet_sans_promedium', 'system-ui'],
            sansregular: ['sweet_sans_proregular', 'system-ui'],
            sanslight: ['sweet_sans_prolight', 'system-ui'],
            serif: ['ttramillas-extralightregular', 'Georgia'],
            serifitalic: ['ttramillas-extralightitalicRg', 'Georgia'],
        },
        letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.25em',
            wider: '0.5em',
            widest: '1em',
        },
        extend: {
            height: {
                600: '600px',
            },
            fontSize: {
                '10xl': '10rem',
            },
            maxWidth: {
                '8xl': '96rem',
            },
            colors: {
                wine: '#66191D',
                wineLight: '#D76369',
                marigold: '#E2A361',
                marigoldLight: '#F6DABC',
                olive: '#6B6B54',
                linen: '#E9E3E1',
                linenDark: '#D4CBC8',
                tinderRed: '#EA5C6F',
                tinderOrange: '#F97A69',
            },
        },
    },
    variants: {
        extend: {
            padding: ['hover', 'focus'],
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
