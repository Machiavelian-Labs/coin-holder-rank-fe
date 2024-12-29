import type { ReactNode } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import css from './Layout.module.scss';

interface LayoutProps {
  headerSlot: ReactNode;
  FooterSlot?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className={css.layout}>
      {props.headerSlot}
      <Outlet />
      {props.FooterSlot}
    </div>
  );
};
