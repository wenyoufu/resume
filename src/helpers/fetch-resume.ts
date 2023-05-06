import fetch from 'cross-fetch';
import _ from 'lodash-es';
import type { ResumeConfig } from '@/components/types';
import { customAssign } from './customAssign';
import { RESUME_INFO } from '@/data/resume';
export function fetchResume(
  lang: string,
  branch: string,
  user: string
): Promise<ResumeConfig> {
  // return fetch(
  //   // `https://raw.githubusercontent.com/${user}/${user}/${branch}/resume.json`
  //   `https://raw.githubusercontent.com/wenyoufu/resume/rest-resume/wenyoufu's%20resume%20info%20-3.json`
  // )
  //   .then(data => {
  //     if (data.status !== 200) {
  //       return Promise.reject(new Error());
  //     }
  //     return data.json();
  //   })
  //   .then(data => {
  //     return _.omit(customAssign({}, data, _.get(data, ['locales', lang])), [
  //       'locales',
  //     ]);
  //   });
  return new Promise(resolve => {
    resolve(RESUME_INFO);
  }).then(data => {
    return _.omit(customAssign({}, data, _.get(data, ['locales', lang])), [
      'locales',
    ]);
  });
}
