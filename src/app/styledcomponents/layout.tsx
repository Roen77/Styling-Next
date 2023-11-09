import StyledComponentsRegistry from "@/lib/registry";
import React from "react";

type Props = {
  children: React.ReactNode;
};
function StyledComponentsLayout({ children }: Props) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}

export default StyledComponentsLayout;
