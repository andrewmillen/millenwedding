import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MainNav from '@/components/MainNav'

export default function ourStory() {
    return (
        <>
            <Head>
                <title>Andrew and Regina's Wedding | 404</title>
                <meta
                    name="description"
                    content="We're getting married on October 23, 2021 at Pinecrest Retreat in
            Mowcow, TN."
                />
            </Head>
            <div className="w-screen h-screen flex-shrink-0 bg-wine text-white text-center p-8 md:p-16">
                <div className="">
                    <h1 className="font-sans mb-12">
                        404
                        <span className="text-xl block mt-4">
                            Page Not Found
                        </span>
                    </h1>
                    <Image src="/404.jpg" height="400" width="400"></Image>
                </div>
            </div>
        </>
    )
}
