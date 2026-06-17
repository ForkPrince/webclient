import { SettingType } from "../enums";
import { Setting } from "@/interfaces/settings";

import useSettings from "@/stores/settings";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

const settings = useSettings;

const folder_list_mode: Setting = {
  title: t("Settings.General.FolderListMode.Title"),
  type: SettingType.binary,
  state: () => settings().folder_list_mode,
  action: () => settings().toggleFolderListMode(),
};

export default [folder_list_mode];
