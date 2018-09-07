import React, { PureComponent } from 'react';
import { Heading, Text } from 'rebass';
import ScrollWrapper from '~/components/ScrollWrapper';
import ArticleTeaser from '~/components/ArticleTeaser';

import { connect } from 'unistore/react';
import { favsActions } from '~/pages/Favorites/actions';

class Favorites extends PureComponent {
  componentDidMount() {
    this.props.getFavs();
  }

  render() {
    const { favs } = this.props;
    return (
      <ScrollWrapper p={3}>
        <Heading>Favoriten</Heading>
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
