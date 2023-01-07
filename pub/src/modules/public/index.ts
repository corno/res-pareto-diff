import { API } from "./api"
import { idiffData } from "./implementations/diffData.p"
import { istringsAreEqual } from "./implementations/stringsAreEqual.p"

export * from "./api"

export const $a: API = {
    "diffData": idiffData,
    "stringsAreEqual": istringsAreEqual,
}