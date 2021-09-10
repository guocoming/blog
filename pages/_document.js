import  Document, { Html, Main, NextScript, Head } from 'next/document'

class GuoYLDocument extends Document {
  render() {
    return (
      <Html lang="zh-CN">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default GuoYLDocument