import * as pt from "pareto-core-types"
import * as mcommon from "glo-pareto-common"

export type TDiffData = {
    readonly "changedData": string
    readonly "newline": string
    readonly "originalData": string
}

export type TDiffDataResult = null | pt.Array<TMultilinePart>

export type TMultilinePart = {
    readonly "lines": pt.Array<string>
    readonly "startLineInChanged": number
    readonly "startLineInOriginal": number
    readonly "type": 
        | ["added", null]
        | ["removed", null]
}

export type TStringComparisonData = {
    readonly "a": string
    readonly "b": string
}

export type FDiffData = ($: TDiffData) => TDiffDataResult

export type FStringsAreEqual = ($: TStringComparisonData) => mcommon.TBoolean