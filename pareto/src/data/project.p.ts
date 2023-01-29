import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/modules/project"

import { $ as api } from "./api.p"

const d = pr.wrapRawDictionary

export const $: mproject.TProject = {
    'name': "res-pareto-diff",

    'author': "Corno",
    'description': "a pareto wrapper for the diff library 'http://github.com/kpdecker/jsdiff'",
    'license': "ISC",

    'type': ['resource',  {
        'devDependencies': d({
            "@types/diff": {},
        }),
    }],
    'modules': d({
        "public": {
            'definition': api,
        },
    }),
    'main': "public",
    'pubdependencies': d({
        "glo-pareto-common": {},
        "diff": {},
    }),
    'testdependencies': d({}),
}