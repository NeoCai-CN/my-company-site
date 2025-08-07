import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
    return {
        base: mode === 'production' ? '/my-company-site/' : '/',
        plugins: [vue()],
    }
})
