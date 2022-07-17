import { css } from "styled-components";

/**
 * @see https://www.joshwcomeau.com/css/custom-css-reset/
 */
export const cssReset = css`
  /* Use a more-intuitive box-sizing model. */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /* Remove default margin */
  * {
    margin: 0;
  }
  /* Allow percentage-based heights in the application */
  html,
  body {
    height: 100%;
  }
  /* Improve text rendering */
  body {
    -webkit-font-smoothing: antialiased;
  }
  /* Improve media defaults */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  /* Remove built-in form typography styles */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  /* Avoid text overflows */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  /* Create a root stacking context */
  #root {
    isolation: isolate;
  }
`;
