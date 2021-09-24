import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <Head>
                <title>Andrew and Regina's Wedding</title>
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

            <div className="w-screen h-screen flex flex-col md:flex-row bg-wine">
                <div className="w-screen h-1/2 flex-shrink-0 md:h-screen md:w-1/2 flex flex-col justify-end items-end py-8 lg:py-16">
                    <div className="flex flex-col-reverse md:flex-col text-white w-full max-w-3xl pl-6 sm:pl-8 md:pl-12 lg:pl-16">
                        <p className="text-wineLight tracking-wide lg:text-xl xl:text-2xl">
                            10.23.2021
                        </p>
                        <h1 className="font-serifitalic text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl mb-2 lg:mt-4 lg:-ml-3">
                            Regina <span className="text-wineLight">&amp;</span>
                            <br /> Andrew
                        </h1>
                    </div>
                </div>
                <div className="w-screen h-1/2 flex-shrink-0 md:h-screen md:w-1/2 relative bg-gray-700">
                    <Image
                        src="/hero.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt="Andrew making Regina laugh on a walk through downtown Memphis."
                    />
                </div>
            </div>
        </>
    )
}
