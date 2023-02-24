import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"


export type CdiffData = gglo.FDiffData

export type CstringsAreEqual = gglo.FStringsAreEqual

export type API = {
    diffData: CdiffData
    stringsAreEqual: CstringsAreEqual
}