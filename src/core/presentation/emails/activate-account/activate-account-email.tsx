import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';

interface ActivateAccountProps {
  activationCode: string;
}

export default function ActivateAccount({
  activationCode
}: ActivateAccountProps) {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  return (
    <Html>
      <Head />
      <Preview>Falta pouco para você começar a usar o Finexps</Preview>
      <Section style={main}>
        <Container style={container}>
          <Img
            src='https://user-images.githubusercontent.com/31235308/210901743-2988728d-9956-4eae-9bb8-9175f1692392.png'
            width='42'
            height='42'
            alt='Linear'
            style={logo}
          />
          <Text style={heading}>
            Falta pouco para você começar a usar o Finexps
          </Text>
          <Section style={buttonContainer}>
            <Button
              pY={11}
              pX={23}
              style={button}
              href={`${baseUrl}/auth/activate-account?cac=${activationCode}`}
            >
              Ativar conta
            </Button>
          </Section>
          <Text style={paragraph}>
            Clique no botão acima para ativar sua conta. Se você não solicitou a
            criação de uma conta no Finexps, por favor, ignore este e-mail.
          </Text>
          <Hr style={hr} />
          <Link href={baseUrl} style={reportLink}>
            Finexps
          </Link>
        </Container>
      </Section>
    </Html>
  );
}

const logo = {
  width: 42,
  height: 42
};

const fontFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

const main = {
  backgroundColor: '#ffffff'
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '560px'
};

const heading = {
  fontFamily,
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '400',
  color: '#484848',
  padding: '17px 0 0'
};

const paragraph = {
  fontFamily,
  margin: '0 0 15px',
  fontSize: '15px',
  lineHeight: '1.4',
  color: '#3c4149'
};

const buttonContainer = {
  padding: '27px 0 27px'
};

const button = {
  fontFamily,
  backgroundColor: '#00875F',
  borderRadius: '3px',
  fontWeight: '600',
  color: '#fff',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block'
};

const reportLink = {
  fontFamily,
  fontSize: '14px',
  color: '#b4becc'
};

const hr = {
  borderColor: '#dfe1e4',
  margin: '42px 0 26px'
};
