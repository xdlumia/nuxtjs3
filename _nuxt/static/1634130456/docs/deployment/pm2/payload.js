__NUXT_JSONP__("/docs/deployment/pm2", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q){return {data:[{page:{key:"content:3.docs:3.deployment:5.pm2.md",generatedAt:new Date(1634130498674),mtime:new Date(1634130498670),slug:n,title:C,position:"000300030005",to:"\u002Fdocs\u002Fdeployment\u002Fpm2",draft:o,page:p,language:"en",icon:"LogoPM2",empty:o,description:D,excerpt:E,body:{raw:"---\nicon: LogoPM2\n---\n\n# PM2\n\nHow to deploy Nuxt to a Node.js hosting using PM2.\n\n::list\n- Support for ultra-minimal SSR build\n- Zero millisecond cold start\n- More configuration required\n::\n\n## Setup\n\nMake sure another preset isn't set in `nuxt.config`.\n\n```ts [nuxt.config.js]\nexport default {\n  nitro: {\n    \u002F\u002F this is the default preset so you can also just omit it entirely\n    \u002F\u002F preset: 'server'\n  }\n}\n```\n\n## Deployment\n\nAfter running `yarn build`, all you need is in the `.output` folder. Static assets are in the `public` subdirectory and the server and its dependencies are within the `server` subdirectory.\n\nThis `.output` folder can be deployed to your Node.js host and the server can be run using [`pm2`](https:\u002F\u002Fpm2.keymetrics.io\u002Fdocs\u002F).\n\nTo start the server in production mode, run:\n\n```bash\nnode .output\u002Fserver\u002Findex.mjs\n```\n\nFor example, using `pm2`:\n\n```js [ecosystem.config.js]\nmodule.exports = {\n  apps: [\n    {\n      name: 'NuxtAppName',\n      exec_mode: 'cluster',\n      instances: 'max',\n      script: '.\u002F.output\u002Fserver\u002Findex.js'\n    }\n  ]\n}\n```\n\n## More information\n\nSee [more information on the server preset](\u002Fpresets\u002Fserver).\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:n},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:i,props:{class:"d-heading-description"},children:[{type:a,value:D}]},{type:a,value:e},{type:b,tag:"list",props:{},children:[{type:b,tag:"prose-ul",props:{},children:[{type:a,value:e},{type:b,tag:v,props:{},children:[{type:a,value:e},{type:a,value:"Support for ultra-minimal SSR build"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:a,value:e},{type:a,value:"Zero millisecond cold start"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:v,props:{},children:[{type:a,value:e},{type:a,value:"More configuration required"},{type:a,value:e}]},{type:a,value:e}]}]},{type:a,value:e},{type:b,tag:w,props:{id:F},children:[{type:b,tag:l,props:{href:"#setup"},children:[{type:a,value:G}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"Make sure another preset isn't set in "},{type:b,tag:h,props:{},children:[{type:a,value:"nuxt.config"}]},{type:a,value:q}]},{type:a,value:e},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[H]},children:[{type:a,value:"nuxt.config.js"}]},{type:b,tag:y,props:{className:[z,"language-ts"]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"export"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:"\n  nitro"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u002F\u002F this is the default preset so you can also just omit it entirely"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u002F\u002F preset: 'server'"}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:w,props:{id:L},children:[{type:b,tag:l,props:{href:"#deployment"},children:[{type:a,value:M}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"After running "},{type:b,tag:h,props:{},children:[{type:a,value:"yarn build"}]},{type:a,value:", all you need is in the "},{type:b,tag:h,props:{},children:[{type:a,value:N}]},{type:a,value:" folder. Static assets are in the "},{type:b,tag:h,props:{},children:[{type:a,value:"public"}]},{type:a,value:" subdirectory and the server and its dependencies are within the "},{type:b,tag:h,props:{},children:[{type:a,value:"server"}]},{type:a,value:" subdirectory."}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"This "},{type:b,tag:h,props:{},children:[{type:a,value:N}]},{type:a,value:" folder can be deployed to your Node.js host and the server can be run using "},{type:b,tag:l,props:{href:"https:\u002F\u002Fpm2.keymetrics.io\u002Fdocs\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,tag:h,props:{},children:[{type:a,value:n}]}]},{type:a,value:q}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"To start the server in production mode, run:"}]},{type:a,value:e},{type:b,tag:x,props:{},children:[{type:b,tag:y,props:{className:[z,"language-bash"]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"node .output\u002Fserver\u002Findex.mjs\n"}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"For example, using "},{type:b,tag:h,props:{},children:[{type:a,value:n}]},{type:a,value:k}]},{type:a,value:e},{type:b,tag:x,props:{},children:[{type:b,tag:c,props:{className:[H]},children:[{type:a,value:"ecosystem.config.js"}]},{type:b,tag:y,props:{className:[z,"language-js"]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"module"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,"property-access"]},children:[{type:a,value:"exports"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"="}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:"\n  apps"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"["}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:"\n      name"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"'NuxtAppName'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:"\n      exec_mode"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"'cluster'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:"\n      instances"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"'max'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:"\n      script"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"'.\u002F.output\u002Fserver\u002Findex.js'"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"]"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:w,props:{id:O},children:[{type:b,tag:l,props:{href:"#more-information"},children:[{type:a,value:P}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"See "},{type:b,tag:l,props:{href:"\u002Fpresets\u002Fserver"},children:[{type:a,value:"more information on the server preset"}]},{type:a,value:q}]}]},toc:{title:Q,searchDepth:m,depth:m,links:[{id:F,depth:m,text:G},{id:L,depth:m,text:M},{id:O,depth:m,text:P}]}},template:"Docs"},templateOptions:{header:p,footer:p,aside:p,asideClass:Q,fluid:o,banner:o},_img:{}}],fetch:{"0":{headerLinks:[{title:"开始",to:"\u002Fgetting-started\u002Fintroduction"},{title:"概念",to:"\u002Fconcepts\u002Fintroduction"},{title:"文档",to:"\u002Fdocs\u002Fusage\u002Fdata-fetching"},{title:"社区",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework",prev:{slug:"netlify",to:"\u002Fdocs\u002Fdeployment\u002Fnetlify",title:"Netlify"},next:{slug:"vercel",to:"\u002Fdocs\u002Fdeployment\u002Fvercel",title:"Vercel"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","Alert","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","ProseEm","CodeGroup","ProseH4"])},mutations:E}}("text","element","span","token","\n","punctuation"," ","prose-code-inline","prose-paragraph","operator",":","prose-a",2,"pm2",false,true,".","{","\n    ","}","string","prose-li","prose-h2","prose-code","pre","line-numbers","code",",","PM2","How to deploy Nuxt to a Node.js hosting using PM2.",void 0,"setup","Setup","filename","keyword","comment","\n  ","deployment","Deployment",".output","more-information","More information","")));