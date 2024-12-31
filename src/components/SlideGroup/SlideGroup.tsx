import React, { FunctionComponent } from "react";
import { Slide } from "../Slide/Slide";
import { usePlaylistContext } from "@/context/PlaylistContext";
import { Slide as SlideType } from "@/types";

export type SlideGroupProps = {
  title: string;
  slides: SlideType[];
};

export const SlideGroup: FunctionComponent<SlideGroupProps> = ({
  title,
  slides,
}) => {
  const { activeSlide, setActiveSlide } = usePlaylistContext();
  return (
    <div className="flex flex-col gap-2 bg-black p-5">
      <div className="flex bg-[#242526] py-2 px-5 text-white">
        <h2>{title}</h2>
      </div>
      <ul className="flex flex-wrap gap-2 overflow-hidden">
        {slides.map((slide) => (
          <Slide
            key={slide.id}
            slide={slide}
            active={activeSlide?.id === slide.id}
            onSetActive={setActiveSlide}
          />
        ))}
      </ul>
    </div>
  );
};
