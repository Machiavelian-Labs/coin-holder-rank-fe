// import { Link } from 'react-router-dom';
import { Card } from '@mui/material';
import { Categories } from '../../../widgets/categories/ui/Categories';
// interface HomePageProps {}

export const HomePage: React.FC = () => {
  return (
    <>
      <Card
        variant="outlined"
        sx={{ minWidth: 275, minHeight: 500, backgroundColor: '#111928' }}
      >
        <Categories />
      </Card>
    </>
  );
};
