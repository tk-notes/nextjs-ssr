import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "@/lib/styles/globals.css";
import styles from "@/lib/styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <header className={styles.header}>
              <Image
                src="/logo.svg"
                className={styles.logo}
                alt="logo"
                width={100}
                height={100}
              />
            </header>

            <main className={styles.main}>{children}</main>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
