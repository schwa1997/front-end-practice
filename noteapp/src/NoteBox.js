import React from "react";
import styled from "styled-components";

function NoteBox({ targetNote }) {
  //   const visibleYes = targetNote.state;

  return (
    <Wrapper targetNote>
      <NoteTitle>
        {targetNote.title}

      </NoteTitle>
      <NoteContent>{targetNote.content}</NoteContent>
    </Wrapper>
  );
}

export default NoteBox;

const Wrapper = styled.div`
  border: 2px lightpink solid;
  width: 100%;
  height: 200px;
  visibility: ${(props) => (props.targetNote.state ? "hidden" : "visible")};
`;
const NoteTitle = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background: pink;
`;

const NoteContent = styled.div`
  padding: 20px;
`;

