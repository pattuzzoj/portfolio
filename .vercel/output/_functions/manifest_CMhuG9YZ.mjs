import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_1mv0en1U.mjs';
import 'clsx';
import 'cookie';
import './chunks/astro-designed-error-pages_Cvb7UTS2.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_Ab8-IBJx.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///run/media/reiden/9e7c9add-c823-456b-a164-c5b1810645ee/GitHub/portfolio/","cacheDir":"file:///run/media/reiden/9e7c9add-c823-456b-a164-c5b1810645ee/GitHub/portfolio/node_modules/.astro/","outDir":"file:///run/media/reiden/9e7c9add-c823-456b-a164-c5b1810645ee/GitHub/portfolio/dist/","srcDir":"file:///run/media/reiden/9e7c9add-c823-456b-a164-c5b1810645ee/GitHub/portfolio/src/","publicDir":"file:///run/media/reiden/9e7c9add-c823-456b-a164-c5b1810645ee/GitHub/portfolio/public/","buildClientDir":"file:///run/media/reiden/9e7c9add-c823-456b-a164-c5b1810645ee/GitHub/portfolio/dist/client/","buildServerDir":"file:///run/media/reiden/9e7c9add-c823-456b-a164-c5b1810645ee/GitHub/portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BWMY-pWE.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BWMY-pWE.js"}],"styles":[],"routeData":{"route":"/api/mail","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/mail\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"mail","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/mail.ts","pathname":"/api/mail","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BWMY-pWE.js"}],"styles":[{"type":"external","src":"/_astro/index.Ctuq_eb2.css"}],"routeData":{"route":"/[...locale]","isIndex":true,"type":"page","pattern":"^(?:\\/(.*?))?\\/?$","segments":[[{"content":"...locale","dynamic":true,"spread":true}]],"params":["...locale"],"component":"src/pages/[...locale]/index.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/run/media/reiden/9e7c9add-c823-456b-a164-c5b1810645ee/GitHub/portfolio/src/pages/[...locale]/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/mail@_@ts":"pages/api/mail.astro.mjs","\u0000@astro-page:src/pages/[...locale]/index@_@astro":"pages/_---locale_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CMhuG9YZ.mjs","/run/media/reiden/9e7c9add-c823-456b-a164-c5b1810645ee/GitHub/portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Cs8PUEbl.mjs","astro:scripts/before-hydration.js":"_astro/astro_scripts/before-hydration.js.vWdOuO7o.js","@/components/view/sections/techs-menu":"_astro/techs-menu.D4bli6F9.js","@/components/form/contact-form":"_astro/contact-form.BUPRRugn.js","/run/media/reiden/9e7c9add-c823-456b-a164-c5b1810645ee/GitHub/portfolio/src/components/view/layout/header/header-menu":"_astro/header-menu.CIWsO2Ta.js","@astrojs/react/client.js":"_astro/client.BSW-q53I.js","astro:scripts/page.js":"_astro/page.BWMY-pWE.js"},"inlinedScripts":[],"assets":["/_astro/utilify-banner.mZu-7DQe.png","/_astro/nexonutilis-banner.CHlzHvmC.png","/_astro/futuresphere-banner.BmB3Kq7i.png","/_astro/Astro.BOpUnv27.svg","/_astro/Next.js.BuoGixA6.svg","/_astro/React.B6gX_Z1C.svg","/_astro/Solid.js.Cn-EKKYK.svg","/_astro/Tailwind CSS.yi89aTvW.svg","/_astro/Nest.js.CqtQUMwo.svg","/_astro/Express.CZGa2e71.svg","/_astro/Node.js.BV17mpJ3.svg","/_astro/Prisma.BsNF1hi3.svg","/_astro/Drizzle.ByHLBRTj.svg","/_astro/PostgresSQL.CTql7Pj9.svg","/_astro/MongoDB.Dijo5B3J.svg","/_astro/Vitest.muT1XVaK.svg","/_astro/Jest.DZE6pk1K.svg","/_astro/Git.MuB8pIFs.svg","/_astro/Docker.DLqjD3tf.svg","/_astro/Deno.Durn6P-r.svg","/_astro/GitHub.BfaWu_BC.svg","/_astro/linkedin.OCCInbJ7.svg","/_astro/index.Ctuq_eb2.css","/curriculo.pdf","/favicon.png","/_astro/_commonjsHelpers.Cpj98o6Y.js","/_astro/browser-ponyfill.xVbE57sO.js","/_astro/client.BSW-q53I.js","/_astro/contact-form.BUPRRugn.js","/_astro/createLucideIcon.CCrL0o7t.js","/_astro/header-menu.CIWsO2Ta.js","/_astro/i18nInstance.DBIXdvxg.js","/_astro/i18next.BcVHTCAN.js","/_astro/i18nextBrowserLanguageDetector.BiOax0Ew.js","/_astro/index.CYADgoF0.js","/_astro/index.kbYAAwe0.js","/_astro/jsx-runtime.BIhoC9-i.js","/_astro/page.BWMY-pWE.js","/_astro/techs-menu.D4bli6F9.js","/_astro/types.C5pYuFRO.js","/_astro/use-presence-context.DevDGfiw.js","/_astro/astro_scripts/before-hydration.js.vWdOuO7o.js","/locales/en/common.json","/locales/en/home.json","/locales/pt/common.json","/locales/pt/home.json","/_astro/page.BWMY-pWE.js"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["en","pt"],"defaultLocale":"pt","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"9G6rJu+yKVF/B2O0ZdxPocn2ODnIg/hgB7VJ1ekEHho="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
