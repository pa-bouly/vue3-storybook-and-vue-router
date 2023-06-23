import DOMPurify from 'dompurify'

export class SanitizerService {
  public static cleanAccents(str: string): string {
    const accentRE = /[\u0300-\u036f]/g
    return str.normalize('NFD').replace(accentRE, '')
  }

  public static sanitizeHTML(inputHtml: string): string {
    return DOMPurify.sanitize(inputHtml)
  }

  public static stringContains(reference: string, search: string): boolean {
    const sanitizedReference = SanitizerService.cleanAccents(reference).toLowerCase()
    const sanitizedSearch = SanitizerService.cleanAccents(search).toLowerCase()
    return sanitizedReference.indexOf(sanitizedSearch) > -1
  }
}
