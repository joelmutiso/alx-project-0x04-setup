import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux"; // Import Redux Provider
import store from "@/store/store"; // Import your Redux store

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}> {/* Wrap everything in the Redux Provider */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}