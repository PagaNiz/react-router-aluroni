import PaginaPadrao from 'Components/PaginaPadrao';
import TagsPrato from 'Components/TagsPrato';
import cardapio from 'data/cardapio.json';
import NotFound from 'pages/notFound';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './prato.module.scss';

const Prato = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = cardapio.find(item => item.id === Number(id));
  if (!prato) {
    return <NotFound/>;
  }
  return (
    <PaginaPadrao>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>
          {prato.title}
        </h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
          <TagsPrato {...prato}/>
        </div>
      </section>
    </PaginaPadrao>
  );
};

export default Prato;