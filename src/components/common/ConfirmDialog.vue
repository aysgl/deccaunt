<template>
  <v-dialog v-model="props.isOpen" max-width="500">
    <v-card class="text-center">
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn size="small" icon @click="closeDialog">
          <IconX />
        </v-btn>
      </v-card-actions>
      <div>
        <IconRosetteDiscountCheck
          size="100"
          color="rgb(var(--v-theme-primary))"
        />
      </div>
      <v-card-title class="pb-0">
        <span class="font-weight-bold">Succesfully</span>
      </v-card-title>
      <v-card-text class="mb-10">
        The form has been sent successfully and you will be contacted as soon as
        possible.
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { IconRosetteDiscountCheck, IconX } from "@tabler/icons-vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const closeDialog = () => {
  emit("close");
};
</script>
