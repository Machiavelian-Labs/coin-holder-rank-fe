import { Layout } from '../../shared/ui/Layouts/Layout';
import { LayoutFooter } from '../../shared/ui/Footer/Footer';
import { LayoutHeader } from '../../shared/ui/Header/Header';

export const defaultLayout = (
  <Layout headerSlot={<LayoutHeader />} FooterSlot={<LayoutFooter />} />
);
