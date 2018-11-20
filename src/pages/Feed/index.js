import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';

import { actions } from '~/pages/Feed/actions';
import FeedControls from '~/pages/Feed/components/FeedControls';
import ArticleTeaser from '~/components/ArticleTeaser';
import ScrollWrapper from '~/components/ScrollWrapper';
import Loader from '~/components/Loader';
import EndOfFeedLabel from '~/components/EndOfFeedLabel';
import IntersectionObserver from '~/components/IntersectionObserver';

class Feed extends PureComponent {
  componentDidMount() {
    this.props.loadInitalPage();
  }

  render() {
    const {
      isLoading,
      data,
      loadNextPage,
      userFavs,
      onToggleFav,
      addFav,
      removeFav,
      endOfFeed
    } = this.props;

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
              addFav={addFav}
              removeFav={removeFav}
            />
          ))}
          {isLoading && <Loader />}
          {showMoreButton && (
            <IntersectionObserver threshold={0.5} onEnter={loadNextPage}>
              <Loader />
            </IntersectionObserver>
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
