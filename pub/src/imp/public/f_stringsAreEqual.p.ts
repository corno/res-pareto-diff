import * as diff from "api-pareto-diff"

export const f_stringsAreEqual: diff.FStringsAreEqual = ($) => {
    return $.a === $.b
}