import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/globals.css'
import RSVPButtonClass from '@/components/RSVPButtonClass'
import MainNav from '@/components/MainNav'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <div className="absolute container left-0 right-0 flex justify-between pt-6 lg:pt-12 z-50">
                <MainNav />
                <div className="hidden md:block relative z-50">
                    <RSVPButtonClass
                        threshold={20}
                        ratio={2}
                        max={40}
                        scale={1.2}
                        ease={0.14}
                        label={'RSVP'}
                    />
                </div>
            </div>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
