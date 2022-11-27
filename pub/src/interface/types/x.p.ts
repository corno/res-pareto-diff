import * as pt from "pareto-core-types"

export type TMultilinePart = {
    readonly "startLineInOriginal": number,
    readonly "startLineInChanged": number,
    readonly "lines": pt.Array<string>,
    readonly "type":
    | ["removed", null]
    | ["added", null]
}

export type TDiffData_Data = {
    readonly "originalData": string,
    readonly "changedData": string,
    readonly "newline": string,
}
