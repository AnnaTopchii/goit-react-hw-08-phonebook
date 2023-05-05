import { Helmet } from 'react-helmet-async';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Container className="text-center">
        <b className="p-3">Welcome to your</b>
        <h1>Phone book</h1>
      </Container>
    </>
  );
}
