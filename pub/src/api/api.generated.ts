import * as pt from 'pareto-core-types'

import * as gthis from "./glossary"

export type CdiffData = gthis.FDiffData

export type CstringsAreEqual = gthis.FStringsAreEqual

export type API = {
    diffData: CdiffData
    stringsAreEqual: CstringsAreEqual
}