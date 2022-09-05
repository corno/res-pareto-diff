import * as diff from "api-pareto-diff"

export const stringsAreEqual: diff.FStringsAreEqual = ($) => {
    return $.a === $.b
}