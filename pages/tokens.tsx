import { getTokens } from './api/tokens'

const Tokens = () => {
  return (
    <div>
      <button
        id="submit_button"
        type="button"
        className="button"
        onClick={getTokens}
      >
        Get Tokens
      </button>
    </div>
  )
}

export default Tokens
