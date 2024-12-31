import React from "react";
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { PresenterStoreProvider } from "../src/store/provider";
import { PlaylistContextProvider } from "../src/context/PlaylistContext";
const preview: Preview = {
  decorators: [
    (Story) => (
      <PresenterStoreProvider>
        <PlaylistContextProvider>
          <Story />
        </PlaylistContextProvider>
      </PresenterStoreProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
