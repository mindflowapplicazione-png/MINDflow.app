// pages/_app.js
import { StoreProvider } from '../lib/store';
export default function App({ Component, pageProps }) {
  return (<StoreProvider><Component {...pageProps} /></StoreProvider>);
}
