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
            
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>

    </Head>
    <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}