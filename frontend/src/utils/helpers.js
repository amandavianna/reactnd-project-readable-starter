export const dateFormat = (timestamp) => {
  var date = new Date(timestamp)
  return date.toLocaleDateString()
}
