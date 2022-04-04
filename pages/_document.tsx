import { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument() {
    const title = "StuBro"
    const description = "留学経験者と気軽に話せるサービス"
    return (
        <Html lang='ja'>
            <Head>
                <meta property="og:title" content={title} />
                <meta property="og:site_name" content={title} />
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content="https://emoji.beeimg.com/🎓/apple" />
                <link rel="icon" type="image/png" href="https://emoji.beeimg.com/🎓/apple" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}