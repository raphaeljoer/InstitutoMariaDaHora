import Router from 'next/router';
import NProgress from 'nprogress';

import GlobalStyle from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import light from '../styles/themes/light';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
