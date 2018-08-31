import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
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
  }

  #app {
    height: 100%;
  }
`;
