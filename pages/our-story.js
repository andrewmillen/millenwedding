import Head from 'next/head'
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
                <div className="max-w-6xl flex flex-col">
                    <ChatBubble text="Like a lot of couples these days, our story starts with a mutual swipe right. I saw a girl at a football game with a beautiful smile, and could tell that she was genuine, kind, and fun-loving." />

                    <ChatBubble
                        alternate={true}
                        text="And I saw a guy in a leather jacket with a kind face who shared my like of Fresca™"
                    />

                    <ChatBubble text="On our first date, I housed an entire dinner pizza." />

                    <ChatBubble
                        alternate={true}
                        text="And I made conversation on subjects that are literally on Things Not to Talk About on a First Date lists. I'm kinda surprise he stuck around to be honest, let alone ask me on a second date."
                    />

                    <ChatBubble text="Soon after, she took me to Jerry’s sno-cones against my will. But she was right, it was delicious." />

                    <ChatBubble
                        alternate={true}
                        text="We watched Hitchcock's &ldquo;Rear Window&rdquo; together in Elmwood Cemetery. Then I left for Oaxaca for a month."
                    />

                    <ChatBubble text="I wrote her frontier style &ldquo;letters from the homestead&rdquo; about surviving while she was gone, and we Skyped every night." />

                    <ChatBubble
                        alternate={true}
                        text="A few days after I got back, we got into the car and drove to the Women's March in D.C., our first trip together."
                    />

                    <ChatBubble text="And after spending a month apart from her, then four days in a car together with her, I knew we had a connection that ran deep." />

                    <ChatBubble
                        alternate={true}
                        text="There was something special about him.  Maybe it was his calming presence, or his thoughtful planning of activities (like learning his dad's spaghetti recipe specifically to cook for me on Valentine's Day), or that my cat loved him."
                    />

                    <ChatBubble text="I started falling in love with her. She broadened my horizons, but also made me feel comfortable being myself." />

                    <ChatBubble
                        alternate={true}
                        text="And he provided me with stability and reason without having to sacrifice my passions and overall weirdness."
                    />

                    <ChatBubble text="We moved in together, and the house started filling up: woodworking tools, baking equipment, a dog&hellip;" />

                    <ChatBubble
                        alternate={true}
                        text="&hellip;and the comfort and joy that come from two people who love each other, and who can be their true selves."
                    />

                    <ChatBubble text="As we hunkered down during the pandemic, I realized it was time. We took a morning walk together through the botanic gardens, and in the Moongazing Pavillion, I asked her to marry me." />

                    <ChatBubble
                        alternate={true}
                        text="And obviously I said yes. So here we are, 5 years in. There have been uncertainties in the world around us but I've always been certain about us. We are so excited to continue our journey together and that you'll be here to witness that next big step."
                    />
                </div>
            </div>
        </>
    )
}
