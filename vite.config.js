const { resolve } = require('path')
const { defineConfig } = require('vite')

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        video: resolve(__dirname, 'video.html')
      }
    }
  },
  server: {
    port: '3002'
  }
}
