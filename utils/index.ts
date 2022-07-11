export const classNames = (
  arrayString: string = '',
  initClass: string = '',
) => {
  const arrayStr = arrayString.split(',')
  const initClassArr = initClass.split(' ')
  return [...arrayStr, ...initClassArr].join(' ').trim()
}

export function genRandom(min: number, max: number) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  return randomNumber
}

export function setDate(numOfDays: number) {
  const currentDate = new Date()
  const result = currentDate.setDate(currentDate.getDate() - numOfDays)
  return new Date(result).toISOString()
}

export function groupBy(xs: any[], key: string) {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

// normalized data
export function normalizedTxn(sortedtransactions: any[] = []) {
  const modified = sortedtransactions.map((i) => {
    const date = new Date(+i.created_at)
    const dd = String(date.getDate()).padStart(2, '0')
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const yyyy = date.getFullYear()

    return {
      ...i,
      commonDate: new Date(`${mm}-${dd}-${yyyy}`),
    }
  })

  const groupedData = groupBy(modified, 'commonDate')

  const keys = Object.keys(groupedData).map((i) => new Date(i).toDateString())
  const values = Object.values(groupedData)
  const normalizedData = keys.map((i, idx) => {
    return {
      date: String(i),
      data: values[idx],
    }
  })
  return normalizedData
}

export const splitAddress = (address: string, splitDigit = 7) =>
  `${address.split('').splice(0, splitDigit).join('')}...${address
    .split('')
    .splice(address.length - splitDigit, address.length)
    .join('')}`
