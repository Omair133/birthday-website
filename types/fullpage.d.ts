declare module "fullpage.js" {
  interface FullPageOptions {
    licenseKey?: string;

    autoScrolling?: boolean;
    fitToSection?: boolean;
    scrollingSpeed?: number;

    navigation?: boolean;
    scrollOverflow?: boolean;

    afterLoad?: (
      origin: unknown,
      destination: {
        index: number;
      }
    ) => void;

    credits?: {
      enabled?: boolean;
    };
  }

  class fullpage {
    constructor(
      element: HTMLElement | string,
      options?: FullPageOptions
    );

    destroy(type?: string): void;
  }

  export default fullpage;
}