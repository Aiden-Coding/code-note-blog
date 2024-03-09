"use strict";(self.webpackChunkcode_note_blog=self.webpackChunkcode_note_blog||[]).push([[3770],{77280:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var t=c(11527),r=c(88672);const o={},l=void 0,s={id:"Java/network/Java\u7f51\u7edc\u4e0eNIO\u603b\u7ed3",title:"Java\u7f51\u7edc\u4e0eNIO\u603b\u7ed3",description:"\u8fd9\u7bc7\u603b\u7ed3\u4e3b\u8981\u662f\u57fa\u4e8e\u6211\u4e4b\u524dJava\u7f51\u7edc\u7f16\u7a0b\u4e0eNIO\u7cfb\u5217\u6587\u7ae0\u800c\u5f62\u6210\u7684\u7684\u3002\u4e3b\u8981\u662f\u628a\u91cd\u8981\u7684\u77e5\u8bc6\u70b9\u7528\u81ea\u5df1\u7684\u8bdd\u8bf4\u4e86\u4e00\u904d\uff0c\u53ef\u80fd\u4f1a\u6709\u4e00\u4e9b\u9519\u8bef\uff0c\u8fd8\u671b\u89c1\u8c05\u548c\u6307\u70b9\u3002\u8c22\u8c22",source:"@site/docs/Java/network/Java\u7f51\u7edc\u4e0eNIO\u603b\u7ed3.md",sourceDirName:"Java/network",slug:"/Java/network/Java\u7f51\u7edc\u4e0eNIO\u603b\u7ed3",permalink:"/code-note-blog/docs/Java/network/Java\u7f51\u7edc\u4e0eNIO\u603b\u7ed3",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Java/network/Java\u7f51\u7edc\u4e0eNIO\u603b\u7ed3.md",tags:[],version:"current",frontMatter:{},sidebar:"java",previous:{title:"Java\u7f51\u7edc\u7f16\u7a0b\u4e0eNIO\u8be6\u89e3\uff1aTomcat\u4e2d\u7684Connector\u6e90\u7801\u5206\u6790\uff08NIO\uff09",permalink:"/code-note-blog/docs/Java/network/Java\u7f51\u7edc\u7f16\u7a0b\u4e0eNIO\u8be6\u89e3\uff1aTomcat\u4e2d\u7684Connector\u6e90\u7801\u5206\u6790\uff08NIO\uff09"}},i={},a=[{value:"Java IO",id:"java-io",level:2},{value:"Socket\u7f16\u7a0b",id:"socket\u7f16\u7a0b",level:2},{value:"\u5ba2\u6237\u7aef\uff0c\u670d\u52a1\u7aef\u7684\u7ebf\u7a0b\u6a21\u578b",id:"\u5ba2\u6237\u7aef\u670d\u52a1\u7aef\u7684\u7ebf\u7a0b\u6a21\u578b",level:2},{value:"IO\u6a21\u578b",id:"io\u6a21\u578b",level:2},{value:"NIO",id:"nio",level:2},{value:"AIO",id:"aio",level:2},{value:"Tomcat\u4e2d\u7684NIO\u6a21\u578b",id:"tomcat\u4e2d\u7684nio\u6a21\u578b",level:2},{value:"Tomcat\u7684container",id:"tomcat\u7684container",level:2},{value:"netty",id:"netty",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u8fd9\u7bc7\u603b\u7ed3\u4e3b\u8981\u662f\u57fa\u4e8e\u6211\u4e4b\u524dJava\u7f51\u7edc\u7f16\u7a0b\u4e0eNIO\u7cfb\u5217\u6587\u7ae0\u800c\u5f62\u6210\u7684\u7684\u3002\u4e3b\u8981\u662f\u628a\u91cd\u8981\u7684\u77e5\u8bc6\u70b9\u7528\u81ea\u5df1\u7684\u8bdd\u8bf4\u4e86\u4e00\u904d\uff0c\u53ef\u80fd\u4f1a\u6709\u4e00\u4e9b\u9519\u8bef\uff0c\u8fd8\u671b\u89c1\u8c05\u548c\u6307\u70b9\u3002\u8c22\u8c22"}),"\n",(0,t.jsx)(n.p,{children:"\u66f4\u591a\u8be6\u7ec6\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b\u6211\u7684\u4e13\u680f\u6587\u7ae0\uff1aJava\u7f51\u7edc\u7f16\u7a0b\u4e0eNIO"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://blog.csdn.net/column/details/21963.html",children:"https://blog.csdn.net/column/details/21963.html"})}),"\n",(0,t.jsx)(n.h2,{id:"java-io",children:"Java IO"}),"\n",(0,t.jsx)(n.p,{children:"Java IO\u7684\u57fa\u7840\u77e5\u8bc6\u5df2\u5728\u524d\u9762\u8bb2\u8fc7"}),"\n",(0,t.jsx)(n.h2,{id:"socket\u7f16\u7a0b",children:"Socket\u7f16\u7a0b"}),"\n",(0,t.jsx)(n.p,{children:"socket\u662f\u64cd\u4f5c\u7cfb\u7edf\u63d0\u4f9b\u7684\u7f51\u7edc\u7f16\u7a0b\u63a5\u53e3\uff0c\u4ed6\u5c01\u88c5\u4e86\u5bf9\u4e8eTCP/IP\u534f\u8bae\u6808\u7684\u652f\u6301\uff0c\u7528\u4e8e\u8fdb\u7a0b\u95f4\u7684\u901a\u4fe1\uff0c\u5f53\u6709\u8fde\u63a5\u63a5\u5165\u4e3b\u673a\u4ee5\u540e\uff0c\u64cd\u4f5c\u7cfb\u7edf\u81ea\u52a8\u4e3a\u5176\u5206\u914d\u4e00\u4e2asocket\u5957\u63a5\u5b57\uff0c\u5957\u63a5\u5b57\u7ed1\u5b9a\u7740\u4e00\u4e2aIP\u4e0e\u7aef\u53e3\u53f7\u3002\u901a\u8fc7socket\u63a5\u53e3\uff0c\u53ef\u4ee5\u83b7\u53d6tcp\u8fde\u63a5\u7684\u8f93\u5165\u6d41\u548c\u8f93\u51fa\u6d41\uff0c\u5e76\u4e14\u901a\u8fc7\u4ed6\u4eec\u8fdb\u884c\u8bfb\u53d6\u548c\u5199\u5165\u6b64\u64cd\u4f5c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"Java\u63d0\u4f9b\u4e86net\u5305\u7528\u4e8esocket\u7f16\u7a0b\uff0c\u540c\u65f6\u652f\u6301\u50cfInetaddress\uff0cURL\u7b49\u5de5\u5177\u7c7b\uff0c\u4f7f\u7528socket\u7ed1\u5b9a\u4e00\u4e2aendpoint\uff08ip+\u7aef\u53e3\u53f7\uff09\uff0c\u53ef\u4ee5\u7528\u4e8e\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u5904\u7406\u548c\u53d1\u9001\uff0c\u4f7f\u7528serversocket\u7ed1\u5b9a\u672c\u5730ip\u548c\u7aef\u53e3\u53f7\uff0c\u53ef\u4ee5\u7528\u4e8e\u670d\u52a1\u7aef\u63a5\u6536TCP\u8bf7\u6c42\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5ba2\u6237\u7aef\u670d\u52a1\u7aef\u7684\u7ebf\u7a0b\u6a21\u578b",children:"\u5ba2\u6237\u7aef\uff0c\u670d\u52a1\u7aef\u7684\u7ebf\u7a0b\u6a21\u578b"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u822c\u5ba2\u6237\u7aef\u4f7f\u7528\u5355\u7ebf\u7a0b\u6a21\u578b\u5373\u53ef\uff0c\u5f53\u6709\u6570\u636e\u5230\u6765\u65f6\u542f\u52a8\u7ebf\u7a0b\u8bfb\u53d6\uff0c\u9700\u8981\u5199\u5165\u6570\u636e\u65f6\u5f00\u542f\u7ebf\u7a0b\u8fdb\u884c\u6570\u636e\u5199\u5165\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u670d\u52a1\u7aef\u4e00\u822c\u4f7f\u7528\u591a\u7ebf\u7a0b\u6a21\u578b\uff0c\u4e00\u4e2a\u7ebf\u7a0b\u8d1f\u8d23\u63a5\u6536tcp\u8fde\u63a5\u8bf7\u6c42\uff0c\u6bcf\u5f53\u63a5\u6536\u5230\u8bf7\u6c42\u540e\u5f00\u542f\u4e00\u4e2a\u7ebf\u7a0b\u5904\u7406\u5b83\u7684\u8bfb\u5199\u8bf7\u6c42\u3002"}),"\n",(0,t.jsx)(n.p,{children:"udp\u7684\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u5c31\u6bd4\u8f83\u7b80\u5355\u4e86\uff0c\u7531\u4e8eudp\u6570\u636e\u62a5\u957f\u5ea6\u662f\u786e\u5b9a\u7684\uff0c\u53ea\u9700\u8981\u5199\u5165\u4e00\u4e2a\u56fa\u5b9a\u7684\u7f13\u5b58\u548c\u8bfb\u53d6\u4e00\u4e2a\u56fa\u5b9a\u7684\u7f13\u5b58\u7a7a\u95f4\u5373\u53ef\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u822c\u901a\u8fc7DatagramPacket\u5305\u88c5\u4e00\u4e2audp\u6570\u636e\u62a5\uff0c\u7136\u540e\u901a\u8fc7DatagramSocket\u53d1\u9001"}),"\n",(0,t.jsx)(n.h2,{id:"io\u6a21\u578b",children:"IO\u6a21\u578b"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u8ff0\u7684socket\u5728\u5904\u7406IO\u8bf7\u6c42\u65f6\u4f7f\u7528\u7684\u662f\u963b\u585e\u6a21\u578b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e8e\u662f\u6211\u4eec\u8fd8\u662f\u5f97\u6765\u63a2\u8ba8\u4e00\u4e0bIO\u6a21\u578b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u822c\u8ba4\u4e3a\uff0c\u5e94\u7528\u7a0b\u5e8f\u5904\u7406IO\u8bf7\u6c42\u9700\u8981\u5c06\u5185\u6838\u7f13\u5b58\u533a\u4e2d\u7684\u6570\u636e\u62f7\u8d1d\u5230\u7528\u6237\u7f13\u51b2\u533a\u3002\u8fd9\u4e2a\u6b65\u9aa4\u53ef\u4ee5\u901a\u8fc7\u7cfb\u7edf\u8c03\u7528\u6765\u5b8c\u6210\uff0c\u800c\u7528\u6237\u7a0b\u5e8f\u5904\u7406IO\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u9700\u8981\u5148\u68c0\u67e5\u7528\u6237\u7f13\u51b2\u533a\u662f\u5426\u51c6\u5907\u597d\u4e86\u6570\u636e\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u662f\u7cfb\u7edf\u8c03\u7528recevfrom\uff0c\u5982\u679c\u6570\u636e\u6ca1\u6709\u51c6\u5907\u597d\uff0c\u9ed8\u8ba4\u4f1a\u963b\u585e\u8c03\u7528\u8be5\u65b9\u6cd5\u7684\u7ebf\u7a0b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u6837\u5c31\u5bfc\u81f4\u4e86\u7ebf\u7a0b\u5904\u7406IO\u8bf7\u6c42\u9700\u8981\u9891\u7e41\u8fdb\u884c\u963b\u585e\uff0c\u7279\u522b\u662f\u5e76\u53d1\u91cf\u5927\u7684\u65f6\u5019\uff0c\u7ebf\u7a0b\u5207\u6362\u7684\u5f00\u9500\u5de8\u5927\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u822c\u8ba4\u4e3a\u6709\u51e0\u79cdIO\u6a21\u578b"}),"\n",(0,t.jsx)(n.p,{children:"1 \u963b\u585eIO \uff1a\u5c31\u662f\u7ebf\u7a0b\u4f1a\u963b\u585e\u5728\u7cfb\u7edf\u8c03\u7528recevfrom\u4e0a\uff0c\u5e76\u4e14\u7b49\u5f85\u6570\u636e\u51c6\u5907\u5c31\u7eea\u4ee5\u540e\u624d\u4f1a\u8fd4\u56de\u3002"}),"\n",(0,t.jsx)(n.p,{children:"2 \u975e\u963b\u585eIO : \u4e0d\u963b\u585e\u5728\u7cfb\u7edf\u8c03\u7528recevfrom\uff0c\u800c\u662f\u901a\u8fc7\u81ea\u65cb\u5fd9\u7b49\u7684\u65b9\u5f0f\u4e0d\u65ad\u8be2\u95ee\u7f13\u51b2\u533a\u6570\u636e\u662f\u5426\u51c6\u5907\u5c31\u7eea\uff0c\u907f\u514d\u7ebf\u7a0b\u963b\u585e\u7684\u5f00\u9500\u3002"}),"\n",(0,t.jsx)(n.p,{children:"3 IO\u591a\u8def\u590d\u7528 \uff1a\u4f7f\u7528IO\u591a\u8def\u590d\u7528\u5668\u7ba1\u7406socket\uff0c\u7531\u4e8e\u6bcf\u4e2asocket\u662f\u4e00\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u64cd\u4f5c\u7cfb\u7edf\u53ef\u4ee5\u7ef4\u62a4socket\u548c\u5b83\u7684\u8fde\u63a5\u72b6\u6001\uff0c\u4e00\u822c\u5206\u4e3a\u53ef\u8fde\u63a5\uff0c\u53ef\u8bfb\u548c\u53ef\u5199\u7b49\u72b6\u6001\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6bcf\u5f53\u7528\u6237\u7a0b\u5e8f\u63a5\u53d7\u5230socket\u8bf7\u6c42\uff0c\u5c06\u8bf7\u6c42\u6258\u7ba1\u7ed9\u591a\u8def\u590d\u7528\u5668\u8fdb\u884c\u76d1\u63a7\uff0c\u5f53\u7a0b\u5e8f\u5bf9\u8bf7\u6c42\u611f\u5174\u8da3\u7684\u4e8b\u4ef6\u53d1\u751f\u65f6\uff0c\u591a\u8def\u590d\u7528\u5668\u4ee5\u67d0\u79cd\u65b9\u5f0f\u901a\u77e5\u6216\u662f\u7528\u6237\u7a0b\u5e8f\u81ea\u5df1\u8f6e\u8be2\u8bf7\u6c42\uff0c\u4ee5\u4fbf\u83b7\u53d6\u5c31\u7eea\u7684socket\uff0c\u7136\u540e\u53ea\u9700\u4f7f\u7528\u4e00\u4e2a\u7ebf\u7a0b\u8fdb\u884c\u8f6e\u8be2\uff0c\u591a\u4e2a\u7ebf\u7a0b\u5904\u7406\u5c31\u7eea\u8bf7\u6c42\u5373\u53ef\u3002"}),"\n",(0,t.jsx)(n.p,{children:"IO\u591a\u8def\u590d\u7528\u907f\u514d\u4e86\u6bcf\u4e2asocket\u8bf7\u6c42\u90fd\u9700\u8981\u4e00\u4e2a\u7ebf\u7a0b\u53bb\u5904\u7406\uff0c\u800c\u662f\u4f7f\u7528\u4e8b\u4ef6\u9a71\u52a8\u7684\u65b9\u5f0f\uff0c\u8ba9\u5c11\u6570\u7684\u7ebf\u7a0b\u53bb\u5904\u7406\u591a\u6570socket\u7684IO\u8bf7\u6c42\u3002"}),"\n",(0,t.jsx)(n.p,{children:"Linux\u64cd\u4f5c\u7cfb\u7edf\u5bf9IO\u591a\u8def\u590d\u7528\u63d0\u4f9b\u4e86\u8f83\u597d\u7684\u652f\u6301\uff0cselect\uff0cpoll\uff0cepoll\u662fLinux\u63d0\u4f9b\u7684\u652f\u6301IO\u591a\u8def\u590d\u7528\u7684API\u3002\u4e00\u822c\u7528\u6237\u7a0b\u5e8f\u57fa\u4e8e\u8fd9\u4e2aAPI\u53bb\u5f00\u53d1\u81ea\u5df1\u7684IO\u590d\u7528\u6a21\u578b\u3002\u6bd4\u5982NIO\u7684\u975e\u963b\u585e\u6a21\u578b\uff0c\u5c31\u662f\u91c7\u7528\u4e86IO\u591a\u8def\u590d\u7528\u7684\u65b9\u5f0f\uff0c\u662f\u57fa\u4e8eepoll\u5b9e\u73b0\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:"3.1 select\u65b9\u5f0f\u4e3b\u8981\u662f\u4f7f\u7528\u6570\u7ec4\u6765\u5b58\u50a8socket\u63cf\u8ff0\u7b26\uff0c\u7cfb\u7edf\u5c06\u53d1\u751f\u4e8b\u4ef6\u7684\u63cf\u8ff0\u7b26\u505a\u6807\u8bb0\uff0c\u7136\u540eIO\u590d\u7528\u5668\u5728\u8f6e\u8be2\u63cf\u8ff0\u7b26\u6570\u7ec4\u7684\u65f6\u5019\uff0c\u5c31\u53ef\u4ee5\u77e5\u9053\u54ea\u4e9b\u8bf7\u6c42\u662f\u5c31\u7eea\u4e86\u7684\u3002\u7f3a\u70b9\u662f\u6570\u7ec4\u7684\u957f\u5ea6\u53ea\u80fd\u52301024\uff0c\u5e76\u4e14\u9700\u8981\u4e0d\u65ad\u5730\u5728\u5185\u6838\u7a7a\u95f4\u548c\u7528\u6237\u7a7a\u95f4\u4e4b\u95f4\u62f7\u8d1d\u6570\u7ec4\u3002"}),"\n",(0,t.jsx)(n.p,{children:"3.2 poll\u65b9\u5f0f\u4e0d\u91c7\u7528\u6570\u7ec4\u5b58\u50a8\u63cf\u8ff0\u7b26\uff0c\u800c\u662f\u4f7f\u7528\u72ec\u7acb\u7684\u6570\u636e\u7ed3\u6784\u6765\u63cf\u8ff0\uff0c\u5e76\u4e14\u4f7f\u7528id\u6765\u8868\u793a\u63cf\u8ff0\u7b26\uff0c\u80fd\u652f\u6301\u66f4\u591a\u7684\u8bf7\u6c42\u6570\u91cf\uff0c\u7f3a\u70b9\u548cselect\u65b9\u5f0f\u6709\u70b9\u7c7b\u4f3c\uff0c\u5c31\u662f\u8f6e\u8be2\u7684\u6548\u7387\u5f88\u4f4e\uff0c\u5e76\u4e14\u9700\u8981\u62f7\u8d1d\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u4e0a\u8ff0\u4e24\u79cd\u65b9\u6cd5\u9002\u5408\u5728\u8bf7\u6c42\u603b\u6570\u8f83\u5c11\uff0c\u5e76\u4e14\u6d3b\u8dc3\u8bf7\u6c42\u6570\u8f83\u591a\u7684\u60c5\u51b5\uff0c\u8fd9\u79cd\u573a\u666f\u4e0b\u4ed6\u4eec\u7684\u6027\u80fd\u8fd8\u662f\u4e0d\u9519\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:"3.3 epoll"}),"\n",(0,t.jsx)(n.p,{children:"epoll\u51fd\u6570\u4f1a\u5728\u5185\u6838\u7a7a\u95f4\u5f00\u8f9f\u4e00\u4e2a\u7279\u6b8a\u7684\u6570\u636e\u7ed3\u6784\uff0c\u7ea2\u9ed1\u6811\uff0c\u6811\u8282\u70b9\u4e2d\u5b58\u653e\u7684\u662f\u4e00\u4e2asocket\u63cf\u8ff0\u7b26\u4ee5\u53ca\u7528\u6237\u7a0b\u5e8f\u611f\u5174\u8da3\u7684\u4e8b\u4ef6\u7c7b\u578b\u3002\u540c\u65f6epoll\u8fd8\u4f1a\u7ef4\u62a4\u4e00\u4e2a\u94fe\u8868\u3002\u7528\u4e8e\u5b58\u50a8\u5df2\u7ecf\u5c31\u7eea\u7684socket\u63cf\u8ff0\u7b26\u8282\u70b9\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u7531Linux\u5185\u6838\u5b8c\u6210\u5bf9\u7ea2\u9ed1\u6811\u7684\u7ef4\u62a4\uff0c\u5f53\u4e8b\u4ef6\u5230\u8fbe\u65f6\uff0c\u5185\u6838\u5c06\u5c31\u7eea\u7684socket\u8282\u70b9\u52a0\u5165\u94fe\u8868\u4e2d\uff0c\u7528\u6237\u7a0b\u5e8f\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u8fd9\u4e2a\u94fe\u8868\u4ee5\u4fbf\u83b7\u53d6\u5c31\u7eea\u7684socket\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u7136\u4e86\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u90fdlinux\u5305\u88c5\u5728epoll\u7684api\u4e2d\u4e86\u3002"}),"\n",(0,t.jsx)(n.p,{children:"epoll_create\u51fd\u6570\u4f1a\u6267\u884c\u7ea2\u9ed1\u6811\u7684\u521b\u5efa\u64cd\u4f5c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"epoll_ctl\u51fd\u6570\u4f1a\u5c06socket\u548c\u611f\u5174\u8da3\u7684\u4e8b\u4ef6\u6ce8\u518c\u5230\u7ea2\u9ed1\u6811\u4e2d\u3002"}),"\n",(0,t.jsx)(n.p,{children:"epoll_wait\u51fd\u6570\u4f1a\u7b49\u5f85\u5185\u6838\u7a7a\u95f4\u53d1\u6765\u7684\u94fe\u8868\uff0c\u4ece\u800c\u6267\u884cIO\u8bf7\u6c42\u3002"}),"\n",(0,t.jsx)(n.p,{children:"epoll\u7684\u6c34\u5e73\u89e6\u53d1\u548c\u8fb9\u7f18\u89e6\u53d1\u6709\u6240\u533a\u522b\uff0c\u6c34\u5e73\u89e6\u53d1\u7684\u610f\u601d\u662f\uff0c\u5982\u679c\u7528\u6237\u7a0b\u5e8f\u6ca1\u6709\u6267\u884c\u5c31\u7eea\u94fe\u8868\u91cc\u7684\u4efb\u52a1\uff0cepoll\u4ecd\u4f1a\u4e0d\u65ad\u901a\u77e5\u7a0b\u5e8f\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u800c\u8fb9\u7f18\u89e6\u53d1\u53ea\u4f1a\u901a\u77e5\u7a0b\u5e8f\u4e00\u6b21\uff0c\u4e4b\u540esocket\u7684\u72b6\u6001\u4e0d\u53d1\u751f\u6539\u53d8epoll\u5c31\u4e0d\u4f1a\u518d\u901a\u77e5\u7a0b\u5e8f\u4e86\u3002"}),"\n",(0,t.jsx)(n.p,{children:"4 \u4fe1\u53f7\u9a71\u52a8\n\u7565"}),"\n",(0,t.jsx)(n.p,{children:"5 \u5f02\u6b65\u975e\u963b\u585e"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u6237\u8fdb\u7a0b\u53d1\u8d77read\u64cd\u4f5c\u4e4b\u540e\uff0c\u7acb\u523b\u5c31\u53ef\u4ee5\u5f00\u59cb\u53bb\u505a\u5176\u5b83\u7684\u4e8b\u3002\u800c\u53e6\u4e00\u65b9\u9762\uff0c\u4ecekernel\u7684\u89d2\u5ea6\uff0c\u5f53\u5b83\u53d7\u5230\u4e00\u4e2aasynchronous read\u4e4b\u540e\uff0c\u9996\u5148\u5b83\u4f1a\u7acb\u523b\u8fd4\u56de\uff0c\u6240\u4ee5\u4e0d\u4f1a\u5bf9\u7528\u6237\u8fdb\u7a0b\u4ea7\u751f\u4efb\u4f55block\u3002\u7136\u540e\uff0ckernel\u4f1a\u7b49\u5f85\u6570\u636e\u51c6\u5907\u5b8c\u6210\uff0c\u7136\u540e\u5c06\u6570\u636e\u62f7\u8d1d\u5230\u7528\u6237\u5185\u5b58\uff0c\u5f53\u8fd9\u4e00\u5207\u90fd\u5b8c\u6210\u4e4b\u540e\uff0ckernel\u4f1a\u7ed9\u7528\u6237\u8fdb\u7a0b\u53d1\u9001\u4e00\u4e2asignal\uff0c\u544a\u8bc9\u5b83read\u64cd\u4f5c\u5b8c\u6210\u4e86\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e8b\u5b9e\u4e0a\u5c31\u662f\uff0c\u7528\u6237\u63d0\u4ea4IO\u8bf7\u6c42\uff0c\u7136\u540e\u76f4\u63a5\u8fd4\u56de\uff0c\u5e76\u4e14\u5185\u6838\u81ea\u52a8\u5b8c\u6210\u5c06\u6570\u636e\u4ece\u5185\u6838\u7f13\u51b2\u533a\u590d\u5236\u5230\u7528\u6237\u7f13\u51b2\u533a\uff0c\u5b8c\u6210\u540e\u518d\u901a\u77e5\u7528\u6237\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u5185\u6838\u901a\u77e5\u6211\u4eec\u4ee5\u540e\u6211\u4eec\u8fd8\u9700\u8981\u6267\u884c\u5269\u4f59\u7684\u64cd\u4f5c\uff0c\u4f46\u662f\u6211\u4eec\u7684\u4ee3\u7801\u5df2\u7ecf\u7ee7\u7eed\u5f80\u4e0b\u8fd0\u884c\u4e86\uff0c\u6240\u4ee5AIO\u91c7\u7528\u4e86\u56de\u8c03\u7684\u673a\u5236\uff0c\u4e3a\u6bcf\u4e2asocket\u6ce8\u518c\u4e00\u4e2a\u56de\u8c03\u4e8b\u4ef6\u6216\u8005\u662f\u56de\u8c03\u5904\u7406\u5668\uff0c\u5728\u5904\u7406\u5668\u4e2d\u5b8c\u6210\u6570\u636e\u7684\u64cd\u4f5c\uff0c\u4e5f\u5c31\u662f\u5185\u6838\u901a\u77e5\u5230\u7528\u6237\u7684\u65f6\u5019\uff0c\u4f1a\u81ea\u52a8\u89e6\u53d1\u56de\u8c03\u51fd\u6570\uff0c\u5b8c\u6210\u5269\u4f59\u64cd\u4f5c\u3002\n\u8fd9\u6837\u7684\u65b9\u5f0f\u5c31\u662f\u5f02\u6b65\u7684\u7f51\u7edc\u7f16\u7a0b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f46\u662f\uff0c\u60f3\u8981\u8ba9\u64cd\u4f5c\u7cfb\u7edf\u652f\u6301\u8fd9\u6837\u7684\u529f\u80fd\u5e76\u975e\u6613\u4e8b\uff0cwindows\u7684IOCP\u53ef\u4ee5\u652f\u6301AIO\u65b9\u5f0f\uff0c\u4f46\u662fLinux\u7684AIO\u652f\u6301\u5e76\u4e0d\u662f\u5f88\u597d"}),"\n",(0,t.jsx)(n.h2,{id:"nio",children:"NIO"}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8eJava\u539f\u751f\u7684socket\u53ea\u652f\u6301\u963b\u585e\u65b9\u5f0f\u5904\u7406IO"}),"\n",(0,t.jsx)(n.p,{children:"\u6240\u4ee5Java\u540e\u6765\u63a8\u51fa\u4e86\u65b0\u7248IO \u4e5f\u53ebNew IO = NIO"}),"\n",(0,t.jsx)(n.p,{children:"NIO\u63d0\u51fa\u4e86socketChannel\uff0cserversocketchannel\uff0cbytebuffer\uff0cselector\u548cselectedkey\u7b49\u6982\u5ff5\u3002"}),"\n",(0,t.jsx)(n.p,{children:"1 socketchannel\u5176\u5b9e\u5c31\u662fsocket\u7684\u66ff\u4ee3\u54c1\uff0c\u4ed6\u7684\u597d\u5904\u662f\u591a\u4e2asocket\u53ef\u4ee5\u590d\u7528\u540c\u4e00\u4e2abytebuffer\uff0c\u56e0\u4e3asocket\u662f\u4ecechannel\u91cc\u6253\u5f00\u7684\uff0c\u6240\u4ee5\u591a\u4e2asocket\u90fd\u53ef\u4ee5\u8bbf\u95eechannel\u7ed1\u5b9a\u7740\u7684buffer\u3002"}),"\n",(0,t.jsx)(n.p,{children:"2 serversocketchannel\u987e\u540d\u601d\u4e49\uff0c\u662f\u7528\u5728\u670d\u52a1\u7aef\u7684channel\u3002"}),"\n",(0,t.jsx)(n.p,{children:"3 bytebuffer\u4ee5\u524d\u5bf9\u7528\u6237\u662f\u900f\u660e\u7684\uff0c\u7528\u6237\u76f4\u63a5\u64cd\u4f5cio\u6d41\u5373\u53ef\uff0c\u6240\u4ee5\u4e4b\u524d\u7684socket io\u64cd\u4f5c\u90fd\u662f\u963b\u585e\u7684\uff0c\u5f15\u5165bytebuffer\u4ee5\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u66f4\u7075\u6d3b\u5730\u8fdb\u884cio\u64cd\u4f5c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"buffer\u53ef\u4ee5\u5206\u4e3a\u4e0d\u540c\u6570\u636e\u7c7b\u578b\u7684buffer\uff0c\u4f46\u662f\u5e38\u7528\u7684\u8fd8\u662fbytebuffer\u3002\u5199\u5165\u6570\u636e\u65f6\u6309\u987a\u5e8f\u5199\u5165\uff0c\u5199\u5165\u5b8c\u4f7f\u7528flip\u65b9\u6cd5\u53cd\u8f6c\u7f13\u51b2\u533a\uff0c\u8ba9\u63a5\u6536\u7aef\u53cd\u5411\u8bfb\u53d6\u3002\u8fd9\u4e2a\u64cd\u4f5c\u6bd4\u8f83\u9ebb\u70e6\uff0c\u540e\u6765\u7684netty\u5bf9\u7f13\u51b2\u533a\u8fdb\u884c\u4e86\u91cd\u65b0\u5c01\u88c5\uff0c\u5c01\u88c5\u4e86\u8fd9\u4e2a\u7ecf\u5e38\u5bb9\u6613\u51fa\u9519\u7684\u65b9\u6cd5\u3002"}),"\n",(0,t.jsx)(n.p,{children:"4 selector\u5176\u5b9e\u5c31\u662f\u5bf9io\u591a\u8def\u590d\u7528\u5668\u7684\u5c01\u88c5\uff0c\u4e00\u822c\u57fa\u4e8elinux\u7684epoll\u6765\u5b9e\u73b0\u3002\nsocket\u628a\u611f\u5174\u8da3\u7684\u4e8b\u4ef6\u548c\u63cf\u8ff0\u7b26\u6ce8\u518c\u5230selector\u4e0a\uff0c\u7136\u540e\u901a\u8fc7\u904d\u5386selectedKey\u6765\u83b7\u53d6\u611f\u5174\u8da3\u7684\u8bf7\u6c42\uff0c\u8fdb\u884cIO\u64cd\u4f5c\u3002\nselectedkey\u5e94\u8be5\u5c31\u662fepoll\u4e2d\u5c31\u7eea\u94fe\u8868\u7684\u5b9e\u73b0\u4e86\u3002"}),"\n",(0,t.jsx)(n.p,{children:"5 \u6240\u4ee5\u4e00\u822c\u7684\u6d41\u7a0b\u662f\uff1a\n\u65b0\u5efa\u4e00\u4e2aserversocket\uff0c\u542f\u52a8\u4e00\u4e2a\u7ebf\u7a0b\u8fdb\u884cwhile\u5faa\u73af\uff0c\u5f53\u6709\u8bf7\u6c42\u63a5\u5165\u65f6\uff0c\u4f7f\u7528accept\u65b9\u6cd5\u963b\u585e\u83b7\u53d6socket\uff0c\u7136\u540e\u5c06socket\u548c\u611f\u5174\u8da3\u7684\u4e8b\u4ef6\u6ce8\u518c\u5230selector\u4e0a\u3002\u518d\u5f00\u542f\u4e00\u4e2a\u7ebf\u7a0b\u8f6e\u8be2selectoredKey\uff0c\u5f53\u8bf7\u6c42\u5c31\u7eea\u65f6\u5f00\u542f\u4e00\u4e2a\u7ebf\u7a0b\u53bb\u5904\u7406\u5373\u53ef\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"aio",children:"AIO"}),"\n",(0,t.jsx)(n.p,{children:"\u540e\u6765NIO\u53d1\u5c55\u52302.0\uff0cJava\u53c8\u63a8\u51fa\u4e86AIO \u7684API\uff0c\u4e0e\u4e0a\u9762\u63cf\u8ff0\u7684\u5f02\u6b65\u975e\u963b\u585e\u6a21\u578b\u7c7b\u4f3c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"AIO\u4f7f\u7528\u56de\u8c03\u7684\u65b9\u5f0f\u5904\u7406IO\u8bf7\u6c42\uff0c\u5728socket\u4e0a\u6ce8\u518c\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u7136\u540e\u63d0\u4ea4\u8bf7\u6c42\u540e\u76f4\u63a5\u8fd4\u56de\u3002\u7531\u64cd\u4f5c\u7cfb\u7edf\u5b8c\u6210\u6570\u636e\u62f7\u8d1d\u64cd\u4f5c\uff0c\u9700\u8981\u64cd\u4f5c\u7cfb\u7edf\u5bf9AIO\u7684\u652f\u6301\u3002"}),"\n",(0,t.jsx)(n.p,{children:"AIO\u7684\u5177\u4f53\u4f7f\u7528\u65b9\u5f0f\u8fd8\u662f\u6bd4\u8f83\u590d\u6742\u7684\uff0c\u611f\u5174\u8da3\u7684\u53ef\u4ee5\u81ea\u5df1\u67e5\u9605\u8d44\u6599\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"tomcat\u4e2d\u7684nio\u6a21\u578b",children:"Tomcat\u4e2d\u7684NIO\u6a21\u578b"}),"\n",(0,t.jsx)(n.p,{children:"Tomcat\u4f5c\u4e3a\u4e00\u4e2a\u5e94\u7528\u670d\u52a1\u5668\uff0c\u5206\u4e3aconnector\u548ccontainer\u4e24\u4e2a\u90e8\u5206\uff0cconnector\u8d1f\u8d23\u63a5\u6536\u8bf7\u6c42\uff0c\u800ccontainer\u8d1f\u8d23\u89e3\u6790\u8bf7\u6c42\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u822cconnector\u8d1f\u8d23\u63a5\u6536http\u8bf7\u6c42\uff0c\u5f53\u7136\u9996\u5148\u8981\u5efa\u7acbtcp\u8fde\u63a5\uff0c\u6240\u4ee5\u6d89\u53ca\u5230\u4e86\u5982\u4f55\u5904\u7406\u8fde\u63a5\u548cIO\u8bf7\u6c42\u3002"}),"\n",(0,t.jsx)(n.p,{children:"Tomcat\u4f7f\u7528endpoint\u7684\u6982\u5ff5\u6765\u7ed1\u5b9a\u4e00\u4e2aip+port\uff0c\u9996\u5148\uff0c\u4f7f\u7528acceptor\u5faa\u73af\u7b49\u5f85\u8fde\u63a5\u8bf7\u6c42\u3002\u7136\u540e\u5f00\u542f\u4e00\u4e2a\u7ebf\u7a0b\u6c60\uff0c\u4e5f\u53ebpoller\u6c60\uff0c\u6bcf\u4e2a\u8bf7\u6c42\u7ed1\u5b9a\u4e00\u4e2apoller\u8fdb\u884c\u540e\u7eed\u5904\u7406\uff0cpoller\u5c06socket\u8bf7\u6c42\u5c01\u88c5\u6210\u4e00\u4e2a\u4e8b\u4ef6\uff0c\u5e76\u4e14\u5c06\u8fd9\u4e2a\u4e8b\u4ef6\u6ce8\u518c\u5230selector\u4e2d\u3002"}),"\n",(0,t.jsx)(n.p,{children:"poller\u8fd8\u9700\u8981\u7ef4\u62a4\u4e00\u4e2a\u4e8b\u4ef6\u5217\u8868\uff0c\u4ee5\u4fbf\u83b7\u53d6selector\u4e0a\u5c31\u7eea\u7684\u4e8b\u4ef6\u3002\u7136\u540epoller\u518d\u53bb\u5217\u8868\u4e2d\u83b7\u53d6\u5c31\u7eea\u7684\u8bf7\u6c42\uff0c\u5c06\u5176\u5c01\u88c5\u6210processor\uff0c\u4ea4\u7ed9\u540e\u7eed\u7684worker\u7ebf\u7a0b\u6c60\uff0c\u4f1a\u6709worker\u5c06\u5176\u63d0\u4ea4\u7ed9container\u6d41\u7a0b\u4e2d\u8fdb\u884c\u5904\u7406\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u5230\u8fbecontainer\u4e4b\u540e\u8fd8\u6709\u975e\u5e38\u590d\u6742\u7684\u5904\u7406\u8fc7\u7a0b\uff0c\u7a0d\u5fae\u63d0\u51e0\u4e2a\u70b9\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"tomcat\u7684container",children:"Tomcat\u7684container"}),"\n",(0,t.jsx)(n.p,{children:"container\u662f\u4e00\u4e2a\u591a\u7ea7\u5bb9\u5668\uff0c\u6700\u5916\u5c42\u5230\u6700\u5185\u5c42\u4f9d\u6b21\u662fengine\uff0chost\uff0ccontext\u548cwrapper"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4e2aserver.xml\u6587\u4ef6\u5b9e\u4f8b\uff0cTomcat\u6839\u636e\u8be5\u6587\u4ef6\u8fdb\u884c\u90e8\u7f72"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<Server>                                                //\u9876\u5c42\u7c7b\u5143\u7d20\uff0c\u53ef\u4ee5\u5305\u62ec\u591a\u4e2aService   \n    <Service>                                           //\u9876\u5c42\u7c7b\u5143\u7d20\uff0c\u53ef\u5305\u542b\u4e00\u4e2aEngine\uff0c\u591a\u4e2aConnecter\n        <Connector>                                     //\u8fde\u63a5\u5668\u7c7b\u5143\u7d20\uff0c\u4ee3\u8868\u901a\u4fe1\u63a5\u53e3\n                <Engine>                                //\u5bb9\u5668\u7c7b\u5143\u7d20\uff0c\u4e3a\u7279\u5b9a\u7684Service\u7ec4\u4ef6\u5904\u7406\u5ba2\u6237\u8bf7\u6c42\uff0c\u8981\u5305\u542b\u591a\u4e2aHost\n                        <Host>                          //\u5bb9\u5668\u7c7b\u5143\u7d20\uff0c\u4e3a\u7279\u5b9a\u7684\u865a\u62df\u4e3b\u673a\u7ec4\u4ef6\u5904\u7406\u5ba2\u6237\u8bf7\u6c42\uff0c\u53ef\u5305\u542b\u591a\u4e2aContext\n                                <Context>               //\u5bb9\u5668\u7c7b\u5143\u7d20\uff0c\u4e3a\u7279\u5b9a\u7684Web\u5e94\u7528\u5904\u7406\u6240\u6709\u7684\u5ba2\u6237\u8bf7\u6c42\n                                </Context>\n                        </Host>\n                </Engine>\n        </Connector>\n    </Service>\n</Server>\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6839\u636e\u914d\u7f6e\u6587\u4ef6\u521d\u59cb\u5316\u5bb9\u5668\u4fe1\u606f\uff0c\u5f53\u8bf7\u6c42\u5230\u8fbe\u65f6\u8fdb\u884c\u5bb9\u5668\u95f4\u7684\u8bf7\u6c42\u4f20\u9012\uff0c\u4e8b\u5b9e\u4e0a\u6574\u4e2a\u94fe\u6761\u88ab\u79f0\u4f5cpipeline\uff0cpipeline\u8fde\u63a5\u4e86\u5404\u4e2a\u5bb9\u5668\u7684\u5165\u53e3\uff0c\u7531\u4e8e\u6bcf\u4e2a\u5bb9\u5668\u548c\u7ec4\u4ef6\u90fd\u5b9e\u73b0\u4e86lifecycle\u63a5\u53e3\u3002"}),"\n",(0,t.jsx)(n.p,{children:"tomcat\u53ef\u4ee5\u5728\u4efb\u610f\u6d41\u7a0b\u4e2d\u901a\u8fc7\u52a0\u76d1\u542c\u5668\u7684\u65b9\u5f0f\u76d1\u542c\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\uff0c\u4e5f\u5c31\u80fd\u591f\u63a7\u5236\u6574\u4e2a\u8fd0\u884c\u7684\u6d41\u7a0b\uff0c\u901a\u8fc7\u5728pipeline\u4e0a\u589e\u52a0valve\u53ef\u4ee5\u589e\u52a0\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u64cd\u4f5c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u822c\u5230wrapper\u5c42\u624d\u5f00\u59cb\u771f\u6b63\u7684\u8bf7\u6c42\u89e3\u6790\uff0c\u56e0\u4e3awrapper\u5176\u5b9e\u5c31\u662f\u5bf9servlet\u7684\u7b80\u5355\u5c01\u88c5\uff0c\u6b64\u65f6\u8fdb\u6765\u7684\u8bf7\u6c42\u548c\u54cd\u5e94\u5df2\u7ecf\u662fhttprequest\u548chttpresponse\uff0c\u5f88\u591a\u4fe1\u606f\u5df2\u7ecf\u89e3\u6790\u5b8c\u6bd5\uff0c\u53ea\u9700\u8981\u6309\u7167service\u65b9\u6cd5\u6267\u884c\u4e1a\u52a1\u903b\u8f91\u5373\u53ef\uff0c\u5f53\u7136\u5728\u6267\u884cservice\u65b9\u6cd5\u4e4b\u524d\uff0c\u4f1a\u8c03\u7528filter\u94fe\u5148\u6267\u884c\u8fc7\u6ee4\u64cd\u4f5c\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"netty",children:"netty"}),"\n",(0,t.jsx)(n.p,{children:"netty\u6211\u4e5f\u4e0d\u662f\u5f88\u5728\u884c\uff0c\u8fd9\u91cc\u7b80\u5355\u603b\u7ed3\u4e00\u4e0b"}),"\n",(0,t.jsx)(n.p,{children:"netty\u662f\u4e00\u4e2a\u57fa\u4e8e\u4e8b\u4ef6\u9a71\u52a8\u7684\u7f51\u7edc\u7f16\u7a0b\u6846\u67b6\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u56e0\u4e3a\u76f4\u63a5\u57fa\u4e8eJava NIO\u7f16\u7a0b\u590d\u6742\u5ea6\u592a\u9ad8\uff0c\u800c\u4e14\u5bb9\u6613\u51fa\u9519\uff0c\u4e8e\u662fnetty\u5bf9NIO\u8fdb\u884c\u4e86\u6539\u9020\u548c\u5c01\u88c5\u3002\u5f62\u6210\u4e86\u4e00\u4e2a\u6bd4\u8f83\u5b8c\u6574\u7684\u7f51\u7edc\u6846\u67b6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ed6\u5b9e\u73b0rpc\uff0chttp\u670d\u52a1\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5148\u4e86\u89e3\u4e00\u4e0b\u4e24\u79cd\u7ebf\u7a0b\u6a21\u578b\u3002reactor\u548cproactor\u3002"}),"\n",(0,t.jsx)(n.p,{children:"1 reactor\u5c31\u662fnetty\u91c7\u7528\u7684\u6a21\u578b\uff0c\u9996\u5148\u4e5f\u662f\u4f7f\u7528\u4e00\u4e2aacceptor\u7ebf\u7a0b\u63a5\u6536\u8fde\u63a5\u8bf7\u6c42\uff0c\u7136\u540e\u5f00\u542f\u4e00\u4e2a\u7ebf\u7a0b\u7ec4reactor thread pool\u3002"}),"\n",(0,t.jsx)(n.p,{children:"server\u4f1a\u4e8b\u5148\u5728endpoint\u4e0a\u6ce8\u518c\u4e00\u7cfb\u5217\u7684\u56de\u8c03\u65b9\u6cd5\uff0c\u7136\u540e\u63a5\u6536socket\u8bf7\u6c42\u540e\u4ea4\u7ed9\u5e95\u5c42\u7684selector\u8fdb\u884c\u7ba1\u7406\uff0c\u5f53selector\u5bf9\u5e94\u7684\u4e8b\u4ef6\u54cd\u5e94\u4ee5\u540e\uff0c\u4f1a\u901a\u77e5\u7528\u6237\u8fdb\u7a0b\uff0c\u7136\u540ereactor\u5de5\u4f5c\u7ebf\u7a0b\u4f1a\u6267\u884c\u63a5\u4e0b\u6765\u7684IO\u8bf7\u6c42\uff0c\u6267\u884c\u64cd\u4f5c\u662f\u5199\u5728\u56de\u8c03\u5904\u7406\u5668\u4e2d\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u5b9enetty \u652f\u6301\u4e09\u79cdreactor\u6a21\u578b\n1.1.Reactor\u5355\u7ebf\u7a0b\u6a21\u578b\uff1aReactor\u5355\u7ebf\u7a0b\u6a21\u578b\uff0c\u6307\u7684\u662f\u6240\u6709\u7684I/O\u64cd\u4f5c\u90fd\u5728\u540c\u4e00\u4e2aNIO\u7ebf\u7a0b\u4e0a\u9762\u5b8c\u6210\u3002\u5bf9\u4e8e\u4e00\u4e9b\u5c0f\u5bb9\u91cf\u5e94\u7528\u573a\u666f\uff0c\u53ef\u4ee5\u4f7f\u7528\u5355\u7ebf\u7a0b\u6a21\u578b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"1.2.Reactor\u591a\u7ebf\u7a0b\u6a21\u578b\uff1aRector\u591a\u7ebf\u7a0b\u6a21\u578b\u4e0e\u5355\u7ebf\u7a0b\u6a21\u578b\u6700\u5927\u7684\u533a\u522b\u5c31\u662f\u6709\u4e00\u7ec4NIO\u7ebf\u7a0b\u5904\u7406I/O\u64cd\u4f5c\u3002\u4e3b\u8981\u7528\u4e8e\u9ad8\u5e76\u53d1\u3001\u5927\u4e1a\u52a1\u91cf\u573a\u666f\u3002"}),"\n",(0,t.jsx)(n.p,{children:"1.3.\u4e3b\u4eceReactor\u591a\u7ebf\u7a0b\u6a21\u578b\uff1a\u4e3b\u4eceReactor\u7ebf\u7a0b\u6a21\u578b\u7684\u7279\u70b9\u662f\u670d\u52a1\u7aef\u7528\u4e8e\u63a5\u6536\u5ba2\u6237\u7aef\u8fde\u63a5\u7684\u4e0d\u518d\u662f\u4e2a1\u4e2a\u5355\u72ec\u7684NIO\u7ebf\u7a0b\uff0c\u800c\u662f\u4e00\u4e2a\u72ec\u7acb\u7684NIO\u7ebf\u7a0b\u6c60\u3002\u5229\u7528\u4e3b\u4eceNIO\u7ebf\u7a0b\u6a21\u578b\uff0c\u53ef\u4ee5\u89e3\u51b31\u4e2a\u670d\u52a1\u7aef\u76d1\u542c\u7ebf\u7a0b\u65e0\u6cd5\u6709\u6548\u5904\u7406\u6240\u6709\u5ba2\u6237\u7aef\u8fde\u63a5\u7684\u6027\u80fd\u4e0d\u8db3\u95ee\u9898"}),"\n",(0,t.jsx)(n.p,{children:"2 proactor\u6a21\u578b\u5176\u5b9e\u662f\u57fa\u4e8e\u5f02\u6b65\u975e\u963b\u585eIO\u6a21\u578b\u7684\uff0c\u5f53accpetor\u63a5\u6536\u5230\u8bf7\u6c42\u4ee5\u540e\uff0c\u76f4\u63a5\u63d0\u4ea4\u5f02\u6b65\u7684io\u8bf7\u6c42\u7ed9linux\u5185\u6838\uff0c\u5185\u6838\u5b8c\u6210io\u8bf7\u6c42\u540e\u4f1a\u56de\u5199\u6d88\u606f\u5230proactor\u63d0\u4f9b\u7684\u4e8b\u4ef6\u961f\u5217\u4e2d\uff0c\u6b64\u65f6\u5de5\u4f5c\u7ebf\u7a0b\u67e5\u770b\u5230IO\u8bf7\u6c42\u5df2\u5b8c\u6210\uff0c\u5219\u4f1a\u7ee7\u7eed\u5269\u4f59\u7684\u5de5\u4f5c\uff0c\u4e5f\u662f\u901a\u8fc7\u56de\u8c03\u5904\u7406\u5668\u6765\u8fdb\u884c\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6240\u4ee5\u4e24\u8005\u6700\u5927\u7684\u5dee\u522b\u662f\uff0c\u524d\u8005\u57fa\u4e8eepoll\u7684IO\u591a\u8def\u590d\u7528\uff0c\u540e\u8005\u57fa\u4e8eAIO\u5b9e\u73b0\u3002"}),"\n",(0,t.jsx)(n.p,{children:"3 netty\u7684\u6838\u5fc3\u7ec4\u4ef6\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"bytebuf"}),"\n",(0,t.jsx)(n.p,{children:"bytebuf\u662f\u5bf9NIO\u4e2dBytebuffer\u7684\u4f18\u5316\u548c\u6269\u5c55\uff0c\u5e76\u4e14\u652f\u6301\u5806\u5916\u5185\u5b58\u5206\u914d\uff0c\u5806\u5916\u5185\u5b58\u907f\u514dgc\uff0c\u53ef\u4ee5\u66f4\u597d\u5730\u4e0e\u5185\u6838\u7a7a\u95f4\u8fdb\u884c\u4ea4\u6362\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.p,{children:"channel\u548cNIO\u7684channel\u7c7b\u4f3c\uff0c\u4f46\u662fNIO\u7684socket\u4ee3\u7801\u6539\u6210nio\u5b9e\u73b0\u975e\u5e38\u9ebb\u70e6\uff0c\u6240\u4ee5netty\u4f18\u5316\u4e86\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u53ea\u9700\u66ff\u6362\u51e0\u4e2a\u7c7b\u5c31\u53ef\u4ee5\u5b9e\u73b0\u4e0d\u66f4\u65b0\u592a\u591a\u4ee3\u7801\u5c31\u5b8c\u6210\u65e7IO\u548c\u65b0IO\u7684\u5207\u6362\u3002"}),"\n",(0,t.jsx)(n.p,{children:"channelhandler\u5c31\u662f\u4efb\u52a1\u7684\u5904\u7406\u5668\u4e86\uff0c\u4f7f\u7528\u56de\u8c03\u51fd\u6570\u7684\u65b9\u5f0f\u6ce8\u518c\u5230channel\u4e2d\uff0c\u66f4\u51c6\u786e\u6765\u8bf4\u662f\u6ce8\u518c\u5230channelpipeline\u91cc\u3002"}),"\n",(0,t.jsx)(n.p,{children:"channelpipeline\u662f\u7528\u6765\u7ba1\u7406\u548c\u8fde\u63a5\u591a\u4e2achannelhandler\u7684\u5bb9\u5668\uff0c\u6267\u884c\u4efb\u52a1\u65f6\uff0c\u4f1a\u6839\u636echannelpipeline\u7684\u8c03\u7528\u94fe\u5b8c\u6210\u5904\u7406\u5668\u7684\u987a\u5e8f\u8c03\u7528\uff0c\u542f\u52a8\u670d\u52a1\u5668\u65f6\u53ea\u9700\u8981\u5c06\u9700\u8981\u7684channelhandler\u6ce8\u518c\u5728\u4e0a\u9762\u5c31\u53ef\u4ee5\u4e86\u3002"}),"\n",(0,t.jsx)(n.p,{children:"eventloop\n\u5728Netty\u7684\u7ebf\u7a0b\u6a21\u578b\u4e2d\uff0c\u4e00\u4e2aEventLoop\u5c06\u7531\u4e00\u4e2a\u6c38\u8fdc\u4e0d\u4f1a\u6539\u53d8\u7684Thread\u9a71\u52a8\uff0c\u800c\u4e00\u4e2aChannel\u4e00\u751f\u53ea\u4f1a\u4f7f\u7528\u4e00\u4e2aEventLoop\uff08\u4f46\u662f\u4e00\u4e2aEventLoop\u53ef\u80fd\u4f1a\u88ab\u6307\u6d3e\u7528\u4e8e\u670d\u52a1\u591a\u4e2aChannel\uff09\uff0c\u5728Channel\u4e2d\u7684\u6240\u6709I/O\u64cd\u4f5c\u548c\u4e8b\u4ef6\u90fd\u7531EventLoop\u4e2d\u7684\u7ebf\u7a0b\u5904\u7406\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e00\u4e2aChannel\u7684\u4e00\u751f\u4e4b\u4e2d\u90fd\u53ea\u4f1a\u4f7f\u7528\u5230\u4e00\u4e2a\u7ebf\u7a0b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"bootstrap"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6df1\u5165\u4e86\u89e3\u5730Netty\u7684\u6838\u5fc3\u7ec4\u4ef6\u4e4b\u540e\uff0c\u53d1\u73b0\u5b83\u4eec\u7684\u8bbe\u8ba1\u90fd\u5f88\u6a21\u5757\u5316\uff0c\u5982\u679c\u60f3\u8981\u5b9e\u73b0\u4f60\u81ea\u5df1\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5c31\u9700\u8981\u5c06\u8fd9\u4e9b\u7ec4\u4ef6\u7ec4\u88c5\u5230\u4e00\u8d77\u3002Netty\u901a\u8fc7Bootstrap\u7c7b\uff0c\u4ee5\u5bf9\u4e00\u4e2aNetty\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u914d\u7f6e\uff08\u7ec4\u88c5\u5404\u4e2a\u7ec4\u4ef6\uff09\uff0c\u5e76\u6700\u7ec8\u4f7f\u5b83\u8fd0\u884c\u8d77\u6765\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u5ba2\u6237\u7aef\u7a0b\u5e8f\u548c\u670d\u52a1\u5668\u7a0b\u5e8f\u6240\u4f7f\u7528\u5230\u7684Bootstrap\u7c7b\u662f\u4e0d\u540c\u7684\uff0c\u540e\u8005\u9700\u8981\u4f7f\u7528ServerBootstrap\uff0c\u8fd9\u6837\u8bbe\u8ba1\u662f\u56e0\u4e3a\uff0c\u5728\u5982TCP\u8fd9\u6837\u6709\u8fde\u63a5\u7684\u534f\u8bae\u4e2d\uff0c\u670d\u52a1\u5668\u7a0b\u5e8f\u5f80\u5f80\u9700\u8981\u4e00\u4e2a\u4ee5\u4e0a\u7684Channel\uff0c\u901a\u8fc7\u7236Channel\u6765\u63a5\u53d7\u6765\u81ea\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\uff0c\u7136\u540e\u521b\u5efa\u5b50Channel\u7528\u4e8e\u5b83\u4eec\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u800c\u50cfUDP\u8fd9\u6837\u65e0\u8fde\u63a5\u7684\u534f\u8bae\uff0c\u5b83\u4e0d\u9700\u8981\u6bcf\u4e2a\u8fde\u63a5\u90fd\u521b\u5efa\u5b50Channel\uff0c\u53ea\u9700\u8981\u4e00\u4e2aChannel\u5373\u53ef\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},88672:(e,n,c)=>{c.d(n,{Z:()=>s,a:()=>l});var t=c(50959);const r={},o=t.createContext(r);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);