import Head from 'next/head'
import PageHeader from '@/components/PageHeader'

export default function ourStory() {
    return (
        <>
            <Head>
                <title>Plan Your Visit | Andrew and Regina's Wedding</title>
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
                <div className="max-w-2xl">
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </>
    )
}
