import {defineConfig} from '@playwright/test';

export default defineConfig({
  use: {
    channel: "chrome", // Make all projects run on the computer's chrome browser
    headless: false,
  },
  timeout: 60000,  // テスト全体のタイムアウト（60秒）
  retries: 0,  // テストのリトライ回数
  reporter: [['html', {outputFolder: 'test-results'}]],  // レポートの設定
});