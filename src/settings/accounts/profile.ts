import { useI18n } from 'vue-i18n'

import { SettingCategory } from '@/interfaces/settings'
import { SettingType } from '../enums'

const { t } = useI18n()

export default <SettingCategory>{
    groups: [
        {
            title: t('Settings.Profile.Title'),
            desc: t('Settings.Profile.Desc'),
            settings: [
                {
                    type: SettingType.profile,
                },
            ],
        },
    ],
}
