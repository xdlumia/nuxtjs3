__NUXT_JSONP__("/docs/deployment/firebase", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av){return {data:[{page:{key:"content:3.docs:3.deployment:3.firebase.md",generatedAt:new Date(1634130498600),mtime:new Date(1634130498590),slug:F,title:G,position:"000300030003",to:"\u002Fdocs\u002Fdeployment\u002Ffirebase",draft:A,page:B,language:"en",icon:"LogoFirebase",empty:A,description:P,excerpt:Q,body:{raw:"---\nicon: LogoFirebase\n---\n\n# Firebase Hosting\n\nHow to deploy Nuxt to Firebase Hosting.\n\n::list\n- Support for serverless build\n- Minimal configuration required\n::\n\n## Setup\n\nNitro supports [Firebase Hosting](https:\u002F\u002Ffirebase.google.com\u002Fdocs\u002Fhosting) with Cloud Functions out of the box.\n\n**Note**: You will need to be on the **Blaze plan** in order to use Nitro with Cloud Functions.\n\n### Using Nitro\n\nIf you don't already have a `firebase.json` in your root directory, Nitro will create one the first time you run it. All you will need to do is edit this to replace `\u003Cyour_project_id\u003E` with the project ID that you have chosen on Firebase.\n\nThis file should then be committed to version control. You can also create a `.firebaserc` file if you don't want to manually pass your project ID to your `firebase` commands (with `--project \u003Cyour_project_id\u003E):\n```json [.firebaserc]\n{\n  \"projects\": {\n    \"default\": \"\u003Cyour_project_id\u003E\"\n  }\n}\n```\n\nThen, just add Firebase dependencies to your project:\n\n::code-group\n```bash [Yarn]\nyarn add --dev firebase-admin firebase-functions firebase-functions-test\n```\n```bash [NPM]\nnpm install -D firebase-admin firebase-functions firebase-functions-test\n```\n::\n\n### Using Firebase CLI\n\nYou may instead prefer to set up your project with the `firebase` CLI, which will fetch your project ID for you, add required dependencies (see above) and even set up automated deployments via GitHub Actions.\n\n#### Install firebase CLI globally\n\n::code-group\n```bash [Yarn]\nyarn global install firebase-tools\n```\n```bash [NPM]\nnpm install -g firebase-tools\n```\n::\n\n#### Initialize your firebase project\n\n```bash\nfirebase login\nfirebase init hosting\n```\n\nWhen prompted, you can enter `.output\u002Fpublic` as the public directory. **Don't** select that this will be a single-page app.\n\nOnce complete, add the following to your `firebase.json` to enable server rendering in Cloud Functions:\n```json [firebase.json]\n{\n  \"functions\": { \"source\": \".output\u002Fserver\" },\n  \"hosting\": [\n    {\n      \"site\": \"\u003Cyour_project_id\u003E\",\n      \"public\": \".output\u002Fpublic\",\n      \"cleanUrls\": true,\n      \"rewrites\": [{ \"source\": \"**\", \"function\": \"server\" }]\n    }\n  ]\n}\n```\n\nYou can find more details in the [Firebase documentation](https:\u002F\u002Ffirebase.google.com\u002Fdocs\u002Fhosting\u002Fquickstart).\n\n## Local preview\n\nYou can preview a local version of your site if you need to test things out without deploying.\n\n```bash\nNITRO_PRESET=firebase yarn build\nfirebase emulators:start\n```\n\n## Deploy to Firebase Hosting via CLI\n\nDeploying to Firebase Hosting is a simple matter of just running the `firebase deploy` command.\n\n```bash\nNITRO_PRESET=firebase yarn build\nfirebase deploy\n```\n\n## Demo site\n\nA live demo is available on https:\u002F\u002Fnitro-demo-dfabe.web.app\n",ast:{type:"root",children:[{type:b,tag:"prose-h1",props:{class:"d-heading-title",id:"firebase-hosting"},children:[{type:a,value:G}]},{type:a,value:e},{type:b,tag:h,props:{class:"d-heading-description"},children:[{type:a,value:P}]},{type:a,value:e},{type:b,tag:"list",props:{},children:[{type:b,tag:"prose-ul",props:{},children:[{type:a,value:e},{type:b,tag:R,props:{},children:[{type:a,value:e},{type:a,value:"Support for serverless build"},{type:a,value:e}]},{type:a,value:e},{type:b,tag:R,props:{},children:[{type:a,value:e},{type:a,value:"Minimal configuration required"},{type:a,value:e}]},{type:a,value:e}]}]},{type:a,value:e},{type:b,tag:C,props:{id:S},children:[{type:b,tag:j,props:{href:"#setup"},children:[{type:a,value:T}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Nitro supports "},{type:b,tag:j,props:{href:"https:\u002F\u002Ffirebase.google.com\u002Fdocs\u002Fhosting",rel:[H,I,J],target:K},children:[{type:a,value:G}]},{type:a,value:" with Cloud Functions out of the box."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:L,props:{},children:[{type:a,value:"Note"}]},{type:a,value:": You will need to be on the "},{type:b,tag:L,props:{},children:[{type:a,value:"Blaze plan"}]},{type:a,value:" in order to use Nitro with Cloud Functions."}]},{type:a,value:e},{type:b,tag:U,props:{id:V},children:[{type:b,tag:j,props:{href:"#using-nitro"},children:[{type:a,value:W}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"If you don't already have a "},{type:b,tag:r,props:{},children:[{type:a,value:M}]},{type:a,value:" in your root directory, Nitro will create one the first time you run it. All you will need to do is edit this to replace "},{type:b,tag:r,props:{},children:[{type:a,value:"\u003Cyour_project_id\u003E"}]},{type:a,value:" with the project ID that you have chosen on Firebase."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This file should then be committed to version control. You can also create a "},{type:b,tag:r,props:{},children:[{type:a,value:X}]},{type:a,value:" file if you don't want to manually pass your project ID to your "},{type:b,tag:r,props:{},children:[{type:a,value:F}]},{type:a,value:" commands (with `--project \u003Cyour_project_id\u003E):"}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[t]},children:[{type:a,value:X}]},{type:b,tag:o,props:{className:[p,Y]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"projects\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"default\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:Z}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Then, just add Firebase dependencies to your project:"}]},{type:a,value:e},{type:b,tag:_,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[t]},children:[{type:a,value:$}]},{type:b,tag:o,props:{className:[p,s]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"add"}]},{type:a,value:" --dev firebase-admin firebase-functions firebase-functions-test\n"}]}]}]},{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[t]},children:[{type:a,value:aa}]},{type:b,tag:o,props:{className:[p,s]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:O}]},{type:a,value:" -D firebase-admin firebase-functions firebase-functions-test\n"}]}]}]}]},{type:a,value:e},{type:b,tag:U,props:{id:ac},children:[{type:b,tag:j,props:{href:"#using-firebase-cli"},children:[{type:a,value:ad}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"You may instead prefer to set up your project with the "},{type:b,tag:r,props:{},children:[{type:a,value:F}]},{type:a,value:" CLI, which will fetch your project ID for you, add required dependencies (see above) and even set up automated deployments via GitHub Actions."}]},{type:a,value:e},{type:b,tag:ae,props:{id:"install-firebase-cli-globally"},children:[{type:b,tag:j,props:{href:"#install-firebase-cli-globally"},children:[{type:a,value:"Install firebase CLI globally"}]}]},{type:a,value:e},{type:b,tag:_,props:{},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[t]},children:[{type:a,value:$}]},{type:b,tag:o,props:{className:[p,s]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:D}]},{type:a,value:" global "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:O}]},{type:a,value:" firebase-tools\n"}]}]}]},{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[t]},children:[{type:a,value:aa}]},{type:b,tag:o,props:{className:[p,s]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ab}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:O}]},{type:a,value:" -g firebase-tools\n"}]}]}]}]},{type:a,value:e},{type:b,tag:ae,props:{id:"initialize-your-firebase-project"},children:[{type:b,tag:j,props:{href:"#initialize-your-firebase-project"},children:[{type:a,value:"Initialize your firebase project"}]}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:b,tag:o,props:{className:[p,s]},children:[{type:b,tag:q,props:{},children:[{type:a,value:"firebase login\nfirebase init hosting\n"}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"When prompted, you can enter "},{type:b,tag:r,props:{},children:[{type:a,value:".output\u002Fpublic"}]},{type:a,value:" as the public directory. "},{type:b,tag:L,props:{},children:[{type:a,value:"Don't"}]},{type:a,value:" select that this will be a single-page app."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Once complete, add the following to your "},{type:b,tag:r,props:{},children:[{type:a,value:M}]},{type:a,value:" to enable server rendering in Cloud Functions:"}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[t]},children:[{type:a,value:M}]},{type:b,tag:o,props:{className:[p,Y]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"functions\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\".output\u002Fserver\""}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"hosting\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ag}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"site\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"public\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\".output\u002Fpublic\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"cleanUrls\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:"true"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"rewrites\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"**\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"function\""}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"server\""}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ah}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ah}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"You can find more details in the "},{type:b,tag:j,props:{href:"https:\u002F\u002Ffirebase.google.com\u002Fdocs\u002Fhosting\u002Fquickstart",rel:[H,I,J],target:K},children:[{type:a,value:"Firebase documentation"}]},{type:a,value:"."}]},{type:a,value:e},{type:b,tag:C,props:{id:ai},children:[{type:b,tag:j,props:{href:"#local-preview"},children:[{type:a,value:aj}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"You can preview a local version of your site if you need to test things out without deploying."}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:b,tag:o,props:{className:[p,s]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,ak,al]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:an}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:D}]},{type:a,value:" build\nfirebase emulators:start\n"}]}]}]},{type:a,value:e},{type:b,tag:C,props:{id:ap},children:[{type:b,tag:j,props:{href:"#deploy-to-firebase-hosting-via-cli"},children:[{type:a,value:aq}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Deploying to Firebase Hosting is a simple matter of just running the "},{type:b,tag:r,props:{},children:[{type:a,value:"firebase deploy"}]},{type:a,value:" command."}]},{type:a,value:e},{type:b,tag:n,props:{},children:[{type:b,tag:o,props:{className:[p,s]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:c,props:{className:[d,ak,al]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:an}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:D}]},{type:a,value:" build\nfirebase deploy\n"}]}]}]},{type:a,value:e},{type:b,tag:C,props:{id:ar},children:[{type:b,tag:j,props:{href:"#demo-site"},children:[{type:a,value:as}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"A live demo is available on "},{type:b,tag:j,props:{href:at,rel:[H,I,J],target:K},children:[{type:a,value:at}]}]}]},toc:{title:au,searchDepth:x,depth:x,links:[{id:S,depth:x,text:T,children:[{id:V,depth:av,text:W},{id:ac,depth:av,text:ad}]},{id:ai,depth:x,text:aj},{id:ap,depth:x,text:aq},{id:ar,depth:x,text:as}]}},template:"Docs"},templateOptions:{header:B,footer:B,aside:B,asideClass:au,fluid:A,banner:A},_img:{}}],fetch:{"0":{headerLinks:[{title:"开始",to:"\u002Fgetting-started\u002Fintroduction"},{title:"概念",to:"\u002Fconcepts\u002Fintroduction"},{title:"文档",to:"\u002Fdocs\u002Fusage\u002Fdata-fetching"},{title:"社区",to:"\u002Fcommunity\u002Fgetting-help"}]},"1":{repoUrl:"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fframework",prev:{slug:"cloudflare",to:"\u002Fdocs\u002Fdeployment\u002Fcloudflare",title:"Cloudflare Workers"},next:{slug:"netlify",to:"\u002Fdocs\u002Fdeployment\u002Fnetlify",title:"Netlify"}},_lazyComponents:new Set(["ProseParagraph","ButtonLink","HomeHero","SectionContentItem","HomeFeatures","IconNuxtNitro","Headline","ProseStrong","ProseA","ProseCodeInline","NuxtContainer","IconNuxtBridge","ProseH3","ProseLi","ProseUl","List","ProseH1","Alert","ProseH2","ProseTh","ProseTr","ProseThead","ProseTd","ProseTbody","ProseTable","ProseCode","ProseEm","CodeGroup","ProseH4"])},mutations:Q}}("text","element","span","token","\n","punctuation"," ","prose-paragraph","operator","prose-a","property",":","function","prose-code","pre","line-numbers","code","prose-code-inline","language-bash","filename","{","string","}",2,"\n  ",",",false,true,"prose-h2","yarn","\n      ","firebase","Firebase Hosting","nofollow","noopener","noreferrer","_blank","prose-strong","firebase.json","\n    ","install","How to deploy Nuxt to Firebase Hosting.",void 0,"prose-li","setup","Setup","prose-h3","using-nitro","Using Nitro",".firebaserc","language-json","\"\u003Cyour_project_id\u003E\"","code-group","Yarn","NPM","npm","using-firebase-cli","Using Firebase CLI","prose-h4","\"source\"","[","]","local-preview","Local preview","assign-left","variable","NITRO_PRESET","=","firebase ","deploy-to-firebase-hosting-via-cli","Deploy to Firebase Hosting via CLI","demo-site","Demo site","https:\u002F\u002Fnitro-demo-dfabe.web.app","",3)));