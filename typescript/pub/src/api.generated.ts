import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
}

export namespace A {
    
    export type diffData = () => g_this.SYNC.A.F.DiffData
    
    export type stringsAreEqual = () => g_this.SYNC.A.F.StringsAreEqual
}

export type API = {
    readonly 'diffData': A.diffData
    readonly 'stringsAreEqual': A.stringsAreEqual
}