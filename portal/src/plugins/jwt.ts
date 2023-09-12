interface Payload {
  id: number
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
  const header = JSON.parse(Buffer.from(tokenArray[0], 'base64').toString())
  const payload = JSON.parse(Buffer.from((tokenArray[1]), 'base64').toString())

  const decodedToken: Token = {
    header,
    payload,
    signature: tokenArray[2],
    expires: payload.exp
  }

  return decodedToken
}

export default decode