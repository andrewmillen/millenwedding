import MainNav from '@/components/MainNav'

export default function PageHeader({ title }) {
    return (
        <div className="w-screen h-1/2 flex-shrink-0 bg-wine text-white flex flex-col justify-between p-8 md:p-16">
            <div className="">
                <MainNav />
                <h1 className="mt-12 lg:mt-24 -ml-1 lg:-ml-2">{title}</h1>
            </div>
        </div>
    )
}
