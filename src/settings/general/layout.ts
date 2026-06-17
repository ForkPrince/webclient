import { SettingType } from "../enums";
import { Setting } from "@/interfaces/settings";

import useSettingsStore from "@/stores/settings";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

const settings = useSettingsStore;

const use_alt_layout: Setting = {
  title: t("Settings.General.UseNoSidebarTitle"),
  type: SettingType.binary,
  state: () => settings().is_alt_layout,
  action: () => settings().toggleLayout(),
  new: true,
};

export default [use_alt_layout];
