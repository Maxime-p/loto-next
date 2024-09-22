import type { AppProps } from 'next/app'
import { Analytics } from "@vercel/analytics/react"
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import Script from 'next/script'

import {store, persistor} from "@Stores"

import '@Styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Component {...pageProps} />
      <Script id="beforeUnload">
        {`window.addEventListener('beforeunload', (e) => {e.preventDefault();e.returnValue = '';})`}
      </Script>
      <Analytics/>
    </PersistGate>
  </Provider>
}

export default MyApp
