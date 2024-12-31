import { playlists } from "@/mock";
import { usePresenterStore } from "@/store/provider";
import { Decorator } from "@storybook/react";
import { useEffect } from "react";

export const Mock: Decorator = (Story) => {
  const setPlaylists = usePresenterStore(({ setPlaylists }) => setPlaylists);

  useEffect(() => {
    setPlaylists(playlists);
  }, [setPlaylists]);

  return (
    <div className="h-screen w-screen">
      <Story />
    </div>
  );
};
