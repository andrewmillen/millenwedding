import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'

export default function ourStory() {
    return (
        <>
            <Head>
                <title>Our Story | Andrew and Regina's Wedding</title>
                <meta
                    name="description"
                    content="We're getting married on October 23, 2021 at Pinecrest Retreat in
            Mowcow, TN."
                />
            </Head>
            <PageHeader title="Our Story" />
            <div className="p-8 md:p-16">
                <div className="max-w-2xl">
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </>
    )
}
