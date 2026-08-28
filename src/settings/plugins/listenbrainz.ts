import useSettings from '@/stores/settings'
import { Setting } from '@/interfaces/settings'
import { SettingType } from '../enums'

const token = <Setting>{
    title: 'ListenBrainz Token',
    desc: 'Paste your user token from listenbrainz.org/profile (API token). Scrobbles are sent automatically.',
    type: SettingType.secretinput,
    state: () => useSettings().listenbrainz_token,
    action: (value: string) => {
        if (!value) return
        return useSettings().saveListenBrainzToken(value)
    },
}

const baseUrl = <Setting>{
    title: 'Custom API URL',
    desc: 'Leave empty for api.listenbrainz.org. For self-hosted/Maloja use e.g. https://your-instance/api',
    type: SettingType.secretinput,
    state: () => useSettings().listenbrainz_base_url,
    action: (value: string) => {
        return useSettings().setListenBrainzBaseUrl(value)
    },
}

const statusButton = <Setting>{
    title: 'Connection',
    desc: 'Check status or disconnect',
    type: SettingType.button,
    action: () => {
        const s = useSettings()
        if (s.listenbrainz_token) {
            return s.disconnectListenBrainz()
        }
        return s.checkListenBrainzStatus()
    },
    button_text: () => {
        const s = useSettings()
        if (s.listenbrainz_token) return 'Disconnect'
        return 'Check status'
    },
}

export default [token, baseUrl, statusButton]
