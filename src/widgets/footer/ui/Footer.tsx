import React from 'react';
import css from './Footer.module.scss';

interface LayoutFooterProps {}

export const LayoutFooter: React.FC<LayoutFooterProps> = () => {
  return (
    <footer className={css.footer}>
      <p>Footer</p>
    </footer>
  );
};
