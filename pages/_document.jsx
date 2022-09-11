import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
        <link
            rel="preload"
            href="http://fonts.cdnfonts.com/css/manrope"
            as="font"
            type="font/manrope"
            crossorigin
            />
    </Head>
    <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}