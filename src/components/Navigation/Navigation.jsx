import { NavLink } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Container, Nav } from 'react-bootstrap';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="mb-3">
      <Container>
        <Nav
          variant="tabs"
          defaultActiveKey="/login"
          className="d-flex justify-content-center gap-5"
        >
          {isLoggedIn && (
            <Nav.Link as={NavLink} to="/contacts">
              Your contacts
            </Nav.Link>
          )}
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Nav>
      </Container>
    </header>
  );
};
