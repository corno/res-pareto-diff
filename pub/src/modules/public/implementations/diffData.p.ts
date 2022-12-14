import * as pi from "pareto-core-internals"

import * as api from "../api"

import { add } from "../../private/implementations/add.p"
import { diffLines } from "../../private/implementations/diffLines.p"

export const idiffData: api.CdiffData = ($) => {

    const changes = diffLines($.originalData, $.changedData, { newlineIsToken: false })

    const parts: api.TMultilinePart[] = []

    const lineOffset = 0

    let lineCountOfOriginal = lineOffset
    let lineCountOfChanged = lineOffset
    changes.forEach((change) => {
        if (change.count === undefined) {
            pi.panic("unexpected: no line count")
        }
        if (change.added) {
            if (change.removed) {
                //added and removed???
                pi.panic("unexpected: added and removed")
            } else {
                parts.push({
                    startLineInOriginal: lineCountOfOriginal,
                    startLineInChanged: lineCountOfChanged,
                    lines: pi.wrapRawArray(change.value.split($.newline)),
                    type: ['added', null],
                })
            }
            lineCountOfChanged = add(lineCountOfChanged, change.count)
        } else {
            if (change.removed) {
                parts.push({
                    startLineInOriginal: lineCountOfOriginal,
                    startLineInChanged: lineCountOfChanged,
                    lines: pi.wrapRawArray(change.value.split($.newline)),
                    type: ['removed', null],
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
