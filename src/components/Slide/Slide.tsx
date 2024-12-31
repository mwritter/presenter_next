import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { FunctionComponent, useState } from "react";
import { SlideGroupDropdownMenu } from "./SlideGroupDropdownMenu";
import { Slide as SlideType } from "@/types";

export type SlideProps = {
  slide: SlideType;
  height?: string;
  width?: string;
  active?: boolean;
  onSetActive?: (slide: SlideType) => void;
} & SlideGroupProps;

export const Slide: FunctionComponent<SlideProps> = (props) => {
  const { height = "275px", type, active = false, onSetActive, slide } = props;
  return (
    <div
      style={{
        height,
      }}
      className={cn("bg-[#242526] flex flex-col aspect-[16/9]", {
        "border-[5px] border-orange-300 border-solid": active,
      })}
    >
      {/* The styles here will have to be dynamic where the user can change the styles at runtime */}
      <button
        className="flex-1 flex justify-center items-center text-white"
        onClick={() => onSetActive?.(slide)}
      >
        {slide.children}
      </button>
      <SlideGroup type={type} />
    </div>
  );
};

// These groups will need to be dynamic where the user can add more
const slideGroupVariants = cva("h-[20px] w-full cursor-pointer", {
  variants: {
    variant: {
      none: "bg-white/20",
      blank: "bg-black/50",
    },
  },
  defaultVariants: {
    variant: "none",
  },
});

type SlideGroupProps = { type?: "none" | "blank" };
// TODO: this will be a button menu where the user can change the slide type
const SlideGroup = ({ type = "none" }: SlideGroupProps) => {
  const [groupType, setGroupType] = useState(type);

  return (
    <SlideGroupDropdownMenu
      setType={(v) => setGroupType(v as "none" | "blank")}
      type={groupType}
      trigger={
        <div className={cn(slideGroupVariants({ variant: groupType }))} />
      }
    />
  );
};
