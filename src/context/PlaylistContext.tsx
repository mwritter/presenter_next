import { Slide } from "@/types";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type PlaylistContextType = {
  activeSlide: Slide | null;
  setActiveSlide: Dispatch<SetStateAction<Slide | null>>;
};

const PlaylistContext = createContext({} as PlaylistContextType);

export const PlaylistContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // TODO: when a slide is selected pass the information to the other windows
  const [activeSlide, setActiveSlide] = useState<Slide | null>(null);
  return (
    <PlaylistContext value={{ activeSlide, setActiveSlide }}>
      {children}
    </PlaylistContext>
  );
};

export const usePlaylistContext = () => useContext(PlaylistContext);
