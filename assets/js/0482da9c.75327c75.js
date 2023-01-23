"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[2140],{30114:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={title:"TRG 5.05 - Chart Values"},l=void 0,s={unversionedId:"release/trg-5/trg-5-5",id:"release/trg-5/trg-5-5",title:"TRG 5.05 - Chart Values",description:"| Author               | Status | Created      | Post-History    |",source:"@site/docs/release/trg-5/trg-5-5.md",sourceDirName:"release/trg-5",slug:"/release/trg-5/trg-5-5",permalink:"/docs/release/trg-5/trg-5-5",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-5/trg-5-5.md",tags:[],version:"current",frontMatter:{title:"TRG 5.05 - Chart Values"},sidebar:"developer",previous:{title:"TRG 5.04 - Resource Management",permalink:"/docs/release/trg-5/trg-5-4"},next:{title:"TRG 5.06 - Application Configuration",permalink:"/docs/release/trg-5/trg-5-6"}},o={},u=[{value:"Description",id:"description",level:2},{value:"Container images",id:"container-images",level:2}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Author"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Created"),(0,n.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Catena-X System Team"),(0,n.kt)("td",{parentName:"tr",align:null},"Active"),(0,n.kt)("td",{parentName:"tr",align:null},"10-Nov-2022"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial release")))),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Best practices for Helm chart ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," file."),(0,n.kt)("h2",{id:"container-images"},"Container images"),(0,n.kt)("p",null,"A proper section for Container images should look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"image:\n  registry: docker.io\n  repository: bitnami/postgresql\n  tag: 14.5.0-debian-11-r19\n  digest: \"\"\n  ## Specify an imagePullPolicy\n  ## Defaults to 'Always' if image tag is 'latest', else set to 'IfNotPresent'\n  ## ref: https://kubernetes.io/docs/user-guide/images/#pre-pulling-images\n  ##\n  pullPolicy: IfNotPresent\n  ## Optionally specify an array of imagePullSecrets.\n  ## Secrets must be manually created in the namespace.\n  ## ref: https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/\n  ## Example:\n  ## pullSecrets:\n  ##   - myRegistryKeySecretName\n  ##\n  pullSecrets: [ ]\n  ## Set to true if you would like to see extra information on logs\n  ##\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"do not use ",(0,n.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"latest")," as image tag!"),(0,n.kt)("p",{parentName:"admonition"},"This might cause unexpected effects, as the Helm release could change without bumping the chart version! Also due to\nsecurity reasons you shall not use ",(0,n.kt)("inlineCode",{parentName:"p"},"latest")," tag.")))}m.isMDXComponent=!0}}]);