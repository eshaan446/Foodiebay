import Link from "next/link";
import bg from '../public/Food.png'
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="h-screen w-full homepage object-cover bg-no-repeat opacity-90 bg-[url('/img10.webp')]">

        <div className="text-center w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 server">
          <h1 className="text-5xl my-8 text-purple text-red-700 font-bold">Explore food from all continents around the world.</h1>
          <Link
            className="shadow-gray-50 bg-slate-400 rounded text-xl py-2 px-4 cursor-pointer hover:bg-red-700 hover:text-white"
            href="/types"
          >
            Explore Cuisines
          </Link>
        </div>
      </div>
    </>
  );
}