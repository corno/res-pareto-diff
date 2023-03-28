import * as pd from 'pareto-core-data'

import {
    string,
    null_, member, taggedUnion, group,
    array,
    typeReference,
    data,
    sfunction,
    type,
    optional,
    number,
    ref,
    externalTypeReference,
    imp,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "StringComparisonData": type(group({
                "a": member(string()),
                "b": member(string()),
            })),
            "DiffData": type(group({
                "originalData": member(string()),
                "changedData": member(string()),
                "newline": member(string()),
            })),
            "DiffDataResult": type(optional(array(ref(typeReference("MultilinePart"))))),
            "MultilinePart": type(group({
                "startLineInOriginal": member(number()),
                "startLineInChanged": member(number()),
                "lines": member(array(string())),
                "type": member(taggedUnion({
                    "removed": null_(),
                    "added": null_(),
                })),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "StringsAreEqual": sfunction(externalTypeReference("common", "Boolean"), data(typeReference("StringComparisonData"))),
            "DiffData": sfunction(typeReference("DiffDataResult"), data(typeReference("DiffData"))),
        }),
    },

}