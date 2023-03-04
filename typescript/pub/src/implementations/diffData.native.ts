import * as pi from 'pareto-core-internals'

import * as gapi from "../definition/glossary"

import * as ndiff from "diff"

import { diffData } from "../definition/api.generated"

export const $$: diffData = ($) => {
    function add(a: number, b: number): number {
        return a + b
    }
    const changes = ndiff.diffLines($.originalData, $.changedData, { newlineIsToken: false })

    const parts: gapi.T.MultilinePart[] = []

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
        return [false]
    } else {
        return [true, pi.wrapRawArray(parts)]
    }
}
