import { Layout } from '../../widgets/layouts/ui/Layout';
import { LayoutFooter } from '../../widgets/footer/ui/Footer';
import { LayoutHeader } from '../../widgets/header/ui/Header';

export const defaultLayout = (
  <Layout headerSlot={<LayoutHeader />} FooterSlot={<LayoutFooter />} />
);
