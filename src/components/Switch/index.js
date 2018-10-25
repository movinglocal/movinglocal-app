import styled from 'styled-components';
import Switch from 'rc-switch';

import 'rc-switch/assets/index.css';

export default styled(Switch)`
  &&&.rc-switch-checked {
    border: 1px solid ${props => props.theme.colors.main};
    background: ${props => props.theme.colors.main};
  }
`;
