import * as pl from "pareto-core-lib"
import * as pr from "pareto-core-raw"

import * as diff from "diff"

import * as api from "api-pareto-diff"


export const diffData: api.DiffData = ($) => {

    const changes = diff.diffLines($.originalData, $.changedData, { newlineIsToken: false })

    const parts: api.TMultilinePart[] = []

    const lineOffset = 0

    let lineCountOfOriginal = lineOffset
    let lineCountOfChanged = lineOffset
    changes.forEach((change) => {
        if (change.count === undefined) {
            pl.panic("unexpected: no line count")
        }
        if (change.added) {
            if (change.removed) {
                //added and removed???
                pl.panic("unexpected: added and removed")
            } else {
                parts.push({
                    startLineInOriginal: lineCountOfOriginal,
                    startLineInChanged: lineCountOfChanged,
                    lines: change.value.split($.newline),
                    type: ["added", {}],
                })
            }
            lineCountOfChanged += change.count
        } else {
            if (change.removed) {
                parts.push({
                    startLineInOriginal: lineCountOfOriginal,
                    startLineInChanged: lineCountOfChanged,
                    lines: change.value.split($.newline),
                    type: ["removed", {}],
                })
            } else {
                lineCountOfChanged += change.count
            }
            lineCountOfOriginal += change.count
        }

    })
    return pr.wrapRawArray(parts)
}
