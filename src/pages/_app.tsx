import '@/assets/styles/globals.css';
import 'flexboxgrid';

import type { AppProps } from 'next/app';

function App(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}

export default App;
