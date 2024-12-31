import { Meta, StoryObj } from "@storybook/react";
import { SideBar } from "./SideBar";
import { Mock } from "@/stories/decorators/PlaylistsDecorator";

export default {
  title: "Components/SideBar",
  component: SideBar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [Mock],
} as Meta<typeof SideBar>;

type Story = StoryObj<typeof SideBar>;

export const Default: Story = {};
