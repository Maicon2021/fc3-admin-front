import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";


export const Banner = () => (
  <div className=" mb-10">
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black">
        <Image
          src='/the-witcher2.jpg'
          alt="The Witcher"
          fill={true}
          className=" h-[65vh] object-cover object-top lg:h-[95vh] " />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        The Witcher
      </h1>

      <p className=" max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
        Geralt of Rivia, a monster-hunting mutant, sets out in search of his destiny in a
        turbulent world, where people can be more wicked than wild creatures.
      </p>
    </div>

    <div className="flex space-x-3">
      <button className=" md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold 
      text-black transition hover:opacity-75 md:px-8 md:py-2.5"
      >
        <PlayIcon className="h-6" />
        Play
      </button>
      <button className=" md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold 
      text-gray-950 transition hover:opacity-75 md:px-8 md:py-2.5"
      >
        <InformationCircleIcon className="h-6" />
        More Info
      </button>


    </div>

  </div>
);
