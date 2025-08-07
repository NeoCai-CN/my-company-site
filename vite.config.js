import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    base: command === 'build' ? '/my-company-site/' : '/',
    plugins: [vue()],
}))
