/**
 * Formats a timestamp into a date string of the locale format 
 * requested by the user.
 * @returns formatted date
 */

import { locale } from "@/i18n"

export function formatDate(timestamp: number, yearOnly = false) {
    // format date as Month day, year
    const date = new Date(timestamp * 1000)

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
    }

    if (yearOnly) {
        return date.getUTCFullYear()
    }

    // Replace _ to - in order to make them BCP47/RCF5646 compliant language tags.
    return date.toLocaleDateString(locale.replace('_', '-'), options)
}
