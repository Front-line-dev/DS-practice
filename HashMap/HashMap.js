const MAP_SIZE = 1000

function hash(key) {
    const stringArray = Array.from(key)

    // Simply add all the strings
    const hashed = stringArray.reduce((acc, cur) => {
        const charValue = cur.charCodeAt()
        return acc + charValue
    }, 0)

    return hashed % MAP_SIZE
}


class HashMap {
    constructor() {
        this.hashMap = new Array(1000)
    }

    set(key, value) {
        const [hashed, hashIndex] = this.#find(key)

        if (hashIndex === -1)
            this.hashMap[hashed].push([key, value])
        else
            this.hashMap[hashed][hashIndex] = [key, value]
    }

    get(key) {
        const [hashed, hashIndex] = this.#find(key)

        if (hashIndex === -1)
            return null
        else
            return this.hashMap[hashed][hashIndex][1]
    }

    delete(key) {
        const [hashed, hashIndex] = this.#find(key)

        if (hashIndex !== -1)
            this.hashMap[hashed].splice(hashIndex, 1)
    }

    #find(key) {
        const hashed = hash(key)

        if (this.hashMap[hashed] === undefined)
            this.hashMap[hashed] = []

        const hashIndex = this.hashMap[hashed].findIndex(([keyData, valueData]) => {
            return keyData === key
        })

        return [hashed, hashIndex]
    }
}

export default HashMap