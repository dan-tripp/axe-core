import { sanitize } from '../commons/text';
import { isVisible, isInTextBlock } from '../commons/dom';
import { getRoleAttr } from '../commons/aria';

function linkInTextBlockMatches(node) {
  var text = sanitize(node.textContent);
  var role = getRoleAttr(node);

  if (role && role !== 'link') {
    return false;
  }
  if (!text) {
    return false;
  }
  if (!isVisible(node, false)) {
    return false;
  }

  return isInTextBlock(node);
}

export default linkInTextBlockMatches;
