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
            <div className="p-8 md:p-16">
                <div className="max-w-5xl flex flex-col">
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
                </div>
            </div>
        </>
    )
}
