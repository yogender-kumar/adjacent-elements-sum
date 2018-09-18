/**
* Binary Search Tree for SunSportAnalyser Adjacent list
*/


/**
* Node of the tree
* @param {Number} value of the node
* @param {Object} object other values of the node
*/
export class Node {
    
    /**
    * @member {Number|Object|Any}
    */
    value: number;
    obj: object;
    left: any = null;
    right: any = null;
    
    constructor(value: number, object: object){
        this.value = value;
        this.obj = object;
    }
}

/**
* Binary tree
*/
export class Tree{
    private root: any = null;
    private orderList: any = [];
    
    /**
    * Inserts a node into the binary search tree.
    *
    * @public
    * @method
    * @param {Number} value Node value.
    * @param {Object} object other values of the node.
    */
    public insert(value: number, obj: object): void{
        let root = this.root;
        
        if(!root){
            this.root = new Node(value, obj);
            return;
        }
        
        let currentNode = root;
        let newNode = new Node(value, obj);
        
        while(currentNode){
            if(value < currentNode.value){
                if(!currentNode.left){
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            }else{
                if(!currentNode.right){
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
        }
    }
    
    /**
    * Get the list in DESC order
    *
    * @public
    * @returns orderList in DESC order
    */
    public sortDESC(): any {
        this.orderList = [];
        this.inorderDESC();
        return this.orderList;
    }
    
    /**
    * In-order traversal of the whole binary search tree.
    *
    * @private
    * @method
    * @param {Node} current Node from which to start the traversal.
    */
    private inorderDESC(node: any = this.root): any{
        if(!node){
            return;
        }
        this.inorderDESC(node.right);
        this.orderList.push(node);
        this.inorderDESC(node.left);
    }
}