export default function RSVPButton() {
    return (
        <a className="rsvp absolute cursor-pointer top-12 right-12 z-40 h-56 w-56 transition-transform duration-150 ease-linear">
            <div className="absolute top-0 left-0 h-full w-full tracking-widest text-xl text-white flex items-center justify-center">
                RSVP
            </div>
            <div className="absolute top-0 left-0 h-full w-full rounded-full border border-marigold"></div>
        </a>
    )
}
