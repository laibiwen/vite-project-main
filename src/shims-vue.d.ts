// shims-vue.d.ts
// Cannot find module '@/components/Header.vue' or its corresponding type declarations.
declare module "*.vue" {
  import { ComponentOptions } from "vue";
  const ComponentOptions: ComponentOptions;
  export default ComponentOptions;
}
