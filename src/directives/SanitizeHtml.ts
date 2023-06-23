import { SanitizerService } from '@/utils/SanitizerService'

const sanitizeFunct = (el: HTMLElement, htmlString: string) =>
  (el.innerHTML = SanitizerService.sanitizeHTML(htmlString))
export default {
  beforeMount(el: HTMLElement, { value }: { value: string }) {
    sanitizeFunct(el, value)
  },
  beforeUpdate(el: HTMLElement, { value }: { value: string }) {
    sanitizeFunct(el, value)
  },
}
