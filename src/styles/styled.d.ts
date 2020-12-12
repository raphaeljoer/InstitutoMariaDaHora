import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    color: {
      blue: {
        default: string;
        light: string;
        dark: string;
      };

      yellow: {
        default: string;
        light: string;
        dark: string;
      };

      text: {
        title1: string;
        title2: string;
        body1: string;
        body2: string;
        body3: string;
        body4: string;
        button1: string;
        button2: string;
      };

      shape: {
        light1: string;
        dark1: string;
        dark2: string;
      };

      background: {
        light1: string;
        light2: string;
        light3: string;
        dark1: string;
        dark2: string;
        blue: string;
      };
    };

    font: {
      title: string;
      body: string;
    };

    breakpoint: {
      mobile: {
        small: string;
        midle: string;
        large: string;
      };
      tablet: {
        small: string;
        midle: string;
        large: string;
        xlarge: string;
      };
      desktop: {
        small: string;
        midle: string;
        large: string;
      };
    };
  }
}
