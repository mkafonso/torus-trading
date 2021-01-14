import App from 'next/app';
import React from 'react';

import GlobalStyles from '../styles/GlobalStyles';

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Component {...pageProps} />
        <GlobalStyles />
      </>
    );
  }
}

export default MyApp;
