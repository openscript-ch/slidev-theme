import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async () => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
  }
})
