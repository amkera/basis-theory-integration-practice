import { proxyRequest } from './api/proxyRequest'

const Proxy = () => {
  return (
    <div>
      <button
        id="submit_button"
        type="button"
        className="button"
        onClick={proxyRequest}
      >
        Proxy the request
      </button>
    </div>
  )
}

export default Proxy
