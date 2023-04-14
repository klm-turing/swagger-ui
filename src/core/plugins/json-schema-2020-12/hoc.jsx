/**
 * @prettier
 */
import React from "react"

import JSONSchema from "./components/JSONSchema/JSONSchema"
import BooleanJSONSchema from "./components/BooleanJSONSchema/BooleanJSONSchema"
import KeywordProperties from "./components/keywords/Properties"
import Accordion from "./components/Accordion/Accordion"
import ExpandDeepButton from "./components/ExpandDeepButton/ExpandDeepButton"
import ChevronRightIcon from "./components/icons/ChevronRight"
import { JSONSchemaContext } from "./context"
import { getTitle, isBooleanJSONSchema, upperFirst } from "./fn"

export const withJSONSchemaContext = (Component, overrides = {}) => {
  const value = {
    components: {
      JSONSchema,
      BooleanJSONSchema,
      KeywordProperties,
      Accordion,
      ExpandDeepButton,
      ChevronRightIcon,
      ...overrides.components,
    },
    config: {
      default$schema: "https://json-schema.org/draft/2020-12/schema",
      ...overrides.config,
    },
    fn: {
      upperFirst,
      getTitle,
      isBooleanJSONSchema,
      ...overrides.fn,
    },
  }

  const HOC = (props) => (
    <JSONSchemaContext.Provider value={value}>
      <Component {...props} />
    </JSONSchemaContext.Provider>
  )
  HOC.contexts = {
    JSONSchemaContext,
  }
  HOC.displayName = Component.displayName

  return HOC
}
