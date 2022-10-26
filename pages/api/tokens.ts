import { BasisTheory } from '@basis-theory/basis-theory-js'

export const getTokens = async () => {
  const bt = await new BasisTheory().init('') //private key goes here
  const tokens = await bt.tokens.list()
  console.log(tokens.data)
  return tokens
}
