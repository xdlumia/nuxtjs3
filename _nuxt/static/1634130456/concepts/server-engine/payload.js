__NUXT_JSONP__("/concepts/server-engine", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L){return {data:[{page:{key:"content:2.concepts:2.server-engine.md",generatedAt:new Date(1634130494405),mtime:new Date(1634130494383),slug:s,title:t,position:"000200020000",to:"\u002Fconcepts\u002Fserver-engine",draft:m,page:n,language:"en",empty:m,description:u,excerpt:v,body:{raw:"# Server Engine\n\nNuxt 3 is powered by a new server engine, code-named \"Nitro\".\n\nThis engine has many benefits:\n::list\n- Cross-platform support for Node.js, Browsers, service-workers and more\n- Serverless support out-of-the-box\n- API routes support\n- Automatic code-splitting and async-loaded chunks\n- Hybrid mode for static + serverless sites\n- Development server with hot module reloading\n::\n\n## API Layer\n\nServer [API endpoints](\u002Fdocs\u002Fdirectory-structure\u002Fserver#api-routes) and [Middleware](\u002Fdocs\u002Fdirectory-structure\u002Fserver#server-middleware) are added by Nitro that internally uses [h3](https:\u002F\u002Fgithub.com\u002Funjs\u002Fh3).\n\nThere are a number of key features, including:\n\n* Handlers can directly return objects\u002Farrays for an automatically-handled JSON response\n* Handlers can return promises, which will be awaited (`res.end()` and `next()` are also supported)\n* Helper functions for body parsing, cookie handling, redirects, headers and more\n\nCheck out [the h3 docs](https:\u002F\u002Fgithub.com\u002Funjs\u002Fh3) for more information.\n\n\n::alert{type=\"info\" icon=ℹ️}\nLearn more about the API layer in the [`server\u002F`](\u002Fdocs\u002Fdirectory-structure\u002Fserver) directory.\n::\n\n## Direct API calls\n\nNitro allows 'direct' calling of routes via the globally-available `$fetch` helper. This will make an API call to the server if run on the browser, but will simply call the relevant function if run on the server, **saving an additional API call**.\n\n`$fetch` API is using [ohmyfetch](https:\u002F\u002Fgithub.com\u002Funjs\u002Fohmyfetch), with key features including:\n\n* Automatic parsing of JSON responses (with access to raw response if needed)\n* Request body and params are automatically handled, with correct `Content-Type` headers being added\n\nFor more information on `$fetch` features, check out [ohmyfetch](https:\u002F\u002Fgithub.com\u002Funjs\u002Fohmyfetch).\n\n## Standalone Server\n\nNitro produces a standalone server dist that is independent of `node_modules`.\n\nThe server in Nuxt 2 is not standalone, but requires part of nuxt core to be involved running `nuxt start` (with the [`nuxt-start`](https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fnuxt-start) or [`nuxt`](https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fnuxt) distributions) or custom programmatic usage, which was fragile and prone to breakage and not suitable for serverless and service-worker environments.\n\nThis dist is generated when running `nuxt build` into a [`.output`](\u002Fdocs\u002Fdirectory-structure\u002Foutput) directory.\n\nThe output is combined with both runtime code to run your Nuxt server in any environment (including experimental browser Service Workers!) and serve you static files, making it a true [hybrid framework](\u002Fconcepts\u002Fhybrid-rendering) for the JAMStack. In addition, a native storage layer is implemented, supporting multi source, drivers and local assets.\n\n::alert{type=\"info\" icon=IconCode}\nCheckout the Nitro engine on GitHub: [framework\u002Fpackages\u002Fnitro](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fnitro)\n::\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:s},children:[{type:a,value:t}]},{type:a,value:c},{type:b,tag:e,props:{class:"d-heading-description"},children:[{type:a,value:u}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This engine has many benefits:"}]},{type:a,value:c},{type:b,tag:"list",props:{},children:[{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Cross-platform support for Node.js, Browsers, service-workers and more"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Serverless support out-of-the-box"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"API routes support"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Automatic code-splitting and async-loaded chunks"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Hybrid mode for static + serverless sites"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Development server with hot module reloading"},{type:a,value:c}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:q,props:{id:w},children:[{type:b,tag:d,props:{href:"#api-layer"},children:[{type:a,value:x}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Server "},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fserver#api-routes"},children:[{type:a,value:"API endpoints"}]},{type:a,value:y},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fserver#server-middleware"},children:[{type:a,value:"Middleware"}]},{type:a,value:" are added by Nitro that internally uses "},{type:b,tag:d,props:{href:z,rel:[h,i,j],target:k},children:[{type:a,value:"h3"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"There are a number of key features, including:"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Handlers can directly return objects\u002Farrays for an automatically-handled JSON response"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Handlers can return promises, which will be awaited ("},{type:b,tag:f,props:{},children:[{type:a,value:"res.end()"}]},{type:a,value:y},{type:b,tag:f,props:{},children:[{type:a,value:"next()"}]},{type:a,value:" are also supported)"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Helper functions for body parsing, cookie handling, redirects, headers and more"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Check out "},{type:b,tag:d,props:{href:z,rel:[h,i,j],target:k},children:[{type:a,value:"the h3 docs"}]},{type:a,value:" for more information."}]},{type:a,value:c},{type:b,tag:A,props:{icon:"ℹ️",type:B},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Learn more about the API layer in the "},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Fserver"},children:[{type:b,tag:f,props:{},children:[{type:a,value:"server\u002F"}]}]},{type:a,value:C}]}]},{type:a,value:c},{type:b,tag:q,props:{id:D},children:[{type:b,tag:d,props:{href:"#direct-api-calls"},children:[{type:a,value:E}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Nitro allows 'direct' calling of routes via the globally-available "},{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:" helper. This will make an API call to the server if run on the browser, but will simply call the relevant function if run on the server, "},{type:b,tag:"prose-strong",props:{},children:[{type:a,value:"saving an additional API call"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:" API is using "},{type:b,tag:d,props:{href:F,rel:[h,i,j],target:k},children:[{type:a,value:G}]},{type:a,value:", with key features including:"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Automatic parsing of JSON responses (with access to raw response if needed)"},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:a,value:"Request body and params are automatically handled, with correct "},{type:b,tag:f,props:{},children:[{type:a,value:"Content-Type"}]},{type:a,value:" headers being added"},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"For more information on "},{type:b,tag:f,props:{},children:[{type:a,value:r}]},{type:a,value:" features, check out "},{type:b,tag:d,props:{href:F,rel:[h,i,j],target:k},children:[{type:a,value:G}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:q,props:{id:H},children:[{type:b,tag:d,props:{href:"#standalone-server"},children:[{type:a,value:I}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Nitro produces a standalone server dist that is independent of "},{type:b,tag:f,props:{},children:[{type:a,value:"node_modules"}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The server in Nuxt 2 is not standalone, but requires part of nuxt core to be involved running "},{type:b,tag:f,props:{},children:[{type:a,value:"nuxt start"}]},{type:a,value:" (with the "},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fnuxt-start",rel:[h,i,j],target:k},children:[{type:b,tag:f,props:{},children:[{type:a,value:"nuxt-start"}]}]},{type:a,value:" or "},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fnuxt",rel:[h,i,j],target:k},children:[{type:b,tag:f,props:{},children:[{type:a,value:"nuxt"}]}]},{type:a,value:" distributions) or custom programmatic usage, which was fragile and prone to breakage and not suitable for serverless and service-worker environments."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This dist is generated when running "},{type:b,tag:f,props:{},children:[{type:a,value:"nuxt build"}]},{type:a,value:" into a "},{type:b,tag:d,props:{href:"\u002Fdocs\u002Fdirectory-structure\u002Foutput"},children:[{type:b,tag:f,props:{},children:[{type:a,value:".output"}]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The output is combined with both runtime code to run your Nuxt server in any environment (including experimental browser Service Workers!) and serve you static files, making it a true "},{type:b,tag:d,props:{href:"\u002Fconcepts\u002Fhybrid-rendering"},children:[{type:a,value:"hybrid framework"}]},{type:a,value:" for the JAMStack. In addition, a native storage layer is implemented, supporting multi source, drivers and local assets."}]},{type:a,value:c},{type:b,tag:A,props:{icon:"IconCode",type:B},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Checkout the Nitro engine on GitHub: "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Ftree\u002Fmain\u002Fpackages\u002Fnitro",rel:[h,i,j],target:k},children:[{type:a,value:"framework\u002Fpackages\u002Fnitro"}]}]}]}]},toc:{title:J,searchDepth:l,depth:l,links:[{id:w,depth:l,text:x},{id:D,depth:l,text:E},{id:H,depth:l,text:I}]}},template:"Docs"},templateOptions:{header:n,footer:n,aside:n,asideClass:J,fluid:m,banner:m},_img:{}}],fetch:{"0":{headerLinks:[{title:"开始",to:"\u002Fgetting-started\u002Fintroduction"},{title:"概念",to:K},{title:"文档",to:L},{title:"社区",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework",prev:{slug:"introduction",to:K,title:"What is Nuxt?"},next:{slug:"data-fetching",to:L,title:"Data Fetching"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","Alert","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","ProseEm"])},mutations:v}}("text","element","\n","prose-a","prose-paragraph","prose-code-inline","prose-li","nofollow","noopener","noreferrer","_blank",2,false,true,".","prose-ul","prose-h2","$fetch","server-engine","Server Engine","Nuxt 3 is powered by a new server engine, code-named \"Nitro\".",void 0,"api-layer","API Layer"," and ","https:\u002F\u002Fgithub.com\u002Funjs\u002Fh3","alert","info"," directory.","direct-api-calls","Direct API calls","https:\u002F\u002Fgithub.com\u002Funjs\u002Fohmyfetch","ohmyfetch","standalone-server","Standalone Server","","\u002Fconcepts\u002Fintroduction","\u002Fdocs\u002Fusage\u002Fdata-fetching")));