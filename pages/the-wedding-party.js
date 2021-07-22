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
            </Head>
            <PageHeader title="The Wedding Party" />
            <div className="p-8 md:p-16">
                <div className="max-w-2xl">
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </>
    )
}
