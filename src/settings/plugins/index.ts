import { useI18n } from 'vue-i18n'

import lyrics from './lyrics'
import lastfm from './lastfm'
import { loggedInUserIsAdmin } from '../utils'
import { SettingCategory } from '@/interfaces/settings'

import LyricsSvg from '@/assets/icons/lyrics.svg?raw'
import LastfmSvg from '@/assets/icons/lastfm.svg?raw'

const { t } = useI18n()

export default <SettingCategory>{
    title: t("Common.Plugins"),
    show_if: loggedInUserIsAdmin,
    groups: [
        {
            title: t("Common.Lyrics"),
            icon: LyricsSvg,
            desc: t("Settings.Plugins.LyricsDescription"),
            settings: lyrics,
            experimental: true,
        },
        {
            title: t("Settings.Plugins.LastFM.Title"),
            icon: LastfmSvg,
            desc: t('Settings.Plugins.LastFM.Description'),
            settings: lastfm,
        },
    ],
}
