/**
 * Formats a timestamp into a date string of the locale format 
 * requested by the user.
 * @returns formatted date
 */

import { locale } from "@/i18n"

export function formatDate(timestamp: number, yearOnly = false) {
    // format date as Month day, year
    const date = new Date(timestamp * 1000)

    const options = { year: 'numeric', month: 'long', day: 'numeric' }

    if (yearOnly) {
        return date.getFullYear()
    }

    // Replace _ to - in order to make them BCP47/RCF5646 compliant language tags.
    return date.toLocaleDateString(locale.replace('_', '-'), options)
}
