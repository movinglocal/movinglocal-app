import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';

import { actions } from '~/pages/Feed/actions';
import FeedControls from '~/pages/Feed/components/FeedControls';
import ArticleTeaser from '~/components/ArticleTeaser';
import ScrollWrapper from '~/components/ScrollWrapper';
import Button from '~/components/Button';
import Loader from '~/components/Loader';
import EndOfFeedLabel from '~/components/EndOfFeedLabel';

class Feed extends PureComponent {
  componentDidMount() {
    this.props.loadNextPage();
  }

  render() {
    const {
      isLoading,
      data,
      loadNextPage,
      userFavs,
      onToggleFav,
      endOfFeed
    } = this.props;

    console.log(endOfFeed);

    const showMoreButton = !isLoading && !endOfFeed;

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
          {endOfFeed && <EndOfFeedLabel />}
        </ScrollWrapper>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    isLoading: state.isLoading,
    data: state.data,
    userFavs: state.userFavs,
    endOfFeed: state.endOfFeed
  }),
  actions
)(Feed);
