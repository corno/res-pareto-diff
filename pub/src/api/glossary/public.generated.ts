import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"

export type TDiffData = t.UDiffData

export type TDiffDataResult = t.UDiffDataResult

export type TMultilinePart = t.UMultilinePart

export type TStringComparisonData = t.UStringComparisonData

export type FDiffData = ($: TDiffData,) => TDiffDataResult

export type FStringsAreEqual = ($: TStringComparisonData,) => mcommon.TBoolean