import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

const d = pd.d

import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "a pareto wrapper for the diff library 'http://github.com/kpdecker/jsdiff'",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null,
    }),
    'type': ['resource', {
        'definition': {
            'glossary': {
                'root': glossary,
                'imports': d({
                    "common": external("glo-pareto-common"),
                }),
            },
            'api': {
                'root': api,

                'imports': d({
                    "this": this_(),
                }),
            },
        },
        'temp': {
            'nativeDependencies': d({
                "diff": null,
            }),
            'devDependencies': d({
                "@types/diff": null,
            }),
        },
        'test': {
            'dependencies': d({
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'parameters': d({}),
                        'imports': d({}),
                        'types': d({}),
                        'asynchronous': {
                            'interfaces': d({}),
                            'constructors': d({}),
                            'functions': d({}),
                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'constructors': d({}),
                            'functions': d({}),
                        },
                    },
                    'imports': d({}),
                },
                'api': {
                    'root': {
                        'algorithms': d({}),
                    },
                    'imports': d({}),
                },
            },
            'imports': d({}),
        }
    }],
}