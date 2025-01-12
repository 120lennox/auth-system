import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-8">
      <div className="absolute bottom-[400] left-[183]">
        <div className="fixed w-[633] h-390 flex flex-col">
          <div className="font-semibold text-[34px] text-white">Capture Love's Perfect Moment</div>
          <div className="text-white py-1">Together, every frame tells our story. This Valentine's Day, transform ordinary moments into timeless memories. Whether you're behind the lens or in front of it, let's create something beautiful that speaks of romance, connection, and the joy of being with the one who makes your heart skip a beat</div>
          <div className="mt-10">
            <Link className="bg-cyan px-8 py-2 rounded-3xl text-white"  href="/">signup for free</Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}
