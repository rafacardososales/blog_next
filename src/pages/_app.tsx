import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import AnimatedPage from '../components/PageTransition';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AnimatedPage>
        <Component {...pageProps} />
      </AnimatedPage>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
