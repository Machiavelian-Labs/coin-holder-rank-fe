import css from './Header.module.scss';

interface LayoutHeaderProps {}
export const LayoutHeader: React.FC<LayoutHeaderProps> = () => {
  return (
    <header className={css.layout__header}>
      <div className={css.layout__header__content}>
        <h1 className={css.layout__header__title}>Hoooolder</h1>
        <div className={css.layout__header__actions}>
          <a href="/login">theme</a>
          <a href="/register">github</a>
        </div>
      </div>
    </header>
  );
};
