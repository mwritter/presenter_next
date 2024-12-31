import { Playlist } from "./types";

export const playlists: Playlist[] = [
  {
    id: "123abc",
    name: "01-01-25",
    data: [
      {
        id: "123abc-1",
        name: "Mighty Warrior",
        slides: [
          {
            id: "1",
            children: "This is some text",
          },
          {
            id: "2",
            children: "This is some text",
          },
        ],
      },
    ],
  },
  {
    id: "456abc",
    name: "01-02-25",
    data: [],
  },
];
