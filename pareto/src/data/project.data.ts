import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"

const d = pr.wrapRawDictionary

export const $: mproject.T.Project = {
    'author': "Corno",
    'description': "a pareto wrapper for the diff library 'http://github.com/kpdecker/jsdiff'",
    'license': "ISC",

    'pubdependencies': d({
        "glo-pareto-common": {},
        "diff": {},
    }),
    'type': ['resource', {
        'definition': api,
        'devDependencies': d({
            "@types/diff": {},
        }),
        'test': {
            'dependencies': d({
            }),
        }
    }],
}