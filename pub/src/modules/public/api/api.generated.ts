import * as pt from "pareto-core-types"

import * as glo from "./types.generated"


export type CdiffData = glo.FdiffData

export type CstringsAreEqual = glo.FstringsAreEqual

export type API = {
    diffData: CdiffData
    stringsAreEqual: CstringsAreEqual
}