import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseCard from './components/ui/BaseCard.vue';


const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);


app.mount('#app');
