import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup } from '.'
import { Button } from '../Button'

const meta = {
  title: 'Components/Button Group',
  component: ButtonGroup,
  // subcomponents: { Button },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button label="Button One" />
      <Button label="Button Two" bgColor="#d3eae2" textColor="#131313" />
      <Button label="Button Three" textColor="#0b4a35" isOutline />
    </ButtonGroup>
  ),
}
