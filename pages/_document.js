import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import getConfig from 'next/config'

const { publicRuntimeConfig: {
  API_URL,
  NODE_ENV,
  REALM,
  AUTH_SERVER_URL,
  SSL_REQUIRED,
  RESOURCE,
  PUBLIC_CLIENT,
  CONFIDENTIAL_PORT
} } = getConfig()

injectGlobal`
  @font-face {
    font-family: Roboto-Black;
    src: url('/static/fonts/Roboto/Roboto-Black.ttf');
  }

  @font-face {
    font-family: Roboto-BlackItalic;
    src: url('/static/fonts/Roboto/Roboto-BlackItalic.ttf');
  }

  @font-face {
    font-family: Roboto-Bold;
    src: url('/static/fonts/Roboto/Roboto-Bold.ttf');
  }

  @font-face {
    font-family: Roboto-BoldItalic;
    src: url('/static/fonts/Roboto/Roboto-BoldItalic.ttf');
  }

  @font-face {
    font-family: Roboto-Italic;
    src: url('/static/fonts/Roboto/Roboto-Italic.ttf');
  }

  @font-face {
    font-family: Roboto-Medium;
    src: url('/static/fonts/Roboto/Roboto-Medium.ttf');
  }

  @font-face {
    font-family: Roboto-MediumItalic;
    src: url('/static/fonts/Roboto/Roboto-MediumItalic.ttf');
  }

  @font-face {
    font-family: Roboto-Regular;
    src: url('/static/fonts/Roboto/Roboto-Regular.ttf');
  }

/* Barlow */
  @font-face {
    font-family: Barlow-Black;
    src: url('/static/fonts/Barlow/Barlow-Black.ttf');
  }

  @font-face {
    font-family: Barlow-BlackItalic;
    src: url('/static/fonts/Barlow/Barlow-BlackItalic.ttf');
  }

  @font-face {
    font-family: Barlow-Bold;
    src: url('/static/fonts/Barlow/Barlow-Bold.ttf');
  }

  @font-face {
    font-family: Barlow-BoldItalic;
    src: url('/static/fonts/Barlow/Barlow-BoldItalic.ttf');
  }

  @font-face {
    font-family: Barlow-Italic;
    src: url('/static/fonts/Barlow/Barlow-Italic.ttf');
  }

  @font-face {
    font-family: Barlow-Medium;
    src: url('/static/fonts/Barlow/Barlow-Medium.ttf');
  }

  @font-face {
    font-family: Barlow-MediumItalic;
    src: url('/static/fonts/Barlow/Barlow-MediumItalic.ttf');
  }

  @font-face {
    font-family: Barlow-Regular;
    src: url('/static/fonts/Barlow/Barlow-Regular.ttf');
  }


  :root {
    /* Colors */
    --white: #FFFFFF;
    --black: #000000;
    --gray: #B8B8B8;
    --primary-color: #5182A0;
    --secondary-color: #A5CEE7;
    --highlight: #ED8862;
    --warning: #E86062;
    
    --color-azul-principal: #2a4b8c;

    /* Fonts */
    --regular: 'Barlow-Regular';
    --black: 'Barlow-Black';
    --black-italic: 'Barlow-BlackItalic';
    --bold: 'Barlow-Bold';
    --bold-italic: 'Barlow-BoldItalic';
    --italic: 'Barlow-Italic';
    --medium: 'Barlow-Medium';
    --medium-italic: 'Barlow-MediumItalic';

    /*background sizes */
    --lined: calc(width/22);

    font-size: 10px;
    @media (max-width: 760px) {
    font-size: 7px;
  }
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--regular), 'Barlow', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: var(--black);
  }
  
  body {
    margin:0;
    padding:0;
    width: 100%;
    background-color: var(--white);
    color: var(--black);
    font-family: var(--regular), 'Barlow', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
`

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags } // return styles collected
  }

  render () {
    return (
      <html>
        <Head>
          <title>Portal de Propuestas - Causas Comunes</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <meta property="og:image" content="/static/assets/fb-banner.png"/>
          <meta property="og:image:secure_url" content="/static/assets/fb-banner.png" />
          <meta property="og:title" content="Portal de Propuestas - Causas Comunes" />
          <meta property="og:description" content="Propuestas para el proyecto Causas Comunes" />  

          {this.props.styleTags}
          {
            NODE_ENV === 'production' &&
            <script async src='https://www.googletagmanager.com/gtag/js?id=UA-146273009-1' />
          }
          {
            NODE_ENV === 'production' &&
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-146273009-1');` }} />
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
