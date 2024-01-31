import Image from "next/image";
import RandomQuote from "./components/RandomQuote";

export default function Home() {
  return (
    <main
      className="h-screen w-screen flex flex-col items-center justify-center p-10 bg-black"
      style={{
        backgroundImage: `url(https://picsum.photos/800/600/?blur)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center bg-slate-800 bg-opacity-30 p-20 rounded-3xl z-50">
        <h1 className="text-white text-6xl font-bold drop-shadow-lg pb-10">
          Obstime-me
        </h1>
        <RandomQuote />
      </div>

    </main>
  );
}
