import GlobalStyle from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import light from '../styles/themes/light';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
