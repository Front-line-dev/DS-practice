import {drawFrame, addInputListener, print} from '../frame.js'
import HashMap from './HashMap.js'

drawFrame({
    title: 'Hash Map',
    description: 'Hash Map using JavaScript'
})

const hashMap = new HashMap()

addInputListener((input) => {
    print(input)

    const args = input.split(' ')

    if (args[0] === 'set') {
        hashMap.set(args[1], args[2])
    }

    if (args[0] === 'get') {
        print(hashMap.get(args[1]))
    }

    if (args[0] === 'delete') {
        hashMap.delete(args[1])
    }
})