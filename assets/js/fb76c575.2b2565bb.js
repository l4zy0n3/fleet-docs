"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[3200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={},i="Agent Initiated",s={unversionedId:"agent-initiated",id:"version-0.4/agent-initiated",title:"Agent Initiated",description:"Refer to the overview page for a background information on the agent initiated registration style.",source:"@site/versioned_docs/version-0.4/agent-initiated.md",sourceDirName:".",slug:"/agent-initiated",permalink:"/0.4/agent-initiated",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.4/agent-initiated.md",tags:[],version:"0.4",lastUpdatedAt:1685637093,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Cluster Registration Tokens",permalink:"/0.4/cluster-tokens"},next:{title:"Manager Initiated",permalink:"/0.4/manager-initiated"}},o={},p=[{value:"Cluster Registration Token and Client ID",id:"cluster-registration-token-and-client-id",level:2},{value:"Install agent for a new Cluster",id:"install-agent-for-a-new-cluster",level:2},{value:"Install agent for a predefined Cluster",id:"install-agent-for-a-predefined-cluster",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"agent-initiated"},"Agent Initiated"),(0,l.kt)("p",null,"Refer to the ",(0,l.kt)("a",{parentName:"p",href:"/0.4/cluster-overview#agent-initiated-registration"},"overview page")," for a background information on the agent initiated registration style."),(0,l.kt)("h2",{id:"cluster-registration-token-and-client-id"},"Cluster Registration Token and Client ID"),(0,l.kt)("p",null,"A downstream cluster is registered using the ",(0,l.kt)("strong",{parentName:"p"},"cluster registration token")," and optionally a ",(0,l.kt)("strong",{parentName:"p"},"client ID")," or ",(0,l.kt)("strong",{parentName:"p"},"cluster labels"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"cluster registration token")," is a credential that will authorize the downstream cluster agent to be\nable to initiate the registration process. This is required. Refer to the ",(0,l.kt)("a",{parentName:"p",href:"/0.4/cluster-tokens"},"cluster registration token page")," for more information\non how to create tokens and obtain the values. The cluster registration token is manifested as a ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," file that will\nbe passed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install")," process."),(0,l.kt)("p",null,"There are two styles of registering an agent. You can have the cluster for this agent dynamically created, in which\ncase you will probably want to specify ",(0,l.kt)("strong",{parentName:"p"},"cluster labels")," upon registration.  Or you can have the agent register to a predefined\ncluster in the Fleet manager, in which case you will need a ",(0,l.kt)("strong",{parentName:"p"},"client ID"),".  The former approach is typically the easiest."),(0,l.kt)("h2",{id:"install-agent-for-a-new-cluster"},"Install agent for a new Cluster"),(0,l.kt)("p",null,"The Fleet agent is installed as a Helm chart. Following are explanations how to determine and set its parameters."),(0,l.kt)("p",null,"First, follow the ",(0,l.kt)("a",{parentName:"p",href:"/0.4/cluster-tokens"},"cluster registration token page")," to obtain the ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," which contains\nthe registration token to authenticate against the Fleet cluster."),(0,l.kt)("p",null,"Second, optionally you can define labels that will assigned to the newly created cluster upon registration. After\nregistration is completed an agent cannot change the labels of the cluster. To add cluster labels add\n",(0,l.kt)("inlineCode",{parentName:"p"},"--set-string labels.KEY=VALUE")," to the below Helm command. To add the labels ",(0,l.kt)("inlineCode",{parentName:"p"},"foo=bar")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"bar=baz")," then you would\nadd ",(0,l.kt)("inlineCode",{parentName:"p"},"--set-string labels.foo=bar --set-string labels.bar=baz")," to the command line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# Leave blank if you do not want any labels\nCLUSTER_LABELS="--set-string labels.example=true --set-string labels.env=dev"\n')),(0,l.kt)("p",null,"Third, set variables with the Fleet cluster's API Server URL and CA, for the downstream cluster to use for connecting."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"API_SERVER_URL=https://...\nAPI_SERVER_CA_DATA=...\n")),(0,l.kt)("p",null,"Value in ",(0,l.kt)("inlineCode",{parentName:"p"},"API_SERVER_CA_DATA")," can be obtained from a ",(0,l.kt)("inlineCode",{parentName:"p"},".kube/config")," file with valid data to connect to the upstream cluster\n(under the ",(0,l.kt)("inlineCode",{parentName:"p"},"certificate-authority-data")," key). Alternatively it can be obtained from within the upstream cluster itself,\nby looking up the default ServiceAccount secret name (typically prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"default-token-"),", in the default namespace),\nunder the ",(0,l.kt)("inlineCode",{parentName:"p"},"ca.crt")," key."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Use proper namespace and release name"),":\nFor the agent chart the namespace must be ",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-fleet-system")," and the release name ",(0,l.kt)("inlineCode",{parentName:"p"},"fleet-agent"))),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Ensure you are installing to the right cluster"),":\nHelm will use the default context in ",(0,l.kt)("inlineCode",{parentName:"p"},"${HOME}/.kube/config")," to deploy the agent. Use ",(0,l.kt)("inlineCode",{parentName:"p"},"--kubeconfig")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"--kube-context"),"\nto change which cluster Helm is installing to.")),(0,l.kt)("p",null,"Finally, install the agent using Helm."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'helm -n cattle-fleet-system install --create-namespace --wait \\\n    $CLUSTER_LABELS \\\n    --values values.yaml \\\n    --set apiServerCA="$API_SERVER_CA_DATA" \\\n    --set apiServerURL="$API_SERVER_URL" \\\n    fleet-agent https://github.com/rancher/fleet/releases/download/v0.4.1/fleet-agent-0.4.1.tgz\n')),(0,l.kt)("p",null,"The agent should now be deployed.  You can check that status of the fleet pods by running the below commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Ensure kubectl is pointing to the right cluster\nkubectl -n cattle-fleet-system logs -l app=fleet-agent\nkubectl -n cattle-fleet-system get pods -l app=fleet-agent\n")),(0,l.kt)("p",null,"Additionally you should see a new cluster registered in the Fleet manager.  Below is an example of checking that a new cluster\nwas registered in the ",(0,l.kt)("inlineCode",{parentName:"p"},"clusters")," ",(0,l.kt)("a",{parentName:"p",href:"/0.4/namespaces"},"namespace"),".  Please ensure your ",(0,l.kt)("inlineCode",{parentName:"p"},"${HOME}/.kube/config")," is pointed to the Fleet\nmanager to run this command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n clusters get clusters.fleet.cattle.io\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME                   BUNDLES-READY   NODES-READY   SAMPLE-NODE             LAST-SEEN              STATUS\ncluster-ab13e54400f1   1/1             1/1           k3d-cluster2-server-0   2020-08-31T19:23:10Z   \n")),(0,l.kt)("h2",{id:"install-agent-for-a-predefined-cluster"},"Install agent for a predefined Cluster"),(0,l.kt)("p",null,"Client IDs are for the purpose of predefining clusters in the Fleet manager with existing labels and repos targeted to them.\nA client ID is not required and is just one approach to managing clusters.\nThe ",(0,l.kt)("strong",{parentName:"p"},"client ID")," is a unique string that will identify the cluster.\nThis string is user generated and opaque to the Fleet manager and agent.  It is assumed to be sufficiently unique. For security reasons one should not be able to easily guess this value\nas then one cluster could impersonate another.  The client ID is optional and if not specified the UID field of the ",(0,l.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace\nresource will be used as the client ID. Upon registration if the client ID is found on a ",(0,l.kt)("inlineCode",{parentName:"p"},"Cluster")," resource in the Fleet manager it will associate\nthe agent with that ",(0,l.kt)("inlineCode",{parentName:"p"},"Cluster"),".  If no ",(0,l.kt)("inlineCode",{parentName:"p"},"Cluster")," resource is found with that client ID a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Cluster")," resource will be created with the specific\nclient ID."),(0,l.kt)("p",null,"The Fleet agent is installed as a Helm chart. The only parameters to the helm chart installation should be the cluster registration token, which\nis represented by the ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," file and the client ID.  The client ID is optional."),(0,l.kt)("p",null,"First, create a ",(0,l.kt)("inlineCode",{parentName:"p"},"Cluster")," in the Fleet Manager with the random client ID you have chosen."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Cluster\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: my-cluster\n  namespace: clusters\nspec:\n  clientID: "really-random"\n')),(0,l.kt)("p",null,"Second, follow the ",(0,l.kt)("a",{parentName:"p",href:"/0.4/cluster-tokens"},"cluster registration token page")," to obtain the ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," file to be used."),(0,l.kt)("p",null,"Third, setup your environment to use the client ID."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'CLUSTER_CLIENT_ID="really-random"\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Use proper namespace and release name"),":\nFor the agent chart the namespace must be ",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-fleet-system")," and the release name ",(0,l.kt)("inlineCode",{parentName:"p"},"fleet-agent"))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Ensure you are installing to the right cluster"),":\nHelm will use the default context in ",(0,l.kt)("inlineCode",{parentName:"p"},"${HOME}/.kube/config")," to deploy the agent. Use ",(0,l.kt)("inlineCode",{parentName:"p"},"--kubeconfig")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"--kube-context"),"\nto change which cluster Helm is installing to.")),(0,l.kt)("p",null,"Finally, install the agent using Helm."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'helm -n cattle-fleet-system install --create-namespace --wait \\\n    --set clientID="$CLUSTER_CLIENT_ID" \\\n    --values values.yaml \\\n    fleet-agent https://github.com/rancher/fleet/releases/download/v0.4.1/fleet-agent-v0.4.1.tgz\n')),(0,l.kt)("p",null,"The agent should now be deployed.  You can check that status of the fleet pods by running the below commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Ensure kubectl is pointing to the right cluster\nkubectl -n cattle-fleet-system logs -l app=fleet-agent\nkubectl -n cattle-fleet-system get pods -l app=fleet-agent\n")),(0,l.kt)("p",null,"Additionally you should see a new cluster registered in the Fleet manager.  Below is an example of checking that a new cluster\nwas registered in the ",(0,l.kt)("inlineCode",{parentName:"p"},"clusters")," ",(0,l.kt)("a",{parentName:"p",href:"/0.4/namespaces"},"namespace"),".  Please ensure your ",(0,l.kt)("inlineCode",{parentName:"p"},"${HOME}/.kube/config")," is pointed to the Fleet\nmanager to run this command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n clusters get clusters.fleet.cattle.io\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME                   BUNDLES-READY   NODES-READY   SAMPLE-NODE             LAST-SEEN              STATUS\nmy-cluster             1/1             1/1           k3d-cluster2-server-0   2020-08-31T19:23:10Z   \n")))}u.isMDXComponent=!0}}]);