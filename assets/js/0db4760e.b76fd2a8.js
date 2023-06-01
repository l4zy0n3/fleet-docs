"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[2771],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8095:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={},o="Create a GitRepo Resource",s={unversionedId:"gitrepo-add",id:"version-0.6/gitrepo-add",title:"Create a GitRepo Resource",description:"Create GitRepo Instance",source:"@site/versioned_docs/version-0.6/gitrepo-add.md",sourceDirName:".",slug:"/gitrepo-add",permalink:"/0.6/gitrepo-add",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.6/gitrepo-add.md",tags:[],version:"0.6",lastUpdatedAt:1685637093,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Setup Multi User",permalink:"/0.6/multi-user"},next:{title:"Mapping to Downstream Clusters",permalink:"/0.6/gitrepo-targets"}},p={},l=[{value:"Create GitRepo Instance",id:"create-gitrepo-instance",level:2},{value:"Using Helm Values",id:"using-helm-values",level:2},{value:"Using ValuesFrom",id:"using-valuesfrom",level:3},{value:"Adding Private Git Repository",id:"adding-private-git-repository",level:2},{value:"Using HTTP Auth",id:"using-http-auth",level:3},{value:"Using Private Helm Repositories",id:"using-private-helm-repositories",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-gitrepo-resource"},"Create a GitRepo Resource"),(0,r.kt)("h2",{id:"create-gitrepo-instance"},"Create GitRepo Instance"),(0,r.kt)("p",null,"Git repositories are registered by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," resource in Kubernetes. Refer\nto the ",(0,r.kt)("a",{parentName:"p",href:"/0.6/tut-deployment"},"creating a deployment tutorial")," for examples."),(0,r.kt)("p",null,"The available fields are documented in the ",(0,r.kt)("a",{parentName:"p",href:"/0.6/ref-gitrepo"},"GitRepo resource reference")),(0,r.kt)("h2",{id:"using-helm-values"},"Using Helm Values"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How changes are applied to ",(0,r.kt)("inlineCode",{parentName:"strong"},"values.yaml")),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Note that the most recently applied changes to the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," will override any previously existing values.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When changes are applied to the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," from multiple sources at the same time, the values will update in the following order: ",(0,r.kt)("inlineCode",{parentName:"p"},"helm.values")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"helm.valuesFiles")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"helm.valuesFrom"),". That means ",(0,r.kt)("inlineCode",{parentName:"p"},"valuesFrom")," will take precedence over both, ",(0,r.kt)("inlineCode",{parentName:"p"},"valuesFiles")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"values"),"."))),(0,r.kt)("h3",{id:"using-valuesfrom"},"Using ValuesFrom"),(0,r.kt)("p",null,"These examples showcase the style and format for using ",(0,r.kt)("inlineCode",{parentName:"p"},"valuesFrom"),". ConfigMaps and Secrets should be created in ",(0,r.kt)("em",{parentName:"p"},"downstream clusters"),"."),(0,r.kt)("p",null,"Example ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/configmap/"},"ConfigMap"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: configmap-values\n  namespace: default\ndata:  \n  values.yaml: |-\n    replication: true\n    replicas: 2\n    serviceType: NodePort\n")),(0,r.kt)("p",null,"Example ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Secret"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: secret-values\n  namespace: default\nstringData:\n  values.yaml: |-\n    replication: true\n    replicas: 3\n    serviceType: NodePort\n")),(0,r.kt)("p",null,"A secret like that, can be created from a YAML file ",(0,r.kt)("inlineCode",{parentName:"p"},"secretdata.yaml")," by running the following kubectl command: ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl create secret generic secret-values --from-file=values.yaml=secretdata.yaml")),(0,r.kt)("p",null,"The resources can then be referenced from a ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'helm:\n  chart: simple-chart\n  valuesFrom:\n    - secretKeyRef:\n        name: secret-values\n        namespace: default\n        key: values.yaml\n    - configMapKeyRef:\n        name: configmap-values\n        namespace: default\n        key: values.yaml\n  values:\n    replicas: "4"\n')),(0,r.kt)("h2",{id:"adding-private-git-repository"},"Adding Private Git Repository"),(0,r.kt)("p",null,"Fleet supports both http and ssh auth key for private repository. To use this you have to create a secret in the same namespace."),(0,r.kt)("p",null,"For example, to generate a private ssh key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'ssh-keygen -t rsa -b 4096 -m pem -C "user@email.com"\n')),(0,r.kt)("p",null,"Note: The private key format has to be in ",(0,r.kt)("inlineCode",{parentName:"p"},"EC PRIVATE KEY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RSA PRIVATE KEY")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIVATE KEY")," and should not contain a passphase."),(0,r.kt)("p",null,"Put your private key into secret, use the namespace the GitRepo is in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"kubectl create secret generic ssh-key -n fleet-default --from-file=ssh-privatekey=/file/to/private/key  --type=kubernetes.io/ssh-auth\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Private key with passphrase is not supported.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The key has to be in PEM format.")),(0,r.kt)("p",null,"Fleet supports putting ",(0,r.kt)("inlineCode",{parentName:"p"},"known_hosts")," into ssh secret. Here is an example of how to add it:"),(0,r.kt)("p",null,"Fetch the public key hash(take github as an example)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ssh-keyscan -H github.com\n")),(0,r.kt)("p",null,"And add it into secret:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: ssh-key\ntype: kubernetes.io/ssh-auth\nstringData:\n  ssh-privatekey: <private-key>\n  known_hosts: |-\n    |1|YJr1VZoi6dM0oE+zkM0do3Z04TQ=|7MclCn1fLROZG+BgR4m1r8TLwWc= ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you don't add it any server's public key will be trusted and added. (",(0,r.kt)("inlineCode",{parentName:"p"},"ssh -o stricthostkeychecking=accept-new")," will be used)")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are using openssh format for the private key and you are creating it in the UI, make sure a carriage return is appended in the end of the private key.")),(0,r.kt)("h3",{id:"using-http-auth"},"Using HTTP Auth"),(0,r.kt)("p",null,"Create a secret containing username and password. You can replace the password with a personal access token if necessary. Also see ",(0,r.kt)("a",{parentName:"p",href:"./troubleshooting#http-secrets-in-github"},"HTTP secrets in Github"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create secret generic basic-auth-secret -n fleet-default --type=kubernetes.io/basic-auth --from-literal=username=$user --from-literal=password=$pat\n")),(0,r.kt)("p",null,"Just like with SSH, reference the secret in your GitRepo resource via ",(0,r.kt)("inlineCode",{parentName:"p"},"clientSecretName"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spec:\n  repo: https://github.com/fleetrepoci/gitjob-private.git\n  branch: main\n  clientSecretName: basic-auth-secret\n")),(0,r.kt)("h2",{id:"using-private-helm-repositories"},"Using Private Helm Repositories"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The credentials will be used unconditionally for all Helm repositories referenced by the gitrepo resource.\nMake sure you don't leak credentials by mixing public and private repositories. Split them into different gitrepos, or use\n",(0,r.kt)("inlineCode",{parentName:"p"},"helmRepoUrlRegex")," to limit the scope of credentials to certain servers.")),(0,r.kt)("p",null,"For a private Helm repo, users can reference a secret with the following keys:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," for basic http auth if the Helm HTTP repo is behind basic auth.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cacerts")," for custom CA bundle if the Helm repo is using a custom CA.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ssh-privatekey")," for ssh private key if repo is using ssh protocol. Private key with passphase is not supported currently."))),(0,r.kt)("p",null,"For example, to add a secret in kubectl, run"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kubectl create secret -n $namespace generic helm --from-literal=username=foo --from-literal=password=bar --from-file=cacerts=/path/to/cacerts --from-file=ssh-privatekey=/path/to/privatekey.pem")),(0,r.kt)("p",null,"After secret is created, specify the secret to ",(0,r.kt)("inlineCode",{parentName:"p"},"gitRepo.spec.helmSecretName"),". Make sure secret is created under the same namespace with gitrepo."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are using ",(0,r.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},'"rancher-backups"')," and want this secret to be included the backup, please add the label ",(0,r.kt)("inlineCode",{parentName:"p"},"resources.cattle.io/backup: true")," to the secret. In that case, make sure to encrypt the backup to protect sensitive credentials."),(0,r.kt)("h1",{parentName:"admonition",id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",{parentName:"admonition"},"See Fleet Troubleshooting section ",(0,r.kt)("a",{parentName:"p",href:"/0.6/troubleshooting"},"here"),".")))}u.isMDXComponent=!0}}]);