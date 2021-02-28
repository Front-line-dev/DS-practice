import {drawFrame, addInputListener, print} from '../frame.js'
import Node from './LinkedList.js'

drawFrame({
    title: 'Linked List',
    description: 'Linked List using JavaScript'
})

const node = new Node('head')

addInputListener((input) => {
    const args = input.split(' ')

    if (args[0] === 'push') {
        node.push(args[1])
    }

    if (args[0] === 'delete') {
        node.delete(args[1])
    }

    if (args[0] === 'insert') {
        node.insert(args[1], args[2])
    }

    print(node.print())
})