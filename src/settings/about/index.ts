import { useI18n } from 'vue-i18n'

import { SettingType } from '../enums'
import { SettingCategory } from '@/interfaces/settings'

import KeySvg from '@/assets/icons/key.svg?raw'
import InfoSvg from '@/assets/icons/info.svg?raw'

const { t } = useI18n()

export default <SettingCategory>{
    groups: [
        {
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
