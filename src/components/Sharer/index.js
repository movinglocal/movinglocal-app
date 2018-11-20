import React, { PureComponent } from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { IoLogoTwitter, IoLogoWhatsapp, IoLogoFacebook } from 'react-icons/io';

import { getLinks } from './share-utils';

const ShareLink = styled.a.attrs({
  target: '_blank'
})`
  display: block;
`;

class Sharer extends PureComponent {
  render() {
    const { item } = this.props;
    const links = getLinks(item);

    return (
      <Flex my={2} justifyContent="space-between" css={{ 'max-width': '90px' }}>
        <ShareLink href={links.twitter}>
          <IoLogoTwitter color="#1da1f2" size={20} />
        </ShareLink>

        <ShareLink href={links.whatsapp}>
          <IoLogoWhatsapp color="#25d366" size={20} />
        </ShareLink>

        <ShareLink href={links.facebook}>
          <IoLogoFacebook color="#3b5998" size={20} />
        </ShareLink>
      </Flex>
    );
  }
}

export default Sharer;
