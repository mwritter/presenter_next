import { create } from "zustand";
import { createPlaylistSlice, PlaylistStore } from "./playlist";
export type Store = PlaylistStore;

export const createPresenterStore = () => {
  return create<Store>((...a) => ({
    ...createPlaylistSlice(...a),
  }));
};
