import Slider from 'react-slick'
import Head from 'next/head'
import PageHeader from '@/components/PageHeader'
import { weddingParty } from '@/lib/weddingParty.json'

export default function theWeddingParty() {
    var settings = {
        arrows: true,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <>
            <Head>
                <title>The Wedding Party | Andrew and Regina's Wedding</title>
                <meta
                    name="description"
                    content="We're getting married on October 23, 2021 at Pinecrest Retreat in
            Mowcow, TN."
                />
                <meta
                    property="og:image"
                    content="https://www.millenwedding.com/og-image.jpg"
                />
            </Head>
            <PageHeader title="Wedding Party" />
            <div className="p-8 md:p-16">
                <ul>
                    <Slider {...settings}>
                        {weddingParty.map((person, index) => (
                            <li key={person.name}>{person.name}</li>
                        ))}
                    </Slider>
                </ul>
            </div>
        </>
    )
}
