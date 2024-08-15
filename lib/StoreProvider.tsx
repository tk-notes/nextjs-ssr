import { wrapper } from "@/lib/store";
import type { ReactNode } from "react";
import { Provider } from "react-redux";

interface Props {
  readonly children: ReactNode;
}

export const StoreProvider = ({ children, ...rest }: Props) => {
  const { store } = wrapper.useWrappedStore(rest);
  return <Provider store={store}>{children}</Provider>;
};
