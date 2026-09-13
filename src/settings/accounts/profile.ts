import { SettingCategory } from '@/interfaces/settings'
import { SettingType } from '../enums'
import { useT } from '@/i18n'

const { t } = useT()

export default <SettingCategory>{
    groups: [
        {
            id: 'profile',
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
