import PicaArea from './PicaArea.vue';

const components = [
  PicaArea,
];

components.forEach((component) => {
  component.install = (Vue) => {
    Vue.component(component.name, component);
  }
})

export {
  PicaArea,
}
