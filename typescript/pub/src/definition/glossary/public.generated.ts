import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type FDiffData = ($: T.DiffData,) => T.DiffDataResult

export type FStringsAreEqual = ($: T.StringComparisonData,) => gcommon.T.Boolean