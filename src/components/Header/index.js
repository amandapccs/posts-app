import { Container, Content } from './styles';
import iconpen from '../../assets/iconpen.png';
import { Link, useParams } from 'react-router-dom';

export function Header({ onOpenNewTransactionModal }) {
  const params = useParams();
  console.log(params.id ? 'Edit' : 'New');
  return (
    <Container>
      <Content>
        <Link to="/">
        <img src={iconpen} alt="dt money" />
        </Link>
        { params.id ?
          <p>Editar</p>
          : <button type="button" onClick={onOpenNewTransactionModal}>
          Nova publicação
        </button>
        }
      </Content>
    </Container>
  )
}