import React from 'react';
import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Fonts from 'src/styles/fonts';
import GlobalStyle from 'src/styles/globalStyle';
import Normalize from 'src/styles/normalize';
import Reset from 'src/styles/reset';

interface Props {
  styleTags: any;
}

export default class MyDocument extends Document<Props> {
  /**
   * Styled-component ssr 적용
   * link: https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
   */
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <Reset />
                <Fonts />
                <GlobalStyle />
                <Normalize />
                <App {...props} />
              </>,
            ),
        });

      const initialProps = await Document.getInitialProps(
        ctx,
      );

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const {
      props: { styleTags },
    } = this;
    return (
      <html>
        <Head>
          {styleTags}
          <meta
            httpEquiv="x-ua-compatible"
            content="ie=edge"
          />
          <meta property="og:type" content="article" />
          <meta property="og:locale" content="ko_KR" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimum-scale=1, viewport-fit=cover"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link
            rel="manifest"
            href="/favicon/site.webmanifest"
          />
          <meta
            name="msapplication-TileColor"
            content="#da532c"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="popup-root" />
          <div id="popup-center" />
        </body>
      </html>
    );
  }
}
