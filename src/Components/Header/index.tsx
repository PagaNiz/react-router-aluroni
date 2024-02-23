import styles from './index.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerText}>
        A casa do código e da massa
      </div>
    </header>
  );
};

export default Header;