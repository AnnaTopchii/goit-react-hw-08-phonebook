import { NavLink } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Nav } from 'react-bootstrap';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="mb-5">
      <Nav variant="tabs" defaultActiveKey="/login">
        {isLoggedIn && <NavLink to="/contacts">Your contacts</NavLink>}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Nav>
    </header>
  );
};
