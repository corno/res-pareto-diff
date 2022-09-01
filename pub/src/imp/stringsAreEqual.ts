import * as diff from "api-pareto-diff"

export const stringsAreEqual: diff.StringsAreEqual = ($) => {
    return $.a === $.b
}