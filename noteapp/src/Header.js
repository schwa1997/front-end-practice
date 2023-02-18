import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <PageHeader>
      <HeaderTitle>NOTEBOOK</HeaderTitle>
    </PageHeader>
  );
}

export default Header;
const PageHeader = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  -webkit-mask: linear-gradient(black 7rem, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  pointer-events: none;
  touch-action: none;
  display: flex;
  background: pink;
`;
const HeaderTitle = styled.div`
  width: 100%;
  height: 1rem;
  position: sticky;
  padding-left: 20px;
`;
