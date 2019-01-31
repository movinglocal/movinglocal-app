import React, { PureComponent } from 'react';
import {
  Flex,
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

const LogoWrapper = styled(Box)`
  min-width: 25%;
`;

class About extends PureComponent {
  render() {
    return (
      <Box p={3} css={{ flexGrow: 1, overflowY: 'auto', '-webkit-overflow-scrolling': 'touch' }}>
        <Heading>Über molo.news</Heading>

        <Text mt={3}>
          molo.news wird als Redaktionsplattform und Web-App im Projekt „Tinder die Stadt“
          entwickelt, das vom Bundesministerium für Bildung und Forschung (BMBF) gefördert wird.
          Die Projektbeteiligten sind:
        </Text>

        <Flex mt={3}>
          <LogoWrapper width={1 / 4} mr={3}>
            <Image src={ZeMKILogo} alt="ZeMKI logo" />
          </LogoWrapper>
          <Box>
            <Text>
              ZeMKI, Zentrum für Medien-, Kommunikations- und Informationsforschung
              (Koordination des Projekts), Universität Bremen
              <br />
              Linzer Str. 4 | 28359 Bremen
              <br />
              Tel.: +49-421-218-67601 Fax: +49-421-218-98 67601
              <br />
              <Link href="http://www.zemki.uni-bremen.de">http://www.zemki.uni-bremen.de</Link>
            </Text>
          </Box>
        </Flex>

        <Flex mt={3}>
          <LogoWrapper width={1 / 4} mr={3}>
            <Image src={ifibLogo} alt="ifib logo" />
          </LogoWrapper>
          <Box>
            <Text>
              Institut für Informationsmanagement Bremen GmbH
              <br />
              Am Fallturm 1 | 28359 Bremen
              <br />
              Tel.: +49-421-218-56580 Fax: +49-421-218-56599
              <br />
              <Link href="http://www.ifib.de">http://www.ifib.de</Link>
            </Text>
          </Box>
        </Flex>

        <Flex mt={3}>
          <LogoWrapper width={1 / 4} mr={3}>
            <Image src={HBILogo} alt="Hans-Bredow-Institut logo" />
          </LogoWrapper>
          <Box>
            <Text>
              Hans-Bredow-Institut für Medienforschung an der Universität Hamburg
              <br />
              Rothenbaumchaussee 36  | 20148 Hamburg
              <br />
              Tel.: +49-40-450217-0 Fax: +49-40-450217-77
              <br />
              <Link href="http://www.hans-bredow-institut.de">http://www.hans-bredow-institut.de</Link>
            </Text>
          </Box>
        </Flex>

        <Image mt={3} src={BMBFLogo} alt="BMBF logo" />
      </Box>
    );
  }
}

export default About;
