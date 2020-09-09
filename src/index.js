import WutaoArea from './WutaoArea.vue';

const components = [
  WutaoArea,
];

components.forEach((component) => {
  component.install = (Vue) => {
    Vue.component(component.name, component);
  }
})

export {
  WutaoArea,
}
