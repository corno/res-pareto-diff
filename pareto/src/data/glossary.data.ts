import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    func,
    type,
    optional,
    reference,
    glossaryParameter,
    inf,
    parametrizedInterfaceReference,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'types': d({
        "StringComparisonData": type( group({
            "a": member(string()),
            "b": member(string()),
        })),
        "DiffData": type( group({
            "originalData": member(string()),
            "changedData": member(string()),
            "newline": member(string()),
        })),
        "DiffDataResult": type( optional(array(reference("MultilinePart")))),
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
    'builders': d({}),
    'interfaces': d({}),
    'functions': d({
        "StringsAreEqual": func(typeReference("StringComparisonData"), null, null, data(typeReference("common", "Boolean"), false)),
        "DiffData": func(typeReference("DiffData"), null, null, data(typeReference("DiffDataResult"), false)),
    }),
}