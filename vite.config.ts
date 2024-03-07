import { defineConfig } from 'vite'
import { getDirname } from '@adonisjs/core/helpers'

export default defineConfig({
  plugins: [],

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${getDirname(import.meta.url)}/inertia`,
    },
  },
})
