import { SideBar } from "@/components/SideBar/SideBar";
import { SlideGroup } from "@/components/SlideGroup/SlideGroup";
import { usePresenterStore } from "@/store/provider";
import React from "react";

export const Main = () => {
  return (
    <div className="h-screen w-full grid grid-cols-[auto,1fr]">
      <SideBar />
      <div className="bg-black">
        <ShowView />
      </div>
    </div>
  );
};

const ShowView = () => {
  const { activePlaylist } = usePresenterStore((state) => state);

  return (
    <ul>
      <li className="text-black">Hey</li>
      {activePlaylist?.data.map((p) => {
        return (
          <li key={p.id}>
            <SlideGroup title={p.name} slides={p.slides} />
          </li>
        );
      })}
    </ul>
  );
};
