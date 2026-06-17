import { SettingType } from "../enums";
import { Setting } from "@/interfaces/settings";

import { isSmallPhone } from "@/stores/content-width";

import useSettingsStore from "@/stores/settings";

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const settings = useSettingsStore;

export default <Setting>{
  title: t("Settings.General.CircularArtist.Title"),
  desc: t("Settings.General.CircularArtist.Description"),
  type: SettingType.binary,
  state: () => settings().useCircularArtistImg,
  action: () => settings().toggleUseCircularArtistImg(),
  inactive: () => isSmallPhone.value,
  show_if: () => !isSmallPhone.value,
};
