import type { Meta, StoryObj } from '@storybook/vue3';
import Component from './RouterAndDirective.vue';
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  component: Component,
  render: () => ({
    components: { Component },
    template: '<component />',
  }),
  parameters: {
    layout: 'fullscreen',
  },
    // decorators: [vueRouter()], // WHen I uncomment this line, I get the error "Failed to resolve directive: sanitize-html"

} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
