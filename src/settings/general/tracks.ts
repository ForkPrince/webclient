import { Setting } from "@/interfaces/settings";
import { SettingType } from "../enums";
import { useI18n } from "vue-i18n";

import useSettingsStore from "@/stores/settings";

const settings = useSettingsStore;
const { t } = useI18n();

const process_featured_artists: Setting = {
  title: t("Settings.General.Tracks.ProcessFeatArtists.Title"),
  desc: t("Settings.General.Tracks.ProcessFeatArtists.Description"),
  type: SettingType.binary,
  state: () => settings().feat,
  action: () => settings().toggleExtractFeaturedArtists(),
};

const remove_prod_by: Setting = {
  title: t("Settings.General.Tracks.RemoveProd.Title"),
  desc: t("Settings.General.Tracks.RemoveProd.Description"),
  type: SettingType.binary,
  state: () => settings().prodby,
  action: () => settings().toggleRemoveProdBy(),
};

const remove_remaster_info_from_titles: Setting = {
  title: t("Settings.General.Tracks.HideRemaster.Title"),
  desc: t("Settings.General.Tracks.HideRemaster.Description"),
  type: SettingType.binary,
  state: () => settings().hide_remaster,
  action: () => settings().toggleRemoveRemasterInfo(),
};

export default [
  process_featured_artists,
  remove_remaster_info_from_titles,
  remove_prod_by,
];
