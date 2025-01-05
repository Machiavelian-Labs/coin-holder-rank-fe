// import { Link } from 'react-router-dom';
import { Card } from '@mui/material';
import { Categories } from '../../../widgets/categories/ui/Categories';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
// interface HomePageProps {}

export const HomePage: React.FC = () => {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          minWidth: 275,
          minHeight: 300,
          backgroundColor: '#111928',
          padding: '16px',
        }}
      >
        <div
          style={{
            margin: '20px 0',
          }}
        >
          <Button variant="text">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="text">Contained</Button>
        </div>
        <Categories />
        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: '#007FFF',
                dark: '#0066CC',
              },
            },
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: 1,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          />
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: 1,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          />
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: 1,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          />
        </ThemeProvider>
      </Card>
      <Card
        variant="outlined"
        sx={{
          minWidth: 275,
          minHeight: 200,
          backgroundColor: '#111928',
          padding: '16px',
          margin: '10px 0',
        }}
      ></Card>
    </>
  );
};
