import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"


export type CdiffData = glo.FDiffData

export type CstringsAreEqual = glo.FStringsAreEqual

export type API = {
    diffData: CdiffData
    stringsAreEqual: CstringsAreEqual
}