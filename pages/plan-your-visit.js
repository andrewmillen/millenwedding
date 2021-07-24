import Head from 'next/head'
import PageHeader from '@/components/PageHeader'
import PlaceToStay from '@/components/PlaceToStay'
import ThingToDo from '@/components/ThingToDo'

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
            <PageHeader title="Plan Your Visit" />
            <div className="p-8 md:p-16">
                <div className="max-w-8xl">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/4">
                            <h2 className="mb-8">
                                <span className="lg:sr-only">Places to </span>
                                Stay
                            </h2>
                        </div>
                        <div className="md:flex flex-wrap flex-1">
                            <PlaceToStay
                                name="Pinecrest Cabins"
                                address="21430 TN-57, Moscow, TN 38057"
                                phone="XXX-XXX-XXXX"
                                url="https://www.google.com"
                            />
                            <PlaceToStay
                                name="Pinecrest Cabins"
                                address="21430 TN-57, Moscow, TN 38057"
                                phone="XXX-XXX-XXXX"
                                url="https://www.google.com"
                            />
                            <PlaceToStay
                                name="Pinecrest Cabins"
                                address="21430 TN-57, Moscow, TN 38057"
                                phone="XXX-XXX-XXXX"
                                url="https://www.google.com"
                            />
                            <PlaceToStay
                                name="Pinecrest Cabins"
                                address="21430 TN-57, Moscow, TN 38057"
                                phone="XXX-XXX-XXXX"
                                url="https://www.google.com"
                            />
                        </div>
                    </div>
                    <div className="md:flex flex-col lg:flex-row py-6 lg:py-12">
                        <div className="lg:w-1/4">
                            <h2 className="mb-8">
                                <span className="lg:sr-only">Things to </span>
                                Do
                            </h2>
                        </div>
                        <div className="md:flex flex-wrap flex-1">
                            <ThingToDo
                                title="South Main Arts District"
                                description="Boutique shopping and great restaurants."
                            />
                            <ThingToDo
                                title="South Main Arts District"
                                description="Boutique shopping and great restaurants."
                            />
                            <ThingToDo
                                title="South Main Arts District"
                                description="Boutique shopping and great restaurants."
                            />
                            <ThingToDo
                                title="South Main Arts District"
                                description="Boutique shopping and great restaurants."
                            />
                            <ThingToDo
                                title="South Main Arts District"
                                description="Boutique shopping and great restaurants."
                            />
                            <ThingToDo
                                title="South Main Arts District"
                                description="Boutique shopping and great restaurants."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
