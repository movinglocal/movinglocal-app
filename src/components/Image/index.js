import styled from 'styled-components';

const Image = styled.div`
  background-image: url(${props => props.src});
  height: ${props => (props.height || 250)}px;
  background-size: cover;
  background-position: center;
`;

export default Image;
