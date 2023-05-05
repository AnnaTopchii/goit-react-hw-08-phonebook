import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/register">
          Register
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/login">
          Log In
        </Nav.Link>
      </Nav.Item>
    </>
  );
};
