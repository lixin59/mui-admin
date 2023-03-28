import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path';

export function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // 配置模块的路径别名
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/'
      }
    ]
  }
})
