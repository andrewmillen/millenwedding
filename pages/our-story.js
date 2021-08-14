import Head from 'next/head'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import ChatBubble from '@/components/ChatBubble'

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
                <meta
                    property="og:image"
                    content="https://www.millenwedding.com/og-image.jpg"
                />
            </Head>
            <PageHeader title="Our Story" />
            <div className="py-8 md:py-16 container">
                <div className="max-w-6xl mx-auto flex flex-col">
                    <div className="flex flex-col items-center justify-center space-y-4 mb-6 lg:mb-16">
                        <div className="inline-flex space-x-2 items-center">
                            <svg
                                width="46"
                                height="46"
                                viewBox="0 0 46 46"
                                fill="none"
                            >
                                <path
                                    d="M5.61333 27.6586C3.04038 18.0562 8.73886 8.18618 18.3413 5.61323C27.9436 3.04028 37.8137 8.73876 40.3867 18.3412C42.9596 27.9435 37.2611 37.8136 27.6587 40.3866C18.0563 42.9595 8.18629 37.261 5.61333 27.6586Z"
                                    fill="#D9656B"
                                />
                                <path
                                    d="M25.1034 14.1548C27.1607 13.5689 29.33 14.1914 30.7288 15.8689C32.2264 18.1808 32.2308 20.9397 31.3059 23.2676C30.7048 24.8393 29.8691 26.2797 28.9695 27.5836C28.1648 28.8688 26.2943 31.4867 25.673 31.712C25.0821 31.7551 24.2805 31.2876 23.7466 31.08C20.7282 29.8457 17.4086 28.2517 15.3608 26.0839C13.5613 23.9582 12.7525 20.9481 14.0386 18.604C15.795 15.8957 19.3955 15.369 21.7512 17.0756C22.0615 16.331 22.5163 15.6883 23.1158 15.1487C23.7441 14.6794 24.4176 14.3501 25.1034 14.1548Z"
                                    fill="#F1EEED"
                                />
                            </svg>
                            <div className="font-serifitalic text-wine text-3xl">
                                It's a match!
                            </div>
                        </div>
                        <div className="inline-flex -space-x-4 items-center">
                            <div className="rounded-full border-4 border-solid relative overflow-hidden w-36 h-36 border-wineLight">
                                <Image
                                    src="/chat-hero-andrew.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="rounded-full border-4 border-solid relative overflow-hidden w-36 h-36 border-wineLight">
                                <Image
                                    src="/chat-hero-gina.jpg"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>

                    <ChatBubble text="Like a lot of couples these days, our story starts with a mutual swipe right. I saw a girl at a football game with a beautiful smile, and could tell that she was genuine, kind, and fun-loving." />

                    <ChatBubble
                        alternate={true}
                        text="And I saw a guy in a leather jacket with a kind face who shared my like of Fresca™"
                    />

                    <ChatBubble text="On our first date, I ate an entire dinner pizza by myself." />

                    <ChatBubble
                        alternate={true}
                        text="And I made conversation on subjects that are literally on Things Not to Talk About on a First Date lists. I'm kinda surprise he stuck around to be honest, let alone ask me on a second date."
                    />

                    <ChatBubble
                        image="jerrys"
                        width={400}
                        height={400}
                        text="Soon after, she took me to Jerry’s sno-cones against my will. But she was right, it was delicious."
                    />

                    <ChatBubble
                        alternate={true}
                        text="We watched Hitchcock's &ldquo;Rear Window&rdquo; together in Elmwood Cemetery. Then I left for Oaxaca for a month."
                    />

                    <ChatBubble text="I wrote her frontier style &ldquo;letters from the homestead&rdquo; about surviving while she was gone, and we Skyped every night." />

                    <ChatBubble
                        alternate={true}
                        image="dc"
                        width={720}
                        height={405}
                        text="A few days after I got back, we got into the car and drove to the Women's March in D.C., our first trip together."
                    />

                    <ChatBubble text="And after spending a month apart from her, then four days in a car together with her, I knew we had a connection that ran deep." />

                    <ChatBubble
                        alternate={true}
                        text="There was something special about him.  Maybe it was his calming presence, or his thoughtful planning of activities (like learning his dad's spaghetti recipe specifically to cook for me on Valentine's Day), or that my cat loved him."
                    />

                    <ChatBubble
                        image="football"
                        width={800}
                        height={600}
                        text="I started falling in love with her. She broadened my horizons, but also made me feel comfortable being myself."
                    />

                    <ChatBubble
                        alternate={true}
                        text="And he provided me with stability and reason without having to sacrifice my passions and overall weirdness."
                    />

                    <ChatBubble text="We moved in together, and the house started filling up: woodworking tools, baking equipment, a dog&hellip;" />

                    <ChatBubble
                        alternate={true}
                        text="&hellip;and the comfort and joy that come from two people who love each other, and who can be their true selves."
                    />

                    <ChatBubble
                        image="engagement"
                        width={600}
                        height={620}
                        text="As we hunkered down during the pandemic, I realized it was time. We took a morning walk together through the botanic gardens, and in the Moongazing Pavillion, I asked her to marry me. 💍"
                    />

                    <ChatBubble
                        alternate={true}
                        image="engagement2"
                        width={800}
                        height={533}
                        text="And obviously I said yes. So here we are, 5 years in. There have been uncertainties in the world around us but I've always been certain about us. We are so excited to continue our journey together and that you'll be here to witness that next big step."
                    />
                </div>
            </div>
        </>
    )
}
