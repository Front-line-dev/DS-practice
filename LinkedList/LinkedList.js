export default class Node {
    constructor(value) {
        this.value = value
        this.nextNode = null
    }

    push(value) {
        const lastNode = this.#getLastNode()

        lastNode.nextNode = new Node(value)
    }

    insert(value, index) {
        if (index === 0)
            return console.log('does not support insert index 0')

        const prevNode = this.#findIndex(index - 1)
        
        const node = new Node(value)
        node.nextNode = prevNode.nextNode
        prevNode.nextNode = node
    }

    delete(index) {
        if (index === 0)
            return console.log('does not support delete index 0')

        const prevNode = this.#findIndex(index - 1)
        
        prevNode.nextNode = prevNode.nextNode?.nextNode
    }

    getLength() {
        let length = 0
        let node = this

        while (node.nextNode !== null) {
            node = node.nextNode
            length++
        }

        return length
    }

    print() {
        const values = []
        let node = this

        while (node !== null) {
            values.push(node.value)
            node = node.nextNode
        }

        return values.join(' -> ')
    }

    #findIndex(index) {
        let node = this

        while (index) {
            if (node.nextNode === null)
                return node

            node = node.nextNode
            index--
        }

        return node
    }

    #getLastNode() {
        let node = this

        while (node.nextNode !== null)
            node = node.nextNode
        
        return node
    }
}

