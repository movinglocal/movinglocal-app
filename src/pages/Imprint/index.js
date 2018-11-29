import React, { PureComponent } from 'react';
import {
  Box,
  Heading,
  Text,
  Link
} from 'rebass';

const SubHeading = props => (
  <Text fontSize={3} fontWeight="bold" pt={4} pb={1}>
    {props.children}
  </Text>
);

class Imprint extends PureComponent {
  render() {
    return (
      <Box p={3} css={{ flexGrow: 1, overflowY: 'auto', '-webkit-overflow-scrolling': 'touch' }}>
        <Heading>Impressum</Heading>

        <SubHeading>Anschrift</SubHeading>
        <Text>
          Universität Bremen
          <br />
          Zentrum für Medien-, Kommunikations- und Informationsforschung (ZeMKI)
          <br />
          Linzer Str. 4
          <br />
          28359 Bremen
          <br />
          <br />
          Sprecher
          <br />
          Prof. Dr. Andreas Hepp
          <br />
          E-Mail: andreas.hepp[at]uni-bremen.de
          <br />
          Telefon: 0421-218-67601
          <br />
          <br />
          Das ZeMKI ist eine Einrichtung der Universität Bremen. Die Universität Bremen ist eine Körperschaft des Öffentlichen Rechts. Sie wird durch den Rektor Prof. Dr.-Ing. Bernd Scholz-Reiter gesetzlich vertreten.
          <br />
          <br />
          Zuständige Aufsichtsbehörde ist die Senatorin für Wissenschaft, Gesundheit und Verbraucherschutz, Rembertiring 8 - 12, 28195 Bremen.
          <br />
          <br />
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG Umsatzsteuer-Nr.: DE 811 245 070
          <br />
          <br />
          Inhaltlich verantwortlich gemäß § 55 Absatz 2 RStV: Prof. Dr. Andrea Hepp, Sprecher des ZeMKI
        </Text>

        <SubHeading>Inhalte des Onlineangebots</SubHeading>
        <Text>
          Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden sind grundsätzlich ausgeschlossen, sofern kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Wir behalten uns ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
        </Text>

        <SubHeading>Links zu Internetseiten Dritter</SubHeading>
        <Text>
          Unsere Internetseite enthält Links zu Internetseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Wir sind als Anbieter für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Für fremde Inhalte, die über Links zur Nutzung bereitgestellt werden, übernehmen wir keinerlei Verantwortung und machen uns deren Inhalt nicht zu Eigen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Wir sind nicht nach dem Gesetz verpflichtet, die fremden Inhalte der verlinkten Seite ständig auf Veränderungen zu überprüfen, die eine Verantwortlichkeit begründen könnten. Bei bekannt werden von Rechtsverletzungen werden wir derartige Links aber umgehend entfernen, soweit dies technisch möglich und zumutbar ist.
        </Text>

        <SubHeading>Webdesign / Programmierung</SubHeading>
        <Link href="https://webkid.io">Webkid</Link>

      </Box>
    );
  }
}

export default Imprint;
