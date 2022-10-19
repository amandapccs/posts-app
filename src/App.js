import './App.css';
import { useFetch } from './hooks/useFetch';

function App() {
  const { data, isFetching } = useFetch('https://api.github.com/users/amandapccs/repos');
  return (
    <div>
      <h1>Repos</h1>
      { isFetching && <p>Loading...</p> }
      <ul>
        { data?.map(repository => {
        return (<li key={repository.full_name}>
          <strong>{ repository.full_name }</strong>
        </li>)
        })};
      </ul>
    </div>
  );
}

export default App;
