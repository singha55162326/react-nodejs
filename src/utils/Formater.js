export function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace)
  }
  export function formatNumber(text) {
    let number = replaceAll(text.trim(), ",", "")
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }