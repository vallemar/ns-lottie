import { createApp } from 'nativescript-vue';
import Home from './components/Home.vue';
import LottieView from '@nativescript-community/ui-lottie/vue';

createApp(Home).use(LottieView).start();
