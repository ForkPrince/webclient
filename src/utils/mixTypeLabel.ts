import { useT } from '@/i18n'

const { t, te } = useT()

export default function mixTypeLabel(type: string) {
    const key = `Mixes.Types.${type}`
    return t('Mixes.TypeLabel', { type: te(key) ? t(key) : type })
}
