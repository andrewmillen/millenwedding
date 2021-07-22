export default function ThingToDo({ title, description }) {
    return (
        <div className="md:w-1/2 mb-6 lg:mb-12 pr-8">
            <h3>{title}</h3>
            <p className="font-sanslight">{description}</p>
        </div>
    )
}
