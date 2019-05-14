class BinaryTree {
    constructor() {
        this.root = null;
    }

    persistChildrenNode(data, left = null, right = null) {
        let Node = {
            data,
            left,
            right
        };
        let currentNode;

        if (!this.root) {
            this.root = Node;
        } else {
            currentNode = this.root;
            while (currentNode) {
                if (currentNode.data) {
                    if (!currentNode.left && !currentNode.right) {
                        currentNode.right = Node;
                        break;
                    } else if (currentNode.right && !currentNode.left) {
                        currentNode.left = Node;
                        break;
                    } else if (currentNode.left && currentNode.right) {
                        if (this.nodeCheckUp(currentNode.left)) {
                            currentNode = currentNode.right;
                        } else {
                            currentNode = currentNode.left;
                        }
                    } else {
                        console.log("!End!");
                        break;
                    }
                }
            }
        }
    }
    nodeCheckUp(left) {
        if (left.left && left.right) {
            return true;
        }
        else {
            return false;
        }
    }
}
let bt = new BinaryTree();


bt.persistChildrenNode(1);

bt.persistChildrenNode(2);

bt.persistChildrenNode(3);

bt.persistChildrenNode(4);

bt.persistChildrenNode(5);

bt.persistChildrenNode(6);

bt.persistChildrenNode(7);


console.log(bt);