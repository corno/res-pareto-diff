import { API } from "./definition/api.generated"
import { $$ as idiffData } from "./implementations/diffData.native"
import { $$ as istringsAreEqual } from "./implementations/stringsAreEqual.native"

export const $a: API = {
    'diffData': idiffData,
    'stringsAreEqual': istringsAreEqual,
}