<template>
  <div class="right-search">
    <TabsWrapper :tabs="tabs" :current-tab="currentTab" :tab-content="true" @switchTab="switchTab">
      <!-- TODO: The code relies on the tabs names, so it can't be translated yet. -->
      <!-- <Tab :name=t(resolveTab(currentTab)) /> -->
      <Tab :name=currentTab />
    </TabsWrapper>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import useSearchStore from "@/stores/search";
import Tab from "./Tab.vue";
import TabsWrapper from "./TabsWrapper.vue";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

const search = useSearchStore();

const tabs = ["top", "tracks", "albums", "artists"];

const currentTab = ref("top");

function switchTab(tab: string) {
  currentTab.value = tab;
  search.switchTab(tab);
}

function resolveTab(tab: string): string {
  switch (tab) {
    case 'top':
      return 'TabNames.top';
    case 'tracks':
      return 'TabNames.tracks';
    case 'albums':
      return 'TabNames.albums';
    case 'artists':
      return 'TabNames.artists';
    default:
      return 'TabNames.unknown';
  }
}
</script>

<style lang="scss">
.right-search {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: max-content 1fr;

  .tabheaders {
    padding: 1rem;
    max-width: 100%;
    overflow: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  }

  .input {
    display: flex;
    align-items: center;
    position: relative;
  }
}
</style>
