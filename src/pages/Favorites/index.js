import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import { Text } from 'rebass';

import ScrollWrapper from '~/components/ScrollWrapper';
import ArticleTeaser from '~/components/ArticleTeaser';
import Loader from '~/components/Loader';
import { favsActions } from '~/pages/Favorites/actions';

class Favorites extends PureComponent {
  render() {
    const { favs, isLoading } = this.props;
    return (
      <ScrollWrapper bg="lightgray">
        {isLoading && <Loader />}
        {(favs.length === 0 && !isLoading) && <Text textAlign="center" my={2}> Noch keine Favoriten vorhanden... </Text>}
        {favs.map(fav => (<ArticleTeaser item={fav} key={fav.id} />))}
      </ScrollWrapper>
    );
  }
}

export default connect(
  state => ({
    favs: state.favs,
    isLoading: state.isLoading
  }),
  favsActions
)(Favorites);
