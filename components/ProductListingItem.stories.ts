import { Meta, StoryObj } from "@storybook/react";
import ProductListingItem from "./ProductListingItem";

const meta = {
  title: "Component/ProductListingItem",
  component: ProductListingItem,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProductListingItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
