import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unistore/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider as RebassProvider, Flex } from 'rebass';
import styled from 'styled-components';

import { Store } from '~/Store';
import Feed from '~/pages/Feed';
import Article from '~/pages/Article';
import Favorites from '~/pages/Favorites';
import Settings from '~/pages/Settings';
import NoMatch from '~/pages/NoMatch';

import Header from '~/components/Header';
import Navigation from '~/components/Navigation';

import theme from '~/theme';
import initStyle from '~/initStyle';

initStyle();

const Wrapper = styled(Flex)`
  height: 100%;
  max-width: 700px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  display: flex;
`;

const RebassProviderStyled = styled(RebassProvider)`
  height: 100%;
`;

ReactDOM.render(
  <Provider store={Store}>
    <RebassProviderStyled theme={theme}>
      <Router>
        <Wrapper flexDirection="column" mx="auto">
          <Header />
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route exact path="/favoriten" component={Favorites} />
            <Route exact path="/einstellungen" component={Settings} />
            <Route path="/artikel/:id" component={Article} />
            <Route component={NoMatch} />
          </Switch>
          <Navigation />
        </Wrapper>
      </Router>
    </RebassProviderStyled>
  </Provider>,
  document.getElementById('app')
);
