/* eslint-disable max-len */
import React from 'react';
import {
  Text
} from 'rebass';

const SubHeading = props => (
  <Text fontSize={3} fontWeight="bold" pt={4} pb={1}>
    {props.children}
  </Text>
);

const Paragraph = props => (
  <Text my={3}>
    {props.children}
  </Text>
);

export default () => (
  <React.Fragment>
    <SubHeading>§ 1 Information über die Erhebung personenbezogener Daten</SubHeading>
    <Paragraph>(1) Im Folgenden informieren wir über die Erhebung personenbezogener Daten bei Nutzung unserer Webapp. Personenbezogene Daten sind alle Daten, die auf Sie persönlich beziehbar sind, z.B. Name, Adresse, E-Mail-Adressen, Nutzerverhalten.</Paragraph>
    <Paragraph>
      (2) Verantwortliche gemäß Art. 4 Nr. 7 EU-Datenschutz-Grundverordnung (DSGVO) ist das ZeMKI: Zentrum für Medien-, Kommunikations- und Informationsforschung, Linzer Str. 4, DE-28359 Bremen, E-Mail:
      <a href="mailto:molonews@uni-bremen.de">molonews@uni-bremen.de</a>
      .
    </Paragraph>
    <Paragraph>(3) Bei Ihrer Kontaktaufnahme mit uns per E-Mail werden die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns gespeichert, um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.</Paragraph>
    <Paragraph>(4) Falls wir für einzelne Funktionen unseres Angebots auf beauftragte Dienstleister zurückgreifen, werden wir Sie unterstehend im Detail über die jeweiligen Vorgänge informieren. Dabei nennen wir auch die festgelegten Kriterien der Speicherdauer.</Paragraph>

    <SubHeading>§ 2 Erhebung personenbezogener Daten bei Nutzung unserer Web-App</SubHeading>
    <Paragraph>(1) Bei Nutzung der Web-App werden Cookies auf Ihrem mobilen Endgerät gespeichert. Bei Cookies handelt es sich um kleine Textdateien, die im Gerätespeicher Ihres mobilen Endgerätes abgelegt und der von Ihnen verwendeten Web-App zugeordnet gespeichert werden. Durch Cookies können der Stelle, die den Cookie setzt (hier: uns), bestimmte Informationen zufließen. Cookies können keine Programme ausführen oder Viren auf Ihr mobiles Endgerät übertragen. Sie dienen dazu, Web-Apps insgesamt nutzerfreundlicher und effektiver zu machen. </Paragraph>
    <Paragraph>a) Diese Web-App nutzt folgende Arten von Cookies, deren Umfang und Funktionsweise im Folgenden erläutert werden:</Paragraph>
    <Text>  - Local-Storage-Eintrag (siehe dazu b)</Text>
    <Paragraph>b) Mit localStorage werden Daten im Cache des Browsers speichern. Die Daten werden beim Verlassen der Seite nicht gelöscht und bleiben verfügbar. Sie werden als String gespeichert, können aber mit parseInt oder parseFloat wieder in Zahlen umgewandelt werden. Dazu zählen die Schlagworte, der Ort sowie der angegebene Radius, Favoriten und Organisationen, sofern jeweils ausgewählt. Dabei wird keine IP-Adresse gespeichert.</Paragraph>

    <SubHeading>§ 3 Weitergabe von Daten</SubHeading>
    <Paragraph>(1) Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im folgenden Absatz 2 aufgeführten Zwecken findet nicht statt.</Paragraph>
    <Paragraph>(2) Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</Paragraph>
    <Text>a) Sie Ihre ausdrückliche Einwilligung dazu erteilt haben (Art. 6 Absatz 1 Satz lit. a DSGVO),</Text>
    <Text>b) die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdige Interesse an der Nichtweitergabe Ihrer Daten haben (Art. 6 Absatz 1 Satz 1 lit. f DSGVO),</Text>
    <Text>c) für den Fall, dass für die Weitergabe nach Art. 6 Absatz 1 Satz 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie</Text>
    <Text>d) dies gesetzlich zulässig und für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist (Art. 6 Absatz 1 Satz 1 lit. b DSGVO).</Text>

    <SubHeading>§ 4 Verwendung von Adressbuchs, Kalender, Fotos und Erinnerungen</SubHeading>
    <Paragraph>Die Web-App nutzt keine Daten aus dem Adressbuch, Kalender, Fotos und Erinnerungen.</Paragraph>

    <SubHeading>§ 5 Einbindung von externen Diensten</SubHeading>
    <Paragraph>(1) Die Web-App nutzt unterschiedliche Dienste, um die Funktionalität der Web-App zu gewährleisten, dazu zählen: Netlify, Heroku (siehe a), mlab, AWS S3.</Paragraph>
    <Text>a) Heroku speichert Zugriffsprotokolle mit den IP-Adressen Ihrer Website-Besucher, die für weniger als 30 Tage gespeichert werden.</Text>

    <SubHeading>§ 6 Nutzung des Kontaktformulars</SubHeading>
    <Paragraph>(1) Die Web-App beinhaltet die Möglichkeit ein Kontaktformular zu nutzen, bei welchem eine E-Mail-Adresse sowie eine vom Nutzer eingegebene Nachricht übertragen werden. Wenn Sie die im Kontaktformular eingegebenen Daten durch Klick auf den nachfolgenden Button übersenden, erklären Sie sich damit einverstanden, dass wir Ihre Angaben für die Beantwortung Ihrer Anfrage bzw. Kontaktaufnahme verwenden. Eine Weitergabe an Dritte findet grundsätzlich nicht statt, es sei denn geltende Datenschutzvorschriften rechtfertigen eine Übertragung oder wir dazu gesetzlich verpflichtet sind. Sie können Ihre erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Im Falle des Widerrufs werden Ihre Daten umgehend gelöscht. Ihre Daten werden ansonsten gelöscht, wenn wir Ihre Anfrage bearbeitet haben oder der Zweck der Speicherung entfallen ist. Sie können sich jederzeit über die zu Ihrer Person gespeicherten Daten informieren. Rechtsgrundlage ist  Art. 6 Absatz 1 Satz 1 lit. f DS-GVO.</Paragraph>

    <SubHeading>§ 7 Ihre Rechte</SubHeading>
    <Paragraph>(1) Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</Paragraph>
    <Text>- Recht auf Auskunft (Art. 15 DSGVO),</Text>
    <Text>- Recht auf Berichtigung (Art. 16 DSGVO) oder Löschung (Art. 17 DSGVO),</Text>
    <Text>- Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO),</Text>
    <Text>- Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO),</Text>
    <Text>- Recht auf Datenübertragbarkeit (Art. 20 DSGVO).</Text>
    <Paragraph>Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren (Art. 77 DSGVO).</Paragraph>

    <SubHeading>§ 8 Widerspruch oder Widerruf gegen die Verarbeitung Ihrer Daten</SubHeading>
    <Paragraph>(1) Falls Sie eine Einwilligung zur Verarbeitung Ihrer Daten erteilt haben, können Sie diese jederzeit widerrufen (Art. 7 Absatz 3 DSGVO). Ein solcher Widerruf beeinflusst die Zulässigkeit der Verarbeitung Ihrer personenbezogenen Daten, nachdem Sie ihn gegenüber uns ausgesprochen haben.</Paragraph>
    <Paragraph>(2) Soweit wir die Verarbeitung Ihrer personenbezogenen Daten auf die Interessenabwägung stützen (Art. 6 Absatz 1 Satz 1 lit. f DSGVO), können Sie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einlegen (Art. 21 DSGVO), soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzten Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird.</Paragraph>
    <Paragraph>
      (3) Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an
      <a href="mailto:molonews@uni-bremen.de">molonews@uni-bremen.de</a>
      .
    </Paragraph>

    <SubHeading>§ 9 Änderung dieser Datenschutzerklärung</SubHeading>
    <Paragraph>Durch die Weiterentwicklung unserer Web-App oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung ist stets innerhalb der App abrufbar.</Paragraph>

    <Paragraph>Stand: Januar 2019</Paragraph>
  </React.Fragment>
);
