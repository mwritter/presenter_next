import { PlaylistContextProvider } from "@/context/PlaylistContext";

const MainView = () => {
  return (
    <PlaylistContextProvider>
      <div></div>
    </PlaylistContextProvider>
  );
};

export default MainView;
