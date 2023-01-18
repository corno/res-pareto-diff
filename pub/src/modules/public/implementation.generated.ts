import { API } from "./api"
import { $$ as idiffData } from "./implementations/diffData.p"
import { $$ as istringsAreEqual } from "./implementations/stringsAreEqual.p"

export const $a: API = {
    'diffData': idiffData,
    'stringsAreEqual': istringsAreEqual,
}