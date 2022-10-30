import Modal from 'react-modal';
import { MainPage } from './pages/main.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EditPage } from './pages/edit.page';

Modal.setAppElement('#root')

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <MainPage/> } />
      <Route path="/posts/:id" element={ <EditPage/> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
