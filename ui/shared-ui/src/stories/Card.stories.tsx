import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../Card/Card';

const meta: Meta<typeof Card> = {
  title: 'Shared/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    title: 'Default Card',
    children: 'This is a basic card using standard CSS.',
  },
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const WithLongContent: Story = {
  args: {
    title: 'Card With More Content',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut orci
        convallis, elementum ipsum in, bibendum ligula. Curabitur eget sem et
        justo fermentum pretium.
      </p>
    ),
  },
};

export const CustomClassName: Story = {
  args: {
    title: 'Custom Styled Card',
    children: 'This card uses a custom background via className.',
    className: 'custom-card-background',
  },
};
