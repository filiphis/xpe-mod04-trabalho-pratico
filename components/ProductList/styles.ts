import styled from "styled-components";

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 24px;
  margin-top: 16px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 6px;
`;

export { Wrapper };
