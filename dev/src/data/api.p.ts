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
} from "lib-pareto-typescript-project/dist/modules//api/api/shorthands.p"

import * as NAPI from "lib-pareto-typescript-project/dist/modules//api"


const wd = pr.wrapRawDictionary

export const api: NAPI.TModuleDefinition = {
    'glossary': {
        'imports': wd({
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
        'functions': wd({
            "StringsAreEqual": {
                'data': ref("StringComparisonData"),
                'return value': bln(),
            },
            "DiffData": {
                'data': ref("DiffData"),
                'return value': ref("DiffDataResult"),
            }
        }),
        'callbacks': wd({}),
        'interfaces': wd({}),
    },
    'api': {
        'imports': wd({}),
        'algorithms': wd({
            "stringsAreEqual": ['function', {
                'function': "StringsAreEqual"
            }],
            "diffData": ['function', {
                'function': "DiffData"
            }]
        })
    }
}