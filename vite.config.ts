import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  /* 경로 별칭 설정 */
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src'
      }
    ]
  },
  /* 로컬에서 IP 주소로 접속 가능하도록 설정 */
  server: {
    host: '0.0.0.0'
  }
});
