import Lenis from "lenis";

declare global {
  interface Window {
    __portfolioLenis?: Lenis;
  }
}
