import React, { PureComponent } from 'react';
import { Text, Box } from 'rebass';

import ScrollWrapper from '~/components/ScrollWrapper';
import Loader from '~/components/Loader';
import Image from '~/components/Image';

import { loadOrganisation } from '~/services/api';

class Organisation extends PureComponent {
  constructor() {
    super();

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    loadOrganisation(id).then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <Loader />;
    }

    const {
      name,
      image,
      description,
      address
    } = data;

    return (
      <ScrollWrapper>
        <Box bg="white" p={2} m={2}>
          {image && <Image src={image.url} />}
          <Text fontSize={3} fontWeight={700}>{name}</Text>
          {address && <Text>{address}</Text>}
          {description && <Text>{description}</Text>}
        </Box>
      </ScrollWrapper>
    );
  }
}

export default Organisation;
