export default function RSVPButton() {
    return (
        <a
            href="https://weddings.papier.com/regina-andrew/rsvp-4836?fbclid=IwAR0Uh-7XV8WxlROOtvCN-UUyTM9XjV4xwpCJyKO43i29Mvupg-mC-ztMwGs"
            className="rsvp absolute cursor-pointer top-12 right-12 z-40 h-56 w-56"
            target="_blank"
        >
            <div className="absolute top-0 left-0 h-full w-full transition duration-150 tracking-widest text-xl text-white flex items-center justify-center">
                RSVP
            </div>
            <div className="absolute top-0 left-0 h-full w-full rounded-full transition duration-150 border-2 border-marigold"></div>
        </a>
    )
}
