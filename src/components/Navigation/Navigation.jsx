import { NavLink } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <nav>{isLoggedIn && <NavLink to="/contacts">Your contacts</NavLink>}</nav>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
