import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ${styledNormalize}

  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700');

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: 'Source Sans Pro', sans-serif;
  }

  input, button, select, textarea, option {
    font-family: 'Source Sans Pro', sans-serif;
  }

  #app {
    height: 100%;
  }
`;
