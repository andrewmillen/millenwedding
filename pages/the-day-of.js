import Head from 'next/head'
import PageHeader from '@/components/PageHeader'

export default function theDayOf() {
    return (
        <>
            <Head>
                <title>The Day Of | Andrew and Regina's Wedding</title>
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
            <PageHeader title="The Day Of" />
            <div className="py-8 md:py-16">
                <div className="container">
                    <p className="mb-4 lg:text-xl max-w-6xl">
                        Schedule:{' '}
                        <span className="font-sanslight">
                            Ceremony begins at 4:00 p.m. Reception to follow.
                        </span>
                    </p>
                    <p className="mb-4 lg:text-xl max-w-6xl">
                        Dress:{' '}
                        <span className="font-sanslight">
                            Cocktail attire. (We recommend comfortable shoes for
                            the woodsy area in which the chapel is located.)
                        </span>
                    </p>
                    <p className="mb-4 lg:text-xl max-w-6xl">
                        Address:{' '}
                        <span className="font-sanslight">
                            21430 TN-57, Moscow, TN 38057
                        </span>
                    </p>
                    <p className="mb-4 lg:text-xl max-w-6xl">
                        Directions:{' '}
                        <span className="font-sanslight">
                            Moscow is located about 40 miles east of Memphis via
                            Highway 57. The entrance to the camp is marked by a
                            large green sign. There will be signs posted leading
                            to the chapel.
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}
