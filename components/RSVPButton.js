export default function RSVPButton() {
    return (
        <a className="rsvp absolute cursor-pointer top-12 right-12 z-40 h-56 w-56 group transform transition-transform duration-150 hover:scale-110">
            <div className="absolute top-0 left-0 h-full w-full transition duration-150 tracking-widest text-xl text-white flex items-center justify-center">
                RSVP
            </div>
            <div className="absolute top-0 left-0 h-full w-full rounded-full transition duration-150 border-2 border-marigold group-hover:border-4"></div>
        </a>
    )
}
