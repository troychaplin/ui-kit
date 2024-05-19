import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CardGroup } from '.'
import { Card } from '../Card'

const meta = {
  title: 'Components/Card Group',
  component: CardGroup,
  // subcomponents: { Card },
  tags: ['autodocs'],
} satisfies Meta<typeof CardGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => (
    <CardGroup {...args}>
      {Array.from({ length: 8 }).map((_, index) => (
        <Card rounded="base" borderWidth={1} borderColor="#dfdfdf">
          <p>Card #{index}</p>
        </Card>
      ))}
    </CardGroup>
  ),
}
