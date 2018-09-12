import React, { PureComponent } from 'react';
import {
  Box, ButtonCircle
} from 'rebass';

import { connect } from 'unistore/react';
import { favsActions } from '~/pages/Favorites/actions';

import Loader from '~/components/Loader';

class FavControl extends PureComponent {
  addToFavorites = (evt) => {
    evt.preventDefault();
    const { addOrRemoveFav, item } = this.props;
    addOrRemoveFav(item);
  }

  render() {
    const { item, favs } = this.props;
    if (item) {
      const isFav = favs.find(f => f.id === item.id);
      const favColor = isFav ? 'yellow' : 'white';

      return (
        <Box ml="auto">
          <ButtonCircle color={favColor} onClick={this.addToFavorites}>★</ButtonCircle>
        </Box>
      );
    }
    return '';
  }
}

export default connect(
  state => state,
  favsActions
)(FavControl);
