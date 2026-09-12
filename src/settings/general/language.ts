import { Setting } from '@/interfaces/settings'
import { SettingType } from '@/settings/enums'
import useSettingsStore from '@/stores/settings'
import { supportedLocales, useT } from '@/i18n'

const { t, locale } = useT()
const settings = useSettingsStore

const options = supportedLocales.map(key => ({ key, title: t(`Languages.${key}`) }))

const language: Setting = {
    title: t('Settings.General.Language.Title'),
    type: SettingType.dropdown,
    options: options as any,
    state: () => options.find(option => option.key === locale.value) ?? options[0],
    action: (item: { key: string; title: string }) => {
        if (item.key === locale.value) return

        settings().setLocale(item.key)
        window.location.reload()
    },
    defaultAction: () => {},
}

export default [language]
