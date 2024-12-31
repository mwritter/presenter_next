import { ReactNode } from "react";

export type Slide = {
  id: string;
  children: ReactNode;
};

export type PlaylistData = {
  id: string;
  name: string;
  slides: Slide[];
}[];

export type Playlist = {
  id: string;
  name: string;
  data: PlaylistData;
};
