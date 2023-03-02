import { API } from "./definition/api.generated"
import { $$ as idiffData } from "./implementations/diffData.native"
import { $$ as istringsAreEqual } from "./implementations/stringsAreEqual.native"

export const $r: API = {
    'diffData': idiffData,
    'stringsAreEqual': istringsAreEqual,
}