import { useEffect, useState } from 'react';
import { Container } from './styles';
import { usePosts } from '../../hooks/usePosts';
import { useLocation, useNavigate } from 'react-router-dom';

export function UpdatePost() {
  const { updatePost, getPostById, refetch } = usePosts();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  async function getPost() {
    const id = location.pathname.slice(7);
    const response = await getPostById(id);
    setData(response);
    setIsFetching(false);
  }

  useEffect(() => {
    getPost();
  }, []);

  async function handleUpdatePost(event) {
    event.preventDefault();
    await updatePost(data._id, { title: title, content: content });
    refetch();
    navigate('/');
  }

  return (
    <Container onSubmit={handleUpdatePost}>
        <h2>Editar publicação</h2>
        <ul>
          <p>Histórico de alterações:</p>
          { isFetching ? <p>Carregando...</p> : data?.content.map((contents, index) => {
            return (
              <li key={contents[index]}>
                <strong onClick={() => setTitle(data.title[index])}>{ data.title[index] }:</strong>
                <span onClick={() => setContent(contents)}> { contents }</span>
              </li>
            )})
          }
        </ul>
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

        <button type="submit">Editar</button>
        <p>* É possível clicar no título/conteúdo para selecioná-los.</p>
      </Container>
  )
}