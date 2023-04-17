import styled from "styled-components";

const Wrapper = styled.div`
  width: 200px;
  padding: 18px 8px;
  margin: 16px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  border: 2px solid white;
  height: 100%;
  text-align: center;
`;

const InlineBlock = styled.div`
  display: inline-block;
`;

export { Wrapper, InlineBlock };
