import { authSelectors } from '../redux/auth';
import { useSelector } from 'react-redux';
import AuthNav from '../Components/AuthNav';
import Container from '../Components/Container';

import indexIMG from './index.png';
export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Container>
        <h2>Телефонная книга</h2>
        <img src={indexIMG} alt="телефонная книга" />
        <p>Надежное хранение контаков в интернете!</p>
      </Container>
      {!isLoggedIn && <AuthNav />}
    </>
  );
}
