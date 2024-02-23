import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
  const rotas = [{
    label: 'Inicio',
    to: '/'
  },
  {
    label: 'Cardápio',
    to: '/cardapio'
  },
  {
    label: 'Sobre',
    to: '/sobre'
  }
  ];

  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menuList}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menuLink}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;