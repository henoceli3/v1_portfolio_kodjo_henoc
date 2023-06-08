import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { Analytics } from "@vercel/analytics/react";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  );
}
