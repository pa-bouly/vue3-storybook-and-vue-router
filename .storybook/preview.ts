import  { Preview, setup } from '@storybook/vue3'
import SanitizeHtml from '../src/directives/SanitizeHtml'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

setup((app) => {
  app.directive('sanitize-html', SanitizeHtml)

})

export default preview
