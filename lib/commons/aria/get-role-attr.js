
/**
 * Return the value of the 'role' attribute of an element, 
 * converted to lower case.   
 *
 * @method getRoleAttr 
 * @memberof axe.commons.aria
 * @param {Element|VirtualNode} node
 * @returns {string|null} Role (converted to lower case) or null
 */
function getRoleAttr(node) {
  if(false) { // tdr 
    if (typeof node.attr === 'function') {
      return node.attr('role') ?? null;
    } else {
      return node.getAttribute('role') ?? null;
    }
  }
  if (typeof node.attr === 'function') {
    return node.attr('role')?.toLowerCase() ?? null;
  } else {
    return node.getAttribute('role')?.toLowerCase() ?? null;
  }
  
}

export default getRoleAttr;