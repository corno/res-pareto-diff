import * as diff from "api-pareto-diff"

export const fStringsAreEqual: diff.FStringsAreEqual = ($) => {
    return $.a === $.b
}