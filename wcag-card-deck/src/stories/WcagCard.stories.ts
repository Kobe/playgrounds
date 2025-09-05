import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { WcagCard } from "../react/index.tsx";

const meta = {
  title: "React/WcagCard",
  component: WcagCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof WcagCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    criterion: "1.1.1",
  },
};
