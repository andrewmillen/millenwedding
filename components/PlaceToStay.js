export default function PlaceToStay({ name, address, distance, phone, url }) {
    return (
        <div className="md:w-1/2 mb-6 lg:mb-12 pr-8">
            <h3>{name}</h3>
            <p className="font-sanslight mb-3">
                {address}
                <br />
                {distance}
            </p>
            <a className="text-wine underline" href="#">
                {phone}
            </a>
            <br />
            <a className="text-wine underline" href={url}>
                Visit Website
            </a>
        </div>
    )
}
