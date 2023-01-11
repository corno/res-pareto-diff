import * as pt from "pareto-core-types"
import * as pr from "pareto-core-raw"
import * as pl from "pareto-core-lib"

import { test as public_diffData } from "../modules/public/diffData.p"
import { test as public_stringsAreEqual } from "../modules/public/stringsAreEqual.p"

const x = pr.wrapRawDictionary({
    "public": pr.wrapRawDictionary({
        "diffData": public_diffData,
        "stringsAreEqual": public_stringsAreEqual,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))