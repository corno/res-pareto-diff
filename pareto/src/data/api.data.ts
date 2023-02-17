import * as pd from 'pareto-core-data'

import {
    array,
    group,
    member,
    number,
    reference,
    string,
    taggedUnion,
    types,
    null_,
    typeReference,
    func,
    data,
    type,
    parametrizedReference,
    optional,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
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
                }))
            })),
        }),
        'interfaces': d({}),
        'functions': d({
            "StringsAreEqual": func(typeReference("StringComparisonData"), null, null, data(typeReference("common", "Boolean"), false)),
            "DiffData": func(typeReference("DiffData"), null, null, data(typeReference("DiffDataResult"), false)),
        }),
    },
    'api': {
        'imports': d({}),
        'algorithms': d({
            "stringsAreEqual": algorithm(definitionReference("StringsAreEqual")),
            "diffData": algorithm(definitionReference("DiffData")),
        })
    }
}