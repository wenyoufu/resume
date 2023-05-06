import { getSearchObj } from '@/helpers/location';

/**
 * 获取语言
 */
export function getLanguage(): string {
  // const query = getSearchObj();
  // const lang = (query.lang as string) || navigator.language || 'zh-CN';
  // typeof document !== 'undefined' && document.body.setAttribute('lang', lang);
  // return lang;
  let lang = 'zh-CN';
  if (typeof window !== 'undefined') {
    const query = getSearchObj();
    lang = (query.lang as string) || navigator.language || 'zh-CN';
  }
  typeof document !== 'undefined' && document.body.setAttribute('lang', lang);
  return lang;
}
