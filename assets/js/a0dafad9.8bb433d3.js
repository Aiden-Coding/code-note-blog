"use strict";(self.webpackChunkcode_note_blog=self.webpackChunkcode_note_blog||[]).push([[627],{78029:(n,r,i)=>{i.r(r),i.d(r,{assets:()=>d,contentTitle:()=>p,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var e=i(11527),s=i(88672);const t={},p=void 0,l={id:"Spring\u5168\u5bb6\u6876/Spring/Spring\u6982\u8ff0",title:"Spring\u6982\u8ff0",description:"Spring \u662f Java EE \u7f16\u7a0b\u9886\u57df\u7684\u4e00\u6b3e\u8f7b\u91cf\u7ea7\u7684\u5f00\u6e90\u6846\u67b6\uff0c\u7531\u88ab\u79f0\u4e3a\u201cSpring \u4e4b\u7236\u201d\u7684 Rod Johnson \u4e8e 2002 \u5e74\u63d0\u51fa\u5e76\u521b\u7acb\uff0c\u5b83\u7684\u76ee\u6807\u5c31\u662f\u8981\u7b80\u5316 Java \u4f01\u4e1a\u7ea7\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u96be\u5ea6\u548c\u5468\u671f\u3002",source:"@site/docs/Spring\u5168\u5bb6\u6876/Spring/Spring\u6982\u8ff0.md",sourceDirName:"Spring\u5168\u5bb6\u6876/Spring",slug:"/Spring\u5168\u5bb6\u6876/Spring/Spring\u6982\u8ff0",permalink:"/code-note-blog/docs/Spring\u5168\u5bb6\u6876/Spring/Spring\u6982\u8ff0",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Spring\u5168\u5bb6\u6876/Spring/Spring\u6982\u8ff0.md",tags:[],version:"current",frontMatter:{},sidebar:"spring",previous:{title:"Spring\u6ce8\u89e3",permalink:"/code-note-blog/docs/Spring\u5168\u5bb6\u6876/Spring/Spring\u5e38\u89c1\u6ce8\u89e3"},next:{title:"Spring",permalink:"/code-note-blog/docs/Spring\u5168\u5bb6\u6876/Spring/Spring\u5408\u96c6"}},d={},c=[{value:"Spring \u7684\u8bde\u751f\u4e0e\u53d1\u5c55",id:"spring-\u7684\u8bde\u751f\u4e0e\u53d1\u5c55",level:2},{value:"Spring \u7684\u72ed\u4e49\u548c\u5e7f\u4e49",id:"spring-\u7684\u72ed\u4e49\u548c\u5e7f\u4e49",level:2},{value:"\u5e7f\u4e49\u7684 Spring\uff1aSpring \u6280\u672f\u6808",id:"\u5e7f\u4e49\u7684-springspring-\u6280\u672f\u6808",level:3},{value:"\u72ed\u4e49\u7684 Spring\uff1aSpring Framework",id:"\u72ed\u4e49\u7684-springspring-framework",level:3},{value:"Spring Framework \u7684\u7279\u70b9",id:"spring-framework-\u7684\u7279\u70b9",level:2},{value:"<strong>\u65b9\u4fbf\u89e3\u8026\uff0c\u7b80\u5316\u5f00\u53d1</strong>",id:"\u65b9\u4fbf\u89e3\u8026\u7b80\u5316\u5f00\u53d1",level:3},{value:"<strong>\u65b9\u4fbf\u96c6\u6210\u5404\u79cd\u4f18\u79c0\u6846\u67b6</strong>",id:"\u65b9\u4fbf\u96c6\u6210\u5404\u79cd\u4f18\u79c0\u6846\u67b6",level:3},{value:"<strong>\u964d\u4f4e Java EE API \u7684\u4f7f\u7528\u96be\u5ea6</strong>",id:"\u964d\u4f4e-java-ee-api-\u7684\u4f7f\u7528\u96be\u5ea6",level:3},{value:"<strong>\u65b9\u4fbf\u7a0b\u5e8f\u7684\u6d4b\u8bd5</strong>",id:"\u65b9\u4fbf\u7a0b\u5e8f\u7684\u6d4b\u8bd5",level:3},{value:"<strong>AOP \u7f16\u7a0b\u7684\u652f\u6301</strong>",id:"aop-\u7f16\u7a0b\u7684\u652f\u6301",level:3},{value:"<strong>\u58f0\u660e\u5f0f\u4e8b\u52a1\u7684\u652f\u6301</strong>",id:"\u58f0\u660e\u5f0f\u4e8b\u52a1\u7684\u652f\u6301",level:3},{value:"1. Data Access/Integration\uff08\u6570\u636e\u8bbf\u95ee\uff0f\u96c6\u6210\uff09",id:"1-data-accessintegration\u6570\u636e\u8bbf\u95ee\u96c6\u6210",level:2},{value:"2. Web \u6a21\u5757",id:"2-web-\u6a21\u5757",level:2},{value:"3. Core Container\uff08Spring \u7684\u6838\u5fc3\u5bb9\u5668\uff09",id:"3-core-containerspring-\u7684\u6838\u5fc3\u5bb9\u5668",level:2},{value:"4. AOP\u3001Aspects\u3001Instrumentation \u548c Messaging",id:"4-aopaspectsinstrumentation-\u548c-messaging",level:2},{value:"5. Test \u6a21\u5757",id:"5-test-\u6a21\u5757",level:2}];function g(n){const r={br:"br",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.p,{children:"Spring \u662f Java EE \u7f16\u7a0b\u9886\u57df\u7684\u4e00\u6b3e\u8f7b\u91cf\u7ea7\u7684\u5f00\u6e90\u6846\u67b6\uff0c\u7531\u88ab\u79f0\u4e3a\u201cSpring \u4e4b\u7236\u201d\u7684 Rod Johnson \u4e8e 2002 \u5e74\u63d0\u51fa\u5e76\u521b\u7acb\uff0c\u5b83\u7684\u76ee\u6807\u5c31\u662f\u8981\u7b80\u5316 Java \u4f01\u4e1a\u7ea7\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u96be\u5ea6\u548c\u5468\u671f\u3002"}),"\n",(0,e.jsx)(r.p,{children:"Spring \u81ea\u8bde\u751f\u4ee5\u6765\u5907\u53d7\u9752\u7750\uff0c\u4e00\u76f4\u88ab\u5e7f\u5927\u5f00\u53d1\u4eba\u5458\u4f5c\u4e3a Java \u4f01\u4e1a\u7ea7\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u7684\u9996\u9009\u3002\u65f6\u81f3\u4eca\u65e5\uff0cSpring \u4fe8\u7136\u6210\u4e3a\u4e86 Java EE \u4ee3\u540d\u8bcd\uff0c\u6210\u4e3a\u4e86\u6784\u5efa Java EE \u5e94\u7528\u7684\u4e8b\u5b9e\u6807\u51c6\u3002"}),"\n",(0,e.jsx)(r.h2,{id:"spring-\u7684\u8bde\u751f\u4e0e\u53d1\u5c55",children:"Spring \u7684\u8bde\u751f\u4e0e\u53d1\u5c55"}),"\n",(0,e.jsx)(r.p,{children:"\u65e9\u671f\u7684 J2EE\uff08Java EE \u5e73\u53f0\uff09\u63a8\u5d07\u4ee5 EJB \u4e3a\u6838\u5fc3\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u4f46\u8fd9\u79cd\u5f00\u53d1\u65b9\u5f0f\u5728\u5b9e\u9645\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5b58\u5728\u79cd\u79cd\u5f0a\u7aef\uff0c\u4f8b\u5982\u4f7f\u7528\u590d\u6742\u3001\u4ee3\u7801\u81c3\u80bf\u3001\u4ee3\u7801\u4fb5\u5165\u6027\u5f3a\u3001\u5f00\u53d1\u5468\u671f\u957f\u3001\u79fb\u690d\u96be\u5ea6\u5927\u7b49\u3002"}),"\n",(0,e.jsx)(r.p,{children:"Rod Johnson \u5728\u5176 2004 \u5e74\u7f16\u8457\u7684\u7545\u9500\u4e66\u300aExpert One-on-One J2EE Development without EJB\u300b\u4e2d\uff0c\u9488\u5bf9 EJB \u5404\u79cd\u81c3\u80bf\u7684\u7ed3\u6784\u8fdb\u884c\u4e86\u9010\u4e00\u7684\u5206\u6790\u548c\u5426\u5b9a\uff0c\u5e76\u5206\u522b\u4ee5\u66f4\u52a0\u7b80\u6d01\u7684\u65b9\u5f0f\u8fdb\u884c\u4e86\u66ff\u6362\u3002"}),"\n",(0,e.jsx)(r.p,{children:"\u5728\u8fd9\u672c\u4e66\u4e2d\uff0cRod Johnson \u901a\u8fc7\u4e00\u4e2a\u5305\u542b 3 \u4e07\u884c\u4ee3\u7801\u7684\u9644\u4ef6\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u5728\u4e0d\u4f7f\u7528 EJB \u7684\u60c5\u51b5\u4e0b\u6784\u5efa\u4e00\u4e2a\u9ad8\u8d28\u91cf\u3001\u53ef\u6269\u5c55\u7684 Java \u5e94\u7528\u7a0b\u5e8f\u3002\u5728\u8fd9\u4e2a\u9644\u4ef6\u4e2d\uff0cRod Johnson \u7f16\u5199\u4e86\u4e0a\u4e07\u884c\u57fa\u7840\u7ed3\u6784\u4ee3\u7801\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u8bb8\u591a\u53ef\u91cd\u7528\u7684 Java \u63a5\u53e3\u548c\u7c7b\uff0c\u4f8b\u5982 ApplicationContext\u3001BeanFactory \u7b49\u3002\u8fd9\u4e9b\u7c7b\u7684\u6839\u5305\u88ab\u547d\u540d\u4e3a com.interface21\uff0c\u542b\u4e49\u4e3a\uff1a\u8fd9\u662f\u63d0\u4f9b\u7ed9 21 \u4e16\u7eaa\u7684\u4e00\u4e2a\u53c2\u8003\u3002"}),"\n",(0,e.jsx)(r.p,{children:"\u8fd9\u672c\u4e66\u5f71\u54cd\u751a\u8fdc\uff0c\u540e\u6765 Rod Johnson \u5c06 com.interface21 \u7684\u4ee3\u7801\u5f00\u6e90\uff0c\u5e76\u628a\u8fd9\u4e2a\u65b0\u6846\u67b6\u5e76\u547d\u540d\u4e3a\u201cSpring\u201d\uff0c\u542b\u4e49\u4e3a\uff1aSpring \u50cf\u4e00\u7f15\u6625\u98ce\u4e00\u6837\uff0c\u626b\u5e73\u4f20\u7edf J2EE \u7684\u5bd2\u51ac\u3002"}),"\n",(0,e.jsx)(r.p,{children:"2003 \u5e74 2 \u6708\uff0cSpring 0.9 \u7248\u672c\u53d1\u5e03\uff0c\u5b83\u91c7\u7528\u4e86 Apache 2.0 \u5f00\u6e90\u534f\u8bae\uff1b2004 \u5e74 4 \u6708\uff0cSpring 1.0 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\u3002\u5230\u76ee\u524d\u4e3a\u6b62\uff0cSpring \u5df2\u7ecf\u6b65\u5165\u5230\u4e86\u7b2c 5 \u4e2a\u5927\u7248\u672c\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u5e38\u8bf4\u7684 Spring 5\u3002"}),"\n",(0,e.jsx)(r.h2,{id:"spring-\u7684\u72ed\u4e49\u548c\u5e7f\u4e49",children:"Spring \u7684\u72ed\u4e49\u548c\u5e7f\u4e49"}),"\n",(0,e.jsx)(r.p,{children:"\u5728\u4e0d\u540c\u7684\u8bed\u5883\u4e2d\uff0cSpring \u6240\u4ee3\u8868\u7684\u542b\u4e49\u662f\u4e0d\u540c\u7684\u3002\u4e0b\u9762\u6211\u4eec\u5c31\u5206\u522b\u4ece\u201c\u5e7f\u4e49\u201d\u548c\u201c\u72ed\u4e49\u201d\u4e24\u4e2a\u89d2\u5ea6\uff0c\u5bf9 Spring \u8fdb\u884c\u4ecb\u7ecd\u3002"}),"\n",(0,e.jsx)(r.h3,{id:"\u5e7f\u4e49\u7684-springspring-\u6280\u672f\u6808",children:"\u5e7f\u4e49\u7684 Spring\uff1aSpring \u6280\u672f\u6808"}),"\n",(0,e.jsx)(r.p,{children:"\u5e7f\u4e49\u4e0a\u7684 Spring \u6cdb\u6307\u4ee5 Spring Framework \u4e3a\u6838\u5fc3\u7684 Spring \u6280\u672f\u6808\u3002"}),"\n",(0,e.jsx)(r.p,{children:"\u7ecf\u8fc7\u5341\u591a\u5e74\u7684\u53d1\u5c55\uff0cSpring \u5df2\u7ecf\u4e0d\u518d\u662f\u4e00\u4e2a\u5355\u7eaf\u7684\u5e94\u7528\u6846\u67b6\uff0c\u800c\u662f\u9010\u6e10\u53d1\u5c55\u6210\u4e3a\u4e00\u4e2a\u7531\u591a\u4e2a\u4e0d\u540c\u5b50\u9879\u76ee\uff08\u6a21\u5757\uff09\u7ec4\u6210\u7684\u6210\u719f\u6280\u672f\uff0c\u4f8b\u5982 Spring Framework\u3001Spring MVC\u3001SpringBoot\u3001Spring Cloud\u3001Spring Data\u3001Spring Security \u7b49\uff0c\u5176\u4e2d Spring Framework \u662f\u5176\u4ed6\u5b50\u9879\u76ee\u7684\u57fa\u7840\u3002"}),"\n",(0,e.jsx)(r.p,{children:"\u8fd9\u4e9b\u5b50\u9879\u76ee\u6db5\u76d6\u4e86\u4ece\u4f01\u4e1a\u7ea7\u5e94\u7528\u5f00\u53d1\u5230\u4e91\u8ba1\u7b97\u7b49\u5404\u65b9\u9762\u7684\u5185\u5bb9\uff0c\u80fd\u591f\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u89e3\u51b3\u8f6f\u4ef6\u53d1\u5c55\u8fc7\u7a0b\u4e2d\u4e0d\u65ad\u4ea7\u751f\u7684\u5404\u79cd\u5b9e\u9645\u95ee\u9898\uff0c\u7ed9\u5f00\u53d1\u4eba\u5458\u5e26\u6765\u4e86\u66f4\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\u3002"}),"\n",(0,e.jsxs)(r.table,{children:[(0,e.jsx)(r.thead,{children:(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.th,{children:"\u9879\u76ee\u540d\u79f0"}),(0,e.jsx)(r.th,{children:"\u63cf\u8ff0"})]})}),(0,e.jsxs)(r.tbody,{children:[(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"Spring Data"}),(0,e.jsx)(r.td,{children:"Spring \u63d0\u4f9b\u7684\u6570\u636e\u8bbf\u95ee\u6a21\u5757\uff0c\u5bf9 JDBC \u548c ORM \u63d0\u4f9b\u4e86\u5f88\u597d\u7684\u652f\u6301\u3002\u901a\u8fc7\u5b83\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4f7f\u7528\u4e00\u79cd\u76f8\u5bf9\u7edf\u4e00\u7684\u65b9\u5f0f\uff0c\u6765\u8bbf\u95ee\u4f4d\u4e8e\u4e0d\u540c\u7c7b\u578b\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u3002"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"Spring Batch"}),(0,e.jsx)(r.td,{children:"\u4e00\u6b3e\u4e13\u95e8\u9488\u5bf9\u4f01\u4e1a\u7ea7\u7cfb\u7edf\u4e2d\u7684\u65e5\u5e38\u6279\u5904\u7406\u4efb\u52a1\u7684\u8f7b\u91cf\u7ea7\u6846\u67b6\uff0c\u80fd\u591f\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u65b9\u4fbf\u7684\u5f00\u53d1\u51fa\u5065\u58ee\u3001\u9ad8\u6548\u7684\u6279\u5904\u7406\u5e94\u7528\u7a0b\u5e8f\u3002"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"Spring Security"}),(0,e.jsx)(r.td,{children:"\u524d\u8eab\u4e3a Acegi\uff0c\u662f Spring \u4e2d\u8f83\u6210\u719f\u7684\u5b50\u6a21\u5757\u4e4b\u4e00\u3002\u5b83\u662f\u4e00\u6b3e\u53ef\u4ee5\u5b9a\u5236\u5316\u7684\u8eab\u4efd\u9a8c\u8bc1\u548c\u8bbf\u95ee\u63a7\u5236\u6846\u67b6\u3002"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"Spring Mobile"}),(0,e.jsx)(r.td,{children:"\u662f\u5bf9 Spring MVC \u7684\u6269\u5c55\uff0c\u7528\u6765\u7b80\u5316\u79fb\u52a8\u7aef Web \u5e94\u7528\u7684\u5f00\u53d1\u3002"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"Spring Boot"}),(0,e.jsx)(r.td,{children:"\u662f Spring \u56e2\u961f\u63d0\u4f9b\u7684\u5168\u65b0\u6846\u67b6\uff0c\u5b83\u4e3a Spring \u4ee5\u53ca\u7b2c\u4e09\u65b9\u5e93\u4e00\u4e9b\u5f00\u7bb1\u5373\u7528\u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u7b80\u5316 Spring \u5e94\u7528\u7684\u642d\u5efa\u53ca\u5f00\u53d1\u8fc7\u7a0b\u3002"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"Spring Cloud"}),(0,e.jsx)(r.td,{children:"\u4e00\u6b3e\u57fa\u4e8e Spring Boot \u5b9e\u73b0\u7684\u5fae\u670d\u52a1\u6846\u67b6\u3002\u5b83\u5e76\u4e0d\u662f\u67d0\u4e00\u95e8\u6280\u672f\uff0c\u800c\u662f\u4e00\u7cfb\u5217\u5fae\u670d\u52a1\u89e3\u51b3\u65b9\u6848\u6216\u6846\u67b6\u7684\u6709\u5e8f\u96c6\u5408\u3002\u5b83\u5c06\u5e02\u9762\u4e0a\u6210\u719f\u7684\u3001\u7ecf\u8fc7\u9a8c\u8bc1\u7684\u5fae\u670d\u52a1\u6846\u67b6\u6574\u5408\u8d77\u6765\uff0c\u5e76\u901a\u8fc7 Spring Boot \u7684\u601d\u60f3\u8fdb\u884c\u518d\u5c01\u88c5\uff0c\u5c4f\u853d\u8c03\u5176\u4e2d\u590d\u6742\u7684\u914d\u7f6e\u548c\u5b9e\u73b0\u539f\u7406\uff0c\u6700\u7ec8\u4e3a\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u4e86\u4e00\u5957\u7b80\u5355\u6613\u61c2\u3001\u6613\u90e8\u7f72\u548c\u6613\u7ef4\u62a4\u7684\u5206\u5e03\u5f0f\u7cfb\u7edf\u5f00\u53d1\u5de5\u5177\u5305\u3002"})]})]})]}),"\n",(0,e.jsx)(r.h3,{id:"\u72ed\u4e49\u7684-springspring-framework",children:"\u72ed\u4e49\u7684 Spring\uff1aSpring Framework"}),"\n",(0,e.jsx)(r.p,{children:"\u72ed\u4e49\u7684 Spring \u7279\u6307 Spring Framework\uff0c\u901a\u5e38\u6211\u4eec\u5c06\u5b83\u79f0\u4e3a Spring \u6846\u67b6\u3002"}),"\n",(0,e.jsx)(r.p,{children:"Spring \u6846\u67b6\u662f\u4e00\u4e2a\u5206\u5c42\u7684\u3001\u9762\u5411\u5207\u9762\u7684 Java \u5e94\u7528\u7a0b\u5e8f\u7684\u4e00\u7ad9\u5f0f\u8f7b\u91cf\u7ea7\u89e3\u51b3\u65b9\u6848\uff0c\u5b83\u662f Spring \u6280\u672f\u6808\u7684\u6838\u5fc3\u548c\u57fa\u7840\uff0c\u662f\u4e3a\u4e86\u89e3\u51b3\u4f01\u4e1a\u7ea7\u5e94\u7528\u5f00\u53d1\u7684\u590d\u6742\u6027\u800c\u521b\u5efa\u7684\u3002"}),"\n",(0,e.jsx)(r.p,{children:"Spring \u6709\u4e24\u4e2a\u6838\u5fc3\u90e8\u5206\uff1a IoC \u548c AOP\u3002"}),"\n",(0,e.jsxs)(r.table,{children:[(0,e.jsx)(r.thead,{children:(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.th,{children:"\u6838\u5fc3"}),(0,e.jsx)(r.th,{children:"\u63cf\u8ff0"})]})}),(0,e.jsxs)(r.tbody,{children:[(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"IOC"}),(0,e.jsx)(r.td,{children:"Inverse of Control \u7684\u7b80\u5199\uff0c\u8bd1\u4e3a\u201c\u63a7\u5236\u53cd\u8f6c\u201d\uff0c\u6307\u628a\u521b\u5efa\u5bf9\u8c61\u8fc7\u7a0b\u4ea4\u7ed9 Spring \u8fdb\u884c\u7ba1\u7406\u3002"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"AOP"}),(0,e.jsx)(r.td,{children:"Aspect Oriented Programming \u7684\u7b80\u5199\uff0c\u8bd1\u4e3a\u201c\u9762\u5411\u5207\u9762\u7f16\u7a0b\u201d\u3002AOP \u7528\u6765\u5c01\u88c5\u591a\u4e2a\u7c7b\u7684\u516c\u5171\u884c\u4e3a\uff0c\u5c06\u90a3\u4e9b\u4e0e\u4e1a\u52a1\u65e0\u5173\uff0c\u5374\u4e3a\u4e1a\u52a1\u6a21\u5757\u6240\u5171\u540c\u8c03\u7528\u7684\u903b\u8f91\u5c01\u88c5\u8d77\u6765\uff0c\u51cf\u5c11\u7cfb\u7edf\u7684\u91cd\u590d\u4ee3\u7801\uff0c\u964d\u4f4e\u6a21\u5757\u95f4\u7684\u8026\u5408\u5ea6\u3002\u53e6\u5916\uff0cAOP \u8fd8\u89e3\u51b3\u4e00\u4e9b\u7cfb\u7edf\u5c42\u9762\u4e0a\u7684\u95ee\u9898\uff0c\u6bd4\u5982\u65e5\u5fd7\u3001\u4e8b\u52a1\u3001\u6743\u9650\u7b49\u3002"})]})]})]}),"\n",(0,e.jsx)(r.p,{children:"Spring \u662f\u4e00\u79cd\u57fa\u4e8e Bean \u7684\u7f16\u7a0b\u6280\u672f\uff0c\u5b83\u6df1\u523b\u5730\u6539\u53d8\u7740 Java \u5f00\u53d1\u4e16\u754c\u3002Spring \u4f7f\u7528\u7b80\u5355\u3001\u57fa\u672c\u7684 Java Bean \u6765\u5b8c\u6210\u4ee5\u524d\u53ea\u6709 EJB \u624d\u80fd\u5b8c\u6210\u7684\u5de5\u4f5c\uff0c\u4f7f\u5f97\u5f88\u591a\u590d\u6742\u7684\u4ee3\u7801\u53d8\u5f97\u4f18\u96c5\u548c\u7b80\u6d01\uff0c\u907f\u514d\u4e86 EJB \u81c3\u80bf\u3001\u4f4e\u6548\u7684\u5f00\u53d1\u6a21\u5f0f\uff0c\u6781\u5927\u7684\u65b9\u4fbf\u9879\u76ee\u7684\u540e\u671f\u7ef4\u62a4\u3001\u5347\u7ea7\u548c\u6269\u5c55\u3002"}),"\n",(0,e.jsx)(r.p,{children:"\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u670d\u52a1\u5668\u7aef\u5e94\u7528\u7a0b\u5e8f\u901a\u5e38\u91c7\u7528\u4e09\u5c42\u4f53\u7cfb\u67b6\u6784\uff0c\u5206\u522b\u4e3a\u8868\u73b0\u5c42\uff08web\uff09\u3001\u4e1a\u52a1\u903b\u8f91\u5c42\uff08service\uff09\u3001\u6301\u4e45\u5c42\uff08dao\uff09\u3002"}),"\n",(0,e.jsx)(r.p,{children:"Spring \u81f4\u529b\u4e8e Java EE \u5e94\u7528\u5404\u5c42\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5bf9\u6bcf\u4e00\u5c42\u90fd\u63d0\u4f9b\u4e86\u6280\u672f\u652f\u6301\u3002"}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"\u5728\u8868\u73b0\u5c42\u63d0\u4f9b\u4e86\u5bf9 Spring MVC\u3001Struts2 \u7b49\u6846\u67b6\u7684\u6574\u5408\uff1b"}),"\n",(0,e.jsx)(r.li,{children:"\u5728\u4e1a\u52a1\u903b\u8f91\u5c42\u63d0\u4f9b\u4e86\u7ba1\u7406\u4e8b\u52a1\u548c\u8bb0\u5f55\u65e5\u5fd7\u7684\u529f\u80fd\uff1b"}),"\n",(0,e.jsx)(r.li,{children:"\u5728\u6301\u4e45\u5c42\u8fd8\u53ef\u4ee5\u6574\u5408 MyBatis\u3001Hibernate \u548c JdbcTemplate \u7b49\u6280\u672f\uff0c\u5bf9\u6570\u636e\u5e93\u8fdb\u884c\u8bbf\u95ee\u3002"}),"\n"]}),"\n",(0,e.jsx)(r.p,{children:"\u8fd9\u5145\u5206\u5730\u4f53\u73b0\u4e86 Spring \u662f\u4e00\u4e2a\u5168\u9762\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5bf9\u4e8e\u90a3\u4e9b\u5df2\u7ecf\u6709\u8f83\u597d\u89e3\u51b3\u65b9\u6848\u7684\u9886\u57df\uff0cSpring \u7edd\u4e0d\u505a\u91cd\u590d\u7684\u4e8b\u60c5\u3002"}),"\n",(0,e.jsx)(r.p,{children:"\u4ece\u8bbe\u8ba1\u4e0a\u770b\uff0cSpring \u6846\u67b6\u7ed9\u4e88\u4e86 Java \u7a0b\u5e8f\u5458\u66f4\u9ad8\u7684\u81ea\u7531\u5ea6\uff0c\u5bf9\u4e1a\u754c\u7684\u5e38\u89c1\u95ee\u9898\u4e5f\u63d0\u4f9b\u4e86\u826f\u597d\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u56e0\u6b64\u5728\u5f00\u6e90\u793e\u533a\u53d7\u5230\u4e86\u5e7f\u6cdb\u7684\u6b22\u8fce\uff0c\u5e76\u4e14\u88ab\u5927\u90e8\u5206\u516c\u53f8\u4f5c\u4e3a Java \u9879\u76ee\u5f00\u53d1\u7684\u9996\u9009\u6846\u67b6\u3002"}),"\n",(0,e.jsx)(r.h2,{id:"spring-framework-\u7684\u7279\u70b9",children:"Spring Framework \u7684\u7279\u70b9"}),"\n",(0,e.jsx)(r.p,{children:"Spring \u6846\u67b6\u5177\u6709\u4ee5\u4e0b\u51e0\u4e2a\u7279\u70b9\u3002"}),"\n",(0,e.jsx)(r.h3,{id:"\u65b9\u4fbf\u89e3\u8026\u7b80\u5316\u5f00\u53d1",children:(0,e.jsx)(r.strong,{children:"\u65b9\u4fbf\u89e3\u8026\uff0c\u7b80\u5316\u5f00\u53d1"})}),"\n",(0,e.jsx)(r.p,{children:"Spring \u5c31\u662f\u4e00\u4e2a\u5927\u5de5\u5382\uff0c\u53ef\u4ee5\u5c06\u6240\u6709\u5bf9\u8c61\u7684\u521b\u5efa\u548c\u4f9d\u8d56\u5173\u7cfb\u7684\u7ef4\u62a4\u4ea4\u7ed9 Spring \u7ba1\u7406\u3002"}),"\n",(0,e.jsx)(r.h3,{id:"\u65b9\u4fbf\u96c6\u6210\u5404\u79cd\u4f18\u79c0\u6846\u67b6",children:(0,e.jsx)(r.strong,{children:"\u65b9\u4fbf\u96c6\u6210\u5404\u79cd\u4f18\u79c0\u6846\u67b6"})}),"\n",(0,e.jsx)(r.p,{children:"Spring \u4e0d\u6392\u65a5\u5404\u79cd\u4f18\u79c0\u7684\u5f00\u6e90\u6846\u67b6\uff0c\u5176\u5185\u90e8\u63d0\u4f9b\u4e86\u5bf9\u5404\u79cd\u4f18\u79c0\u6846\u67b6\uff08\u5982 Struts2\u3001Hibernate\u3001MyBatis \u7b49\uff09\u7684\u76f4\u63a5\u652f\u6301\u3002"}),"\n",(0,e.jsx)(r.h3,{id:"\u964d\u4f4e-java-ee-api-\u7684\u4f7f\u7528\u96be\u5ea6",children:(0,e.jsx)(r.strong,{children:"\u964d\u4f4e Java EE API \u7684\u4f7f\u7528\u96be\u5ea6"})}),"\n",(0,e.jsx)(r.p,{children:"Spring \u5bf9 Java EE \u5f00\u53d1\u4e2d\u975e\u5e38\u96be\u7528\u7684\u4e00\u4e9b API\uff08JDBC\u3001JavaMail\u3001\u8fdc\u7a0b\u8c03\u7528\u7b49\uff09\u90fd\u63d0\u4f9b\u4e86\u5c01\u88c5\uff0c\u4f7f\u8fd9\u4e9b API \u5e94\u7528\u7684\u96be\u5ea6\u5927\u5927\u964d\u4f4e\u3002"}),"\n",(0,e.jsx)(r.h3,{id:"\u65b9\u4fbf\u7a0b\u5e8f\u7684\u6d4b\u8bd5",children:(0,e.jsx)(r.strong,{children:"\u65b9\u4fbf\u7a0b\u5e8f\u7684\u6d4b\u8bd5"})}),"\n",(0,e.jsx)(r.p,{children:"Spring \u652f\u6301 JUnit4\uff0c\u53ef\u4ee5\u901a\u8fc7\u6ce8\u89e3\u65b9\u4fbf\u5730\u6d4b\u8bd5 Spring \u7a0b\u5e8f\u3002"}),"\n",(0,e.jsx)(r.h3,{id:"aop-\u7f16\u7a0b\u7684\u652f\u6301",children:(0,e.jsx)(r.strong,{children:"AOP \u7f16\u7a0b\u7684\u652f\u6301"})}),"\n",(0,e.jsx)(r.p,{children:"Spring \u63d0\u4f9b\u9762\u5411\u5207\u9762\u7f16\u7a0b\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u5b9e\u73b0\u5bf9\u7a0b\u5e8f\u8fdb\u884c\u6743\u9650\u62e6\u622a\u548c\u8fd0\u884c\u76d1\u63a7\u7b49\u529f\u80fd\u3002"}),"\n",(0,e.jsx)(r.h3,{id:"\u58f0\u660e\u5f0f\u4e8b\u52a1\u7684\u652f\u6301",children:(0,e.jsx)(r.strong,{children:"\u58f0\u660e\u5f0f\u4e8b\u52a1\u7684\u652f\u6301"})}),"\n",(0,e.jsx)(r.p,{children:"\u53ea\u9700\u8981\u901a\u8fc7\u914d\u7f6e\u5c31\u53ef\u4ee5\u5b8c\u6210\u5bf9\u4e8b\u52a1\u7684\u7ba1\u7406\uff0c\u800c\u65e0\u987b\u624b\u52a8\u7f16\u7a0b\u3002"}),"\n",(0,e.jsx)(r.p,{children:"Spring \u6846\u67b6\u57fa\u672c\u6db5\u76d6\u4e86\u4f01\u4e1a\u7ea7\u5e94\u7528\u5f00\u53d1\u7684\u5404\u4e2a\u65b9\u9762\uff0c\u5b83\u5305\u542b\u4e86 20 \u591a\u4e2a\u4e0d\u540c\u7684\u6a21\u5757\u3002"}),"\n",(0,e.jsxs)(r.p,{children:["spring-aop      spring-context-indexer  spring-instrument  spring-orm    spring-web",(0,e.jsx)(r.br,{}),"\n","spring-aspects  spring-context-support  spring-jcl         spring-oxm    spring-webflux",(0,e.jsx)(r.br,{}),"\n","spring-beans    spring-core             spring-jdbc        spring-r2dbc  spring-webmvc",(0,e.jsx)(r.br,{}),"\n","spring-context  spring-expression       spring-jms         spring-test   spring-websocket",(0,e.jsx)(r.br,{}),"\n","spring-messaging   spring-tx"]}),"\n",(0,e.jsxs)(r.p,{children:[(0,e.jsx)(r.img,{src:"https://java-tutorial.oss-cn-shanghai.aliyuncs.com/163550G63-0.png",alt:"Spring\u4f53\u7cfb\u7ed3\u6784\u56fe"}),(0,e.jsx)(r.br,{}),"\n","\u56fe1\uff1aSpring\u67b6\u6784\u56fe"]}),"\n",(0,e.jsx)(r.p,{children:"\u4e0a\u56fe\u4e2d\u5305\u542b\u4e86 Spring \u6846\u67b6\u7684\u6240\u6709\u6a21\u5757\uff0c\u8fd9\u4e9b\u6a21\u5757\u53ef\u4ee5\u6ee1\u8db3\u4e00\u5207\u4f01\u4e1a\u7ea7\u5e94\u7528\u5f00\u53d1\u7684\u9700\u6c42\uff0c\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u6709\u9009\u62e9\u6027\u5730\u4f7f\u7528\u6240\u9700\u8981\u7684\u6a21\u5757\u3002\u4e0b\u9762\u5206\u522b\u5bf9\u8fd9\u4e9b\u6a21\u5757\u7684\u4f5c\u7528\u8fdb\u884c\u7b80\u5355\u4ecb\u7ecd\u3002"}),"\n",(0,e.jsx)(r.h2,{id:"1-data-accessintegration\u6570\u636e\u8bbf\u95ee\u96c6\u6210",children:"1. Data Access/Integration\uff08\u6570\u636e\u8bbf\u95ee\uff0f\u96c6\u6210\uff09"}),"\n",(0,e.jsx)(r.p,{children:"\u6570\u636e\u8bbf\u95ee\uff0f\u96c6\u6210\u5c42\u5305\u62ec JDBC\u3001ORM\u3001OXM\u3001JMS \u548c Transactions \u6a21\u5757\uff0c\u5177\u4f53\u4ecb\u7ecd\u5982\u4e0b\u3002"}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"JDBC \u6a21\u5757\uff1a\u63d0\u4f9b\u4e86\u4e00\u4e2a JBDC \u7684\u6837\u4f8b\u6a21\u677f\uff0c\u4f7f\u7528\u8fd9\u4e9b\u6a21\u677f\u80fd\u6d88\u9664\u4f20\u7edf\u5197\u957f\u7684 JDBC \u7f16\u7801\u8fd8\u6709\u5fc5\u987b\u7684\u4e8b\u52a1\u63a7\u5236\uff0c\u800c\u4e14\u80fd\u4eab\u53d7\u5230 Spring \u7ba1\u7406\u4e8b\u52a1\u7684\u597d\u5904\u3002"}),"\n",(0,e.jsx)(r.li,{children:"ORM \u6a21\u5757\uff1a\u63d0\u4f9b\u4e0e\u6d41\u884c\u7684\u201c\u5bf9\u8c61-\u5173\u7cfb\u201d\u6620\u5c04\u6846\u67b6\u65e0\u7f1d\u96c6\u6210\u7684 API\uff0c\u5305\u62ec JPA\u3001JDO\u3001Hibernate \u548c MyBatis \u7b49\u3002\u800c\u4e14\u8fd8\u53ef\u4ee5\u4f7f\u7528 Spring \u4e8b\u52a1\u7ba1\u7406\uff0c\u65e0\u9700\u989d\u5916\u63a7\u5236\u4e8b\u52a1\u3002"}),"\n",(0,e.jsx)(r.li,{children:"OXM \u6a21\u5757\uff1a\u63d0\u4f9b\u4e86\u4e00\u4e2a\u652f\u6301 Object /XML \u6620\u5c04\u7684\u62bd\u8c61\u5c42\u5b9e\u73b0\uff0c\u5982 JAXB\u3001Castor\u3001XMLBeans\u3001JiBX \u548c XStream\u3002\u5c06 Java \u5bf9\u8c61\u6620\u5c04\u6210 XML \u6570\u636e\uff0c\u6216\u8005\u5c06XML \u6570\u636e\u6620\u5c04\u6210 Java \u5bf9\u8c61\u3002"}),"\n",(0,e.jsx)(r.li,{children:"JMS \u6a21\u5757\uff1a\u6307 Java \u6d88\u606f\u670d\u52a1\uff0c\u63d0\u4f9b\u4e00\u5957 \u201c\u6d88\u606f\u751f\u4ea7\u8005\u3001\u6d88\u606f\u6d88\u8d39\u8005\u201d\u6a21\u677f\u7528\u4e8e\u66f4\u52a0\u7b80\u5355\u7684\u4f7f\u7528 JMS\uff0cJMS \u7528\u4e8e\u7528\u4e8e\u5728\u4e24\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\uff0c\u6216\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u53d1\u9001\u6d88\u606f\uff0c\u8fdb\u884c\u5f02\u6b65\u901a\u4fe1\u3002"}),"\n",(0,e.jsx)(r.li,{children:"Transactions \u4e8b\u52a1\u6a21\u5757\uff1a\u652f\u6301\u7f16\u7a0b\u548c\u58f0\u660e\u5f0f\u4e8b\u52a1\u7ba1\u7406\u3002"}),"\n"]}),"\n",(0,e.jsx)(r.h2,{id:"2-web-\u6a21\u5757",children:"2. Web \u6a21\u5757"}),"\n",(0,e.jsx)(r.p,{children:"Spring \u7684 Web \u5c42\u5305\u62ec Web\u3001Servlet\u3001WebSocket \u548c Portlet \u7ec4\u4ef6\uff0c\u5177\u4f53\u4ecb\u7ecd\u5982\u4e0b\u3002"}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"Web \u6a21\u5757\uff1a\u63d0\u4f9b\u4e86\u57fa\u672c\u7684 Web \u5f00\u53d1\u96c6\u6210\u7279\u6027\uff0c\u4f8b\u5982\u591a\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd\u3001\u4f7f\u7528\u7684 Servlet \u76d1\u542c\u5668\u7684 IOC \u5bb9\u5668\u521d\u59cb\u5316\u4ee5\u53ca Web \u5e94\u7528\u4e0a\u4e0b\u6587\u3002"}),"\n",(0,e.jsx)(r.li,{children:"Servlet \u6a21\u5757\uff1a\u63d0\u4f9b\u4e86\u4e00\u4e2a Spring MVC Web \u6846\u67b6\u5b9e\u73b0\u3002Spring MVC \u6846\u67b6\u63d0\u4f9b\u4e86\u57fa\u4e8e\u6ce8\u89e3\u7684\u8bf7\u6c42\u8d44\u6e90\u6ce8\u5165\u3001\u66f4\u7b80\u5355\u7684\u6570\u636e\u7ed1\u5b9a\u3001\u6570\u636e\u9a8c\u8bc1\u7b49\u53ca\u4e00\u5957\u975e\u5e38\u6613\u7528\u7684 JSP \u6807\u7b7e\uff0c\u5b8c\u5168\u65e0\u7f1d\u4e0e Spring \u5176\u4ed6\u6280\u672f\u534f\u4f5c\u3002"}),"\n",(0,e.jsx)(r.li,{children:"WebSocket \u6a21\u5757\uff1a\u63d0\u4f9b\u4e86\u7b80\u5355\u7684\u63a5\u53e3\uff0c\u7528\u6237\u53ea\u8981\u5b9e\u73b0\u54cd\u5e94\u7684\u63a5\u53e3\u5c31\u53ef\u4ee5\u5feb\u901f\u7684\u642d\u5efa WebSocket Server\uff0c\u4ece\u800c\u5b9e\u73b0\u53cc\u5411\u901a\u8baf\u3002"}),"\n",(0,e.jsx)(r.li,{children:"Portlet \u6a21\u5757\uff1a\u63d0\u4f9b\u4e86\u5728 Portlet \u73af\u5883\u4e2d\u4f7f\u7528 MVC \u5b9e\u73b0\uff0c\u7c7b\u4f3c Web-Servlet \u6a21\u5757\u7684\u529f\u80fd\u3002"}),"\n"]}),"\n",(0,e.jsx)(r.h2,{id:"3-core-containerspring-\u7684\u6838\u5fc3\u5bb9\u5668",children:"3. Core Container\uff08Spring \u7684\u6838\u5fc3\u5bb9\u5668\uff09"}),"\n",(0,e.jsx)(r.p,{children:"Spring \u7684\u6838\u5fc3\u5bb9\u5668\u662f\u5176\u4ed6\u6a21\u5757\u5efa\u7acb\u7684\u57fa\u7840\uff0c\u7531 Beans \u6a21\u5757\u3001Core \u6838\u5fc3\u6a21\u5757\u3001Context \u4e0a\u4e0b\u6587\u6a21\u5757\u548c SpEL \u8868\u8fbe\u5f0f\u8bed\u8a00\u6a21\u5757\u7ec4\u6210\uff0c\u6ca1\u6709\u8fd9\u4e9b\u6838\u5fc3\u5bb9\u5668\uff0c\u4e5f\u4e0d\u53ef\u80fd\u6709 AOP\u3001Web \u7b49\u4e0a\u5c42\u7684\u529f\u80fd\u3002\u5177\u4f53\u4ecb\u7ecd\u5982\u4e0b\u3002"}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"Beans \u6a21\u5757\uff1a\u63d0\u4f9b\u4e86\u6846\u67b6\u7684\u57fa\u7840\u90e8\u5206\uff0c\u5305\u62ec\u63a7\u5236\u53cd\u8f6c\u548c\u4f9d\u8d56\u6ce8\u5165\u3002"}),"\n",(0,e.jsx)(r.li,{children:"Core \u6838\u5fc3\u6a21\u5757\uff1a\u5c01\u88c5\u4e86 Spring \u6846\u67b6\u7684\u5e95\u5c42\u90e8\u5206\uff0c\u5305\u62ec\u8d44\u6e90\u8bbf\u95ee\u3001\u7c7b\u578b\u8f6c\u6362\u53ca\u4e00\u4e9b\u5e38\u7528\u5de5\u5177\u7c7b\u3002"}),"\n",(0,e.jsx)(r.li,{children:"Context \u4e0a\u4e0b\u6587\u6a21\u5757\uff1a\u5efa\u7acb\u5728 Core \u548c Beans \u6a21\u5757\u7684\u57fa\u7840\u4e4b\u4e0a\uff0c\u96c6\u6210 Beans \u6a21\u5757\u529f\u80fd\u5e76\u6dfb\u52a0\u8d44\u6e90\u7ed1\u5b9a\u3001\u6570\u636e\u9a8c\u8bc1\u3001\u56fd\u9645\u5316\u3001Java EE \u652f\u6301\u3001\u5bb9\u5668\u751f\u547d\u5468\u671f\u3001\u4e8b\u4ef6\u4f20\u64ad\u7b49\u3002ApplicationContext \u63a5\u53e3\u662f\u4e0a\u4e0b\u6587\u6a21\u5757\u7684\u7126\u70b9\u3002"}),"\n",(0,e.jsx)(r.li,{children:"SpEL \u6a21\u5757\uff1a\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u8868\u8fbe\u5f0f\u8bed\u8a00\u652f\u6301\uff0c\u652f\u6301\u8bbf\u95ee\u548c\u4fee\u6539\u5c5e\u6027\u503c\uff0c\u65b9\u6cd5\u8c03\u7528\uff0c\u652f\u6301\u8bbf\u95ee\u53ca\u4fee\u6539\u6570\u7ec4\u3001\u5bb9\u5668\u548c\u7d22\u5f15\u5668\uff0c\u547d\u540d\u53d8\u91cf\uff0c\u652f\u6301\u7b97\u6570\u548c\u903b\u8f91\u8fd0\u7b97\uff0c\u652f\u6301\u4ece Spring \u5bb9\u5668\u83b7\u53d6 Bean\uff0c\u5b83\u4e5f\u652f\u6301\u5217\u8868\u6295\u5f71\u3001\u9009\u62e9\u548c\u4e00\u822c\u7684\u5217\u8868\u805a\u5408\u7b49\u3002"}),"\n"]}),"\n",(0,e.jsx)(r.h2,{id:"4-aopaspectsinstrumentation-\u548c-messaging",children:"4. AOP\u3001Aspects\u3001Instrumentation \u548c Messaging"}),"\n",(0,e.jsx)(r.p,{children:"\u5728 Core Container \u4e4b\u4e0a\u662f AOP\u3001Aspects \u7b49\u6a21\u5757\uff0c\u5177\u4f53\u4ecb\u7ecd\u5982\u4e0b\uff1a"}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"AOP \u6a21\u5757\uff1a\u63d0\u4f9b\u4e86\u9762\u5411\u5207\u9762\u7f16\u7a0b\u5b9e\u73b0\uff0c\u63d0\u4f9b\u6bd4\u5982\u65e5\u5fd7\u8bb0\u5f55\u3001\u6743\u9650\u63a7\u5236\u3001\u6027\u80fd\u7edf\u8ba1\u7b49\u901a\u7528\u529f\u80fd\u548c\u4e1a\u52a1\u903b\u8f91\u5206\u79bb\u7684\u6280\u672f\uff0c\u5e76\u4e14\u80fd\u52a8\u6001\u7684\u628a\u8fd9\u4e9b\u529f\u80fd\u6dfb\u52a0\u5230\u9700\u8981\u7684\u4ee3\u7801\u4e2d\uff0c\u8fd9\u6837\u5404\u53f8\u5176\u804c\uff0c\u964d\u4f4e\u4e1a\u52a1\u903b\u8f91\u548c\u901a\u7528\u529f\u80fd\u7684\u8026\u5408\u3002"}),"\n",(0,e.jsx)(r.li,{children:"Aspects \u6a21\u5757\uff1a\u63d0\u4f9b\u4e0e AspectJ \u7684\u96c6\u6210\uff0c\u662f\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u4e14\u6210\u719f\u7684\u9762\u5411\u5207\u9762\u7f16\u7a0b\uff08AOP\uff09\u6846\u67b6\u3002"}),"\n",(0,e.jsx)(r.li,{children:"Instrumentation \u6a21\u5757\uff1a\u63d0\u4f9b\u4e86\u7c7b\u5de5\u5177\u7684\u652f\u6301\u548c\u7c7b\u52a0\u8f7d\u5668\u7684\u5b9e\u73b0\uff0c\u53ef\u4ee5\u5728\u7279\u5b9a\u7684\u5e94\u7528\u670d\u52a1\u5668\u4e2d\u4f7f\u7528\u3002"}),"\n",(0,e.jsx)(r.li,{children:"messaging \u6a21\u5757\uff1aSpring 4.0 \u4ee5\u540e\u65b0\u589e\u4e86\u6d88\u606f\uff08Spring-messaging\uff09\u6a21\u5757\uff0c\u8be5\u6a21\u5757\u63d0\u4f9b\u4e86\u5bf9\u6d88\u606f\u4f20\u9012\u4f53\u7cfb\u7ed3\u6784\u548c\u534f\u8bae\u7684\u652f\u6301\u3002"}),"\n"]}),"\n",(0,e.jsx)(r.h2,{id:"5-test-\u6a21\u5757",children:"5. Test \u6a21\u5757"}),"\n",(0,e.jsx)(r.p,{children:"Test \u6a21\u5757\uff1aSpring \u652f\u6301 Junit \u548c TestNG \u6d4b\u8bd5\u6846\u67b6\uff0c\u800c\u4e14\u8fd8\u989d\u5916\u63d0\u4f9b\u4e86\u4e00\u4e9b\u57fa\u4e8e Spring \u7684\u6d4b\u8bd5\u529f\u80fd\uff0c\u6bd4\u5982\u5728\u6d4b\u8bd5 Web \u6846\u67b6\u65f6\uff0c\u6a21\u62df Http \u8bf7\u6c42\u7684\u529f\u80fd\u3002"})]})}function a(n={}){const{wrapper:r}={...(0,s.a)(),...n.components};return r?(0,e.jsx)(r,{...n,children:(0,e.jsx)(g,{...n})}):g(n)}},88672:(n,r,i)=>{i.d(r,{Z:()=>l,a:()=>p});var e=i(50959);const s={},t=e.createContext(s);function p(n){const r=e.useContext(t);return e.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function l(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:p(n.components),e.createElement(t.Provider,{value:r},n.children)}}}]);