import {createPinia, Pinia} from 'pinia';

const pinia: Pinia = createPinia();

export function installPinia(vueApp): void {
    vueApp.use(pinia);
}