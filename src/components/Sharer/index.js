import React, { PureComponent } from 'react';
import { MdContentPaste } from 'react-icons/md';
import { IoLogoTwitter, IoLogoWhatsapp, IoLogoFacebook } from 'react-icons/io';

class Sharer extends PureComponent {
  render() {
    return (
      <div>
        <IoLogoTwitter />
        <IoLogoWhatsapp />
        <IoLogoFacebook />
        <MdContentPaste />
      </div>
    );
  }
}

export default Sharer;
