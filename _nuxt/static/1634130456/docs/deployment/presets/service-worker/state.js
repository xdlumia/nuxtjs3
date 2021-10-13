window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1634130456",layout:K,error:L,serverRendered:a,routePath:q,config:{plausible:{domain:M},_app:{basePath:N,assetsPath:"\u002F_nuxt\u002F",cdnURL:L},docusDbHash:"c79a5f56"},globalRefs:{},__i18n:{langs:{}},colorMode:{preference:O,value:O,unknown:a,forced:b},docus:{currentPath:q,currentPage:{key:P,generatedAt:new Date(1634130501637),mtime:new Date(1634130501630),slug:z,title:A,position:k,to:q,draft:b,page:a,language:e,empty:b,description:B,excerpt:M,body:{raw:"# Service worker\n\nExplore the Service worker preset with Nitro to push the boundaries of Nuxt rendering to the edge.\n\n::list\n- Can be used for edge-side rendering\n- No dependency on Node.js\n- No Node.js environment and features\n::\n\n::alert{icon=IconPresets}\nBack to [presets list](\u002Fdocs\u002Fdeployment\u002Fpresets).\n::\n\n::alert{type=warning}\nDeployment as service worker has some limitations since SSR code is not running in Node.js environment but pure JavaScript.\n::\n\n## Usage\n\nYou can use the [Nuxt config](\u002Fdocs\u002Fdirectory-structure\u002Fnuxt.config) to explicity set the preset to use:\n\n```ts [nuxt.config.js|ts]\nexport default {\n  nitro: {\n    preset: 'worker'\n  }\n}\n```\n\nOr directly use the `NITRO_PRESET` environment variable when running `nuxt build`:\n\n```bash\nNITRO_PRESET=worker npx nuxt build\n```\n\n## Entrypoint\n\nThe worker preset produces a service worker that can provide full HTML rendering within a worker context (for example [Cloudflare Workers](\u002Fdocs\u002Fdeployment\u002Fcloudflare)). It registers appropriate handlers for `fetch`, `install` and `activate`.\n\nFor more information you can see the [source code](https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fnitro\u002Fsrc\u002Fruntime\u002Fentries\u002Fservice-worker.ts).\n",ast:{type:"root",children:[{type:f,tag:"prose-h1",props:{class:"d-heading-title",id:z},children:[{type:c,value:A}]},{type:c,value:g},{type:f,tag:l,props:{class:"d-heading-description"},children:[{type:c,value:B}]},{type:c,value:g},{type:f,tag:"list",props:{},children:[{type:f,tag:"prose-ul",props:{},children:[{type:c,value:g},{type:f,tag:C,props:{},children:[{type:c,value:g},{type:c,value:"Can be used for edge-side rendering"},{type:c,value:g}]},{type:c,value:g},{type:f,tag:C,props:{},children:[{type:c,value:g},{type:c,value:"No dependency on Node.js"},{type:c,value:g}]},{type:c,value:g},{type:f,tag:C,props:{},children:[{type:c,value:g},{type:c,value:"No Node.js environment and features"},{type:c,value:g}]},{type:c,value:g}]}]},{type:c,value:g},{type:f,tag:Q,props:{icon:R},children:[{type:f,tag:l,props:{},children:[{type:c,value:"Back to "},{type:f,tag:m,props:{href:S},children:[{type:c,value:"presets list"}]},{type:c,value:D}]}]},{type:c,value:g},{type:f,tag:Q,props:{type:"warning"},children:[{type:f,tag:l,props:{},children:[{type:c,value:"Deployment as service worker has some limitations since SSR code is not running in Node.js environment but pure JavaScript."}]}]},{type:c,value:g},{type:f,tag:T,props:{id:U},children:[{type:f,tag:m,props:{href:"#usage"},children:[{type:c,value:E}]}]},{type:c,value:g},{type:f,tag:l,props:{},children:[{type:c,value:"You can use the "},{type:f,tag:m,props:{href:V},children:[{type:c,value:"Nuxt config"}]},{type:c,value:" to explicity set the preset to use:"}]},{type:c,value:g},{type:f,tag:W,props:{},children:[{type:f,tag:h,props:{className:["filename"]},children:[{type:c,value:"nuxt.config.js|ts"}]},{type:f,tag:X,props:{className:[Y,"language-ts"]},children:[{type:f,tag:Z,props:{},children:[{type:f,tag:h,props:{className:[j,_]},children:[{type:c,value:"export"}]},{type:c,value:r},{type:f,tag:h,props:{className:[j,_]},children:[{type:c,value:K}]},{type:c,value:r},{type:f,tag:h,props:{className:[j,s]},children:[{type:c,value:$}]},{type:c,value:"\n  nitro"},{type:f,tag:h,props:{className:[j,F]},children:[{type:c,value:G}]},{type:c,value:r},{type:f,tag:h,props:{className:[j,s]},children:[{type:c,value:$}]},{type:c,value:"\n    preset"},{type:f,tag:h,props:{className:[j,F]},children:[{type:c,value:G}]},{type:c,value:r},{type:f,tag:h,props:{className:[j,"string"]},children:[{type:c,value:"'worker'"}]},{type:c,value:"\n  "},{type:f,tag:h,props:{className:[j,s]},children:[{type:c,value:aa}]},{type:c,value:g},{type:f,tag:h,props:{className:[j,s]},children:[{type:c,value:aa}]},{type:c,value:g}]}]}]},{type:c,value:g},{type:f,tag:l,props:{},children:[{type:c,value:"Or directly use the "},{type:f,tag:o,props:{},children:[{type:c,value:ab}]},{type:c,value:" environment variable when running "},{type:f,tag:o,props:{},children:[{type:c,value:"nuxt build"}]},{type:c,value:G}]},{type:c,value:g},{type:f,tag:W,props:{},children:[{type:f,tag:X,props:{className:[Y,"language-bash"]},children:[{type:f,tag:Z,props:{},children:[{type:f,tag:h,props:{className:[j,"assign-left","variable"]},children:[{type:c,value:ab}]},{type:f,tag:h,props:{className:[j,F]},children:[{type:c,value:"="}]},{type:c,value:"worker npx nuxt build\n"}]}]}]},{type:c,value:g},{type:f,tag:T,props:{id:ac},children:[{type:f,tag:m,props:{href:"#entrypoint"},children:[{type:c,value:ad}]}]},{type:c,value:g},{type:f,tag:l,props:{},children:[{type:c,value:"The worker preset produces a service worker that can provide full HTML rendering within a worker context (for example "},{type:f,tag:m,props:{href:ae},children:[{type:c,value:af}]},{type:c,value:"). It registers appropriate handlers for "},{type:f,tag:o,props:{},children:[{type:c,value:"fetch"}]},{type:c,value:", "},{type:f,tag:o,props:{},children:[{type:c,value:"install"}]},{type:c,value:" and "},{type:f,tag:o,props:{},children:[{type:c,value:"activate"}]},{type:c,value:D}]},{type:c,value:g},{type:f,tag:l,props:{},children:[{type:c,value:"For more information you can see the "},{type:f,tag:m,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework\u002Fblob\u002Fmain\u002Fpackages\u002Fnitro\u002Fsrc\u002Fruntime\u002Fentries\u002Fservice-worker.ts",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:c,value:"source code"}]},{type:c,value:D}]}]},toc:{title:d,searchDepth:t,depth:t,links:[{id:U,depth:t,text:E},{id:ac,depth:t,text:ad}]}},template:ag},settings:{title:"Nuxt 3",contentDir:"content",url:"https:\u002F\u002Fv3.nuxtjs.org",description:ah,template:ai,credits:b,layout:{header:a,footer:a,aside:b,asideClass:d,fluid:b,banner:b},twitter:"nuxt_js",github:{repo:"nuxt\u002Fframework",branch:"main",dir:ai,releases:b,url:"https:\u002F\u002Fgithub.com",apiUrl:"https:\u002F\u002Fapi.github.com\u002Frepos"}},theme:{header:{logo:a,title:b},colors:{primary:"#00DC82",prism:{foreground:aj,background:"#fbfbfb dark:#1e1e1e",class:n,builtin:n,function:n,keyword:"#096d7c dark:#22D3EE",string:p,number:p,selector:p,boolean:p,property:ak,punctuation:ak,comment:"#758575 dark:#a0ada0",literal:"#429988 dark:#2f8a89",variable:aj,constant:n,deleted:"#a14f55 #a14f55",namespace:n,decorator:n,regex:p,"json-property":"#078ce5 dark:#22D3EE","line-number":"#888888","line-number-gutter":"#eeeeee","line-highlight-background":al,"selection-background":al},logo:"#003543"},shortcuts:{"d-body-bg":"bg-white dark:bg-secondary-black","d-body-text-color":"text-secondary-darker dark:text-white","d-secondary-bg":"bg-gray-500 dark:bg-cloud-light","d-secondary-text":"text-gray-500 dark:text-cloud-light","d-secondary-text-hover":"text-gray-700 dark:text-cloud-lightest","d-tertiary-text":"text-gray-400 dark:text-cloud-dark","d-border-tertiary":"border-gray-400 dark:border-gray-500","d-primary-text-hover":"text-gray-600 dark:text-cloud-lighter","d-secondary-text-active":"text-gray-900 dark:text-cloud-surface","d-prose-code-inline-bg":am,"d-prose-code-bg":am,"d-prose-thead-border":"border-b border-gray-200 dark:border-secondary-dark","d-prose-tr-border":"border-b border-gray-100 dark:border-secondary-darker","d-prose-blockquote-border":"border-l-2 border-gray-200 dark:border-secondary-darker","d-prose-blockquote-text":"d-secondary-text","d-prose-a-text":"text-primary-500","d-prose-a-border":"border-b border-transparent","d-prose-a-border-hover":"border-b border-primary-500","d-prose-a-headline-border":"border-b border-dashed border-gray-900 dark:border-gray-100","d-text-primary":"text-primary-500 dark:text-primary-400","d-border-primary":"border-primary-500 dark:border-primary-400","d-bg-primary":"bg-primary-500 dark:bg-primary-400","d-page-mobile-toc-bg":"d-body-bg bg-opacity-80 dark:bg-opacity-80","d-aside-header-bg":"bg-gray-50 dark:bg-secondary-darkest","d-active-aside-navigation-item-bg":"bg-primary-50 dark:bg-secondary-darkest","d-active-aside-navigation-item-text":"text-primary-500 dark:text-primary-400 ","d-code-group-header-bg":"bg-gray-200 dark:bg-secondary-darker","d-code-group-tab":"bg-gray-300 dark:bg-secondary-dark","d-prose-code-filename-bg":"bg-gray-100 dark:bg-secondary-darker","d-prose-code-filename-text":"text-gray-600 dark:text-secondary-light","d-prose-code-inline-in-heading-border-hover":"border-gray-500 dark:border-gray-200","d-prose-hr-border":"border-t border-gray-100 dark:border-secondary-darker","d-prose-ul-li-bullet":"d-secondary-bg","d-text-icon":"d-secondary-text hover:d-secondary-text-hover","d-icon":"d-text-icon focus:outline-none","light-img":"dark:hidden","dark-img":"light:hidden","d-max-w-container":"max-w-7xl","d-px-container":"px-4 sm:px-6","d-container":"d-max-w-container mx-auto","d-container-content":"d-container d-px-container","d-blur-header":"blur-12","d-bg-header":"bg-white bg-opacity-80 dark:bg-secondary-black dark:bg-opacity-80","d-border":"light:border-gray-200 light:border-opacity-50 dark:border-secondary-darker","d-border-hover":"border-primary-200 dark:border-secondary-dark","d-border-header":"border-none","d-header":"sticky w-full top-0 z-50 d-bg-header d-border-header d-blur-header h-header","d-header-title":"text-2xl font-bold tracking-tighter text-gray-900 dark:text-gray-100","d-header-title-logo":"d-header-title ml-4","d-header-logo":"flex items-center flex-none lg:w-60","d-logo-color":"text-black dark:text-white","d-logo":"w-auto h-6 md:h-7 text-logo dark:text-white","d-heading-title":"!mb-0 !mt-0 flex-1 !text-4xl font-semibold tracking-tight","d-heading-description":"!mt-2 !mb-0 text-lg font-medium d-secondary-text","d-heading-hr":"!mt-4 !mb-0 d-border","d-scrollbar":"scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-secondary-dark scrollbar-thumb-rounded","d-aside-title":"py-2 text-base font-semibold text-gray-900 cursor-pointer dark:text-gray-100","d-header-home":"sticky w-full top-0 z-50 bg-secondary-black bg-opacity-80 d-border-header d-blur-header h-header","d-bg-header-home":"bg-opacity-80 bg-secondary-black","d-aside-header-home-bg":"bg-secondary-darkest"}},navigation:{en:[{id:"content:1.getting-started:index.md",slug:d,to:"\u002Fgetting-started",page:a,position:"000199990000",draft:b,language:e,children:[{id:"content:1.getting-started:1.introduction.md",slug:an,to:u,page:a,position:"000100010000",draft:b,language:e,children:[],title:"介绍",mtime:"2021-10-13T13:08:12.206Z",empty:b,description:"Nuxt 3十分简单易用。",layout:{aside:a,asideClass:d}},{id:"content:1.getting-started:2.installation.md",slug:"installation",to:"\u002Fgetting-started\u002Finstallation",page:a,position:"000100020000",draft:b,language:e,children:[],title:"安装",mtime:"2021-10-13T13:08:12.196Z",empty:b,description:"Nuxt 3是十分简单易用的。",layout:{aside:a,asideClass:d}},{id:"content:1.getting-started:3.bridge.md",slug:"bridge",to:"\u002Fgetting-started\u002Fbridge",page:a,position:"000100030000",draft:b,language:e,children:[],title:"Bridge",mtime:"2021-10-13T13:08:12.081Z",empty:b,description:"在现有Nuxt2上体验Nuxt3的新特性",layout:{aside:a,asideClass:d}},{id:"content:1.getting-started:4.commands.md",slug:"commands",to:"\u002Fgetting-started\u002Fcommands",page:a,position:"000100040000",draft:b,language:e,children:[],title:"命令",mtime:"2021-10-13T13:08:12.265Z",empty:b,description:"Nuxi是适用于Nuxt 3的一个新的命令行界面。",layout:{aside:a,asideClass:d}},{id:"content:1.getting-started:5.migration.md",slug:"migration",to:"\u002Fgetting-started\u002Fmigration",page:a,position:"000100050000",draft:b,language:e,children:[],title:"迁移",mtime:"2021-10-13T13:08:12.227Z",empty:b,description:"Nuxt 3 迁移指南。工作正在进行中 🚧",layout:{aside:a,asideClass:d}}],title:ao,mtime:"2021-10-13T13:08:12.226Z",layout:{aside:a,asideClass:d},navigation:{exclusive:a,redirect:u},empty:a,description:d,exclusive:a,redirect:u},{id:"content:2.concepts:index.md",slug:d,to:"\u002Fconcepts",page:a,position:"000299990000",draft:b,language:e,children:[{id:"content:2.concepts:1.introduction.md",slug:an,to:v,page:a,position:"000200010000",draft:b,language:e,children:[],title:"What is Nuxt?",mtime:"2021-10-13T13:08:12.280Z",empty:b,description:"Nuxt goal is to make web development intuitive and performant with a great developer experience in mind.",layout:{aside:a,asideClass:d}},{id:"content:2.concepts:2.server-engine.md",slug:"server-engine",to:"\u002Fconcepts\u002Fserver-engine",page:a,position:"000200020000",draft:b,language:e,children:[],title:"Server Engine",mtime:"2021-10-13T13:08:12.297Z",empty:b,description:"Nuxt 3 is powered by a new server engine, code-named \"Nitro\".",layout:{aside:a,asideClass:d}}],title:"Concepts",mtime:"2021-10-13T13:08:12.319Z",layout:{aside:a,asideClass:d},navigation:{exclusive:a,redirect:v},empty:a,description:d,exclusive:a,redirect:v},{id:"content:3.docs:index.md",slug:d,to:"\u002Fdocs",page:a,position:"000399990000",draft:b,language:e,children:[{id:"content:3.docs:1.usage:index.md",slug:d,to:"\u002Fdocs\u002Fusage",page:a,position:"000300019999",draft:b,language:e,children:[{id:"content:3.docs:1.usage:1.data-fetching.md",slug:"data-fetching",to:w,page:a,position:"000300010001",draft:b,language:e,children:[],title:"Data Fetching",mtime:"2021-10-13T13:08:12.401Z",empty:b,description:"Nuxt provides useFetch and useAsyncData to handle data fetching within your application.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:1.usage:2.state.md",slug:"state",to:"\u002Fdocs\u002Fusage\u002Fstate",page:a,position:"000300010002",draft:b,language:e,children:[],title:"State",mtime:"2021-10-13T13:08:12.387Z",empty:b,description:"Nuxt provides useState to create a globally shared state.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:1.usage:3.meta-tags.md",slug:"meta-tags",to:"\u002Fdocs\u002Fusage\u002Fmeta-tags",page:a,position:"000300010003",draft:b,language:e,children:[],title:"Meta Tags",mtime:ap,empty:b,description:"You can customize the meta tags for your site through several different ways:",layout:{aside:a,asideClass:d}}],title:E,mtime:"2021-10-13T13:08:12.441Z",layout:{aside:a,asideClass:d},navigation:{collapse:a,redirect:aq},empty:a,description:d,collapse:a,redirect:aq},{id:"content:3.docs:2.directory-structure:index.md",slug:d,to:"\u002Fdocs\u002Fdirectory-structure",page:a,position:"000300029999",draft:b,language:e,children:[{id:"content:3.docs:2.directory-structure:1.nuxt.md",slug:"nuxt",to:"\u002Fdocs\u002Fdirectory-structure\u002Fnuxt",page:a,position:"000300020001",draft:b,language:e,children:[],title:".nuxt",mtime:"2021-10-13T13:08:12.442Z",icon:i,head:{title:"Nuxt directory"},empty:b,description:"The .nuxt directory is used by Nuxt in development to generate your Vue application.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:2.directory-structure:2.output.md",slug:"output",to:"\u002Fdocs\u002Fdirectory-structure\u002Foutput",page:a,position:"000300020002",draft:b,language:e,children:[],title:".output",mtime:"2021-10-13T13:08:12.495Z",icon:i,head:{title:"Output directory"},empty:b,description:"The .output\u002F directory is created by Nuxt when building your application for production.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:2.directory-structure:3.assets.md",slug:ar,to:"\u002Fdocs\u002Fdirectory-structure\u002Fassets",page:a,position:"000300020003",draft:b,language:e,children:[],title:ar,mtime:"2021-10-13T13:08:12.499Z",icon:i,head:{title:"Assets directory"},empty:b,description:"The assets\u002F directory is used to add all the website assets that will be processed by the build tool (Webpack or Vite).",layout:{aside:a,asideClass:d}},{id:"content:3.docs:2.directory-structure:4.components.md",slug:as,to:"\u002Fdocs\u002Fdirectory-structure\u002Fcomponents",page:a,position:"000300020004",draft:b,language:e,children:[],title:as,mtime:"2021-10-13T13:08:12.515Z",icon:i,head:{title:"Components directory"},empty:b,description:"The components\u002F directory is where you put all your Vue components which can then be imported inside your pages or other components (learn more).",layout:{aside:a,asideClass:d}},{id:"content:3.docs:2.directory-structure:5.composables.md",slug:at,to:"\u002Fdocs\u002Fdirectory-structure\u002Fcomposables",page:a,position:"000300020005",draft:b,language:e,children:[],title:at,mtime:"2021-10-13T13:08:12.523Z",icon:i,head:{title:"Composables directory"},empty:b,description:"Nuxt will soon support a composables\u002F directory to auto import your Vue composables into your application when used, learn more on the open issue.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:2.directory-structure:6.layouts.md",slug:au,to:"\u002Fdocs\u002Fdirectory-structure\u002Flayouts",page:a,position:"000300020006",draft:b,language:e,children:[],title:au,mtime:av,icon:i,head:{title:"Layouts directory"},empty:b,description:"Nuxt provides a customizable layouts framework you can use throughout your application, ideal for extracting common UI or code patterns into reusable layout components.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:2.directory-structure:7.node_modules.md",slug:aw,to:"\u002Fdocs\u002Fdirectory-structure\u002Fnode_modules",page:a,position:"000300020007",draft:b,language:e,children:[],title:aw,mtime:av,icon:i,head:{title:"Node modules directory"},empty:b,description:d,layout:{aside:a,asideClass:d}},{id:"content:3.docs:2.directory-structure:8.modules.md",slug:ax,to:"\u002Fdocs\u002Fdirectory-structure\u002Fmodules",page:a,position:"000300020008",draft:b,language:e,children:[],title:ax,mtime:"2021-10-13T13:08:12.534Z",icon:i,head:{title:"Local modules directory"},empty:b,description:"Nuxt has a powerful modules engine.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:2.directory-structure:9.pages.md",slug:ay,to:"\u002Fdocs\u002Fdirectory-structure\u002Fpages",page:a,position:"000300020009",draft:b,language:e,children:[],title:ay,mtime:"2021-10-13T13:08:12.550Z",icon:i,head:{title:"Pages directory"},empty:b,description:"The pages\u002F directory is optional, meaning that if you only use app.vue, vue-router won't be included, reducing your application bundle size.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:2.directory-structure:10.plugins.md",slug:az,to:"\u002Fdocs\u002Fdirectory-structure\u002Fplugins",page:a,position:"000300020010",draft:b,language:e,children:[],title:az,mtime:"2021-10-13T13:08:12.434Z",icon:i,head:{title:"Plugins directory"},empty:b,description:"Nuxt will automatically read the files in your plugins directory and load them. You can use .server or .client in the file name to load a plugin just on server- or client-side.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:2.directory-structure:11.public.md",slug:aA,to:"\u002Fdocs\u002Fdirectory-structure\u002Fpublic",page:a,position:"000300020011",draft:b,language:e,children:[],title:aA,mtime:"2021-10-13T13:08:12.443Z",icon:i,head:{title:"Public directory"},empty:b,description:"The static\u002F directory is directly served at server root and contains public files that have to keep their names (e.g. robots.txt) or likely won't change (e.g. favicon.ico).",layout:{aside:a,asideClass:d}},{id:"content:3.docs:2.directory-structure:12.server.md",slug:H,to:"\u002Fdocs\u002Fdirectory-structure\u002Fserver",page:a,position:"000300020012",draft:b,language:e,children:[],title:H,mtime:"2021-10-13T13:08:12.449Z",icon:i,head:{title:"Server directory"},empty:b,description:"The server directory is used to create any backend logic for your Nuxt application. It supports HMR and powerful features.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:2.directory-structure:13.gitignore.md",slug:"gitignore",to:"\u002Fdocs\u002Fdirectory-structure\u002Fgitignore",page:a,position:"000300020013",draft:b,language:e,children:[],title:".gitignore",mtime:"2021-10-13T13:08:12.468Z",icon:x,head:{title:"Gitignore file"},empty:b,description:"A .gitignore file specifies intentionally untracked files that Git should ignore. Learn more about it on the git documentation.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:2.directory-structure:14.app.md",slug:"app",to:I,page:a,position:"000300020014",draft:b,language:e,children:[],title:"app.vue",mtime:"2021-10-13T13:08:12.501Z",icon:x,head:{title:"App file"},empty:b,description:"The app.vue file is the main component in your Nuxt 3 applications.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:2.directory-structure:15.nuxt.config.md",slug:"nuxt.config",to:V,page:a,position:"000300020015",draft:b,language:e,children:[],title:"nuxt.config.js",mtime:"2021-10-13T13:08:12.614Z",icon:x,head:{title:"Nuxt configuration file"},empty:b,description:"Nuxt can be configured easily with one single file, called nuxt.config, it supports both .js and .ts extension.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:2.directory-structure:16.package.md",slug:"package",to:"\u002Fdocs\u002Fdirectory-structure\u002Fpackage",page:a,position:"000300020016",draft:b,language:e,children:[],title:"package.json",mtime:"2021-10-13T13:08:12.486Z",icon:x,head:{title:"Package file"},empty:b,description:"The package.json file contains all the dependencies and scripts for your application.",layout:{aside:a,asideClass:d}}],title:"Directory structure",mtime:"2021-10-13T13:08:12.559Z",layout:{aside:a,asideClass:d},navigation:{collapse:b,redirect:I},empty:a,description:d,collapse:b,redirect:I},{id:"content:3.docs:3.deployment:index.md",slug:d,to:"\u002Fdocs\u002Fdeployment",page:a,position:"000300039999",draft:b,language:e,children:[{id:"content:3.docs:3.deployment:1.azure.md",slug:"azure",to:J,page:a,position:"000300030001",draft:b,language:e,children:[],title:"Azure",mtime:"2021-10-13T13:08:12.576Z",icon:"LogoAzure",empty:b,description:"How to deploy Nuxt to Azure Static Web Apps or Azure Functions.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:3.deployment:2.cloudflare.md",slug:"cloudflare",to:ae,page:a,position:"000300030002",draft:b,language:e,children:[],title:af,mtime:"2021-10-13T13:08:12.600Z",icon:"LogoCloudFlare",empty:b,description:"How to deploy Nuxt to Cloudflare Workers.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:3.deployment:3.firebase.md",slug:"firebase",to:"\u002Fdocs\u002Fdeployment\u002Ffirebase",page:a,position:"000300030003",draft:b,language:e,children:[],title:"Firebase Hosting",mtime:"2021-10-13T13:08:12.560Z",icon:"LogoFirebase",empty:b,description:"How to deploy Nuxt to Firebase Hosting.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:3.deployment:4.netlify.md",slug:"netlify",to:"\u002Fdocs\u002Fdeployment\u002Fnetlify",page:a,position:"000300030004",draft:b,language:e,children:[],title:"Netlify",mtime:"2021-10-13T13:08:12.682Z",icon:"LogoNetlify",empty:b,description:"How to deploy Nuxt to Netlify.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:3.deployment:5.pm2.md",slug:"pm2",to:"\u002Fdocs\u002Fdeployment\u002Fpm2",page:a,position:"000300030005",draft:b,language:e,children:[],title:"PM2",mtime:"2021-10-13T13:08:12.697Z",icon:"LogoPM2",empty:b,description:"How to deploy Nuxt to a Node.js hosting using PM2.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:3.deployment:6.vercel.md",slug:"vercel",to:"\u002Fdocs\u002Fdeployment\u002Fvercel",page:a,position:"000300030006",draft:b,language:e,children:[],title:"Vercel",mtime:"2021-10-13T13:08:12.713Z",icon:"LogoVercel",empty:b,description:"How to deploy Nuxt to Vercel.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:3.deployment:99.presets.md",slug:"presets",to:S,page:a,position:k,draft:b,language:e,children:[{id:"content:3.docs:3.deployment:99.presets:custom.md",slug:"custom",to:"\u002Fdocs\u002Fdeployment\u002Fpresets\u002Fcustom",page:a,position:k,draft:b,language:e,children:[],title:"Custom build preset (advanced)",mtime:"2021-10-13T13:08:12.727Z",empty:b,description:"Get full control of Nuxt Nitro output to deploy on any kind of hosting platform.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:3.deployment:99.presets:lambda.md",slug:"lambda",to:"\u002Fdocs\u002Fdeployment\u002Fpresets\u002Flambda",page:a,position:k,draft:b,language:e,children:[],title:"Lambda function",mtime:"2021-10-13T13:08:12.724Z",empty:b,description:"Discover the Lambda function preset with Nitro to deploy Nuxt to any lambda-compatible serverless platform.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:3.deployment:99.presets:node.md",slug:"node",to:"\u002Fdocs\u002Fdeployment\u002Fpresets\u002Fnode",page:a,position:k,draft:b,language:e,children:[],title:"Node.js function",mtime:"2021-10-13T13:08:12.717Z",empty:b,description:"Discover the Node.js function preset with Nitro to attach Nuxt as a middleware to any Node.js server.",layout:{aside:a,asideClass:d}},{id:"content:3.docs:3.deployment:99.presets:server.md",slug:H,to:"\u002Fdocs\u002Fdeployment\u002Fpresets\u002Fserver",page:a,position:k,draft:b,language:e,children:[],title:"Node.js server",mtime:"2021-10-13T13:08:12.736Z",empty:b,description:"Discover the Node.js server preset with Nitro to deploy on any Node hosting.",layout:{aside:a,asideClass:d}},{id:P,slug:z,to:q,page:a,position:k,draft:b,language:e,children:[],title:A,mtime:"2021-10-13T13:08:12.745Z",empty:b,description:B,layout:{aside:a,asideClass:d}}],title:"Presets",mtime:"2021-10-13T13:08:12.707Z",icon:R,empty:b,description:"Nuxt has four provided generic presets that you can use out-of-the-box.",layout:{aside:a,asideClass:d}}],title:"Deployment",mtime:"2021-10-13T13:08:12.711Z",layout:{aside:a,asideClass:d},navigation:{collapse:b,exclusive:b,redirect:J},empty:a,description:d,collapse:b,exclusive:b,redirect:J}],title:ag,mtime:ap,layout:{aside:a},navigation:{exclusive:a,redirect:w},empty:a,description:d,exclusive:a,redirect:w},{id:"content:4.community:index.md",slug:d,to:"\u002Fcommunity",page:a,position:"000499990000",draft:b,language:e,children:[{id:"content:4.community:1.getting-help.md",slug:"getting-help",to:y,page:a,position:"000400010000",draft:b,language:e,children:[],title:"Getting Help",mtime:"2021-10-13T13:08:12.322Z",empty:b,description:"At some point you may find that there's an issue you need some help with. But don't worry! We're a friendly community of developers and we'd love to help.",layout:{aside:a,asideClass:d}},{id:"content:4.community:2.reporting-bugs.md",slug:"reporting-bugs",to:"\u002Fcommunity\u002Freporting-bugs",page:a,position:"000400020000",draft:b,language:e,children:[],title:"Reporting Bugs",mtime:"2021-10-13T13:08:12.334Z",empty:b,description:"Try as we might, we never completely eliminate bugs. One of the most valuable roles in open source is taking the time to report bugs helpfully. Even if you can't fix the underlying code, reporting a bug well can enable someone else with a bit more familiarity with the code base to spot a pattern or make a quick fix.",layout:{aside:a,asideClass:d}},{id:"content:4.community:3.contribution.md",slug:"contribution",to:"\u002Fcommunity\u002Fcontribution",page:a,position:"000400030000",draft:b,language:e,children:[],title:"Contribution",mtime:"2021-10-13T13:08:12.342Z",empty:b,description:"Nuxt is a community project - and so we love contributions of all kinds! ❤️",layout:{aside:a,asideClass:d}}],title:"Community",mtime:"2021-10-13T13:08:12.360Z",layout:{aside:a,asideClass:d},navigation:{collapse:a,exclusive:a,redirect:y},empty:a,description:d,collapse:a,exclusive:a,redirect:y},{id:"content:index.md",mtime:"2021-10-13T13:08:12.143Z",slug:d,title:ah,position:aB,to:N,draft:b,page:a,language:e,navigation:b,template:"Page-post",description:"使用 Vue 3 构建您的下一个应用程序，体验混合渲染、强大的数据获取和新功能。Nuxt 3 是一个开源框架，使 Web 开发变得简单而强大。",empty:b,children:[],hidden:a},{id:"content:_collections",slug:"collections",to:"\u002Fcollections",page:b,position:aB,children:[{id:"content:_collections:header.md",slug:"header",to:"\u002Fcollections\u002Fheader",page:b,position:"999999990000",draft:b,language:e,children:[],title:"Header",mtime:"2021-10-13T13:08:12.432Z",links:[{title:ao,to:u},{title:"概念",to:v},{title:"文档",to:w},{title:"社区",to:y}],empty:a,description:d}],title:"Collections"}]},layout:{header:a,footer:a,aside:a,asideClass:d,fluid:b,banner:b}}}}(true,false,"text","","en","element","\n","span","IconDirectory","token","000300030099","prose-paragraph","prose-a","#9807af dark:#E879F9","prose-code-inline","#679c0d dark:#BEF264","\u002Fdocs\u002Fdeployment\u002Fpresets\u002Fservice-worker"," ","punctuation",2,"\u002Fgetting-started\u002Fintroduction","\u002Fconcepts\u002Fintroduction","\u002Fdocs\u002Fusage\u002Fdata-fetching","IconFile","\u002Fcommunity\u002Fgetting-help","service-worker","Service worker","Explore the Service worker preset with Nitro to push the boundaries of Nuxt rendering to the edge.","prose-li",".","Usage","operator",":","server","\u002Fdocs\u002Fdirectory-structure\u002Fapp","\u002Fdocs\u002Fdeployment\u002Fazure","default",null,void 0,"\u002F","system","content:3.docs:3.deployment:99.presets:service-worker.md","alert","IconPresets","\u002Fdocs\u002Fdeployment\u002Fpresets","prose-h2","usage","\u002Fdocs\u002Fdirectory-structure\u002Fnuxt.config","prose-code","pre","line-numbers","code","keyword","{","}","NITRO_PRESET","entrypoint","Entrypoint","\u002Fdocs\u002Fdeployment\u002Fcloudflare","Cloudflare Workers","Docs","The Hybrid Vue Framework","docs","inherit","#078ce5 dark:#E0F2FE","#444444","bg-gray-100 dark:bg-secondary-darkest","introduction","开始","2021-10-13T13:08:12.362Z","\u002Fdocs\u002Fbasics\u002Fintroduction","assets","components","composables","layouts","2021-10-13T13:08:12.524Z","node_modules","modules","pages","plugins","public","999900000000"));