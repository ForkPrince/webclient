import { useT } from "@/i18n";
import { Option } from "../interfaces";

const { t } = useT();

export default async () => {
  const deletePlaylist: Option = {
    label: t('Menus.PlayList.RemoveFromPlaylist'),
    critical: true,
    action: () => {
      console.log("delete playlist");
    },
  };

  const playNext: Option = {
    label: t('Menus.Common.PlayNext'),
    action: () => {
      console.log("play next");
    },
  };

  const addToQueue: Option = {
    label: t('Menus.Common.AddToQueue'),
    action: () => {
      console.log("add to queue");
    },
  };


  return [playNext, addToQueue, deletePlaylist];
};
