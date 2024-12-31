import { usePresenterStore } from "@/store/provider";
import { SlideGroup } from "../SlideGroup/SlideGroup";

export const ShowView = () => {
  const { activePlaylist } = usePresenterStore((state) => state);

  return (
    <ul>
      <li className="text-black">Hey</li>
      {activePlaylist?.data.map((p) => {
        return (
          <li key={p.id}>
            <SlideGroup title={p.name} slides={p.slides} />
          </li>
        );
      })}
    </ul>
  );
};
