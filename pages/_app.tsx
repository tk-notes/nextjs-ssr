import { StoreProvider } from "@/lib/StoreProvider";

import "@/lib/styles/globals.css";
import styles from "@/lib/styles/layout.module.css";
import { AppProps } from "next/app";

export default function Layout({ Component }: AppProps) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>
          <main>
            <Component />
          </main>
        </body>
      </StoreProvider>
    </html>
  );
}
