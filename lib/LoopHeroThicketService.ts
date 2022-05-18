
export interface Board{
    tiles:string[][]
}









////  https://gist.github.com/cesque/b15402c11a91cae5916301b74c9f62c3




let size = {
    width: 5,
    height: 12,
}

let directions = [
    { x:  1, y:  0, },
    { x: -1, y:  0, },
    { x:  0, y:  1, },
    { x:  0, y: -1, },
]

// decent path generation code (though inefficient and i think the path pruning algorithm is busted)
function generatePaths() {

    let stack = []

    for(let x = 0; x < size.width; x++) {
        stack.push({
            path: [{ x: x, y: 0 }]
        })
    }

    
    let max = {
        path: [],
        value: 0,
    }

    let i = 0

    while(stack.length) {
        i++
        let current = stack.shift()
        // console.log()
        // console.log(stack)
        // console.log(current)
        if(i % 100000 == 0) {
            console.log(`checked ${i} paths`)
        }

        let value = calculateValue(current.path)
        if(value > max.value) {
            max = {
                path: current.path,
                value: value,
            }
            console.log(`new max! value: ${max.value}... path: ${max.path.map(n => `(${n.x},${n.y})`).join(',')}`)
            draw(current.path)
        } else if(current.path.length > max.path.length && value < max.value) continue

        for(let direction of directions) {
            let lastNode = current.path[current.path.length - 1]
            let next = { 
                x: lastNode.x + direction.x,
                y: lastNode.y + direction.y,
            }

            if(next.x < 0 || next.x >= size.width || next.y < 0 || next.y >= size.height) {
                continue
            }

            if(!current.path.find(node => node.x == next.x && node.y == next.y)) {
                stack.unshift({
                    path: [...current.path, next]
                })
            }
        }
    }

    return max
}

// okay value calculation
function calculateValue(path) {
    let value = 0
    for(let node of path) {
        let v = 0
        for(let direction of directions) {
            let adjacent = { 
                x: node.x + direction.x,
                y: node.y + direction.y,
            }

            if(adjacent.x < 0 || adjacent.x >= size.width || adjacent.y < 0 || adjacent.y >= size.height) {
                continue
            }

            if(path.find(other => other.x == adjacent.x && other.y == adjacent.y)) {
                continue
            }

            v = 1
        }

        value += v
    }

    return value
}

// just the worst code you've ever read
function draw(path) {
    let arr = new Array(size.height).fill(0).map(_ => new Array(size.width).fill('  '))

    for(let i = 0; i < path.length; i++) {
        let current = path[i]
        let from = i == 0 ? null : path[i - 1]
        let to = i == path.length - 1 ? null : path[i + 1]

        let nameFrom = ' '
        let nameTo = ' '

        if(from) {
            if(from.y < current.y) nameFrom = 'u'
            if(from.y > current.y) nameFrom = 'd'
            if(from.x < current.x) nameFrom = 'l'
            if(from.x > current.x) nameFrom = 'r'
        }

        if(to) {
            if(to.y < current.y) nameTo = 'u'
            if(to.y > current.y) nameTo = 'd'
            if(to.x < current.x) nameTo = 'l'
            if(to.x > current.x) nameTo = 'r'
        }

        arr[current.y][current.x] = nameFrom + nameTo
    }

    let map = {
        '  ': '.',

        'u ': '▉',
        'd ': '▉',
        'l ': '▉',
        'r ': '▉',

        ' u': '▉',
        ' d': '▉',
        ' l': '▉',
        ' r': '▉',

        'ud': '│',
        'ul': '┘',
        'ur': '└',

        'du': '│',
        'dl': '┐',
        'dr': '┌',

        'lu': '┘',
        'ld': '┐',
        'lr': '─',

        'ru': '└',
        'rd': '┌',
        'rl': '─',
    }

    for(let row of arr) {
        let s = ''
        for(let value of row) {
            // console.log('"' + value + '"')
            s += map[value]
        }
        console.log(s)
    }
}


// draw(max.path)
// console.log(max.path.map(n => `x: ${n.x}, y: ${n.y}`).join('\n'))






export function Solve(width:number, height:number):Board{
    let tiles:string[][]= Array.from(Array(width), () => new Array(height))
    let board: Board = {tiles}


//     let max = generatePaths()
    
// draw(max.path)
// console.log(max.path.map(n => `x: ${n.x}, y: ${n.y}`).join('\n'))

    return board
}




