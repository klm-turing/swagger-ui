import React from "react"
import PropTypes from "prop-types"

const TechnicalError = ({ title, errors }) => (
  <div className='technicalError'>
    <p>{title}: </p>
    <table>
      <thead>
        <tr>
          <th>Error code</th>
          <th>Error Description</th>
        </tr>
      </thead>
      <tbody>
        {errors.map((error) => (
          <tr key={error.code}>
            <td>{error.code}</td>
            <td>{error.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

TechnicalError.propTypes = {
  title: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default TechnicalError