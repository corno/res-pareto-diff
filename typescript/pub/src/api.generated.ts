import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type diffData = g_this.F.DiffData

export type stringsAreEqual = g_this.F.StringsAreEqual

export type API = {
    diffData: diffData
    stringsAreEqual: stringsAreEqual
}