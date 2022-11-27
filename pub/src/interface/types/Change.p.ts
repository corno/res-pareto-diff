
export type TChange = {
    readonly "count"?: number
    /**
     * Text content.
     */
    readonly "value": string
    /**
     * `true` if the value was inserted into the new string.
     */
    readonly "added"?: boolean
    /**
     * `true` if the value was removed from the old string.
     */
    readonly "removed"?: boolean
}