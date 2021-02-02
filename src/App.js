import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
// import Phonebook from './Component/Phonebook';
import AppBar from './Components/AppBar';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import Container from './Components/Container';
import { authOperations, authSelectors } from './redux/auth';
import routes from './routes';

import Loader from './Components/Loader';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<p>Загружаем...</p>}>
              <PublicRoute exact path={routes.home}>
                <HomeView />
              </PublicRoute>
              <PublicRoute exact path={routes.register} restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute
                exact
                path={routes.login}
                redirectTo={routes.contacts}
                restricted
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}

export default App;
