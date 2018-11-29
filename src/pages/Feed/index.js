import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';
import { Box } from 'rebass';

import { actions } from '~/pages/Feed/actions';
import FeedControls from '~/pages/Feed/components/FeedControls';
import ArticleTeaser from '~/components/ArticleTeaser';
import ScrollWrapper from '~/components/ScrollWrapper';
import Loader from '~/components/Loader';
import EndOfFeedLabel from '~/components/EndOfFeedLabel';
import IntersectionObserver from '~/components/IntersectionObserver';
import Button from '~/components/Button';

class Feed extends PureComponent {
  componentDidMount() {
    this.props.loadInitalPage();
    this.props.watch();
  }

  render() {
    const {
      loadInitalPage,
      isLoading,
      data,
      newData,
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
        {newData && <Box bg="lightgray" p={2}><Button width={1} onClick={loadInitalPage}>Es gibt neue Artikel: Feed neu laden</Button></Box>}
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
    newData: state.newData,
    userFavs: state.userFavs,
    endOfFeed: state.endOfFeed
  }),
  actions
)(Feed);
