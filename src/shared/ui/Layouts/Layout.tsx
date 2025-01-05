import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.scss';
import clsx from 'clsx';

interface LayoutProps {
  headerSlot: ReactNode;
  FooterSlot?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className={clsx(css.layout, css.layout__wrapper)}>
      {props.headerSlot}
      <main className={css.layout__content}>
        <Outlet />
      </main>
      <footer className="layout__footer">{props.FooterSlot}</footer>
    </div>
  );
};
