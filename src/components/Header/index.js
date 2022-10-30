import { Container, Content } from './styles';
import iconpen from '../../assets/iconpen.png';
import { Link } from 'react-router-dom';

export function Header({ onOpenNewTransactionModal }) {
  return (
    <Container>
      <Content>
        <Link to="/">
        <img src={iconpen} alt="dt money" />
        </Link>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova publicação
        </button>
      </Content>
    </Container>
  )
}