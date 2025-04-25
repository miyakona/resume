const fs = require('fs');
const path = require('path');
const { readFileSync } = require('fs');
const { mdToPdf } = require('md-to-pdf');

async function generatePDF() {
  try {
    // マークダウンファイルを読み込み
    console.log('Markdownファイルを読み込み中...');
    const mdContent = readFileSync('docs/README.md', 'utf8');

    console.log('PDFに直接変換します...');
    // md-to-pdfを使用して直接PDFに変換（Puppeteerを使わない）
    await mdToPdf(
      { content: mdContent },
      {
        dest: "./docs/README.pdf",
        stylesheet: "./pdf-configs/style.css",
        body_class: "markdown-body",
        marked_options: {
          headerIds: false,
          smartypants: true,
        },
        pdf_options: {
          format: 'A4',
          margin: { top: '30mm', right: '20mm', bottom: '30mm', left: '20mm' },
          printBackground: true,
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
        },
        stylesheet_encoding: "utf-8",
        launch_options: {
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        }
      }
    );
    
    console.log('PDF生成完了: docs/README.pdf');
  } catch (error) {
    console.error('PDF生成中にエラーが発生しました:', error);
    process.exit(1);
  }
}

generatePDF(); 