import {useDebugPlugin} from "vue-json-debug/src/plugin";
import RouterInfo from "vue-json-debug/src/docks/RouterInfo.vue";
import ScreenSize from "vue-json-debug/src/docks/ScreenSize.vue";

export default defineNuxtPlugin((nuxtApp) => {
    const app = nuxtApp.vueApp;

    useDebugPlugin(app, {
        registerDebugComponent: true,
        components: {
            after: {RouterInfo, ScreenSize},
        }
    });
});
