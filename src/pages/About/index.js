import React, { PureComponent } from 'react';
import {
  Box,
  Heading,
  Text,
  Link,
  Image
} from 'rebass';
import styled from 'styled-components';

import ZeMKILogo from '~/../public/ZeMKI-logo.png';
import ifibLogo from '~/../public/ifib-logo.png';
import HBILogo from '~/../public/hans-bredow-institut-logo.png';
import BMBFLogo from '~/../public/BMBF-logo.png';

const Logo = styled(Image)`
  width: 200px;
`;

class About extends PureComponent {
  render() {
    return (
      <Box p={3} css={{ flexGrow: 1, overflowY: 'auto' }}>
        <Heading>Über molo.news</Heading>

        <Text mt={3}>
          Molo.news wird als Redaktionsplattform und Web-App im Projekt „Tinder die Stadt“ entwickelt, das vom Bundesministerium für Bildung und Forschung (BMBF) gefördert wird. Die Projektbeteiligten sind:
        </Text>

        <Text mt={3}>
          ZeMKI, Zentrum für Medien-, Kommunikations- und Informationsforschung (Koordination des Projekts), Universität Bremen, Linzer Str. 4 | 28359 Bremen Tel.: +49-421-218-67601 Fax: +49-421-218-98 67601
          <br />
          <Link href="http://www.zemki.uni-bremen.de">http://www.zemki.uni-bremen.de</Link>
        </Text>
        <Logo mt={3} src={ZeMKILogo} alt="ZeMKI logo" />

        <Text mt={3}>
          Institut für Informationsmanagement Bremen GmbH Am Fallturm 1 | 28359 Bremen Tel.: +49-421-218-56580 Fax: +49-421-218-56599
          <br />
          <Link href="http://www.ifib.de">http://www.ifib.de</Link>
        </Text>
        <Logo mt={3} src={ifibLogo} alt="ifib logo" />


        <Text mt={3}>
          Hans-Bredow-Institut für Medienforschung an der Universität Hamburg Rothenbaumchaussee 36  | 20148 Hamburg Tel.: +49-40-450217-0 Fax: +49-40-450217-77
          <br />
          <Link href="http://www.hans-bredow-institut.de">http://www.hans-bredow-institut.de</Link>
        </Text>
        <Logo mt={3} src={HBILogo} alt="Hans-Bredow-Institut logo" />

        <br />
        <Logo mt={3} src={BMBFLogo} alt="BMBF logo" />
      </Box>
    );
  }
}

export default About;
