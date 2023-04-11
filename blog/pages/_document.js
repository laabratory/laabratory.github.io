import { Html, Head, Main } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <Script src="/static/darkmode-load.js" strategy='beforeInteractive'></Script>
      </body>
    </Html>
  )
}
