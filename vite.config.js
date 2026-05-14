import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        caseWebsite: 'cases/website/index.html',
        casePlatform: 'cases/platform/index.html',
        caseDashboard: 'cases/dashboard/index.html',
        caseWeb3: 'cases/web3/index.html',
        caseAiVisual: 'cases/ai-visual/index.html'
      }
    }
  }
});
