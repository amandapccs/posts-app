import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';

import { Container } from './styles';
import { usePosts } from '../../hooks/usePosts';

export function NewPostModal({ isOpen, onRequestClose }) {
  const { createPost, refetch } = usePosts();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [post, setPost] = useState({});

  async function handleCreateNewPost(event) {
    event.preventDefault();
   const newPost = await createPost({
      title,
      content,
    })

    if (newPost.message) return setPost(newPost);

    setPost(newPost);
    setTitle('');
    setContent('');
    refetch();
    onRequestClose();
  }


  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="close-modal-button" />
      </button>

      <Container onSubmit={handleCreateNewPost}>
        <h2>Cadastrar publicação</h2>
        <input 
          placeholder='Título'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          placeholder='Conteúdo'
          value={content}
          onChange={event => setContent(event.target.value)}
        />

        { post?.message && <p>{post.message}</p> }

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}