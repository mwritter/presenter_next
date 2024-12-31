import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Slide } from "./Slide";

export default {
  title: "Components/Slide",
  component: Slide,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Slide>;

type Story = StoryObj<typeof Slide>;

export const Default: Story = {
  args: {
    id: "1",
    type: "none",
    onSetActive: fn(),
    children: (
      <span className="flex flex-col gap-2">
        <span>This is slide text</span>
        <span>This is slide text</span>
      </span>
    ),
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    active: true,
  },
};
