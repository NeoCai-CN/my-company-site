import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    base: '/my-company-site/',   // ⭐ 必须与你的 GitHub 仓库名完全一致
    plugins: [vue()],
})
