<template>
  <div class="settingsnav">
    <button @click="resetClient">
      &nbsp;&nbsp; {{t('Nav.ResetClient')}} &nbsp;&nbsp;
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

const router = useRouter();

const resetClient = () => {
  localStorage.clear();
  router.go(0);
};
</script>
