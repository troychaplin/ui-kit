import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main, MainProps } from '.'

const meta: Meta<typeof Main> = {
  title: 'Layouts/Main',
  component: Main,
  tags: ['autodocs'],
} satisfies Meta<typeof Main>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: <p>Main content area</p>,
    maxWidth: '5xl',
    noProse: false,
  } as MainProps,
  render: (args) => <Main {...args} />,
}
