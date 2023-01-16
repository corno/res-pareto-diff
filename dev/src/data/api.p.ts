import * as pr from "pareto-core-raw"
import {
    array,
    optional,
    boolean,
    dictionary,
    externalReference,
    group,
    member,
    number,
    reference,
    string,
    taggedUnion,
    types,
    _function,
    nullType,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import {
    externalReference as er,
    reference as ref,
    string as str,
    boolean as bln,
} from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as NAPI from "lib-pareto-typescript-project/dist/modules/moduleDefinition"


const d = pr.wrapRawDictionary

export const $: NAPI.TModuleDefinition = {
    'glossary': {
        'imports': d({}),
        'namespace': {
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
                "DiffDataResult": optional(array(reference("MultilinePart"))),
                "MultilinePart": group({
                    "startLineInOriginal": member(number()),
                    "startLineInChanged": member(number()),
                    "lines": member(array(string())),
                    "type": member(taggedUnion({
                        "removed": nullType(),
                        "added": nullType(),
                    }))
                })
            }),
            'interfaces': d({}),

        },
        'functions': d({
            "StringsAreEqual": {
                'data': ref("StringComparisonData"),
                'return value': bln(),
            },
            "DiffData": {
                'data': ref("DiffData"),
                'return value': ref("DiffDataResult"),
            }
        }),
        'callbacks': d({}),
        'pipes': d({}),
    },
    'api': {
        'imports': d({}),
        'algorithms': d({
            "stringsAreEqual": {
                'definition': ['function', {
                    'function': "StringsAreEqual"
                }],
                'type': ['reference', null],
            },
            "diffData": {
                'definition': ['function', {
                    'function': "DiffData"
                }],
                'type': ['reference', null],
            }
        })
    }
}