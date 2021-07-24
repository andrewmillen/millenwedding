import '../styles/globals.css'
import RSVPButton from '@/components/RSVPButton'
import CustomCursor from '@/components/CustomCursor'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <div className="hidden md:block">
                <RSVPButton />
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
