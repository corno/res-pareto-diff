import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace VOptional {
    
    export namespace Onot__set {}
    export type Onot__set<AType> = {}
}
export type VOptional<AType> = 
    | ['not set', VOptional.Onot__set<AType>]
    | ['set', AType]

export type MOptional<AType> = VOptional<AType>

export namespace GDiffData {}
export type GDiffData = {
    readonly 'changedData': string
    readonly 'newline': string
    readonly 'originalData': string
}
export type UDiffData = GDiffData

export namespace GDiffDataResult {
    
    export namespace TPType {}
    export type TPType = pt.Array<UMultilinePart>
}
export type GDiffDataResult = MOptional<GDiffDataResult.TPType>
export type UDiffDataResult = GDiffDataResult

export namespace GMultilinePart {
    
    export namespace Plines {}
    export type Plines = pt.Array<string>
    
    export namespace Ptype {}
    export type Ptype = 
        | ['added', null]
        | ['removed', null]
}
export type GMultilinePart = {
    readonly 'lines': GMultilinePart.Plines
    readonly 'startLineInChanged': number
    readonly 'startLineInOriginal': number
    readonly 'type': GMultilinePart.Ptype
}
export type UMultilinePart = GMultilinePart

export namespace GStringComparisonData {}
export type GStringComparisonData = {
    readonly 'a': string
    readonly 'b': string
}
export type UStringComparisonData = GStringComparisonData