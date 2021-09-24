import Slider from 'react-slick'
import Head from 'next/head'
import PageHeader from '@/components/PageHeader'
import { weddingPartyMembers } from '@/json/weddingPartyMembers.json'
import Image from 'next/image'

export default function weddingParty() {
    return (
        <>
            <Head>
                <title>The Wedding Party | Andrew and Regina's Wedding</title>
                <meta
                    name="description"
                    content="We're getting married on October 23, 2021 at Pinecrest Retreat in
            Moscow, TN."
                />
                <meta
                    property="og:image"
                    content="https://www.millenwedding.com/og-image.jpg"
                />
            </Head>
            <PageHeader title="Wedding Party" />
            <div className="container py-8 md:py-16">
                <ul>
                    <Slider
                        infinite={true}
                        slidesToShow={1}
                        slidesToScroll={1}
                        fade={true}
                        speed={150}
                    >
                        {weddingPartyMembers.map(partyMember => (
                            <li key={partyMember.name}>
                                <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-24">
                                    <div className="lg:w-1/2 relative">
                                        <h2 className="lg:mt-32">
                                            {partyMember.name}
                                        </h2>
                                        <p className="pt-3 pb-6 text-lg lg:text-xl font-sans">
                                            {partyMember.title}
                                        </p>
                                        <p className="font-sanslight">
                                            {partyMember.bio}
                                        </p>
                                    </div>
                                    <div className="lg:w-1/2 relative">
                                        <Image
                                            src={`/${partyMember.name}.jpg`}
                                            height={partyMember.image.height}
                                            width={partyMember.image.width}
                                            alt={partyMember.image.alt}
                                        />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </Slider>
                </ul>
            </div>
        </>
    )
}
