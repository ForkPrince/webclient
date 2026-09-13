import { SettingType } from '../enums'
import { SettingCategory } from '@/interfaces/settings'
import { useT } from '@/i18n'

import KeySvg from '@/assets/icons/key.svg?raw'
import InfoSvg from '@/assets/icons/info.svg?raw'

const { t } = useT()

export default <SettingCategory>{
    groups: [
        {
            id: 'license',
            title: t('Settings.About.LicenseTitle'),
            desc: t('Settings.About.LicenseDesc'),
            displayName: t('Settings.About.LicenseDisplayName'),
            icon: KeySvg,
            settings: [
                {
                    type: SettingType.license,
                },
            ],
        },
        {
            id: 'about',
            title: t("Settings.About.Title"),
            icon: InfoSvg,
            settings: [
                {
                    type: SettingType.about,
                },
            ],
        },
    ],
}
