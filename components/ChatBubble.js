import Image from 'next/image'

export default function ChatBubble({ alternate, text }) {
    return (
        <>
            {alternate ? (
                <div className="flex w-full justify-start mb-4">
                    <div className="flex items-center space-x-12 w-4/6">
                        <div className="chatbubble left order-2">{text}</div>
                        <div className="w-12">
                            <Image
                                className="z-40 order-1"
                                src="/chat-gina.png"
                                height={48}
                                width={48}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex w-full justify-end mb-4">
                    <div className="flex items-center space-x-12 w-4/6">
                        <div className="chatbubble right">{text}</div>
                        <div className="w-12">
                            <Image
                                className="z-40"
                                src="/chat-andrew.png"
                                height={48}
                                width={48}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
