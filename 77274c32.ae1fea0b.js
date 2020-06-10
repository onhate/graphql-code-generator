(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{254:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(4),r=n(11),o=(n(0),n(394)),i={id:"programmatic-usage",title:"Programmatic Usage"},c={id:"getting-started/programmatic-usage",title:"Programmatic Usage",description:"The Codegen has also a complete programmatic, you can use it if you need to customize the execution flow, or if you are writing a tool that uses the codegen.",source:"@site/docs/getting-started/programmatic-usage.md",permalink:"/docs/getting-started/programmatic-usage",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/programmatic-usage.md",sidebar:"sidebar",previous:{title:"Development Workflow",permalink:"/docs/getting-started/development-workflow"},next:{title:"Further Reading",permalink:"/docs/getting-started/further-reading"}},p=[{value:"Basic Programmatic Usage",id:"basic-programmatic-usage",children:[]},{value:"Using the CLI instead of <code>core</code>",id:"using-the-cli-instead-of-core",children:[]}],s={rightToc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Codegen has also a complete programmatic, you can use it if you need to customize the execution flow, or if you are writing a tool that uses the codegen."),Object(o.b)("h3",{id:"basic-programmatic-usage"},"Basic Programmatic Usage"),Object(o.b)("p",null,"In order to use the programmatic API, start by importing ",Object(o.b)("inlineCode",{parentName:"p"},"codegen")," from ",Object(o.b)("inlineCode",{parentName:"p"},"@graphql-codegen/core"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { codegen } from '@graphql-codegen/core';\n")),Object(o.b)("p",null,"Then, create a configuration object (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-code-generator/blob/master/packages/graphql-codegen-core/src/codegen.ts#L7-L16"}),"complete signature"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { buildSchema } from 'graphql';\nimport * as fs from 'fs';\nimport * as typescriptPlugin from '@graphql-codegen/typescript';\nimport { printSchema, parse, GraphQLSchema } from 'graphql';\n\nconst schema: GraphQLSchema = buildSchema(`type A {}`);\nconst outputFile = 'relative/pathTo/filename.ts';\nconst config = {\n  // used by a plugin internally, although the 'typescript' plugin currently\n  // returns the string output, rather than writing to a file\n  filename: outputFile,\n  schema: parse(printSchema(schema)), \n  plugins: [ // Each plugin should be an object\n    {\n      typescript: {}, // Here you can pass configuration to the plugin\n    },\n  ],\n  pluginMap: {\n    typescript: typescriptPlugin,\n  },\n};\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"schema")," field be a valid ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," object. If you need to load your GraphQL schema from a external source (file, url), you can use ",Object(o.b)("inlineCode",{parentName:"p"},"loadSchema")," from ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-toolkit"),".")),Object(o.b)("p",null,"Notice that a plugin name key in ",Object(o.b)("inlineCode",{parentName:"p"},"pluginMap")," and ",Object(o.b)("inlineCode",{parentName:"p"},"plugins")," must match to identify a plugin and its configuration."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You need to import the plugin in your favorite way, you can also use ",Object(o.b)("inlineCode",{parentName:"p"},"await import")," to lazy load it.")),Object(o.b)("p",null,"Then, provide the config object to ",Object(o.b)("inlineCode",{parentName:"p"},"codegen"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const output = await codegen(config);\nfs.writeFile(path.join(__dirname, outputFile), output, () => {\n  console.log('Outputs generated!');\n});\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We are using this API in the live demo in GraphQL Code Generator website, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-code-generator/blob/master/website/live-demo/src/generate.ts"}),"here is the code"),"."))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Loading schema and documents")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can use one of the tools from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-toolkit"}),Object(o.b)("inlineCode",{parentName:"a"},"@graphql-toolkit"))," for file loading, schema merging, transformations and more. "))),Object(o.b)("h2",{id:"using-the-cli-instead-of-core"},"Using the CLI instead of ",Object(o.b)("inlineCode",{parentName:"h2"},"core")),Object(o.b)("p",null,"If you with to have the benefits that ",Object(o.b)("inlineCode",{parentName:"p"},"cli")," package has (like loading schema and document files, parsing endpoints and more), you can use ",Object(o.b)("inlineCode",{parentName:"p"},"require()")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"import"),") for ",Object(o.b)("inlineCode",{parentName:"p"},"@graphql-codegen/cli")," directly with Node.JS:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { generate } from '@graphql-codegen/cli';\n\nasync function doSomething() {\n  const generatedFiles = await generate(\n    {\n      schema: 'http://127.0.0.1:3000/graphql',\n      documents: './src/**/*.graphql',\n      generates: {\n        [process.cwd() + '/models/types.d.ts']: {\n          plugins: ['typescript'],\n        },\n      },\n    },\n    true\n  );\n}\n")),Object(o.b)("p",null,"The return value should be of type ",Object(o.b)("inlineCode",{parentName:"p"},"Promise<FileOutput[]>"),"."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This usage will not work in a browser environment, because the ",Object(o.b)("inlineCode",{parentName:"p"},"cli")," package depends on NodeJS internals and file-system."))))}l.isMDXComponent=!0},394:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,u=m["".concat(i,".").concat(d)]||m[d]||b[d]||o;return n?r.a.createElement(u,c(c({ref:t},s),{},{components:n})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);