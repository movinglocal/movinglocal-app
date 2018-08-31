import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unistore/react';
import { Provider as RebassProvider, Flex } from 'rebass';
import styled from 'styled-components';

import { Store } from '~/Store';
import Feed from '~/pages/Feed';
import Navigation from '~/components/Navigation';

import theme from '~/theme';
import initStyle from '~/initStyle';

initStyle();

const Wrapper = styled(Flex)`
  height: 100%;
  max-width: 700px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
`;

const RebassProviderStyled = styled(RebassProvider)`
  height: 100%;
`;

ReactDOM.render(
  <Provider store={Store}>
    <RebassProviderStyled theme={theme}>
      <Wrapper flexDirection="column" mx="auto">
        <Feed />
        <Navigation />
      </Wrapper>
    </RebassProviderStyled>
  </Provider>,
  document.getElementById('app')
);
