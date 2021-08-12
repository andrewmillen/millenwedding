import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/globals.css'
import RSVPButtonClass from '@/components/RSVPButtonClass'
import CustomCursor from '@/components/CustomCursor'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <div className="hidden md:block">
                <RSVPButtonClass
                    threshold={40}
                    ratio={5}
                    max={100}
                    scale={1.2}
                    ease={0.14}
                    label={'R.S.V.P.'}
                />
            </div>
            <div className="block md:hidden">
                <a
                    href="https://weddings.papier.com/regina-andrew/rsvp-4836?fbclid=IwAR0Uh-7XV8WxlROOtvCN-UUyTM9XjV4xwpCJyKO43i29Mvupg-mC-ztMwGs"
                    className="text-marigold uppercase lg:text-lg tracking-widest absolute top-9 right-9 z-40"
                >
                    RSVP
                </a>
            </div>
            {/* <CustomCursor /> */}
        </>
    )
}

export default MyApp
