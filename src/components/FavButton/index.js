import React, { PureComponent } from 'react';
import { Box } from 'rebass';
import { connect } from 'unistore/react';
import styled from 'styled-components';

import Button from '~/components/Button';
import { favsActions } from '~/pages/Favorites/actions';

const StyledButton = styled(Button)`
  color: ${props => (props.isFav ? 'yellow' : 'white')};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  padding: 0;
`;

class FavButton extends PureComponent {
  addToFavorites = (evt) => {
    evt.preventDefault();
    this.props.addOrRemoveFav(this.props.item);
  }

  render() {
    const { item, favs } = this.props;

    if (!item) {
      return null;
    }

    const isFav = favs.find(f => f.id === item.id);

    return (
      <Box ml="auto">
        <StyledButton bg="main" isFav={isFav} onClick={this.addToFavorites}>
          ★
        </StyledButton>
      </Box>
    );
  }
}

export default connect(
  state => state,
  favsActions
)(FavButton);
