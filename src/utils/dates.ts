/**
 * Formats a timestamp into a date string of the locale format 
 * requested by the user.
 * @returns formatted date
 */

import { useT } from "@/i18n"

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

    // Intl expects BCP 47 tags (en-US), the locale ids use underscores (en_US).
    const locale = useT().locale.value.replace('_', '-')
    return date.toLocaleDateString(locale, options)
}
