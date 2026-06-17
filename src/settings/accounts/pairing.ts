import { SettingType } from '../enums'
import AvatarSvg from '@/assets/icons/phone.svg?raw'
import { SettingCategory } from '@/interfaces/settings'
import { useT } from '@/i18n'

const { t } = useT()

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
