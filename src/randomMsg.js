// Returns a random item from an array.
const message = (arr) => {
  let idx = Math.floor(Math.random() * arr.length);

  return arr[idx];
}

export default message;