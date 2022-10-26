import { BasisTheory } from '@basis-theory/basis-theory-js'

export const proxyRequest = async () => {
  const bt = await new BasisTheory().init('') //private key goes here

  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'BT-API-KEY': 'key_QBNPCQKnu5GL9sRLNN3uQt',
      'BT-PROXY-URL': 'https://httpbin.org/anything',
    },
    body: JSON.stringify({
      firstName: 'John',
      lastName: 'Doe',
      creditCardNumber: '{{a53ed15d-e3c4-4139-9b6e-0e990a15f382}}',
      expirationDate: '04/2024',
    }),
  }

  try {
    const response = await fetch('https://api.basistheory.com/proxy', config)
    if (response.ok) {
      console.log(response)
      return response.json()
    } else {
      console.log(`Response has status ${response.status}`)
    }
  } catch (error) {
    console.log(`There was an error: ${error}`)
  }
}
