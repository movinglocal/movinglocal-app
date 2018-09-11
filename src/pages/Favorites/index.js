import React, { PureComponent } from 'react';
import { Text } from 'rebass';
import ScrollWrapper from '~/components/ScrollWrapper';
import ArticleTeaser from '~/components/ArticleTeaser';

import { connect } from 'unistore/react';
import { favsActions } from '~/pages/Favorites/actions';

class Favorites extends PureComponent {
  render() {
    const { favs } = this.props;
    return (
      <ScrollWrapper bg="gray" p={3}>
        { favs.length === 0 && <Text> Noch keine Favoriten vorhanden... </Text>}
        { favs.map(fav => (<ArticleTeaser {...fav} key={fav.id} />))}
      </ScrollWrapper>
    );
  }
}

export default connect(
  state => ({
    favs: state.favs
  }),
  favsActions
)(Favorites);
