import '../styles/globals.css'
import RSVPButton from '@/components/RSVPButton'
import CustomCursor from '@/components/CustomCursor'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <RSVPButton />
            <CustomCursor />
        </>
    )
}

export default MyApp
