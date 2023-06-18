const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) { // obviously another way to do it 
    const destructivelyAppendCat = cats.push(name)
    return destructivelyAppendCat

}

function destructivelyPrependCat(name) { // i guess this is one way to do it 
    cats.unshift(name)

}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}


function appendCat(name) {
   const appendCat = [...cats, name]
    return appendCat
}

function prependCat(name) {
    const prependCat = [name, ...cats]
    return prependCat

}

function removeLastCat() {
   const removeLastCat = cats.slice(0, -1)
   return removeLastCat
}

function removeFirstCat() {
    const removeFirstCat = cats.slice(1)
    return removeFirstCat 
}
