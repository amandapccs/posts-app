import { UpdatePost } from "../components/EditPostComponent";
import { EditDiv } from "./styles";
import { GlobalStyle } from '../styles/global';
import { Header } from "../components/Header";

export function EditPage() {
  return (
      <main>
      <Header />
      <EditDiv>
        <UpdatePost />
        <GlobalStyle />
      </EditDiv>
    </main>
  );
}