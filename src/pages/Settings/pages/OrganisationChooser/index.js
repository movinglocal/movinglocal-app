import Loadable from 'react-loadable';

export default Loadable({
  loader: () => /* webpackChunkName: "organisationchooser" */ import('./OrganisationChooser'),
  loading: () => null
});
