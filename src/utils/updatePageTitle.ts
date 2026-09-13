import { useT } from '@/i18n'
import useSettings from '@/stores/settings'

const { t } = useT()

export default (title: string, isNowPlayingInfo: boolean = false) => {
    const settings = useSettings()
    if (settings.nowPlayingTrackOnTabTitle && !isNowPlayingInfo) {
        return
    }

    const base = t('Common.AppTitle')

    if (title) {
        document.title = `${title} | ${base}`
    } else {
        document.title = base
    }
}
