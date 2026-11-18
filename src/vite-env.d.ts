/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PROD: boolean;
  // добавь другие переменные окружения, если используешь
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.svg?url' {
  const src: string;
  export default src;
}

declare module '*.css' {
  const css: string;
  export default css;
}
