const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // Удаляем элементы, равные k, с начала списка
  while (l !== null && l.value === k) {
    l = l.next; // Перемещаем голову списка вперед, чтобы пропустить элементы, равные k
  }

  let currentNode = l;

  // Проходим по оставшемуся списку и удаляем элементы, равные k
  while (currentNode !== null && currentNode.next !== null) {
    if (currentNode.next.value === k) {
      currentNode.next = currentNode.next.next; // Удаляем узел, равный k
    } else {
      currentNode = currentNode.next; // Двигаемся к следующему узлу
    }
  }

  return l; // Возвращаем обновленный список
}

module.exports = {
  removeKFromList
};
