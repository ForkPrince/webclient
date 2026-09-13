//Credits: https://stackoverflow.com/a/79465187

import { Composer } from 'vue-i18n'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: Composer['t']
  }
}