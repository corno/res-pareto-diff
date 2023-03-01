import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"

export namespace T {
    
    export namespace DiffData {
        
        export type changedData = string
        
        export type newline = string
        
        export type originalData = string
    }
    
    export type DiffData = {
        readonly 'changedData': string
        readonly 'newline': string
        readonly 'originalData': string
    }
    
    export namespace DiffDataResult {
        
        export namespace O {
            
            export type A = T.MultilinePart
        }
        
        export type O = pt.Array<T.MultilinePart>
    }
    
    export type DiffDataResult = [ false ] | [ true, pt.Array<T.MultilinePart>]
    
    export namespace MultilinePart {
        
        export namespace lines {
            
            export type A = string
        }
        
        export type lines = pt.Array<string>
        
        export type startLineInChanged = number
        
        export type startLineInOriginal = number
        
        export namespace _ltype {
            
            export type added = null
            
            export type removed = null
        }
        
        export type _ltype = 
            | ['added', null]
            | ['removed', null]
    }
    
    export type MultilinePart = {
        readonly 'lines': pt.Array<string>
        readonly 'startLineInChanged': number
        readonly 'startLineInOriginal': number
        readonly 'type': 
            | ['added', null]
            | ['removed', null]
    }
    
    export namespace StringComparisonData {
        
        export type a = string
        
        export type b = string
    }
    
    export type StringComparisonData = {
        readonly 'a': string
        readonly 'b': string
    }
}