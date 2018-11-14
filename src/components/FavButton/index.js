import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { MdStarBorder, MdStar } from 'react-icons/md';

import Button from '~/components/Button';

const StyledButton = styled(Button)`
  color: ${props => (props.isFav ? 'white' : props.theme.colors.darkgray)};
  background: ${props => (props.isFav ? props.theme.colors.main : props.theme.colors.lightgray)};
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
  onToggle = (evt) => {
    evt.preventDefault();

    this.props.onToggle(this.props.item);
  }

  render() {
    const { item, isFav } = this.props;

    if (!item) {
      return null;
    }

    return (
      <Box ml="auto">
        <StyledButton
          isFav={isFav}
          onClick={this.onToggle}
        >
          {isFav ? <MdStar /> : <MdStarBorder />}
        </StyledButton>
      </Box>
    );
  }
}

export default FavButton;
