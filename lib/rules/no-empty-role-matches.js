import { getRoleAttr } from '../commons/aria';

function noEmptyRoleMatches(node, virtualNode) {
  if (!virtualNode.hasAttr('role')) {
    return false;
  }

  if (!getRoleAttr(virtualNode).trim()) {
    return false;
  }

  return true;
}

export default noEmptyRoleMatches;
