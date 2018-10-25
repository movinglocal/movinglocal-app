import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';
import { Box } from 'rebass';

import Onboarding from '~/pages/Onboarding';
import { actions } from '~/pages/Feed/actions';
import FeedControls from '~/pages/Feed/components/FeedControls';
import ArticleTeaser from '~/components/ArticleTeaser';
import ScrollWrapper from '~/components/ScrollWrapper';
import Button from '~/components/Button';
import Loader from '~/components/Loader';

class Feed extends PureComponent {
  componentDidMount() {
    this.props.initData();
  }

  renderOnboarding() {
    return (
      <Box p={3} css={{ flexGrow: 1 }}>
        {this.props.isLoading ? <Loader /> : <Onboarding />}
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

    if (isInitial) {
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
