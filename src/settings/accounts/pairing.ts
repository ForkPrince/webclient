import { useI18n } from 'vue-i18n'

import { SettingType } from '../enums'
import AvatarSvg from '@/assets/icons/phone.svg?raw'
import { SettingCategory } from '@/interfaces/settings'

const { t } = useI18n()

export default <SettingCategory>{
    groups: [
        {
            title: t("Settings.Pairing.Title"),
            desc: t("Settings.Accounts.Desc"),
            icon: AvatarSvg,
            settings: [
                {
                    type: SettingType.pairing,
                },
            ],
        },
    ],
}
