var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten (name) {
 kittens.push(name)
 return kittens
}

function destructivelyPrependKitten (name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten (name) {
 kittens.pop(name)
 return kittens
}

function destructivelyRemoveFirstKitten (name){
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  kittens.concat(name)
  return kittens.concat(name)
} 

function prependKitten(name) {
  return [kittens,...name}
} 

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1)
}
