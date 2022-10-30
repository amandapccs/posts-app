import { GlobalStyle } from '../styles/global';
import { Container } from '../styles/app.styles';
import { PostsTable } from '../components/PostsTable';
import { useState } from 'react';
import { Header } from '../components/Header';
import { NewPostModal } from '../components/NewPostModal';

export function MainPage() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionModalOpen(false)
  }
  return (
    <div>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Container>
        <PostsTable />
        <NewPostModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
         />
        <GlobalStyle />
      </Container>
    </div>
  );
}
