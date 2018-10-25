import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Flex } from 'rebass';

import theme from '~/styles/theme';
import { actions } from '~/actions';
import { initUser } from '~/services/storage';

import Feed from '~/pages/Feed';
import Article from '~/pages/Article';
import Favorites from '~/pages/Favorites';
import Feedback from '~/pages/Feedback';
import Settings from '~/pages/Settings';
import Imprint from '~/pages/Imprint';
import Privacy from '~/pages/Privacy';
import Onboarding from '~/pages/Onboarding';
import NoMatch from '~/pages/NoMatch';

import Header from '~/components/Header';
import Navigation from '~/components/Navigation';

const {
  ARTICLE_PATH, FILTER_PATH, FAVORITE_PATH,
  IMPRINT_PATH, PRIVACY_PATH, FEEDBACK_PATH, ONBOARDING_PATH
} = config;

const Wrapper = styled(Flex)`
  height: 100%;
  max-width: 700px;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  display: flex;
`;

class App extends PureComponent {
  componentDidMount() {
    initUser().then(user => this.props.init(user));
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Wrapper flexDirection="column" mx="auto">
            <Header />
            <Switch>
              <Route exact path="/" component={Feed} />
              <Route exact path={FAVORITE_PATH} component={Favorites} />
              <Route exact path={FILTER_PATH} component={Settings} />
              <Route exact path={IMPRINT_PATH} component={Imprint} />
              <Route exact path={PRIVACY_PATH} component={Privacy} />
              <Route exact path={FEEDBACK_PATH} component={Feedback} />
              <Route exact path={ONBOARDING_PATH} component={Onboarding} />
              <Route path={`${ARTICLE_PATH}/:id`} component={Article} />
              <Route component={NoMatch} />
            </Switch>
            <Navigation />
          </Wrapper>
        </Router>
      </ThemeProvider>
    );
  }
}

export default connect(() => {}, actions)(App);
