import Slider from 'react-slick'
import Head from 'next/head'
import PageHeader from '@/components/PageHeader'
import { weddingPartyMembers } from '@/lib/weddingPartyMembers.json'
import Image from 'next/image'

export default function weddingParty() {
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
                    <Slider
                        infinite={true}
                        slidesToShow={1}
                        slidesToScroll={1}
                        fade={true}
                    >
                        {weddingPartyMembers.map((person, index) => (
                            <li key={person.name}>
                                <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-24">
                                    <div className="w-1/2 relative">
                                        <h2 className="text-gray-900 text-2xl lg:text-3xl font-sans">
                                            {person.name}
                                        </h2>
                                        <p className="pt-3 pb-6 text-lg lg:text-xl font-sanslight">
                                            {person.title}
                                        </p>
                                        <p className="font-sanslight">
                                            {person.bio}
                                        </p>
                                    </div>
                                    <div className="w-1/2 relative h-600">
                                        <Image
                                            src={`/${person.name}.jpg`}
                                            height={800}
                                            width={600}
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
