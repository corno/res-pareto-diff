import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type FDiffData = ($: T.DiffData,) => T.DiffDataResult

export type FStringsAreEqual = ($: T.StringComparisonData,) => mcommon.T.Boolean