import Header from 'Components/Header';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/Tema.module.scss';

const PaginaPadrao = ({children}: {children?: React.ReactNode}) => {
  return (
    <Fragment>
      <Header />
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </Fragment>
  );
};

export default PaginaPadrao;