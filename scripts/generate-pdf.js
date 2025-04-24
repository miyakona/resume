const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { readFileSync, writeFileSync } = require('fs');
const { mdToPdf } = require('md-to-pdf');

async function generatePDF() {
  try {
    // マークダウンファイルを読み込み
    console.log('Markdownファイルを読み込み中...');
    const mdContent = readFileSync('docs/README.md', 'utf8');

    // マークダウンをHTMLに変換
    console.log('HTMLに変換中...');
    const { content } = await mdToPdf(
      { content: mdContent },
      {
        stylesheet: "./pdf-configs/style.css",
        body_class: "markdown-body",
        marked_options: {
          headerIds: false,
          smartypants: true,
        },
        as_html: true,
        stylesheet_encoding: "utf-8"
      }
    );

    // HTMLを一時ファイルに保存
    const tempHtmlPath = path.join(process.cwd(), 'temp.html');
    console.log(`HTMLを保存中: ${tempHtmlPath}`);
    writeFileSync(tempHtmlPath, content, 'utf8');

    // ブラウザを起動
    console.log('Puppeteerを起動中...');
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: 'new'
    });
    
    // 新しいページを開く
    const page = await browser.newPage();
    
    // HTMLを読み込み
    console.log('HTMLを読み込み中...');
    await page.goto(`file://${tempHtmlPath}`, { waitUntil: 'networkidle0' });
    
    // すべてのdetailsタグを展開
    console.log('詳細を展開中...');
    await page.evaluate(() => {
      const detailsElements = document.querySelectorAll('details');
      console.log(`${detailsElements.length}個の詳細を展開します`);
      detailsElements.forEach(detail => {
        detail.setAttribute('open', 'true');
      });
    });
    
    // PDFを生成
    console.log('PDFを生成中...');
    await page.pdf({
      path: 'docs/README.pdf',
      format: 'A4',
      margin: { top: '30mm', right: '20mm', bottom: '30mm', left: '20mm' },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: `<style>
        section {
          margin: 0 auto;
          font-size: 9px;
        }
      </style>`,
      footerTemplate: `<section>
        <div>
          <span class="pageNumber"></span>
          / <span class="totalPages"></span>
        </div>
      </section>`
    });
    
    // 一時ファイルを削除
    fs.unlinkSync(tempHtmlPath);
    
    // ブラウザを閉じる
    await browser.close();
    
    console.log('PDF生成完了: docs/README.pdf');
  } catch (error) {
    console.error('PDF生成中にエラーが発生しました:', error);
    process.exit(1);
  }
}

generatePDF(); 