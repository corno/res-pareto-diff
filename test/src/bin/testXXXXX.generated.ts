import * as pt from 'pareto-core-types'
import * as pr from 'pareto-core-raw'
import * as pl from 'pareto-core-lib'
import * as tst from "lib-pareto-test"

import { test as public_diffData } from "../modules/public/diffData.generated"
import { test as public_stringsAreEqual } from "../modules/public/stringsAreEqual.generated"

const x = pr.wrapRawDictionary<pt.Dictionary<() => pt.AsyncValue<tst.TTestElement>>>({
    'public': pr.wrapRawDictionary({
        'diffData': public_diffData,
        'stringsAreEqual': public_stringsAreEqual,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))