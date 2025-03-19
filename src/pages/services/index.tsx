import SliderView from "@/components/slider-view";
import { useState } from "react";
import React from "react";

import { LayoutGrid } from "@/components/ui/layout-grid";
export default function TicketPage() {
  const [page, setPage] = useState<number>(1);
  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          House in the woods
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A serene and tranquil retreat, this house in the woods offers a
          peaceful escape from the hustle and bustle of city life.
        </p>
      </div>
    );
  };

  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          House above the clouds
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Perched high above the world, this house offers breathtaking views and
          a unique living experience. It&apos;s a place where the sky meets
          home, and tranquility is a way of life.
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Greens all over
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Rivers are serene
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house by the river is a place of peace and tranquility. It&apos;s
          the perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };

  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="w-full">
      <div className="bg-[url('/bg.jpg')] h-[700px] w-full object-cover bg-cover flex items-center justify-center flex-col gap-10">
        <p className="text-7xl text-white font-extrabold">QUAN LẠN ECOTRIP</p>
        <p className="text-4xl text-white font-semibold">TRẢI NGHIỆM THỰC TẾ</p>
      </div>
      <div className="bg-white pt-5 pb-10 -mt-32 rounded-[40px] flex justify-center z-10 relative">
        <div className="h-screen py-20 w-full">
          <LayoutGrid cards={cards} />
        </div>
      </div>
      <div className="bg-[#DBEADD] pb-20 pt-48 -mt-32 flex justify-center">
        <div className="max-w-screen-2xl px-8 w-full">
          <SliderView />
        </div>
      </div>
    </div>
  );
}
