import * as api from "res-pareto-diff"
import { diffData } from "./diffData"

type API = {
    diffData: api.DiffData
}

export const $: API = {
    diffData: diffData
}