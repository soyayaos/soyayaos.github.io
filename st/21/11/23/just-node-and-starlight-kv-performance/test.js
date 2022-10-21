const data = {
    x: 12,
}

const list = []
list[12] = 'x'

const map = new Map();
map.set('x', 12)

const duration = 3000

const print = typeof just === 'object' ? just.print : console.log
print('')

const now = () => {
    return new Date().getTime()
}

const results = {
    Object: 0,
    Array: 0,
    ArrayKv: 0,
    Map: 0,
}

let from = 0
let c = 0
let total = 0

for (const i of Array(5)) {
    //
    // Object
    //
    from = now()
    c = 0
    while (now() - from < duration) {
        if (data.x === 12) {
            c++
        }
    }
    total = Number((c/(duration/1000)).toFixed())
    results.Object += total
    print(`[Object] = ${total} op/s`)

    //
    // Array
    //
    from = now()
    c = 0
    while (now() - from < duration) {
        if (list[12]) {
            c++
        }
    }
    total = Number((c/(duration/1000)).toFixed())
    results.Array += total
    print(`[Array] = ${total} op/s`)

    //
    // Array with kv
    //
    from = now()
    c = 0
    while (now() - from < duration) {
        if (list[data.x]) {
            c++
        }
    }
    total = Number((c/(duration/1000)).toFixed())
    results.ArrayKv += total
    print(`[Array with kv] = ${total} op/s`)

    //
    // Map
    //
    from = now()
    c = 0
    while (now() - from < duration) {
        if (map.get('x')) {
            c++
        }
    }
    total = Number((c/(duration/1000)).toFixed())
    results.Map += total
    print(`[Map] = ${total} op/s`)
}

print('')

Object.keys(results).forEach(k => {
    print(`${k} total = ${results[k]} av = ${(results[k]/5).toFixed()}`)
})

print('')