import styled from 'styled-components';

export default styled.textarea`
  width: 100%;
  border: 0;
  border-color: #eee;
  box-shadow: inset 0 0 0 1px #eee;
  margin: 0px;
  padding: 8px 16px;
  background-color: white;
  display: inline-block;
  min-height: 200px;
  resize: vertical;

  &:focus {
    outline: none;
  }
`;
