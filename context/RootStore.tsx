// Create the RootStore
import React, { ReactNode } from "react";
import { TodoProvider } from "./todoContext";

type Props = {
  children: ReactNode;
};

export const RootStore = ({ children }: Props) => {

  return (
   <TodoProvider>{children}</TodoProvider>
  );
};