import { Container } from "./styles";
import { usePosts } from "../../hooks/usePosts";
import { useNavigate } from "react-router-dom";
import trash from '../../assets/trash.png';
import { useState } from "react";


export function PostsTable() {
    const { data, isFetching, deletePost, refetch } = usePosts();
    const navigate = useNavigate();
    const [renderBulkDeleteButton, setRenderBulkDeleteButton] = useState(false);
    const [selectedPosts, setSelectedPosts] = useState([]);

    const handleEditButton = (id) => {
        navigate(`/posts/${id}`);
    }

    const handleDeleteButton = async (id) => {
        await deletePost(id);
        refetch();
    }

    const handleBulkDeleteButton = async () => {
        Promise.all(selectedPosts.map(async (id) => {
            await deletePost(id);
            setSelectedPosts([]);
            refetch();
        }));
        setRenderBulkDeleteButton(false);
    }

    const onCheckboxChange = (event, id) => {
        if (event.target.checked) {
            setRenderBulkDeleteButton(true);
            return setSelectedPosts(selectedPosts.includes(id) ? selectedPosts : [...selectedPosts, id]);
        }
        setRenderBulkDeleteButton(false);
        return setSelectedPosts(selectedPosts.filter(post => post !== id));

    }

    return (
      <Container>
          { isFetching ? <h1>Carregando posts...</h1> : (
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Conteúdo do post</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(post => {
                    return (
                        <tr key={post._id}>
                            <td>
                                {post.title[post.title.length - 1]}
                            </td>
                            <td>{post.content[post.content.length - 1]}</td>
                            <td>
                              <button
                              type="button"
                                onClick={() => handleEditButton(post._id)}
                              >
                              Editar
                              </button>
                              <button
                              type="button"
                               onClick={() => handleDeleteButton(post._id)}
                                >
                                <img src={trash} alt="Deletar post" />
                                </button>
                                <input type="checkbox" onChange={(event) => onCheckboxChange(event, post._id)}/>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
          ) }
          { renderBulkDeleteButton && <button type="button" id="bulk-delete-btn" onClick={handleBulkDeleteButton}>Deletar vários</button>}
        </Container>
    );
}