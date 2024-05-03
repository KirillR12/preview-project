import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from './Flex'

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
}

export default meta
type Story = StoryObj<typeof Flex>

export const JustifyStart: Story = {
    args: {
        children: (
            <>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </>
        ),
    },
}

export const JustifyCenter: Story = {
    args: {
        children: (
            <>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </>
        ),
        justify: 'center',
    },
}

export const JustifyEnd: Story = {
    args: {
        children: (
            <>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </>
        ),
        justify: 'end',
    },
}

export const AlingStart: Story = {
    args: {
        children: (
            <>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </>
        ),
        align: 'start',
        direction: 'column',
    },
}

export const AlingCenter: Story = {
    args: {
        children: (
            <>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </>
        ),
        align: 'center',
        direction: 'column',
    },
}

export const AlingEnd: Story = {
    args: {
        children: (
            <>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </>
        ),
        align: 'end',
        direction: 'column',
    },
}

export const Gap4: Story = {
    args: {
        children: (
            <>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </>
        ),
        gap: '4',
    },
}

export const Gap8: Story = {
    args: {
        children: (
            <>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </>
        ),
        gap: '8',
    },
}

export const Gap16: Story = {
    args: {
        children: (
            <>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
            </>
        ),
        gap: '16',
    },
}
