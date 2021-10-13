__NUXT_JSONP__("/docs/directory-structure/modules", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au){return {data:[{page:{key:"content:3.docs:2.directory-structure:8.modules.md",generatedAt:new Date(1634130497282),mtime:new Date(1634130497269),slug:X,title:X,position:"000300020008",to:"\u002Fdocs\u002Fdirectory-structure\u002Fmodules",draft:A,page:B,language:"en",icon:"IconDirectory",head:{title:Y},empty:A,description:"Nuxt has a powerful modules engine.",excerpt:Z,body:{raw:"---\nicon: IconDirectory\ntitle: 'modules'\nhead.title: Local modules directory\n---\n\n# Local modules directory\n\nNuxt has a powerful [modules engine](\u002Fconcepts\u002Fmodules).\n\n# Creating Modules\n\nNuxt provides helper functions (accessed from `@nuxt\u002Fkit`) to assist in creating modules that can run on both Nuxt 2 and Nuxt 3.\n\n```js\nimport { defineNuxtModule } from '@nuxt\u002Fkit'\n\nexport default defineNuxtModule({\n  \u002F\u002F The npm package name of your module\n  name: '@nuxtjs\u002Fsample-module',\n  \u002F\u002F The key in `nuxt.config` that holds your module options\n  configKey: 'sample',\n  \u002F\u002F Default configuration options for your module\n  defaults: {},\n  hooks: {},\n  setup (options, nuxt) {},\n})\n```\n\n## Module options\n\nNuxt will automatically merge the configuration provided to your module (whether passed directly inline or in a configuration section in `nuxt.config`) with the defaults you provide.\n\n```js\nexport default {\n  buildModules: [\n    ['@nuxtjs\u002Fsample-module', { sampleOption: true }]\n  ],\n  sample: {\n    anotherOption: 42\n  }\n}\n```\n\n## Hooks\n\nFor simple modules, you may be able to implement all you need simply with several hooks in this section.\n\n## Setup\n\nIf the `hooks` configuration is not enough, you can provide a full setup function, with access to `nuxt`. You will no longer have access to `this` as in the previous Nuxt module specification, but there are dedicated helper functions from `@nuxt\u002Fkit` to replace the module container methods from previously.\n\n```js\nimport { defineNuxtModule, addPlugin } from '@nuxt\u002Fkit'\n\nexport default defineNuxtModule({\n  \u002F\u002F ...\n  setup (options, nuxt) {\n    addPlugin({\n      src: path.resolve(__dirname, 'templates\u002Ffoo.js')\n    })\n  },\n})\n```\n\n## Advanced usage\n\nIn some cases you may need access to the Nuxt instance in order to define your module, for example, using other Nuxt options:\n\n```js\nimport { defineNuxtModule } from '@nuxt\u002Fkit'\n\nexport default defineNuxtModule(nuxt =\u003E ({\n  \u002F\u002F ...\n  defaults: {\n    root: nuxt.options.rootDir\n  },\n}))\n```\n\n## Module helpers\n\nA number of helpers are also provided for use within this context (with more coming - feature requests welcome) that ensure compatible behavior across Nuxt versions.\n\n* addTemplate\n* addErrorLayout\n* addLayout\n* addPlugin\n* addServerMiddleware\n* extendBuild\n* extendRoutes\n\nEach of these functions provides documentation via IDE hover\u002Fautocomplete.\n\n## Publishing to NPM\n",ast:{type:"root",children:[{type:b,tag:_,props:{class:"d-heading-title",id:"local-modules-directory"},children:[{type:a,value:Y}]},{type:a,value:f},{type:b,tag:p,props:{class:"d-heading-description"},children:[{type:a,value:"Nuxt has a powerful "},{type:b,tag:q,props:{href:"\u002Fconcepts\u002Fmodules"},children:[{type:a,value:"modules engine"}]},{type:a,value:C}]},{type:a,value:f},{type:b,tag:_,props:{id:"creating-modules"},children:[{type:b,tag:q,props:{href:"#creating-modules"},children:[{type:a,value:"Creating Modules"}]}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Nuxt provides helper functions (accessed from "},{type:b,tag:x,props:{},children:[{type:a,value:$}]},{type:a,value:") to assist in creating modules that can run on both Nuxt 2 and Nuxt 3."}]},{type:a,value:f},{type:b,tag:D,props:{},children:[{type:b,tag:E,props:{className:[F,G]},children:[{type:b,tag:H,props:{},children:[{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,M]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:O}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:I}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F The npm package name of your module"}]},{type:a,value:"\n  name"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F The key in `nuxt.config` that holds your module options"}]},{type:a,value:"\n  configKey"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"'sample'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F Default configuration options for your module"}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n  hooks"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:K}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:y,props:{id:ad},children:[{type:b,tag:q,props:{href:"#module-options"},children:[{type:a,value:ae}]}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Nuxt will automatically merge the configuration provided to your module (whether passed directly inline or in a configuration section in "},{type:b,tag:x,props:{},children:[{type:a,value:"nuxt.config"}]},{type:a,value:") with the defaults you provide."}]},{type:a,value:f},{type:b,tag:D,props:{},children:[{type:b,tag:E,props:{className:[F,G]},children:[{type:b,tag:H,props:{},children:[{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:I}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"\n  buildModules"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:" sampleOption"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:"true"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n  sample"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"\n    anotherOption"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"42"}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:y,props:{id:V},children:[{type:b,tag:q,props:{href:"#hooks"},children:[{type:a,value:ah}]}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"For simple modules, you may be able to implement all you need simply with several hooks in this section."}]},{type:a,value:f},{type:b,tag:y,props:{id:K},children:[{type:b,tag:q,props:{href:"#setup"},children:[{type:a,value:ai}]}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"If the "},{type:b,tag:x,props:{},children:[{type:a,value:V}]},{type:a,value:" configuration is not enough, you can provide a full setup function, with access to "},{type:b,tag:x,props:{},children:[{type:a,value:aj}]},{type:a,value:". You will no longer have access to "},{type:b,tag:x,props:{},children:[{type:a,value:"this"}]},{type:a,value:" as in the previous Nuxt module specification, but there are dedicated helper functions from "},{type:b,tag:x,props:{},children:[{type:a,value:$}]},{type:a,value:" to replace the module container methods from previously."}]},{type:a,value:f},{type:b,tag:D,props:{},children:[{type:b,tag:E,props:{className:[F,G]},children:[{type:b,tag:H,props:{},children:[{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,M]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:" defineNuxtModule"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:" addPlugin "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:O}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:I}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:ak}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:K}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"\n      src"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:o}]},{type:a,value:" path"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,"method",v,W]},children:[{type:a,value:"resolve"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"__dirname"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"'templates\u002Ffoo.js'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:y,props:{id:am},children:[{type:b,tag:q,props:{href:"#advanced-usage"},children:[{type:a,value:an}]}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"In some cases you may need access to the Nuxt instance in order to define your module, for example, using other Nuxt options:"}]},{type:a,value:f},{type:b,tag:D,props:{},children:[{type:b,tag:E,props:{className:[F,G]},children:[{type:b,tag:H,props:{},children:[{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:L}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,M]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:O}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:I}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j,k]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:aj}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"arrow",m]},children:[{type:a,value:"=\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:ak}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"\n    root"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:o}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:"rootDir"}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:y,props:{id:ao},children:[{type:b,tag:q,props:{href:"#module-helpers"},children:[{type:a,value:ap}]}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"A number of helpers are also provided for use within this context (with more coming - feature requests welcome) that ensure compatible behavior across Nuxt versions."}]},{type:a,value:f},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:f},{type:a,value:"addTemplate"},{type:a,value:f}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:f},{type:a,value:"addErrorLayout"},{type:a,value:f}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:f},{type:a,value:"addLayout"},{type:a,value:f}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:f},{type:a,value:al},{type:a,value:f}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:f},{type:a,value:"addServerMiddleware"},{type:a,value:f}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:f},{type:a,value:"extendBuild"},{type:a,value:f}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:f},{type:a,value:"extendRoutes"},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"Each of these functions provides documentation via IDE hover\u002Fautocomplete."}]},{type:a,value:f},{type:b,tag:y,props:{id:aq},children:[{type:b,tag:q,props:{href:"#publishing-to-npm"},children:[{type:a,value:ar}]}]}]},toc:{title:as,searchDepth:t,depth:t,links:[{id:ad,depth:t,text:ae},{id:V,depth:t,text:ah},{id:K,depth:t,text:ai},{id:am,depth:t,text:an},{id:ao,depth:t,text:ap},{id:aq,depth:t,text:ar}]}},template:"Docs"},templateOptions:{header:B,footer:B,aside:B,asideClass:as,fluid:A,banner:A},_img:{}}],fetch:{"0":{headerLinks:[{title:"开始",to:"\u002Fgetting-started\u002Fintroduction"},{title:"概念",to:"\u002Fconcepts\u002Fintroduction"},{title:"文档",to:"\u002Fdocs\u002Fusage\u002Fdata-fetching"},{title:"社区",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework",prev:{slug:at,to:"\u002Fdocs\u002Fdirectory-structure\u002Fnode_modules",title:at},next:{slug:au,to:"\u002Fdocs\u002Fdirectory-structure\u002Fpages",title:au}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","Alert","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","ProseEm","CodeGroup","ProseH4"])},mutations:Z}}("text","element","span","token","punctuation","\n"," ","{","}","keyword","module",",","operator","\n  ",":","prose-paragraph","prose-a","(",")",2,"string","function","prose-li","prose-code-inline","prose-h2","comment",false,true,".","prose-code","pre","language-js","line-numbers","code","export","default","setup","import","imports","from","'@nuxt\u002Fkit'","\n\n","defineNuxtModule","parameter","options"," nuxt","\n    ","hooks","property-access","modules","Local modules directory",void 0,"prose-h1","@nuxt\u002Fkit"," defineNuxtModule ","'@nuxtjs\u002Fsample-module'","\n  defaults","module-options","Module options","[","]","Hooks","Setup","nuxt","\u002F\u002F ...","addPlugin","advanced-usage","Advanced usage","module-helpers","Module helpers","publishing-to-npm","Publishing to NPM","","node_modules","pages")));