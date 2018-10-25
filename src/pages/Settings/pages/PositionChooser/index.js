import Loadable from 'react-loadable';

export default Loadable({
  loader: () => /* webpackChunkName: "positionchooser" */ import('./PositionChooser'),
  loading: () => null
});
