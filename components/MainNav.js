import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function MainNav() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleButton = useRef(null)
    const menuWrapper = useRef(null)
    const firstLink = useRef(null)

    // Close the menu if esc key is pressed
    const closeMenu = useCallback(e => {
        if (e.keyCode === 27) {
            setIsOpen(false)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', closeMenu, false)

        return () => {
            document.removeEventListener('keydown', closeMenu, false)
        }
    }, [])

    // Focus on the first item when the menu opens
    useEffect(() => {
        if (isOpen) {
            firstLink.current.focus()
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isOpen])

    // Trap focus inside the menu when open
    useEffect(() => {
        if (isOpen) {
            let focusableEls = menuWrapper.current.querySelectorAll(
                'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
            )
            let firstFocusableEl = focusableEls[0]
            let lastFocusableEl = focusableEls[focusableEls.length - 1]
            let KEYCODE_TAB = 9

            menuWrapper.current.addEventListener('keydown', function (e) {
                let isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB

                if (!isTabPressed) {
                    return
                }

                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableEl) {
                        lastFocusableEl.focus()
                        e.preventDefault()
                    }
                } else {
                    if (document.activeElement === lastFocusableEl) {
                        firstFocusableEl.focus()
                        e.preventDefault()
                    }
                }
            })
        } else {
            // null
        }
    }, [isOpen, menuWrapper])

    return (
        <div ref={menuWrapper}>
            <button
                ref={toggleButton}
                className="mainNavButton uppercase tracking-widest flex space-x-4 items-center hover:opacity-75 relative z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                {!isOpen ? (
                    <span className="h-8 w-8 flex flex-col justify-center space-y-2">
                        <span className="h-0.5 w-8 bg-white"></span>
                        <span className="h-0.5 w-4 bg-white"></span>
                    </span>
                ) : (
                    <span className="relative h-8 w-8">
                        <span className="absolute h-0.5 w-8 bg-white transform rotate-45 origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                        <span className="absolute h-0.5 w-8 bg-white transform -rotate-45 origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                    </span>
                )}
                <span className="lg:text-lg">{!isOpen ? 'Menu' : 'Close'}</span>
            </button>

            {isOpen ? (
                <div className="fixed flex flex-col justify-end max-h-screen top-0 left-0 bottom-0 right-0 transition duration-150 ease-out transform bg-wine p-6 sm:p-8 lg:p-12 z-40">
                    <nav className="block">
                        <ul className="flex flex-col space-y-4">
                            <li>
                                <Link href="/" passHref>
                                    <a
                                        ref={firstLink}
                                        className="text-white py-3 px-2 inline-block font-serifitalic sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl hover:text-wineLight transform hover:translate-x-1 transition ease-in-out"
                                        // onClick={() => setIsOpen(false)}
                                    >
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/our-story">
                                    <a className="text-white py-3 px-2 inline-block font-serifitalic sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl hover:text-wineLight transform hover:translate-x-1 hover:tracking-wider transition ease-in-out">
                                        Our Story
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/wedding-party">
                                    <a className="text-white py-3 px-2 inline-block font-serifitalic sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl hover:text-wineLight transform hover:translate-x-1 hover:tracking-wider transition ease-in-out">
                                        The Wedding Party
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/plan-your-visit">
                                    <a className="text-white py-3 px-2 inline-block font-serifitalic sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl hover:text-wineLight transform hover:translate-x-1 hover:tracking-wider transition ease-in-out">
                                        Plan Your Visit
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/the-day-of">
                                    <a className="text-white py-3 px-2 inline-block font-serifitalic sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl hover:text-wineLight transform hover:translate-x-1 transition ease-in-out">
                                        The Day Of
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/registry">
                                    <a className="text-white py-3 px-2 inline-block font-serifitalic sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl hover:text-wineLight transform hover:translate-x-1 hover:tracking-wider transition ease-in-out">
                                        Registry
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            ) : null}
        </div>
    )
}
