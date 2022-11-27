import * as pi from "pareto-core-internals"

import * as api from "../../interface"

import { add } from "../private/add.p"
import { diffLines } from "../private/diffLines.p"
import { panic } from "../private/panic"


export const fDiffData: api.FDiffData = ($) => {

    const changes = diffLines($.originalData, $.changedData, { newlineIsToken: false })

    const parts: api.TMultilinePart[] = []

    const lineOffset = 0

    let lineCountOfOriginal = lineOffset
    let lineCountOfChanged = lineOffset
    changes.forEach((change) => {
        if (change.count === undefined) {
            panic("unexpected: no line count")
        }
        if (change.added) {
            if (change.removed) {
                //added and removed???
                panic("unexpected: added and removed")
            } else {
                parts.push({
                    startLineInOriginal: lineCountOfOriginal,
                    startLineInChanged: lineCountOfChanged,
                    lines: pi.wrapRawArray(change.value.split($.newline)),
                    type: ["added", null],
                })
            }
            lineCountOfChanged = add(lineCountOfChanged, change.count)
        } else {
            if (change.removed) {
                parts.push({
                    startLineInOriginal: lineCountOfOriginal,
                    startLineInChanged: lineCountOfChanged,
                    lines: pi.wrapRawArray(change.value.split($.newline)),
                    type: ["removed", null],
                })
            } else {
                lineCountOfChanged = add(lineCountOfChanged, change.count)
            }
            lineCountOfOriginal = add(lineCountOfChanged, change.count)
        }

    })
    if (parts.length === 0) {
        return null
    } else {
        return pi.wrapRawArray(parts)
    }
}
