import lhCard from './src/card.vue';

lhCard.install = function(Vue) {
  Vue.component(lhCard.name, lhCard);
}

export default lhCard;