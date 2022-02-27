import { getRoleAttr } from '../commons/aria';

function noRoleMatches(node) {
  return !getRoleAttr(node);
}

export default noRoleMatches;
