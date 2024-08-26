export const getStripLocale = (path: string): string => {
  const [, , ...rest] = path.split('/')

  return `/${rest.join('/')}`
}
