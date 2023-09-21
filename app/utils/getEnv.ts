function isBrowser() {
  return typeof window !== 'undefined'
}

function getEnv() {
  return isBrowser() ? window.env : process.env
}

export default getEnv
