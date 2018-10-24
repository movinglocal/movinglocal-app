import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';
import { Box, Heading } from 'rebass';

import { actions } from '~/pages/Feed/actions';
import ArticleTeaser from '~/components/ArticleTeaser';
import FeedControls from '~/pages/Feed/components/FeedControls';
import ScrollWrapper from '~/components/ScrollWrapper';
import Button from '~/components/Button';
import Loader from '~/components/Loader';

class Feed extends PureComponent {
  componentDidMount() {
    this.props.initData();
  }

  onOnboardingEnd = () => {
    this.props.finishOnboarding();
  }

  renderOnboarding() {
    return (
      <Box p={3} css={{ flexGrow: 1 }}>
        <Heading>Onboarding</Heading>
        <Button onClick={this.onOnboardingEnd}>beenden</Button>
      </Box>
    );
  }

  render() {
    const {
      isLoading,
      data,
      loadNextPage,
      count,
      pageSize,
      pageStart,
      isInitial
    } = this.props;

    const hasNext = pageStart + pageSize < count;
    const showMoreButton = !isLoading && hasNext;

    if (isInitial && !isLoading) {
      return this.renderOnboarding();
    }

    return (
      <Fragment>
        <FeedControls />
        <ScrollWrapper bg="lightgray">
          {data.map(item => <ArticleTeaser item={item} key={item.id} />)}
          {isLoading && <Loader />}
          {showMoreButton && (
            <Button
              bg="main"
              onClick={loadNextPage}
              width={1}
              borderRadius={0}
            >
              Mehr laden...
            </Button>
          )}
        </ScrollWrapper>
      </Fragment>
    );
  }
}

export default connect(
  state => state,
  actions
)(Feed);
