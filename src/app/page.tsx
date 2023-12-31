import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div
        id="page1"
        className="w-full h-screen cursor-default select-none overflow-hidden bg-[#F6AE2D] flex flex-col  gap-20 lg:gap-10 md:gap-20  sm:gap-16   items-center justify-center"
      >
        <div className="font-mono w-full flex items-center justify-evenly text-2xl">
          <Link href={"shop"}>Shop</Link>
          <div className="framer-16bwykm-container">
            <div id="link-divider" className="w-7 h-7">
              <svg>
                <clipPath
                  id="curve-n5xBaojHu-zhiyv2"
                  clipPathUnits="objectBoundingBox"
                  transform="scale(0.005)"
                >
                  <path d="M0 158.405C46.1571 143.817 56.1862 153.845 41.5975 200C68.5533 153.845 131.447 153.845 158.403 200C143.824 153.845 153.854 143.817 200 158.405C153.854 131.45 153.854 68.5603 200 41.6059C153.854 56.1832 143.824 46.1547 158.403 0C131.447 46.1547 68.5533 46.1547 41.5975 0C56.1862 46.1547 46.1571 56.1832 0 41.6059C46.1571 68.5603 46.1571 131.45 0 158.405ZM100 137C120.435 137 137 120.435 137 100C137 79.5655 120.435 63 100 63C79.5655 63 63 79.5655 63 100C63 120.435 79.5655 137 100 137Z"></path>
                </clipPath>
              </svg>
            </div>
          </div>
          <Link href={"shop"}>About</Link>
        </div>
        <div className="text-center">
          <h1 className="text-[200px] lg:text-[400px] md:text-[300px] sm:text[200px] leading-none font-[tigonFont] text-transparent bg-clip-text bg-gradient-to-r from-black to-[#305E81]">
            TIGON
          </h1>
          <p
            id="tagline"
            className=" w-full font-[tigonFont] flex justify-evenly text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-black to-[#305E81]"
          >
            <span>TO</span>
            <span>THE</span>
            <span>TOP</span>
          </p>
        </div>
      </div>
    </main>
  );
}
