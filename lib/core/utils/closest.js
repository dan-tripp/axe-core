import matches from './matches';

/**
 * closest implementation that operates on a VirtualNode
 *
 * @method closest
 * @memberof axe.utils
 * @param {VirtualNode} vNode VirtualNode to match
 * @param {String} selector CSS selector string
 * @return {VirtualNode | null}
 */
function closest(vNode, selector) {
  console.log(">>> closest"); // tdr 
  while (vNode) {
    console.log(">>> closest 2"); // tdr 
    if (matches(vNode, selector)) {
      console.log(">>> closest 3"); // tdr 
      return vNode;
    }

    console.log(">>> closest 4"); // tdr 
    // the top node of the tree will have parent === null, so a
    // undefined parent means we are in a disconnected tree
    if (typeof vNode.parent === 'undefined') {
      throw new TypeError('Cannot resolve parent for non-DOM nodes');
    }

    vNode = vNode.parent;
  }

  return null;
}

export default closest;
