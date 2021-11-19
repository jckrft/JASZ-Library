const compareKey = key =>
  (a, b) => {
    if (a[key] < b[key]) {
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
  }

export const AZTitle = arr => arr.sort(compareKey('title'))
export const ZATitle = arr => arr.sort(compareKey('title')).reverse()
export const AZAuthor = arr => arr.sort(compareKey('author'))
export const ZAAuthor = arr => arr.sort(compareKey('author')).reverse()