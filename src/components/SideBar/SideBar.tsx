import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { usePresenterStore } from "@/store/provider";

export const SideBar = () => {
  return (
    <div className="h-full w-[350px] bg-black">
      <PlaylistHeader />
      <PlaylistList />
    </div>
  );
};

const PlaylistHeader = () => {
  return (
    <div className="text-white/50 flex justify-between items-center py-2 px-5 text-sm">
      <span>Playlists</span>
      <Button variant="ghost">
        <PlusIcon size={20} />
      </Button>
    </div>
  );
};

const PlaylistList = () => {
  const { playlists, activePlaylist, setActivePlaylist } = usePresenterStore(
    (state) => state
  );
  return (
    <ul className="flex flex-col gap-1">
      {playlists.map((playlist) => {
        return (
          <li key={playlist.name}>
            <Button
              variant="ghost"
              alignment="start"
              className={cn(
                "flex w-full py-2 px-5 text-lg text-white rounded-none",
                {
                  "bg-accent text-accent-foreground":
                    activePlaylist?.id === playlist.id,
                }
              )}
              onClick={() => setActivePlaylist(playlist)}
            >
              <span className="flex-1 text-start">{playlist.name}</span>
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
