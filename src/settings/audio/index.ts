import { SettingCategory } from "@/interfaces/settings";
import gapless from "./groups";

import VolumeSvg from "@/assets/icons/volume-mid.svg?raw"

import { useI18n } from "vue-i18n";

const { t } = useI18n();

export default {
  title: t("Settings.Audio.Title"),
  groups: [
    {
      title: t("Settings.Audio.Playback"),
      icon: VolumeSvg,
      desc: t("Settings.Audio.PlaybackDesc"),
      settings: [...gapless],
    },
  ],
} as SettingCategory;
