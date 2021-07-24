export default function BodyLink({ url, displayText, external }) {
    return (
        <a
            href={url}
            target={external ? '_blank' : '_self'}
            className="underline text-wine hover:text-wineLight transition-all duration-150 ease-in-out"
        >
            {displayText}
        </a>
    )
}
