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
            Moscow, TN."
                />
                <meta
                    property="og:image"
                    content="https://www.millenwedding.com/og-image.jpg"
                />
            </Head>
            <PageHeader title="Plan Your Visit" />
            <div className="py-8 md:py-16 container">
                <div className="max-w-7xl">
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
                                distance="On site"
                                phone="901-878-1247"
                                phoneDisplay="901.878.1247"
                                url="http://camppinecrest.org/"
                            />
                            <PlaceToStay
                                name="Hampton Inn Collierville"
                                address="1280 W Poplar Ave, Collierville, TN 38017"
                                distance="40 min from site"
                                phone="901-854-9400"
                                phoneDisplay="901.854.9400"
                                url="https://www.hilton.com/en/hotels/memcvhx-hampton-memphis-collierville/"
                            />
                            <PlaceToStay
                                name="Hilton Memphis"
                                address="939 Ridge Lake Blvd, Memphis, TN 38120"
                                distance="50 min from site"
                                phone="901-684-6664"
                                phoneDisplay="901.684.6664"
                                url="https://www.hilton.com/en/hotels/memphhf-hilton-memphis/"
                            />
                            <PlaceToStay
                                name="The Peabody Memphis"
                                address="118 S 2nd St, Memphis, TN 38103"
                                distance="75 min from site"
                                phone="901-529-0000"
                                phoneDisplay="901.529.0000"
                                url="https://www.peabodymemphis.com/"
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
                                title="Shelby Farms Park"
                                description="A massive, world-class green space with just about every activity you can imagine."
                            />
                            <ThingToDo
                                title="National Civil Rights Museum"
                                description="A can't-miss experience. If you skip our wedding entirely to make a visit, we wouldn't blame you"
                            />
                            <ThingToDo
                                title="Cooper Young"
                                description="Indie bookshops, record stores, and unique cafes."
                            />
                            <ThingToDo
                                title="South Main Arts District"
                                description="Boutique shopping and great restaurants."
                            />
                            <ThingToDo
                                title="Crosstown Concourse"
                                description="Art galleries and restaurants in a one-of-a-kind urban restoration project."
                            />
                            <ThingToDo
                                title="Overton Park"
                                description="Walking trails through old growth forests, the famous Memphis Zoo, and the Brooks Museum of Art."
                            />
                        </div>
                    </div>
                    <div className="md:flex flex-col lg:flex-row py-6 lg:py-12">
                        <div className="lg:w-1/4">
                            <h2 className="mb-8">
                                <span className="lg:sr-only">Things to </span>
                                Eat &amp; Drink
                            </h2>
                        </div>
                        <div className="md:flex flex-wrap flex-1">
                            <ThingToDo
                                title="Catherine and Mary's"
                                description="An upscale brunch right on South Main."
                            />
                            <ThingToDo
                                title="Los Picosos"
                                description="A hidden gem on Summer Avenue. Go for breakfast, thank us later."
                            />
                            <ThingToDo
                                title="Elwood's Shack"
                                description="A huge menu that's hard to go wrong with. The BBQ pizza is our go-to."
                            />
                            <ThingToDo
                                title="Aldo's Pizza"
                                description="Our favorite pizza joint this side of Chicago."
                            />
                            <ThingToDo
                                title="Payne’s BBQ"
                                description="Skip the Rendezvous and hit up Payne’s for the best pork sandwhich in town."
                            />
                            <ThingToDo
                                title="La Michoacana"
                                description="An ice cream, paleta, and snack parlor. The key lime pie ice cream is fantastic."
                            />
                            <ThingToDo
                                title="Absinthe Room"
                                description="Our favorite spot on Beale Street. Pool, liquor, and quiet second-story view of the revelry below."
                            />
                            <ThingToDo
                                title="Wiseacre Taproom"
                                description="If you try only one Memphis beer, make it a &ldquo;Gotta Get Up To Get Down.&rdquo;"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
