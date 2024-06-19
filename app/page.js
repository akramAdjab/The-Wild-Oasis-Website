import Image from "next/image";
import Link from "next/link";

import bg from "@/public/bg.png";

export default function Home() {
  return (
    <div className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        alt="Mountains and forests with two cabins"
        className="object-cover object-top"
      />

      {/* <div className="relative z-10 text-center"> */}
      <div className="z-10 text-center absolute top-[43%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
