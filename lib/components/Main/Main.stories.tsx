import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main, MainProps } from '.'
import { Section } from '../Section'

const meta: Meta<typeof Main> = {
  title: 'Layouts/Main',
  component: Main,
  tags: ['autodocs'],
} satisfies Meta<typeof Main>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: <p>Main element</p>,
    maxWidth: '5xl',
    noProse: false,
  } as MainProps,
  render: (args) => <Main {...args} />,
}

export const WithSection: Story = {
  args: {
    ...Primary.args,
    children: (
      <Section>
        <p>Main element</p>
      </Section>
    ),
  } as MainProps,
  render: (args) => <Main {...args} />,
}
