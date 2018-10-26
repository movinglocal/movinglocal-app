import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import { Text } from 'rebass';

import ScrollWrapper from '~/components/ScrollWrapper';
import ArticleTeaser from '~/components/ArticleTeaser';
import Loader from '~/components/Loader';
import { actions } from '~/pages/Feed/actions';

class Favorites extends PureComponent {
  render() {
    const { userFavs, isLoading, onToggleFav } = this.props;
    return (
      <ScrollWrapper bg="lightgray">
        {isLoading && <Loader />}
        {(userFavs.length === 0 && !isLoading) && <Text textAlign="center" my={2}> Noch keine Favoriten vorhanden... </Text>}
        {userFavs.map(fav => (<ArticleTeaser item={fav} key={fav.id} userFavs={userFavs} onToggleFav={onToggleFav} />))}
      </ScrollWrapper>
    );
  }
}

export default connect(
  state => ({
    userFavs: state.userFavs,
    isLoading: state.isLoading,
    isInitial: state.isInitial
  }),
  actions
)(Favorites);
