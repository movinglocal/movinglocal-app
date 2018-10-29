import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';

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
      userFavs,
      onToggleFav
    } = this.props;

    const hasNext = pageStart + pageSize < count;
    const showMoreButton = !isLoading && hasNext;

    return (
      <Fragment>
        <FeedControls />
        <ScrollWrapper bg="lightgray">
          {data.map(item => (
            <ArticleTeaser
              item={item}
              key={item.id}
              userFavs={userFavs}
              onToggleFav={onToggleFav}
            />
          ))}
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
  state => ({
    isLoading: state.isLoading,
    data: state.data,
    loadNextPage: state.loadNextPage,
    count: state.count,
    pageSize: state.pageSize,
    pageStart: state.pageStart,
    userFavs: state.userFavs
  }),
  actions
)(Feed);
