var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, toadd)
{
  return [toadd, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, toadd)
{
  return array.unshift(toadd)
}
