import type { CommerceLayerAppConfig } from '~/providers/types'

interface GlobalVar {
  clAppConfig: CommerceLayerAppConfig
}

export const globalVar: GlobalVar = {
  clAppConfig: {
    domain: 'commercelayer.io',
    selfHostedSlug: 'buyers-guide',
  },
}
