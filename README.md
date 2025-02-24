# 始め方

```bash
npm init
npm install playwright
npm install -D @playwright/test@latest
```

# 基本的な使い方

基本的な使い方ドキュメントに書いてありますが，最初はどう書けばいいのかわからないこともあるので補足を行いたく記載しています．  
https://playwright.dev/docs/writing-tests

## 基本形

`test`関数の第二引数にpageを引数として受け取る関数の定義を行う．  
以下が詳しい．  
https://github.com/microsoft/playwright/blob/main/packages/playwright/types/test.d.ts

pageはPageの構造体を持っていて以下が詳しい  
https://github.com/microsoft/playwright/blob/954457ba9e33f10948d15e706ca3af6dfe84b0d3/packages/playwright-core/types/types.d.ts#L73

pageはplaywrightのtest関数の中で生成され，使用するブラウザのコンテキストが初期化されている．
そしてwebページを評価するための関数が用意されている．

```javascript
import {test, expect} from '@playwright/test';

test('has title', async ({page}) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
```

pageはデフォルトで設定されたブラウザで初期化される．
基本的には，現在localで使用中のブラウザをそのまま使うことはできない(と思った方がいい．)
具体的にはログイン済みのブラウザのページ状態を引き継いで同じブラウザのコンテキストでページを開き認証処理を飛ばすのはできない．(
と思った方がいい．)
テスト間でログイン情報を引き継ぐことはできそうだけど今開いているブラウザのコンテキストを使用するのは難しいということ．

テストで使うブラウザをデフォルトではなく色々変更したい時はどうするか？だが，方法は様々あるが，設定ファイルを使うのが簡単だと判断した．
`playwright.condfig.ts` or `playwright.condfig.js`ファイルをproject-rootに置くことで設定の変更が可能．
設定の内容は以下を参照するばわかります．  
https://playwright.dev/docs/test-configuration  
例:  
https://github.com/microsoft/playwright/blob/main/examples/github-api/playwright.config.ts

以下の設定を追加することでlocalにinstall済みのchromeを使ってくれます．

```javascript
export default defineConfig({
  use: {
    channel: "chrome", // Make all projects run on the computer's chrome browser
    headless: false,
  }
});
```

ただ，localのchromeを使う必要は薄いです．
なぜなら，認証情報を流用するユースケースは使用できないためです．
大人しくplaywrightについてくるテスト用のブラウザを使う方が賢いです．

## 特定のページに移動する

検証したいページに移動します．

```javascript

page.goto('hoge')

```

## 特定のページに移動する

追記事項なし

```javascript

page.goto('hoge')

```

## ページ内の特定の要素を取得する

`page.locator('hoge')`で渡す

```javascript
page.locator('hoge')
```
