"use strict";
/**
* Binary Search Tree for SunSportAnalyser Adjacent list
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
* Node of the tree
* @param {Number} value of the node
* @param {Object} object other values of the node
*/
var Node = /** @class */ (function () {
    function Node(value, object) {
        this.left = null;
        this.right = null;
        this.value = value;
        this.obj = object;
    }
    return Node;
}());
exports.Node = Node;
/**
* Binary search tree
*/
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
        this.orderList = [];
    }
    /**
    * Inserts a node into the binary search tree.
    *
    * @public
    * @method
    * @param {Number} value Node value.
    * @param {Object} object other values of the node.
    */
    BinarySearchTree.prototype.insert = function (value, obj) {
        var root = this.root;
        if (!root) {
            this.root = new Node(value, obj);
            return;
        }
        var currentNode = root;
        var newNode = new Node(value, obj);
        while (currentNode) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            }
            else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
        }
    };
    /**
    * In-order traversal of the whole binary search tree.
    *
    * @private
    * @method
    * @param {Node} current Node from which to start the traversal.
    */
    BinarySearchTree.prototype.inorderDESC = function (node) {
        if (node === void 0) { node = this.root; }
        if (!node) {
            return;
        }
        this.inorderDESC(node.right);
        this.orderList.push(node);
        this.inorderDESC(node.left);
    };
    /**
    * Get the list in DESC order
    *
    * @public
    * @returns orderList in DESC order
    */
    BinarySearchTree.prototype.descendingSort = function () {
        this.orderList = [];
        this.inorderDESC();
        return this.orderList;
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
