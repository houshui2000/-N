/// <reference types="vite/client" />
// typescript-test global.d.ts


declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}



// 环境变量 TypeScript的智能提示
interface ImportMetaEnv {
  VITE_APP_API_URL: string;
  VITE_APP_MOBLIC_URL: string;
  VITE_APP_PC_URL: string;
  VITE_APP_KEYWORDS: string;
  globEager: any;
  VITE_APP_DESCRIPTION: string;
  VITE_APP_TITLE: string;
  VITE_PORT: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
