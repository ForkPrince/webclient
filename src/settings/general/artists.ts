import { Setting } from '@/interfaces/settings'
import { SettingType } from '../enums'

import useSettingsStore from '@/stores/settings'
import { updateConfig } from '@/requests/settings'
import { useT } from '@/i18n'

const { t } = useT()

const separators = <Setting>{
    title: t('Settings.General.Artists.SeparatorTitle'),
    desc: t('Settings.General.Artists.SeparatorDesc'),
    state: () => {
        const store = useSettingsStore()

        const root_dirs_set = store.root_dirs.length > 0

        if (root_dirs_set) {
            return store.separators
        }

        return []
    },
    action: async (payload: string) => {
        if (!payload) return

        const { status } = await updateConfig('artistSeparators', payload)

        if (status == 200) {
            useSettingsStore().setArtistSeparators(payload.split(','))
        }

        return true
    },
    type: SettingType.separators_input,
}

const articleAwareSorting = <Setting>{
    title: t('Settings.General.Artists.ArticleAwareTitle'),
    desc: t('Settings.General.Artists.ArticleAwareDesc'),
    type: SettingType.binary,
    state: () => useSettingsStore().article_aware_sorting,
    action: () => useSettingsStore().toggleArticleAwareSorting(),
}

export default [articleAwareSorting, separators]
