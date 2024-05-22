/**
 * @prettier
 */
import React from "react"

import { schema } from "../../../prop-types"
import TechnicalError from "core/components/TechnicalError"

const TechnicalErrorKeyword = ({schema}) => {
    if (!schema.errorCodes) return null

    return <TechnicalError title='Technical Error code' errors={schema.errorCodes} />
}

TechnicalErrorKeyword.propTypes = {
  schema: schema.isRequired,
}

export default TechnicalErrorKeyword