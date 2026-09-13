import lyrics from './lyrics'
import lastfm from './lastfm'
import listenbrainz from './listenbrainz'
import { loggedInUserIsAdmin } from '../utils'
import { SettingCategory } from '@/interfaces/settings'

import LyricsSvg from '@/assets/icons/lyrics.svg?raw'
import LastfmSvg from '@/assets/icons/lastfm.svg?raw'
import ListenBrainzSvg from '@/assets/icons/listenbrainz.svg?raw'
import { useT } from '@/i18n'

const { t } = useT()

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
            show_if: loggedInUserIsAdmin,
        },
        {
            title: t("Settings.Plugins.LastFM.Title"),
            icon: LastfmSvg,
            desc: t('Settings.Plugins.LastFM.Description'),
            settings: lastfm,
        },
        {
            title: 'ListenBrainz',
            icon: ListenBrainzSvg,
            desc: 'Scrobble your music to ListenBrainz (self-hosted supported)',
            settings: listenbrainz,
        },
    ],
}
