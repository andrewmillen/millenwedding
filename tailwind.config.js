module.exports = {
    // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false,
    theme: {
        fontFamily: {
            sans: ['sweet_sans_promedium', 'system-ui'],
            sanslight: ['sweet_sans_prolight', 'system-ui'],
            serif: ['ttramillas-extralightregular', 'Georgia'],
            serifitalic: ['ttramillas-extralightitalicRg', 'Georgia'],
        },
        letterSpacing: {
            tightest: '-.075em',
            tighter: '-.05em',
            tight: '-.025em',
            normal: '0',
            wide: '.025em',
            wider: '.05em',
            widest: '.1em',
            widest: '.5em',
        },
        extend: {
            fontSize: {
                '10xl': '10rem',
            },
            maxWidth: {
                '8xl': '90rem',
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
