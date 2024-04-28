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
type Story = StoryObj<typeof ButtonGroup>

export const Primary: Story = {
  render: () => (
    <ButtonGroup>
      <Button color="#2b8164" label="Button One" />
      <Button color="#b6d0c7" label="Button Two" />
    </ButtonGroup>
  ),
}

export const Center: Story = {
  render: () => (
    <ButtonGroup isCenter>
      <Button color="#2b8164" label="Button One" />
      <Button color="#b6d0c7" label="Button Two" />
    </ButtonGroup>
  ),
}
