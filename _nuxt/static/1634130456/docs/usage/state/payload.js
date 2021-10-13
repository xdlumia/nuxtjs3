__NUXT_JSONP__("/docs/usage/state", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_){return {data:[{page:{key:"content:3.docs:1.usage:2.state.md",generatedAt:new Date(1634130496153),mtime:new Date(1634130496124),slug:D,title:E,position:"000300010002",to:"\u002Fdocs\u002Fusage\u002Fstate",draft:p,page:q,language:"en",empty:p,description:"Nuxt provides useState to create a globally shared state.",excerpt:F,body:{raw:"# State\n\nNuxt provides `useState` to create a globally shared state.\n\n## `useState`\n\nWithin your pages, components and plugins you can use `useState`. It can be used to create your own store implementation.\n\nYou can think of it as an SSR-friendly ref in that its value will be hydrated (preserved) after server-side rendering. It is shared across all components.\n\n\n### Usage\n\n```js\nuseState(key: string)\n```\n\n* **key**: a unique key to ensure that data fetching can be properly de-duplicated across requests\n\n### Example\n\nIn this example, we use a server-only plugin to find about request locale.\n\n```ts [plugins\u002Flocale.server.ts]\nimport { defineNuxtPlugin, useState } from '#app'\n\nexport default defineNuxtPlugin((nuxt) =\u003E {\n  const locale = useState('locale')\n  locale.value = nuxt.ssrContext.req.headers['accept-language']?.split(',')[0]\n})\n```\n\n```vue\n\u003Cscript setup\u003E\nconst locale = useState('locale')\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  Current locale: {{ locale }}\n\u003C\u002Ftemplate\u003E\n```\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:D},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:r,props:{class:"d-heading-description"},children:[{type:a,value:"Nuxt provides "},{type:b,tag:u,props:{},children:[{type:a,value:i}]},{type:a,value:" to create a globally shared state."}]},{type:a,value:f},{type:b,tag:"prose-h2",props:{id:G},children:[{type:b,tag:v,props:{href:"#usestate"},children:[{type:b,tag:u,props:{},children:[{type:a,value:i}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"Within your pages, components and plugins you can use "},{type:b,tag:u,props:{},children:[{type:a,value:i}]},{type:a,value:". It can be used to create your own store implementation."}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"You can think of it as an SSR-friendly ref in that its value will be hydrated (preserved) after server-side rendering. It is shared across all components."}]},{type:a,value:f},{type:b,tag:H,props:{id:I},children:[{type:b,tag:v,props:{href:"#usage"},children:[{type:a,value:J}]}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:b,tag:x,props:{className:[y,"language-js"]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:":"}]},{type:a,value:" string"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"prose-ul",props:{},children:[{type:a,value:f},{type:b,tag:"prose-li",props:{},children:[{type:a,value:f},{type:b,tag:"prose-strong",props:{},children:[{type:a,value:K}]},{type:a,value:": a unique key to ensure that data fetching can be properly de-duplicated across requests"},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:H,props:{id:L},children:[{type:b,tag:v,props:{href:"#example"},children:[{type:a,value:M}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"In this example, we use a server-only plugin to find about request locale."}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:["filename"]},children:[{type:a,value:"plugins\u002Flocale.server.ts"}]},{type:b,tag:x,props:{className:[y,"language-ts"]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"import"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:" defineNuxtPlugin"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:","}]},{type:a,value:" useState "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"from"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'#app'"}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"export"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"defineNuxtPlugin"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"nuxt"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"=\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:Q}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n  locale"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"value "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:" nuxt"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"ssrContext"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"req"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"headers"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'accept-language'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"?."}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"split"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"','"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"0"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:b,tag:x,props:{className:[y,"language-html"]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:B}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"attr-name"]},children:[{type:a,value:"setup"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:Q}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:"\n  Current locale: {{ locale }}\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:f}]}]}]}]},toc:{title:Y,searchDepth:C,depth:C,links:[{id:G,depth:C,text:i,children:[{id:I,depth:Z,text:J},{id:L,depth:Z,text:M}]}]}},template:"Docs"},templateOptions:{header:q,footer:q,aside:q,asideClass:Y,fluid:p,banner:p},_img:{}}],fetch:{"0":{headerLinks:[{title:"开始",to:"\u002Fgetting-started\u002Fintroduction"},{title:"概念",to:"\u002Fconcepts\u002Fintroduction"},{title:"文档",to:_},{title:"社区",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework",prev:{slug:"data-fetching",to:_,title:"Data Fetching"},next:{slug:"meta-tags",to:"\u002Fdocs\u002Fusage\u002Fmeta-tags",title:"Meta Tags"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","Alert","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","ProseEm","CodeGroup","ProseH4"])},mutations:F}}("text","element","span","token","punctuation","\n"," ","tag","useState","(","operator",")","keyword","function","string",false,true,"prose-paragraph",".","\u003E","prose-code-inline","prose-a","prose-code","pre","line-numbers","code","=","script",2,"state","State",void 0,"usestate","prose-h3","usage","Usage","key","example","Example","{","}","\n\n","const"," locale ","'locale'","[","]","\u003C","\u003C\u002F","template","",3,"\u002Fdocs\u002Fusage\u002Fdata-fetching")));