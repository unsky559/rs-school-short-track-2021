/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
const ListNode = require('../extensions/list-node');

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

function removeKFromList(/* l, k */) {
  throw new Error('Not implemented');
  let current = l;
  while(current !== null){
    console.log(current.value)

    current = current.next;
  }
  return l;
}

function removeKFromList(l, k) {
  let result = l;
  while(result !== null){
    if (result.value === k){
      result.value = result.next.value;
      result.next = result.next.next;
    }
    result = result.next;
  }
  return l;
}

console.log(removeKFromList(convertArrayToList([3, 1, 2, 3, 4, 5]), 3));

module.exports = removeKFromList;
