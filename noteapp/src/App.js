import NoteBox from "./NoteBox";
import { useState } from "react";
import Header from "./Header";
import styled from "styled-components";
function App() {
  const [note, setNote] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const ListItems = note.map((item, index) => (
    <div>
      <NoteBox targetNote={item} key={index} />
      <DelteteButton key={item} onClick={() => handleDelete(item.id)}>
        DELETE
      </DelteteButton>
    </div>
  ));
  function handleDelete(index) {
    const noteTemp = [...note];
    noteTemp.splice(note.length - index-1, 1);
    setNote(noteTemp);
    console.log(noteTemp);
  }
  function handleClick() {
    const noteTemp = [...note];
    noteTemp.splice(0, 0, {
      id: note.length,
      content: content,
      title: title,
    });
    setNote(noteTemp);
    console.log(note);
  }
  function handleChangeTitle(t) {
    setTitle(t);
  }
  function handleChangeContent(t) {
    setContent(t);
  }
  return (
    <Page>
      <Header />
      <InfoGet>
        <Input
          placeholder="Note Title"
          onChange={(e) => handleChangeTitle(e.target.value)}
        ></Input>
        <Input
          placeholder="Note Content"
          onChange={(e) => handleChangeContent(e.target.value)}
        ></Input>
        <Button onClick={() => handleClick()}>add </Button>
      </InfoGet>
      <NoteBoxes>{ListItems}</NoteBoxes>
      <Footer>footer</Footer>
    </Page>
  );
}

export default App;
const Page = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
  gap: 20px;
`;
const InfoGet = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: 20% 40% 20%;
  padding-left: 10%;
`;
const Input = styled.input`
  width: 100%;
  border: pink 2px solid;
  height: 44px;
  padding-left: 10px;
`;
const Button = styled.button`
  position: relative;
  width: 100%;
  background-color: pink;
  border-radius: 20px;
  border-style: none;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  position: relative;
  text-align: center;
  text-decoration: none;
  color: white;
`;
const DelteteButton = styled.button`
  position: relative;
  top: -90%;
  right: -2%;
  width: 10%;
  background-color: pink;
  border-style: none;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
  color: white;
  border: 2px pink solid;
`;
const NoteBoxes = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: auto auto auto;
`;
const Footer = styled.div`
  background: pink;
  position: fixed;
  left:0%;
  width: 100%;
  height: 3%;
  bottom: 0;
  padding:10px;
  text-align:center;
`;
