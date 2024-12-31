import { Meta, StoryObj } from "@storybook/react";
import { Main } from "./MainPage";
import { Mock } from "./decorators/PlaylistsDecorator";

export default {
  title: "Pages/Main",
  decorators: [Mock],
  parameters: {
    layout: "fullscreen",
  },
  component: Main,
} as Meta<typeof Main>;

type Story = StoryObj<typeof Main>;

export const Default: Story = {};
