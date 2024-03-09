"use strict";(self.webpackChunkcode_note_blog=self.webpackChunkcode_note_blog||[]).push([[344],{82847:(n,i,r)=>{r.r(i),r.d(i,{assets:()=>t,contentTitle:()=>e,default:()=>g,frontMatter:()=>d,metadata:()=>s,toc:()=>p});var l=r(11527),o=r(88672);const d={},e=void 0,s={id:"Spring\u5168\u5bb6\u6876/SpringCloud/SpringCloud\u6982\u8ff0",title:"SpringCloud\u6982\u8ff0",description:"Spring Cloud \u662f\u4e00\u6b3e\u57fa\u4e8e Spring Boot \u5b9e\u73b0\u7684\u5fae\u670d\u52a1\u6846\u67b6\u3002Spring Cloud \u6e90\u81ea Spring \u793e\u533a\uff0c\u4e3b\u8981\u7531 Pivotal \u548c Netflix \u4e24\u5927\u516c\u53f8\u63d0\u4f9b\u6280\u672f\u8fed\u4ee3\u548c\u7ef4\u62a4\u3002",source:"@site/docs/Spring\u5168\u5bb6\u6876/SpringCloud/SpringCloud\u6982\u8ff0.md",sourceDirName:"Spring\u5168\u5bb6\u6876/SpringCloud",slug:"/Spring\u5168\u5bb6\u6876/SpringCloud/SpringCloud\u6982\u8ff0",permalink:"/code-note-blog/docs/Spring\u5168\u5bb6\u6876/SpringCloud/SpringCloud\u6982\u8ff0",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Spring\u5168\u5bb6\u6876/SpringCloud/SpringCloud\u6982\u8ff0.md",tags:[],version:"current",frontMatter:{},sidebar:"spring",previous:{title:"SpringCloudConsul",permalink:"/code-note-blog/docs/Spring\u5168\u5bb6\u6876/SpringCloud/SpringCloudConsul"},next:{title:"SpringCloudConfig",permalink:"/code-note-blog/docs/Spring\u5168\u5bb6\u6876/SpringCloud/SpringCloudConfig"}},t={},p=[{value:"Spring Cloud \u5e38\u7528\u7ec4\u4ef6",id:"spring-cloud-\u5e38\u7528\u7ec4\u4ef6",level:2},{value:"Spring Boot \u548c Spring Cloud \u7684\u533a\u522b\u4e0e\u8054\u7cfb",id:"spring-boot-\u548c-spring-cloud-\u7684\u533a\u522b\u4e0e\u8054\u7cfb",level:2},{value:"1. Spring Boot \u548c Spring Cloud \u5206\u5de5\u4e0d\u540c",id:"1-spring-boot-\u548c-spring-cloud-\u5206\u5de5\u4e0d\u540c",level:4},{value:"2. Spring Cloud \u662f\u57fa\u4e8e Spring Boot \u5b9e\u73b0\u7684",id:"2-spring-cloud-\u662f\u57fa\u4e8e-spring-boot-\u5b9e\u73b0\u7684",level:4},{value:"3. Spring Boot \u548c Spring Cloud \u4f9d\u8d56\u9879\u6570\u91cf\u4e0d\u540c",id:"3-spring-boot-\u548c-spring-cloud-\u4f9d\u8d56\u9879\u6570\u91cf\u4e0d\u540c",level:4},{value:"4. Spring Cloud \u4e0d\u80fd\u8131\u79bb Spring Boot \u5355\u72ec\u8fd0\u884c",id:"4-spring-cloud-\u4e0d\u80fd\u8131\u79bb-spring-boot-\u5355\u72ec\u8fd0\u884c",level:4},{value:"Spring Cloud \u7248\u672c",id:"spring-cloud-\u7248\u672c",level:2},{value:"Spring Cloud \u7248\u672c\u9009\u62e9",id:"spring-cloud-\u7248\u672c\u9009\u62e9",level:2}];function c(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.p,{children:"Spring Cloud \u662f\u4e00\u6b3e\u57fa\u4e8e Spring Boot \u5b9e\u73b0\u7684\u5fae\u670d\u52a1\u6846\u67b6\u3002Spring Cloud \u6e90\u81ea Spring \u793e\u533a\uff0c\u4e3b\u8981\u7531 Pivotal \u548c Netflix \u4e24\u5927\u516c\u53f8\u63d0\u4f9b\u6280\u672f\u8fed\u4ee3\u548c\u7ef4\u62a4\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u968f\u7740\u5fae\u670d\u52a1\u7684\u706b\u7206\u6d41\u884c\uff0c\u56fd\u5185\u5916\u5404\u5927\u4e92\u8054\u7f51\u516c\u53f8\u90fd\u76f8\u7ee7\u5206\u4eab\u4e86\u4ed6\u4eec\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\uff0c\u9488\u5bf9\u4e0d\u540c\u573a\u666f\u51fa\u73b0\u7684\u5404\u79cd\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848\u548c\u5f00\u6e90\u6846\u67b6\u3002"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u670d\u52a1\u6cbb\u7406"}),"\uff1a\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684 Dubbo \u548c\u5f53\u5f53\u7f51\u5728\u5176\u57fa\u7840\u4e0a\u6269\u5c55\u51fa\u6765\u7684 DubboX\u3001Netflix \u7684 Eureka \u4ee5\u53ca Apache \u7684 Consul \u7b49\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u5206\u5e03\u5f0f\u914d\u7f6e\u7ba1\u7406"}),"\uff1a\u767e\u5ea6\u7684 Disconf\u3001Netflix \u7684 Archaius\u3001360 \u7684 QConf\u3001\u643a\u7a0b\u7684 Apollo \u4ee5\u53ca Spring Cloud \u7684 Config \u7b49\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u6279\u91cf\u4efb\u52a1"}),"\uff1a\u5f53\u5f53\u7f51\u7684 Elastic-Job\u3001LinkedIn \u7684 Azkaban \u4ee5\u53ca Spring Cloud \u7684 Task \u7b49\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"\u670d\u52a1\u8ddf\u8e2a"}),"\uff1a\u4eac\u4e1c\u7684 Hydra\u3001Spring Cloud \u7684 Sleuth \u4ee5\u53ca Twitter \u7684 Zipkin \u7b49\u3002"]}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.strong,{children:"\u2026\u2026"})}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"\u4ee5\u4e0a\u8fd9\u4e9b\u5fae\u670d\u52a1\u6846\u67b6\u6216\u89e3\u51b3\u65b9\u6848\u90fd\u5177\u6709\u4ee5\u4e0b 2 \u4e2a\u7279\u70b9\uff1a"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u5bf9\u4e8e\u540c\u4e00\u4e2a\u5fae\u670d\u52a1\u95ee\u9898\uff0c\u5404\u4e92\u8054\u7f51\u516c\u53f8\u7ed9\u51fa\u7684\u89e3\u51b3\u65b9\u6848\u5404\u4e0d\u76f8\u540c\u3002"}),"\n",(0,l.jsx)(i.li,{children:"\u4e00\u4e2a\u5fae\u670d\u52a1\u6846\u67b6\u6216\u89e3\u51b3\u65b9\u6848\u90fd\u53ea\u80fd\u89e3\u51b3\u5fae\u670d\u52a1\u4e2d\u7684\u67d0\u4e00\u4e2a\u6216\u67d0\u51e0\u4e2a\u95ee\u9898\uff0c\u5bf9\u4e8e\u5176\u4ed6\u95ee\u9898\u5219\u65e0\u80fd\u4e3a\u529b\u3002"}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u642d\u5efa\u4e00\u5957\u5fae\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u7cfb\u7edf\uff0c\u5c31\u9700\u8981\u9488\u5bf9\u8fd9\u4e9b\u95ee\u9898\u4ece\u8bf8\u591a\u7684\u89e3\u51b3\u65b9\u6848\u4e2d\u505a\u51fa\u9009\u62e9\uff0c\u8fd9\u4f7f\u5f97\u6211\u4eec\u4e0d\u5f97\u4e0d\u5c06\u5927\u91cf\u7684\u7cbe\u529b\u82b1\u8d39\u5728\u524d\u671f\u7684\u8c03\u7814\u3001\u5206\u6790\u4ee5\u53ca\u5b9e\u9a8c\u4e0a\u3002"}),"\n",(0,l.jsx)(i.p,{children:"Spring Cloud \u88ab\u79f0\u4e3a\u6784\u5efa\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u7cfb\u7edf\u7684\u201c\u5168\u5bb6\u6876\u201d\uff0c\u5b83\u5e76\u4e0d\u662f\u67d0\u4e00\u95e8\u6280\u672f\uff0c\u800c\u662f\u4e00\u7cfb\u5217\u5fae\u670d\u52a1\u89e3\u51b3\u65b9\u6848\u6216\u6846\u67b6\u7684\u6709\u5e8f\u96c6\u5408\u3002\u5b83\u5c06\u5e02\u9762\u4e0a\u6210\u719f\u7684\u3001\u7ecf\u8fc7\u9a8c\u8bc1\u7684\u5fae\u670d\u52a1\u6846\u67b6\u6574\u5408\u8d77\u6765\uff0c\u5e76\u901a\u8fc7 Spring Boot \u7684\u601d\u60f3\u8fdb\u884c\u518d\u5c01\u88c5\uff0c\u5c4f\u853d\u8c03\u5176\u4e2d\u590d\u6742\u7684\u914d\u7f6e\u548c\u5b9e\u73b0\u539f\u7406\uff0c\u6700\u7ec8\u4e3a\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u4e86\u4e00\u5957\u7b80\u5355\u6613\u61c2\u3001\u6613\u90e8\u7f72\u548c\u6613\u7ef4\u62a4\u7684\u5206\u5e03\u5f0f\u7cfb\u7edf\u5f00\u53d1\u5de5\u5177\u5305\u3002"}),"\n",(0,l.jsx)(i.p,{children:"Spring Cloud \u4e2d\u5305\u542b\u4e86 spring-cloud-config\u3001spring-cloud-bus \u7b49\u8fd1 20 \u4e2a\u5b50\u9879\u76ee\uff0c\u63d0\u4f9b\u4e86\u670d\u52a1\u6cbb\u7406\u3001\u670d\u52a1\u7f51\u5173\u3001\u667a\u80fd\u8def\u7531\u3001\u8d1f\u8f7d\u5747\u8861\u3001\u65ad\u8def\u5668\u3001\u76d1\u63a7\u8ddf\u8e2a\u3001\u5206\u5e03\u5f0f\u6d88\u606f\u961f\u5217\u3001\u914d\u7f6e\u7ba1\u7406\u7b49\u9886\u57df\u7684\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,l.jsx)(i.p,{children:"Spring Cloud \u5e76\u4e0d\u662f\u4e00\u4e2a\u62ff\u6765\u5373\u53ef\u7528\u7684\u6846\u67b6\uff0c\u5b83\u662f\u4e00\u79cd\u5fae\u670d\u52a1\u89c4\u8303\uff0c\u5171\u6709\u4ee5\u4e0b 2 \u4ee3\u5b9e\u73b0\uff1a"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u7b2c\u4e00\u4ee3\u5b9e\u73b0\uff1aSpring Cloud Netflix"}),"\n",(0,l.jsx)(i.li,{children:"\u7b2c\u4e8c\u4ee3\u5b9e\u73b0\uff1aSpring Cloud Alibaba"}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"\u8fd9\u91cc\u6211\u4eec\u4ecb\u7ecd\u7684 Spring Cloud \u7279\u6307 Spring Cloud \u7684\u7b2c\u4e00\u4ee3\u5b9e\u73b0\u3002"}),"\n",(0,l.jsx)(i.h2,{id:"spring-cloud-\u5e38\u7528\u7ec4\u4ef6",children:"Spring Cloud \u5e38\u7528\u7ec4\u4ef6"}),"\n",(0,l.jsx)(i.p,{children:"Spring Cloud \u5305\u62ec Spring Cloud Gateway\u3001Spring Cloud Config\u3001Spring Cloud Bus \u7b49\u8fd1 20 \u4e2a\u670d\u52a1\u7ec4\u4ef6\uff0c\u8fd9\u4e9b\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u670d\u52a1\u6cbb\u7406\u3001\u670d\u52a1\u7f51\u5173\u3001\u667a\u80fd\u8def\u7531\u3001\u8d1f\u8f7d\u5747\u8861\u3001\u7194\u65ad\u5668\u3001\u76d1\u63a7\u8ddf\u8e2a\u3001\u5206\u5e03\u5f0f\u6d88\u606f\u961f\u5217\u3001\u914d\u7f6e\u7ba1\u7406\u7b49\u9886\u57df\u7684\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,l.jsx)(i.p,{children:"Spring Cloud \u7684\u5e38\u7528\u7ec4\u4ef6\u5982\u4e0b\u8868\u6240\u793a\u3002"}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Spring Cloud \u7ec4\u4ef6"}),(0,l.jsx)(i.th,{children:"\u63cf\u8ff0"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Spring Cloud Netflix Eureka"}),(0,l.jsx)(i.td,{children:"Spring Cloud Netflix \u4e2d\u7684\u670d\u52a1\u6cbb\u7406\u7ec4\u4ef6\uff0c\u5305\u542b\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u3001\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0\u673a\u5236\u7684\u5b9e\u73b0\u3002"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Spring Cloud Netflix Ribbon"}),(0,l.jsx)(i.td,{children:"Spring Cloud  Netflix \u4e2d\u7684\u670d\u52a1\u8c03\u7528\u548c\u5ba2\u6237\u7aef\u8d1f\u8f7d\u5747\u8861\u7ec4\u4ef6\u3002"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Spring Cloud Netflix Hystrix"}),(0,l.jsx)(i.td,{children:"\u4eba\u79f0\u201c\u8c6a\u732a\u54e5\u201d\uff0cSpring Cloud Netflix \u7684\u5bb9\u9519\u7ba1\u7406\u7ec4\u4ef6\uff0c\u4e3a\u670d\u52a1\u4e2d\u51fa\u73b0\u7684\u5ef6\u8fdf\u548c\u6545\u969c\u63d0\u4f9b\u5f3a\u5927\u7684\u5bb9\u9519\u80fd\u529b\u3002"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Spring Cloud Netflix Feign"}),(0,l.jsx)(i.td,{children:"\u57fa\u4e8e Ribbon \u548c Hystrix \u7684\u58f0\u660e\u5f0f\u670d\u52a1\u8c03\u7528\u7ec4\u4ef6\u3002"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Spring Cloud Netflix Zuul"}),(0,l.jsx)(i.td,{children:"Spring Cloud Netflix \u4e2d\u7684\u7f51\u5173\u7ec4\u4ef6\uff0c\u63d0\u4f9b\u4e86\u667a\u80fd\u8def\u7531\u3001\u8bbf\u95ee\u8fc7\u6ee4\u7b49\u529f\u80fd\u3002"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Spring Cloud Gateway"}),(0,l.jsx)(i.td,{children:"\u4e00\u4e2a\u57fa\u4e8e Spring 5.0\uff0cSpring Boot 2.0 \u548c Project Reactor \u7b49\u6280\u672f\u5f00\u53d1\u7684\u7f51\u5173\u6846\u67b6\uff0c\u5b83\u4f7f\u7528 Filter \u94fe\u7684\u65b9\u5f0f\u63d0\u4f9b\u4e86\u7f51\u5173\u7684\u57fa\u672c\u529f\u80fd\uff0c\u4f8b\u5982\u5b89\u5168\u3001\u76d1\u63a7/\u6307\u6807\u548c\u9650\u6d41\u7b49\u3002"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Spring Cloud Config"}),(0,l.jsx)(i.td,{children:"Spring Cloud \u7684\u914d\u7f6e\u7ba1\u7406\u5de5\u5177\uff0c\u652f\u6301\u4f7f\u7528 Git \u5b58\u50a8\u914d\u7f6e\u5185\u5bb9\uff0c\u5b9e\u73b0\u5e94\u7528\u914d\u7f6e\u7684\u5916\u90e8\u5316\u5b58\u50a8\uff0c\u5e76\u652f\u6301\u5728\u5ba2\u6237\u7aef\u5bf9\u914d\u7f6e\u8fdb\u884c\u5237\u65b0\u3001\u52a0\u5bc6\u3001\u89e3\u5bc6\u7b49\u64cd\u4f5c\u3002"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Spring Cloud Bus"}),(0,l.jsx)(i.td,{children:"Spring Cloud \u7684\u4e8b\u4ef6\u548c\u6d88\u606f\u603b\u7ebf\uff0c\u4e3b\u8981\u7528\u4e8e\u5728\u96c6\u7fa4\u4e2d\u4f20\u64ad\u4e8b\u4ef6\u6216\u72b6\u6001\u53d8\u5316\uff0c\u4ee5\u89e6\u53d1\u540e\u7eed\u7684\u5904\u7406\uff0c\u4f8b\u5982\u52a8\u6001\u5237\u65b0\u914d\u7f6e\u3002"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Spring Cloud Stream"}),(0,l.jsx)(i.td,{children:"Spring Cloud \u7684\u6d88\u606f\u4e2d\u95f4\u4ef6\u7ec4\u4ef6\uff0c\u5b83\u96c6\u6210\u4e86 Apache Kafka \u548c RabbitMQ \u7b49\u6d88\u606f\u4e2d\u95f4\u4ef6\uff0c\u5e76\u901a\u8fc7\u5b9a\u4e49\u7ed1\u5b9a\u5668\u4f5c\u4e3a\u4e2d\u95f4\u5c42\uff0c\u5b8c\u7f8e\u5730\u5b9e\u73b0\u4e86\u5e94\u7528\u7a0b\u5e8f\u4e0e\u6d88\u606f\u4e2d\u95f4\u4ef6\u4e4b\u95f4\u7684\u9694\u79bb\u3002\u901a\u8fc7\u5411\u5e94\u7528\u7a0b\u5e8f\u66b4\u9732\u7edf\u4e00\u7684 Channel \u901a\u9053\uff0c\u4f7f\u5f97\u5e94\u7528\u7a0b\u5e8f\u4e0d\u9700\u8981\u518d\u8003\u8651\u5404\u79cd\u4e0d\u540c\u7684\u6d88\u606f\u4e2d\u95f4\u4ef6\u5b9e\u73b0\uff0c\u5c31\u80fd\u8f7b\u677e\u5730\u53d1\u9001\u548c\u63a5\u6536\u6d88\u606f\u3002"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Spring Cloud Sleuth"}),(0,l.jsx)(i.td,{children:"Spring Cloud \u5206\u5e03\u5f0f\u94fe\u8def\u8ddf\u8e2a\u7ec4\u4ef6\uff0c\u80fd\u591f\u5b8c\u7f8e\u7684\u6574\u5408 Twitter \u7684 Zipkin\u3002"})]})]})]}),"\n",(0,l.jsxs)(i.blockquote,{children:["\n",(0,l.jsx)(i.p,{children:"\u6ce8\uff1aNetflix \u662f\u7f8e\u56fd\u7684\u4e00\u4e2a\u5728\u7ebf\u89c6\u9891\u7f51\u7ad9\uff0c\u5b83\u662f\u516c\u8ba4\u7684\u5927\u89c4\u6a21\u751f\u4ea7\u7ea7\u5fae\u670d\u52a1\u7684\u6770\u51fa\u5b9e\u8df5\u8005\uff0c\u5fae\u670d\u52a1\u754c\u7684\u7fd8\u695a\u3002Netflix \u7684\u5f00\u6e90\u7ec4\u4ef6\u5df2\u7ecf\u5728\u5176\u5927\u89c4\u6a21\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u73af\u5883\u4e2d\u7ecf\u8fc7\u4e86\u591a\u5e74\u7684\u751f\u4ea7\u5b9e\u6218\u9a8c\u8bc1\uff0c\u6210\u719f\u4e14\u53ef\u9760\u3002"}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"spring-boot-\u548c-spring-cloud-\u7684\u533a\u522b\u4e0e\u8054\u7cfb",children:"Spring Boot \u548c Spring Cloud \u7684\u533a\u522b\u4e0e\u8054\u7cfb"}),"\n",(0,l.jsx)(i.p,{children:"Spring Boot \u548c Spring Cloud \u90fd\u662f Spring \u5927\u5bb6\u65cf\u7684\u4e00\u5458\uff0c\u5b83\u4eec\u5728\u5fae\u670d\u52a1\u5f00\u53d1\u4e2d\u90fd\u626e\u6f14\u7740\u5341\u5206\u91cd\u8981\u7684\u89d2\u8272\uff0c\u4e24\u8005\u4e4b\u95f4\u65e2\u5b58\u5728\u533a\u522b\u4e5f\u5b58\u5728\u8054\u7cfb\u3002"}),"\n",(0,l.jsx)(i.h4,{id:"1-spring-boot-\u548c-spring-cloud-\u5206\u5de5\u4e0d\u540c",children:"1. Spring Boot \u548c Spring Cloud \u5206\u5de5\u4e0d\u540c"}),"\n",(0,l.jsx)(i.p,{children:"Spring Boot \u662f\u4e00\u4e2a\u57fa\u4e8e Spring \u7684\u5feb\u901f\u5f00\u53d1\u6846\u67b6\uff0c\u5b83\u80fd\u591f\u5e2e\u52a9\u5f00\u53d1\u8005\u8fc5\u901f\u642d Web \u5de5\u7a0b\u3002\u5728\u5fae\u670d\u52a1\u5f00\u53d1\u4e2d\uff0cSpring Boot \u4e13\u6ce8\u4e8e\u5feb\u901f\u3001\u65b9\u4fbf\u5730\u5f00\u53d1\u5355\u4e2a\u5fae\u670d\u52a1\u3002"}),"\n",(0,l.jsx)(i.p,{children:"Spring Cloud \u662f\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u7684\u4e00\u7ad9\u5f0f\u89e3\u51b3\u65b9\u6848\u3002Spring Cloud \u4e13\u6ce8\u4e8e\u5168\u5c40\u5fae\u670d\u52a1\u7684\u534f\u8c03\u548c\u6cbb\u7406\u5de5\u4f5c\u3002\u6362\u53e5\u8bdd\u8bf4\uff0cSpring Cloud \u76f8\u5f53\u4e8e\u5fae\u670d\u52a1\u7684\u5927\u7ba1\u5bb6\uff0c\u8d1f\u8d23\u5c06 Spring Boot \u5f00\u53d1\u7684\u4e00\u4e2a\u4e2a\u5fae\u670d\u52a1\u7ba1\u7406\u8d77\u6765\uff0c\u5e76\u4e3a\u5b83\u4eec\u63d0\u4f9b\u914d\u7f6e\u7ba1\u7406\u3001\u670d\u52a1\u53d1\u73b0\u3001\u65ad\u8def\u5668\u3001\u8def\u7531\u3001\u5fae\u4ee3\u7406\u3001\u4e8b\u4ef6\u603b\u7ebf\u3001\u51b3\u7b56\u7ade\u9009\u4ee5\u53ca\u5206\u5e03\u5f0f\u4f1a\u8bdd\u7b49\u670d\u52a1\u3002"}),"\n",(0,l.jsx)(i.h4,{id:"2-spring-cloud-\u662f\u57fa\u4e8e-spring-boot-\u5b9e\u73b0\u7684",children:"2. Spring Cloud \u662f\u57fa\u4e8e Spring Boot \u5b9e\u73b0\u7684"}),"\n",(0,l.jsx)(i.p,{children:"Spring Cloud \u662f\u57fa\u4e8e Spring Boot \u5b9e\u73b0\u7684\u3002\u4e0e Spring Boot \u7c7b\u4f3c\uff0cSpring Cloud \u4e5f\u4e3a\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217 Starter\uff0c\u8fd9\u4e9b Starter \u662f Spring Cloud \u4f7f\u7528 Spring Boot \u601d\u60f3\u5bf9\u5404\u4e2a\u5fae\u670d\u52a1\u6846\u67b6\u8fdb\u884c\u518d\u5c01\u88c5\u7684\u4ea7\u7269\u3002\u5b83\u4eec\u5c4f\u853d\u4e86\u8fd9\u4e9b\u5fae\u670d\u52a1\u6846\u67b6\u4e2d\u590d\u6742\u7684\u914d\u7f6e\u548c\u5b9e\u73b0\u539f\u7406\uff0c\u4f7f\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u5feb\u901f\u3001\u65b9\u4fbf\u5730\u4f7f\u7528 Spring Cloud \u642d\u5efa\u4e00\u5957\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u7cfb\u7edf\u3002"}),"\n",(0,l.jsx)(i.h4,{id:"3-spring-boot-\u548c-spring-cloud-\u4f9d\u8d56\u9879\u6570\u91cf\u4e0d\u540c",children:"3. Spring Boot \u548c Spring Cloud \u4f9d\u8d56\u9879\u6570\u91cf\u4e0d\u540c"}),"\n",(0,l.jsx)(i.p,{children:"Spring Boot \u5c5e\u4e8e\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u6846\u67b6\uff0c\u6784\u5efa Spring Boot \u5de5\u7a0b\u6240\u9700\u7684\u4f9d\u8d56\u8f83\u5c11\u3002"}),"\n",(0,l.jsx)(i.p,{children:"Spring Cloud \u662f\u4e00\u7cfb\u5217\u5fae\u670d\u52a1\u6846\u67b6\u6280\u672f\u7684\u96c6\u5408\u4f53\uff0c\u5b83\u7684\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u9700\u8981\u4e00\u4e2a\u72ec\u7acb\u7684\u4f9d\u8d56\u9879\uff08Starter POM\uff09\uff0c\u56e0\u6b64\u60f3\u8981\u6784\u5efa\u4e00\u5957\u5b8c\u6574\u7684 Spring  Cloud \u5de5\u7a0b\u5f80\u5f80\u9700\u8981\u5927\u91cf\u7684\u4f9d\u8d56\u9879\u3002"}),"\n",(0,l.jsx)(i.h4,{id:"4-spring-cloud-\u4e0d\u80fd\u8131\u79bb-spring-boot-\u5355\u72ec\u8fd0\u884c",children:"4. Spring Cloud \u4e0d\u80fd\u8131\u79bb Spring Boot \u5355\u72ec\u8fd0\u884c"}),"\n",(0,l.jsx)(i.p,{children:"Spring Boot \u4e0d\u9700\u8981 Spring Cloud\uff0c\u5c31\u80fd\u76f4\u63a5\u521b\u5efa\u53ef\u72ec\u7acb\u8fd0\u884c\u7684\u5de5\u7a0b\u6216\u6a21\u5757\u3002"}),"\n",(0,l.jsx)(i.p,{children:"Spring Cloud \u662f\u57fa\u4e8e Spring Boot \u5b9e\u73b0\u7684\uff0c\u5b83\u4e0d\u80fd\u72ec\u7acb\u521b\u5efa\u5de5\u7a0b\u6216\u6a21\u5757\uff0c\u66f4\u4e0d\u80fd\u8131\u79bb Spring Boot \u72ec\u7acb\u8fd0\u884c\u3002"}),"\n",(0,l.jsxs)(i.blockquote,{children:["\n",(0,l.jsx)(i.p,{children:"\u6ce8\u610f\uff1a\u867d\u7136 Spring Boot \u80fd\u591f\u7528\u4e8e\u5f00\u53d1\u5355\u4e2a\u5fae\u670d\u52a1\uff0c\u4f46\u5b83\u5e76\u4e0d\u5177\u5907\u7ba1\u7406\u548c\u534f\u8c03\u5fae\u670d\u52a1\u7684\u80fd\u529b\uff0c\u56e0\u6b64\u5b83\u53ea\u80fd\u7b97\u662f\u4e00\u4e2a\u5fae\u670d\u52a1\u5feb\u901f\u5f00\u53d1\u6846\u67b6\uff0c\u800c\u975e\u5fae\u670d\u52a1\u6846\u67b6\u3002"}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"spring-cloud-\u7248\u672c",children:"Spring Cloud \u7248\u672c"}),"\n",(0,l.jsx)(i.p,{children:"Spring Cloud \u5305\u542b\u4e86\u8bb8\u591a\u5b50\u9879\u76ee\uff08\u7ec4\u4ef6\uff09\uff0c\u8fd9\u4e9b\u5b50\u9879\u76ee\u90fd\u662f\u72ec\u7acb\u8fdb\u884c\u5185\u5bb9\u66f4\u65b0\u548c\u8fed\u4ee3\u7684\uff0c\u5404\u81ea\u90fd\u7ef4\u62a4\u7740\u81ea\u5df1\u7684\u53d1\u5e03\u7248\u672c\u53f7\u3002"}),"\n",(0,l.jsx)(i.p,{children:"\u4e3a\u4e86\u907f\u514d Spring Cloud \u7684\u7248\u672c\u53f7\u4e0e\u5176\u5b50\u9879\u76ee\u7684\u7248\u672c\u53f7\u6df7\u6dc6\uff0cSpring Cloud \u6ca1\u6709\u91c7\u7528\u5e38\u89c1\u7684\u6570\u5b57\u7248\u672c\u53f7\uff0c\u800c\u662f\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b9a\u4e49\u7248\u672c\u4fe1\u606f\u3002"}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.code,{children:"<pre>{version.name} .{version.number}</pre>"})}),"\n",(0,l.jsx)(i.p,{children:"Spring Cloud \u7248\u672c\u4fe1\u606f\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"version.name"}),"\uff1a\u7248\u672c\u540d\uff0c\u91c7\u7528\u82f1\u56fd\u4f26\u6566\u5730\u94c1\u7ad9\u7684\u7ad9\u540d\u6765\u547d\u540d\uff0c\u5e76\u6309\u7167\u5b57\u6bcd\u8868\u7684\u987a\u5e8f\uff08\u5373\u4ece A \u5230 Z\uff09\u6765\u5bf9\u5e94 Spring Cloud \u7684\u7248\u672c\u53d1\u5e03\u987a\u5e8f\uff0c\u4f8b\u5982\u7b2c\u4e00\u4e2a\u7248\u672c\u4e3a Angel\uff0c\u7b2c\u4e8c\u4e2a\u7248\u672c\u4e3a Brixton\uff08\u82f1\u56fd\u5730\u540d\uff09\uff0c\u7136\u540e\u4f9d\u6b21\u662f Camden\u3001Dalston\u3001Edgware\u3001Finchley\u3001Greenwich\u3001Hoxton \u7b49\u3002"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.strong,{children:"version.number"}),"\uff1a\u7248\u672c\u53f7\uff0c\u6bcf\u4e00\u4e2a\u7248\u672c\u7684 Spring Cloud \u5728\u66f4\u65b0\u5185\u5bb9\u79ef\u7d2f\u5230\u4e00\u5b9a\u7684\u91cf\u7ea7\u6216\u6709\u91cd\u5927 BUG \u4fee\u590d\u65f6\uff0c\u5c31\u4f1a\u53d1\u5e03\u4e00\u4e2a\u201cservice releases\u201d\u7248\u672c\uff0c\u7b80\u79f0 SRX \u7248\u672c\uff0c\u5176\u4e2d X \u4e3a\u4e00\u4e2a\u9012\u589e\u7684\u6570\u5b57\uff0c\u4f8b\u5982 Hoxton.SR8 \u5c31\u8868\u793a Hoxton \u7684\u7b2c 8 \u4e2a Release \u7248\u672c\u3002"]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"spring-cloud-\u7248\u672c\u9009\u62e9",children:"Spring Cloud \u7248\u672c\u9009\u62e9"}),"\n",(0,l.jsx)(i.p,{children:"\u5728\u4f7f\u7528 Spring Boot + Spring Cloud \u8fdb\u884c\u5fae\u670d\u52a1\u5f00\u53d1\u65f6\uff0c\u6211\u4eec\u9700\u8981\u6839\u636e\u9879\u76ee\u4e2d Spring Boot \u7684\u7248\u672c\u6765\u51b3\u5b9a Spring Cloud \u7248\u672c\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u8bb8\u591a\u610f\u60f3\u4e0d\u5230\u7684\u9519\u8bef\u3002"}),"\n",(0,l.jsxs)(i.p,{children:["Spring Boot \u4e0e Spring Cloud \u7684\u7248\u672c\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\u8868\uff08\u53c2\u8003\u81ea",(0,l.jsx)(i.a,{href:"https://spring.io/projects/spring-cloud",children:" "}),(0,l.jsx)(i.a,{href:"http://spring.io/projects/spring-cloud",children:"Spring Cloud \u5b98\u7f51"}),"\uff09\u3002"]}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Spring Cloud"}),(0,l.jsx)(i.th,{children:"Spring Boot"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"2020.0.x \uff08Ilford\uff09"}),(0,l.jsx)(i.td,{children:"2.4.x, 2.5.x \uff08\u4ece Spring Cloud 2020.0.3 \u5f00\u59cb\uff09"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Hoxton"}),(0,l.jsx)(i.td,{children:"2.2.x, 2.3.x \uff08\u4ece Spring Cloud SR5 \u5f00\u59cb\uff09"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Greenwich"}),(0,l.jsx)(i.td,{children:"2.1.x"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Finchley"}),(0,l.jsx)(i.td,{children:"2.0.x"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Edgware"}),(0,l.jsx)(i.td,{children:"1.5.x"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Dalston"}),(0,l.jsx)(i.td,{children:"1.5.x"})]})]})]}),"\n",(0,l.jsxs)(i.blockquote,{children:["\n",(0,l.jsx)(i.p,{children:"\u6ce8\u610f\uff1aSpring Cloud \u5b98\u65b9\u5df2\u7ecf\u505c\u6b62\u5bf9 Dalston\u3001Edgware\u3001Finchley \u548c Greenwich \u7684\u7248\u672c\u66f4\u65b0\u3002"}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["\u9664\u4e86\u4e0a\u8868\u4e2d\u5c55\u793a\u7684\u7248\u672c\u5bf9\u5e94\u5173\u7cfb\u4e4b\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,l.jsx)(i.a,{href:"https://start.spring.io/actuator/info",children:"https://start.spring.io/actuator/info"}),"\uff0c\u83b7\u53d6 Spring Cloud \u4e0e Spring Boot \u7684\u7248\u672c\u5bf9\u5e94\u5173\u7cfb\uff08JSON \u7248\uff09\u3002"]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{children:'\n{\n   \u2026\u2026\n    "bom-ranges":{\n        \u2026\u2026\n        "spring-cloud":{\n            "Hoxton.SR12":"Spring Boot >=2.2.0.RELEASE and <2.4.0.M1",\n            "2020.0.4":"Spring Boot >=2.4.0.M1 and <2.5.6-SNAPSHOT",\n            "2020.0.5-SNAPSHOT":"Spring Boot >=2.5.6-SNAPSHOT and <2.6.0-M1",\n            "2021.0.0-M1":"Spring Boot >=2.6.0.M1 and <2.6.0-SNAPSHOT",\n            "2021.0.0-SNAPSHOT":"Spring Boot >=2.6.0-SNAPSHOT"\n        },\n        \u2026\u2026\n    },\n \u2026\u2026\n}\n\n'})}),"\n",(0,l.jsx)(i.h1,{id:"\u53c2\u8003\u6587\u7ae0",children:"\u53c2\u8003\u6587\u7ae0"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.a,{href:"https://lijunyi.xyz/docs/SpringCloud/SpringCloud.html#_2-2-x-%E5%88%86%E6%94%AF",children:"https://lijunyi.xyz/docs/SpringCloud/SpringCloud.html#_2-2-x-%E5%88%86%E6%94%AF"}),"\n",(0,l.jsx)(i.a,{href:"https://mp.weixin.qq.com/s/2jeovmj77O9Ux96v3A0NtA",children:"https://mp.weixin.qq.com/s/2jeovmj77O9Ux96v3A0NtA"}),"\n",(0,l.jsx)(i.a,{href:"https://juejin.cn/post/6931922457741770760",children:"https://juejin.cn/post/6931922457741770760"}),"\n",(0,l.jsx)(i.a,{href:"https://github.com/D2C-Cai/herring",children:"https://github.com/D2C-Cai/herring"}),"\n",(0,l.jsx)(i.a,{href:"http://c.biancheng.net/springcloud",children:"http://c.biancheng.net/springcloud"})]})]})}function g(n={}){const{wrapper:i}={...(0,o.a)(),...n.components};return i?(0,l.jsx)(i,{...n,children:(0,l.jsx)(c,{...n})}):c(n)}},88672:(n,i,r)=>{r.d(i,{Z:()=>s,a:()=>e});var l=r(50959);const o={},d=l.createContext(o);function e(n){const i=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function s(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:e(n.components),l.createElement(d.Provider,{value:i},n.children)}}}]);