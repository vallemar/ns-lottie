<script lang="ts" setup>
import { ref, $navigateBack } from 'nativescript-vue';

const items = ref(
  Array(1000)
    .fill(0)
    .map((_, index) => `Item ${index + 1}`),
);
</script>

<template>
  <Page actionBarHidden="true">
    <GridLayout rows="auto, auto, auto, *" class="p-3 ">

    <FlexboxLayout row="1" class="items-center mt-8">
        <Label text="asdf" class="text-2xl font-bold"></Label>
        <LottieView height="200" src="~/assets/pulse.json" :loop="true" :autoPlay="true"></LottieView>
      </FlexboxLayout>


    </GridLayout>
  </Page>
</template>
