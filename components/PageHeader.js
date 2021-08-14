import MainNav from '@/components/MainNav'

export default function PageHeader({ title }) {
    return (
        <div className="w-screen h-1/2 bg-wine text-white flex flex-col justify-between py-8 md:py-16">
            <div className="container">
                <h1 className="mt-16 md:mt-24 -ml-1 lg:-ml-2">{title}</h1>
            </div>
        </div>
    )
}
