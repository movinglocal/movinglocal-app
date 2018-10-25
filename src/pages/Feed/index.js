import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';
import Redirect from 'react-router-dom/Redirect';

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
      return <Redirect to={config.ONBOARDING_PATH} />;
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
