import React, { PureComponent } from 'react';
import {
  Box,
  Heading,
  Text,
  Link
} from 'rebass';

const SubHeading = props => (
  <Text fontSize={3} fontWeight="bold" pt={4}>
    {props.children}
  </Text>
);

class Imprint extends PureComponent {
  render() {
    return (
      <Box p={3} css={{ flexGrow: 1 }}>
        <Heading>Impressum</Heading>

        <SubHeading>Anschrift</SubHeading>
        <Text>
          Universität Bremen
          <br />
          Zentrum für Medien-, Kommunikations- und Informationsforschung
          <br />
          (ZeMKI)
          <br />
          Linzer Str. 4
          <br />
          28359 Bremen
          <br />
          Prof. Dr. Andreas Hepp
          <br />
          E-Mail: andreas.hepp[at]uni-bremen.de
          <br />
          Telefon: 0421-218-67601
          <br />
          Inhaltlich Verantwortlicher gemäß § 10 Absatz 3 MDStV:
          Prof. Dr. Andreas Hepp, Sprecher des ZeMKI (Anschrift wie oben).
        </Text>

        <SubHeading>Rechtsform</SubHeading>
        <Text>
          Die Universität Bremen ist eine Körperschaft des Öffentlichen Rechts.
          Sie wird durch den Rektor Prof. Dr.-Ing. Bernd Scholz-Reiter gesetzlich vertreten.
          <br />
          Zuständige Aufsichtsbehörde ist die Senatorin für Wissenschaft,
          Gesundheit und Verbraucherschutz, Rembertiring 8 – 12, 28195 Bremen.
          <br />
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG Umsatzsteuer-Nr.: DE 811 245 070
        </Text>

        <SubHeading>Webdesign / Programmierung</SubHeading>
        <Link href="https://webkid.io">Webkid</Link>

        <SubHeading>Haftungsausschluss</SubHeading>
        <Text>
          Die Inhalte unserer Homepage sind nach bestem Wissen und Gewissen zusammengestellt.
          Jedoch kann kein Anspruch auf Vollständigkeit erhoben werden.
          Die Inhalte fremder Webseiten, auf die mittels eines Hyperlinks verwiesen wird,
          sowie die Inhalte von Kommentaren, werden geprüft und
          Beschwerden wird unverzüglich nachgegangen.
        </Text>

      </Box>
    );
  }
}

export default Imprint;
