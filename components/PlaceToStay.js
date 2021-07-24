import BodyLink from '@/components/BodyLink'

export default function PlaceToStay({
    name,
    address,
    distance,
    phone,
    phoneDisplay,
    url,
}) {
    return (
        <div className="md:w-1/2 mb-6 lg:mb-12 pr-8">
            <h3 className="text-lg mb-1">{name}</h3>
            <p className="font-sanslight mb-3">
                {address}
                <br />({distance})
            </p>
            <div className="flex flex-col space-y-1">
                <div>
                    <BodyLink
                        external={true}
                        url={`tel:${phone}`}
                        displayText={phoneDisplay}
                    />
                </div>
                <div>
                    <BodyLink
                        external={true}
                        url={url}
                        displayText="Visit Website"
                    />
                </div>
            </div>
        </div>
    )
}
