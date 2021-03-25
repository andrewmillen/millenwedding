import Head from "next/head";
import Image from "next/image";
import MainNav from "@/components/MainNav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrew and Regina's Wedding</title>
        <meta
          name="description"
          content="We're getting married on October 23, 2021 at Pinecrest Retreat in
          Mowcow, TN."
        />
      </Head>

      <div className="w-screen h-screen flex flex-col md:flex-row">
        <div className="w-screen h-1/2 flex-shrink-0 md:h-screen md:w-1/2 bg-wine text-white flex flex-col justify-between p-8 md:p-16">
          <div className="flex items-center justify-between">
            <MainNav />
            <a
              href="#"
              className="text-marigold uppercase lg:text-lg tracking-widest lg:hidden"
            >
              RSVP
            </a>
          </div>

          <div className="flex flex-col-reverse md:flex-col">
            <p className="text-wineLight tracking-widest lg:text-xl">
              10.23.2021
            </p>
            <h1 className="font-serifitalic text-6xl lg:text-8xl mb-2 lg:mt-4 lg:-ml-3">
              Regina <span className="text-wineLight">&amp;</span>
              <br /> Andrew
            </h1>
          </div>
        </div>
        <div className="w-screen h-1/2 flex-shrink-0 md:h-screen md:w-1/2 relative">
          <Image src="/hero.jpg" layout="fill" objectFit="cover" />
        </div>
      </div>
    </>
  );
}
