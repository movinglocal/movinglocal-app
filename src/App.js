import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';

import { actions } from '~/actions';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider as RebassProvider, Flex } from 'rebass';
import styled from 'styled-components';
import theme from '~/theme';

import Feed from '~/pages/Feed';
import Article from '~/pages/Article';
import Favorites from '~/pages/Favorites';
import Settings from '~/pages/Settings';
import NoMatch from '~/pages/NoMatch';

import Header from '~/components/Header';
import Navigation from '~/components/Navigation';

import Loader from '~/components/Loader';

const Wrapper = styled(Flex)`
height: 100%;
max-width: 700px;
box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
display: flex;
`;

const RebassProviderStyled = styled(RebassProvider)`
height: 100%;
`;

class App extends PureComponent {
  componentDidMount() {
    this.props.init();
  }

  render() {
    const { isAppLoading } = this.props;

    return (
      <RebassProviderStyled theme={theme}>
        <Router>
          <Wrapper flexDirection="column" mx="auto">
            <Header />
            { !isAppLoading && (
            <Switch>
              <Route exact path="/" component={Feed} />
              <Route exact path="/favoriten" component={Favorites} />
              <Route exact path="/einstellungen" component={Settings} />
              <Route path="/artikel/:id" component={Article} />
              <Route component={NoMatch} />
            </Switch>
            )}
            <Navigation />
          </Wrapper>
        </Router>
      </RebassProviderStyled>
    );
  }
}

export default connect(
  state => state,
  actions
)(App);
