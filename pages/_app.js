/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import "../styles/globals.css";
import "../styles/tailwind.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider disableTransitionOnChange defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
