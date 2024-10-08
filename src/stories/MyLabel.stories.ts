import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "UI/labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "inline-radio" /* {
        type: "select",
        options: ["normal", "h1", "h2", "h3"],
      } */,
    },
    fontColor: { control: "color" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { label: "Basic label", size: "normal" },
};

export const AllCaps: Story = {
  args: { label: "All caps label", allCaps: true },
};

export const Secondary: Story = {
  args: { label: "Secondary label", fontColor: "blue" },
};

export const CustomColors: Story = {
  args: { label: "Custom color label" },
};

export const CustomBackgroundColors: Story = {
  args: {
    label: "Custom color label",
    size: "h1",
    fontColor: "#eeeeee",
    backgroundColor: "black",
  },
};
