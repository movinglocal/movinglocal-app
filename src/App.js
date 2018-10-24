import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Flex } from 'rebass';

import theme from '~/styles/theme';
import { actions } from '~/actions';

import Feed from '~/pages/Feed';
import Article from '~/pages/Article';
import Favorites from '~/pages/Favorites';
import Settings from '~/pages/Settings';
import NoMatch from '~/pages/NoMatch';

import Header from '~/components/Header';
import Navigation from '~/components/Navigation';

import { ARTICLE_PATH, SETTINGS_PATH, FAVORITE_PATH } from '~/config';

const Wrapper = styled(Flex)`
  height: 100%;
  max-width: 700px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  display: flex;
`;

const articleRoute = `/${ARTICLE_PATH}/:id`;
const settingsRoute = `/${SETTINGS_PATH}`;
const favoriteRoute = `/${FAVORITE_PATH}`;

class App extends PureComponent {
  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Wrapper flexDirection="column" mx="auto">
            <Header />
            <Switch>
              <Route exact path="/" component={Feed} />
              <Route exact path={favoriteRoute} component={Favorites} />
              <Route exact path={settingsRoute} component={Settings} />
              <Route path={articleRoute} component={Article} />
              <Route component={NoMatch} />
            </Switch>
            <Navigation />
          </Wrapper>
        </Router>
      </ThemeProvider>
    );
  }
}

export default connect(
  state => state,
  actions
)(App);
