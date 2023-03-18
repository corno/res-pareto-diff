import * as pd from 'pareto-core-data'

import {
    string,
    null_, member, taggedUnion, group,
    array,
    typeReference,
    data,
    sfunc,
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
    'asynchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({
            "StringsAreEqual": sfunc(data(typeReference("StringComparisonData")), externalTypeReference("common", "Boolean")),
            "DiffData": sfunc(data(typeReference("DiffData")), typeReference("DiffDataResult")),
        }),
    },

}