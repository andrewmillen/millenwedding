import Image from 'next/image'

export default function ChatBubble({
    alternate,
    text,
    image,
    width,
    height,
    alt,
}) {
    return (
        <>
            {alternate ? (
                <div className="flex w-full justify-end mb-4 border pl-20 lg:pl-0">
                    <div className="flex items-end justify-end space-x-8 w-full">
                        <div className="flex items-end">
                            <div className="font-sansregular max-w-md lg:max-w-xl text-sm md:text-base flex-1 p-4 lg:p-6 lg:px-8 bg-wineLight text-white rounded-xl">
                                {text}
                                {image && (
                                    <>
                                        <div className="h-4"></div>
                                        <Image
                                            src={image}
                                            height={height}
                                            width={width}
                                            alt={alt}
                                        />
                                    </>
                                )}
                            </div>
                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                className="mb-3"
                            >
                                <path
                                    d="M0 21H21C11.9125 16.4562 4.54377 9.08755 0 0V21Z"
                                    fill="#D5646B"
                                />
                            </svg>
                        </div>

                        <div className="w-12">
                            <Image
                                src="/chat-gina.png"
                                height={48}
                                width={48}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex w-full justify-start mb-4 border pr-20 lg:pr-0">
                    <div className="flex items-end space-x-8 w-full">
                        <div className="w-12">
                            <Image
                                src="/chat-andrew.png"
                                height={48}
                                width={48}
                            />
                        </div>
                        <div className="flex items-end">
                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                className="mb-3"
                            >
                                <path
                                    d="M21 21H0C9.08755 16.4562 16.4562 9.08755 21 0V21Z"
                                    fill="#D4CBC8"
                                />
                            </svg>
                            <div className="max-w-md font-sansregular lg:max-w-xl text-sm md:text-base lg:text-lg flex-1 p-4 lg:py-6 lg:px-8 bg-linenDark rounded-xl">
                                {text}
                                {image && (
                                    <>
                                        <div className="h-4"></div>
                                        <Image
                                            src={image}
                                            height={height}
                                            width={width}
                                            alt={alt}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
