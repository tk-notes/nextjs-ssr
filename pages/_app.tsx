import { StoreProvider } from "@/lib/StoreProvider";

import "@/lib/styles/globals.css";
import { AppProps } from "next/app";

export default function Layout({ Component }: AppProps) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>
          <Component />
        </body>
      </StoreProvider>
    </html>
  );
}
