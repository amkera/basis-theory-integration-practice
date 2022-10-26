import type { NextPage } from 'next'
import {
  BasisTheoryProvider,
  CardElement,
  TextElement,
  useBasisTheory,
} from '@basis-theory/basis-theory-react'
import { useRef } from 'react'
import Navbar from '../Nav/Navbar'

const Home: NextPage = () => {
  const { bt } = useBasisTheory(process.env.NEXT_PUBLIC_BT_API_KEY as string, {
    elements: true,
  })

  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const phoneNumberRef = useRef(null)
  const emailRef = useRef(null)
  const cardRef = useRef(null)

  const submit = async () => {
    try {
      const piiResponse = await bt?.tokenize({
        firstName: firstNameRef.current,
        lastName: lastNameRef.current,
        phone: phoneNumberRef.current,
        email: emailRef.current,
      })

      const cardResponse = await bt?.tokens.create({
        type: 'card',
        data: cardRef.current,
      })

      console.log(piiResponse, cardResponse)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Navbar />
      <BasisTheoryProvider bt={bt}>
        <h2>Create a token from client side</h2>
        <div id="form">
          <BasisTheoryProvider bt={bt}>
            <div className="row row input">
              <label htmlFor="first-name">First Name</label>
              <TextElement
                id="first-name"
                placeholder="John"
                ref={firstNameRef}
              />
            </div>
            <div className="row row input">
              <label htmlFor="last-name">Last Name</label>
              <TextElement id="last-name" placeholder="Doe" ref={lastNameRef} />
            </div>

            <div className="row row-input">
              <label htmlFor="phone">Phone</label>
              <TextElement
                id="phone"
                placeholder="555-867-5309"
                // style={inputStyle}
                transform={[/-/]}
                ref={phoneNumberRef}
              />
            </div>
            <div className="row row-input">
              <label htmlFor="email">Email</label>
              <TextElement
                id="email"
                placeholder="johndoe@gmail.com"
                ref={emailRef}
              />
            </div>
            <div className="row row-input">
              <label htmlFor="card"></label>
              <CardElement id="card" ref={cardRef} />
            </div>

            <button
              id="submit_button"
              type="button"
              className="button"
              onClick={submit}
            >
              Submit
            </button>
          </BasisTheoryProvider>
        </div>
      </BasisTheoryProvider>
    </>
  )
}

export default Home
