import React, {PropTypes} from 'react'
import './CoderBot.scss'

const getHeading = code => {
  switch(code) {
  case 404:
    return 'D’oh! We couldn’t find the page you were looking for.'
  case 200:
    return 'Success!!'
  case 500:
  default:
    return 'D’oh! Something went wrong'
  }
}

const getMessage = code => {
  switch(code) {
  case 200:
    return 'Operation performed successfully!!'
  default:
    return 'Sorry about that, mate! Please try reloading the page again. If things don’t work or you’re sure it is Coder’s fault, send us a note at <a href="support@topcoder.com">support@topcoder.com</a> and we’ll fix it for you.'
  }
}

const CoderBot = ({code, message}) => {
  return (
    <section className="content content-error">
      <div className="container">
        <div className="page-error">
          <h3>{ getHeading(code) }</h3>
          <p dangerouslySetInnerHTML={ {__html : message || getMessage(code) } }></p>
          <span>{code !== 200 && code}</span>
        </div>
      </div>
    </section>
  )
}

CoderBot.propTypes = {
  code: PropTypes.number.isRequired
}
CoderBot.defaultProps = {
  code: 500
}
export default CoderBot
