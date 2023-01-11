import * as pr from "pareto-core-raw"

import { group, member, types, _function } from "lib-pareto-typescript-project/dist/modules//glossary/api/shorthands.p"
import { externalReference as er, string as str } from "lib-pareto-typescript-project/dist/modules//glossary/api/shorthands.p"
import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/api/api/shorthands.p"

import * as mproject from "lib-pareto-typescript-project/dist/modules//project"
import { api } from "./api.p"


const wd = pr.wrapRawDictionary

export const project: mproject.TProject = {
    'type': ['resource', null],
    'modules': wd({
        "public": {
            'definition': api,
            'implementation': {}
        },
    }),
    'main': "public"
}