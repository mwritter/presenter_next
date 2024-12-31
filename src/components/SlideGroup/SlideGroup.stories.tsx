import { Meta, StoryObj } from "@storybook/react";
import { SlideGroup } from "./SlideGroup";

export default {
  title: "Components/SlideGroup",
  component: SlideGroup,
} as Meta<typeof SlideGroup>;

type Story = StoryObj<typeof SlideGroup>;

export const Default: Story = {
  args: {
    title: "Mighty Warrior",
    slides: [
      {
        id: "1",
        children: "Slide 1",
      },
      {
        id: "2",
        children: "Slide 2",
      },
      {
        id: "3",
        children: "Slide 3",
      },
    ],
  },
};
