import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace A {
    
    export type diffData = g_this.SYNC.A.F.DiffData
    
    export type stringsAreEqual = g_this.SYNC.A.F.StringsAreEqual
}

export type API = {
    diffData: A.diffData
    stringsAreEqual: A.stringsAreEqual
}