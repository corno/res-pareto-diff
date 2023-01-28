import * as pr from 'pareto-core-raw'

import {
    array,
    group,
    member,
    number,
    reference,
    string,
    taggedUnion,
    types,
    _function,
    null_,
    typeReference,
    parameter,
    template,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'templates': d({
            "Optional": {
                'parameters': d({ "Type": {}, }),
                'type': taggedUnion({
                    "set": parameter("Type"),
                    "not set": group({}),
                })
            }
        }),
        'types': types({
            "StringComparisonData": group({
                "a": member(string()),
                "b": member(string()),
            }),
            "DiffData": group({
                "originalData": member(string()),
                "changedData": member(string()),
                "newline": member(string()),
            }),
            "DiffDataResult": template("Optional", {
                "Type": array(reference("MultilinePart"))
            }),
            "MultilinePart": group({
                "startLineInOriginal": member(number()),
                "startLineInChanged": member(number()),
                "lines": member(array(string())),
                "type": member(taggedUnion({
                    "removed": null_(),
                    "added": null_(),
                }))
            })
        }),
        'interfaces': d({}),
        'functions': d({
            "StringsAreEqual": _function(typeReference("StringComparisonData"), typeReference("common", "Boolean")),
            "DiffData": _function(typeReference("DiffData"), typeReference("DiffDataResult")),
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