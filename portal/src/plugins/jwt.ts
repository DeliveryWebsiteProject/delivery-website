// import Buffer from 

interface Payload {
  id: string
  exp: number
}

interface Token {
  header: object
  payload: Payload
  signature: string
  expires: number
}

const decode = (token: string): Token => {
  if (!token) return {} as Token

  const tokenArray = token.split('.')
  const header = JSON.parse(atob(tokenArray[0]))
  const payload = JSON.parse(atob((tokenArray[1])))

  const decodedToken: Token = {
    header,
    payload,
    signature: tokenArray[2],
    expires: payload.exp
  }

  return decodedToken
}

const isTokenValid = (token: string) => {
  if (!token || !localStorage.getItem('token')) {
    return false
  }

  const decodedToken = decode(token)

  console.log(decodedToken.expires)
  console.log(Date.now())
  console.log(decodedToken.expires > Date.now());

  return decodedToken.expires > Date.now()
}

export default {
  decode,
  isTokenValid
}