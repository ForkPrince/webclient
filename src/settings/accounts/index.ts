import { loggedInUserIsAdmin } from '../utils'

import { SettingCategory } from '@/interfaces/settings'
import AvatarSvg from '@/assets/icons/avatar.svg?raw'
import { SettingType } from '../enums'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

export default <SettingCategory>{
    show_if: loggedInUserIsAdmin,
    groups: [
        {
            title: t("Settings.Accounts.Title"),
            icon: AvatarSvg,
            settings: [
                {
                    type: SettingType.accounts,
                },
            ],
        },
    ],
}
