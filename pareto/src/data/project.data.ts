import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "a pareto wrapper for the diff library 'http://github.com/kpdecker/jsdiff'",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": {},
    }),
    'type': ['resource', {
        'definition': {
            'glossary': glossary,
            'api': api,
        },
        'nativeDependencies': d({
            "diff": {},
        }),
        'devDependencies': d({
            "@types/diff": {},
        }),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'functions': d({}),
                'imports': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
        }
    }],
}