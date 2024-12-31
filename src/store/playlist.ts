import { Playlist } from "@/types";
import { StateCreator } from "zustand";

export type PlaylistActions = {
  setActivePlaylist: (playlist: Playlist) => void;
  setPlaylists: (playlists: Playlist[]) => void;
};

export type PlaylistState = {
  activePlaylist: Playlist | null;
  playlists: Playlist[];
};

export type PlaylistStore = PlaylistState & PlaylistActions;

export const createPlaylistSlice: StateCreator<PlaylistStore, [], []> = (
  set,
  get
) => ({
  // State
  activePlaylist: null,
  playlists: [],

  // Mutations
  setActivePlaylist: (playlist: Playlist) => {
    const { activePlaylist } = get();
    if (activePlaylist?.id === playlist.id) {
      set(() => ({
        activePlaylist: null,
      }));
    } else {
      set(() => ({
        activePlaylist: playlist,
      }));
    }
  },
  setPlaylists: (playlists: Playlist[]) => {
    set(() => ({ playlists }));
  },
});
