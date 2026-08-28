import lyrics from './lyrics'
import lastfm from './lastfm'
import listenbrainz from './listenbrainz'
import { loggedInUserIsAdmin } from '../utils'
import { SettingCategory } from '@/interfaces/settings'

import LyricsSvg from '@/assets/icons/lyrics.svg?raw'
import LastfmSvg from '@/assets/icons/lastfm.svg?raw'
import ListenBrainzSvg from '@/assets/icons/listenbrainz.svg?raw'

export default <SettingCategory>{
    title: 'Plugins',
    groups: [
        {
            title: 'Lyrics',
            icon: LyricsSvg,
            desc: 'Finds and displays lyrics from the internet.',
            settings: lyrics,
            experimental: true,
            show_if: loggedInUserIsAdmin,
        },
        {
            title: 'Last.fm',
            icon: LastfmSvg,
            desc: 'Scrobble your music to Last.fm',
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
