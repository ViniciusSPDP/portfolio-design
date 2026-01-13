// src/utils/lenis.tsx
"use client";
import { ReactLenis as Lenis } from "@studio-freight/react-lenis";
import { ComponentProps } from "react";

// Aqui definimos que as props desse componente são EXATAMENTE as mesmas
// que o componente Lenis original aceita.
export function ReactLenis({ children, ...props }: ComponentProps<typeof Lenis>) {
  return (
    // Adicionei o 'root' aqui para garantir que ele assuma o controle da janela inteira
    <Lenis root options={{ duration: 2.0, smoothWheel: true }} {...props}>
      {children}
    </Lenis>
  );
}