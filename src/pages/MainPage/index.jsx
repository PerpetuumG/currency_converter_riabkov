import { Container } from '@mui/material';
import CurrencyConverter from '../../widgets/CurrencyConverter/index.jsx';
import { WishlistWidget } from '../../widgets/Wishlist/index.jsx';

const MainPage = () => {
  return (
    <Container>
      <CurrencyConverter />
      <WishlistWidget />
    </Container>
  );
};

export default MainPage;
