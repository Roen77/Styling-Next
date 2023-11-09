import { useState } from "react";
import Image from "next/image";
import { menuList } from "@/utils/menu";

function TailwindCSS() {
  const [showDropMenu, setShowDropMenu] = useState(false);
  const onClickDropMenu = () => {
    setShowDropMenu((prev) => !prev);
  };
  return (
    <div>
      <header className="py-30 px-[50px] flex justify-between items-center text-[12px] tracking-wide relative">
        <a
          className="font-semibold text-2xl border-b-4 border-b-black"
          href="#"
        >
          Business
        </a>
        <ul className="flex  max-laptop:hidden">
          {menuList.map((menu, i) => (
            <li key={i}>
              <a
                className="p-[20px] text-dark-gray/60 hover:text-dark-gray/100"
                href="#"
              >
                {menu}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <button className="py-[12px] px-[25px] bg-button-black text-white tracking-widest max-laptop:hidden">
            CONTACT US
          </button>
          <button
            onClick={onClickDropMenu}
            className="w-[22px] h-[18px] laptop:hidden block"
          >
            <Image
              src="https://assets.website-files.com/5c6eb5400253230156de2bd6/5c6eb8fd2f27af658094fa4a_menu-icon.png"
              alt="toggle button"
              width={22}
              height={18}
            />
          </button>
        </div>
        <ul
          className={`absolute left-0 w-full z-50 bg-white top-[96px] laptop:hidden shadow-md ${
            showDropMenu ? "block" : "hidden"
          }`}
        >
          {menuList.map((menu, i) => (
            <li key={i}>
              <a className="p-[20px] flex justify-center w-full" href="#">
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </header>
      <main className="min-h-screen">
        <div className="relative pb-[40%]">
          <Image
            fill
            sizes="100vw"
            src="https://fastly.picsum.photos/id/927/1000/400.jpg?hmac=OOWStXg293Wv5OthcN_wMmWhKQBO3UOx2yCkOrEdsPc"
            alt="banner"
            style={{ padding: "0 30px" }}
          />
        </div>
        <div className="w-24 min-w-full md:min-w-0 px-30">
          <div className="flex laptop:flex-row flex-col py-30">
            <div className="pb-6  basis-1 laptop:basis-1/2 laptop:pr-6">
              <p>ABOUT</p>
              <h3 className="font-bold text-4xl py-5">Two Col</h3>
              <div>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for lorem ipsum
                will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like).
              </div>
            </div>
            <div className="border border-indigo-60 basis-1 flex laptop:basis-1/2 items-center justify-center">
              <Image
                src="https://fastly.picsum.photos/id/80/700/400.jpg?hmac=zyKxY2cGPjTUBYJ3Y0_3oNcSmGNT-ZikOXPr6UAbfHM"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="right image"
              />
            </div>
          </div>
          <div className="flex laptop:flex-row flex-col py-30 gap-2">
            <div className="basis-1 laptop:basis-1/3">
              <h3 className="font-bold text-4xl py-5">Three Col 1</h3>
              <div>
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for lorem ipsum
                will uncover many web sites still in their infancy.
              </div>
            </div>
            <div className="basis-1 laptop:basis-1/3">
              <h3 className="font-bold text-4xl py-5">Three Col 2</h3>
              <div>
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </div>
            </div>
            <div className="basis-1 laptop:basis-1/3">
              <h3 className="font-bold text-4xl py-5">Three Col 3</h3>
              <div>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content here
                content here
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TailwindCSS;
