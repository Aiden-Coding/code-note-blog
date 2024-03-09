"use strict";(self.webpackChunkcode_note_blog=self.webpackChunkcode_note_blog||[]).push([[7277],{35588:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>a});var o=r(11527),i=r(88672);const s={},l=void 0,t={id:"Java/concurrency/Java\u5e76\u53d1\u6307\u5357\uff1aForkJoin\u5e76\u53d1\u6846\u67b6\u4e0e\u5de5\u4f5c\u7a83\u53d6\u7b97\u6cd5\u5256\u6790",title:"Java\u5e76\u53d1\u6307\u5357\uff1aForkJoin\u5e76\u53d1\u6846\u67b6\u4e0e\u5de5\u4f5c\u7a83\u53d6\u7b97\u6cd5\u5256\u6790",description:"\u672c\u6587\u8f6c\u81ea\uff1ahttps://www.imooc.com/article/24822",source:"@site/docs/Java/concurrency/Java\u5e76\u53d1\u6307\u5357\uff1aForkJoin\u5e76\u53d1\u6846\u67b6\u4e0e\u5de5\u4f5c\u7a83\u53d6\u7b97\u6cd5\u5256\u6790.md",sourceDirName:"Java/concurrency",slug:"/Java/concurrency/Java\u5e76\u53d1\u6307\u5357\uff1aForkJoin\u5e76\u53d1\u6846\u67b6\u4e0e\u5de5\u4f5c\u7a83\u53d6\u7b97\u6cd5\u5256\u6790",permalink:"/code-note-blog/docs/Java/concurrency/Java\u5e76\u53d1\u6307\u5357\uff1aForkJoin\u5e76\u53d1\u6846\u67b6\u4e0e\u5de5\u4f5c\u7a83\u53d6\u7b97\u6cd5\u5256\u6790",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Java/concurrency/Java\u5e76\u53d1\u6307\u5357\uff1aForkJoin\u5e76\u53d1\u6846\u67b6\u4e0e\u5de5\u4f5c\u7a83\u53d6\u7b97\u6cd5\u5256\u6790.md",tags:[],version:"current",frontMatter:{},sidebar:"java",previous:{title:"Java\u5e76\u53d1\u6307\u5357\uff1aAQS\u4e2d\u7684\u516c\u5e73\u9501\u4e0e\u975e\u516c\u5e73\u9501\uff0cCondtion",permalink:"/code-note-blog/docs/Java/concurrency/Java\u5e76\u53d1\u6307\u5357\uff1aAQS\u4e2d\u7684\u516c\u5e73\u9501\u4e0e\u975e\u516c\u5e73\u9501\uff0cCondtion"},next:{title:"Java\u5e76\u53d1\u6307\u5357\uff1aJava\u8bfb\u5199\u9501ReentrantReadWriteLock\u6e90\u7801\u5206\u6790",permalink:"/code-note-blog/docs/Java/concurrency/Java\u5e76\u53d1\u6307\u5357\uff1aJava\u8bfb\u5199\u9501ReentrantReadWriteLock\u6e90\u7801\u5206\u6790"}},c={},a=[{value:"Fork/Join\u6846\u67b6\u4ecb\u7ecd",id:"forkjoin\u6846\u67b6\u4ecb\u7ecd",level:2},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5de5\u4f5c\u7a83\u53d6\u7b97\u6cd5\u4ecb\u7ecd",id:"\u5de5\u4f5c\u7a83\u53d6\u7b97\u6cd5\u4ecb\u7ecd",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\u672c\u6587\u8f6c\u81ea\uff1a",(0,o.jsx)(e.a,{href:"https://www.imooc.com/article/24822",children:"https://www.imooc.com/article/24822"})]}),"\n",(0,o.jsx)(e.p,{children:"\u672c\u7cfb\u5217\u6587\u7ae0\u5c06\u6574\u7406\u5230\u6211\u5728GitHub\u4e0a\u7684\u300aJava\u9762\u8bd5\u6307\u5357\u300b\u4ed3\u5e93\uff0c\u66f4\u591a\u7cbe\u5f69\u5185\u5bb9\u8bf7\u5230\u6211\u7684\u4ed3\u5e93\u91cc\u67e5\u770b"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/h2pl/Java-Tutorial",children:"https://github.com/h2pl/Java-Tutorial"})}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u559c\u6b22\u7684\u8bdd\u9ebb\u70e6\u70b9\u4e0bStar\u54c8"}),"\n",(0,o.jsx)(e.p,{children:"\u6587\u7ae0\u540c\u6b65\u53d1\u4e8e\u6211\u7684\u4e2a\u4eba\u535a\u5ba2\uff1a"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"http://www.how2playlife.com",children:"www.how2playlife.com"})}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"\u672c\u6587\u662f\u5fae\u4fe1\u516c\u4f17\u53f7\u3010Java\u6280\u672f\u6c5f\u6e56\u3011\u7684\u300aJava\u5e76\u53d1\u6307\u5357\u300b\u5176\u4e2d\u4e00\u7bc7\uff0c\u672c\u6587\u5927\u90e8\u5206\u5185\u5bb9\u6765\u6e90\u4e8e\u7f51\u7edc\uff0c\u4e3a\u4e86\u628a\u672c\u6587\u4e3b\u9898\u8bb2\u5f97\u6e05\u6670\u900f\u5f7b\uff0c\u4e5f\u6574\u5408\u4e86\u5f88\u591a\u6211\u8ba4\u4e3a\u4e0d\u9519\u7684\u6280\u672f\u535a\u5ba2\u5185\u5bb9\uff0c\u5f15\u7528\u5176\u4e2d\u4e86\u4e00\u4e9b\u6bd4\u8f83\u597d\u7684\u535a\u5ba2\u6587\u7ae0\uff0c\u5982\u6709\u4fb5\u6743\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u8be5\u7cfb\u5217\u535a\u6587\u4f1a\u544a\u8bc9\u4f60\u5982\u4f55\u5168\u9762\u6df1\u5165\u5730\u5b66\u4e60Java\u5e76\u53d1\u6280\u672f\uff0c\u4eceJava\u591a\u7ebf\u7a0b\u57fa\u7840\uff0c\u518d\u5230\u5e76\u53d1\u7f16\u7a0b\u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u4eceJava\u5e76\u53d1\u5305\u7684\u5165\u95e8\u548c\u5b9e\u6218\uff0c\u518d\u5230JUC\u7684\u6e90\u7801\u5256\u6790\uff0c\u4e00\u6b65\u6b65\u5730\u5b66\u4e60Java\u5e76\u53d1\u7f16\u7a0b\uff0c\u5e76\u4e0a\u624b\u8fdb\u884c\u5b9e\u6218\uff0c\u4ee5\u4fbf\u8ba9\u4f60\u66f4\u5b8c\u6574\u5730\u4e86\u89e3\u6574\u4e2aJava\u5e76\u53d1\u7f16\u7a0b\u77e5\u8bc6\u4f53\u7cfb\uff0c\u5f62\u6210\u81ea\u5df1\u7684\u77e5\u8bc6\u6846\u67b6\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u4e3a\u4e86\u66f4\u597d\u5730\u603b\u7ed3\u548c\u68c0\u9a8c\u4f60\u7684\u5b66\u4e60\u6210\u679c\uff0c\u672c\u7cfb\u5217\u6587\u7ae0\u4e5f\u4f1a\u63d0\u4f9b\u4e00\u4e9b\u5bf9\u5e94\u7684\u9762\u8bd5\u9898\u4ee5\u53ca\u53c2\u8003\u7b54\u6848\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679c\u5bf9\u672c\u7cfb\u5217\u6587\u7ae0\u6709\u4ec0\u4e48\u5efa\u8bae\uff0c\u6216\u8005\u662f\u6709\u4ec0\u4e48\u7591\u95ee\u7684\u8bdd\uff0c\u4e5f\u53ef\u4ee5\u5173\u6ce8\u516c\u4f17\u53f7\u3010Java\u6280\u672f\u6c5f\u6e56\u3011\u8054\u7cfb\u4f5c\u8005\uff0c\u6b22\u8fce\u4f60\u53c2\u4e0e\u672c\u7cfb\u5217\u535a\u6587\u7684\u521b\u4f5c\u548c\u4fee\u8ba2\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"forkjoin\u6846\u67b6\u4ecb\u7ecd",children:"Fork/Join\u6846\u67b6\u4ecb\u7ecd"}),"\n",(0,o.jsx)(e.p,{children:"Fork/Join\u6846\u67b6\u662fJava7\u63d0\u4f9b\u7684\u4e00\u4e2a\u7528\u4e8e\u5e76\u884c\u6267\u884c\u4efb\u52a1\u7684\u6846\u67b6\uff0c \u662f\u4e00\u4e2a\u628a\u5927\u4efb\u52a1\u5206\u5272\u6210\u82e5\u5e72\u4e2a\u5c0f\u4efb\u52a1\uff0c\u6700\u7ec8\u6c47\u603b\u6bcf\u4e2a\u5c0f\u4efb\u52a1\u7ed3\u679c\u540e\u5f97\u5230\u5927\u4efb\u52a1\u7ed3\u679c\u7684\u6846\u67b6\u3002\u4f7f\u7528\u5de5\u4f5c\u7a83\u53d6\uff08work-stealing\uff09\u7b97\u6cd5\uff0c\u4e3b\u8981\u7528\u4e8e\u5b9e\u73b0\u201c\u5206\u800c\u6cbb\u4e4b\u201d\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,o.jsxs)(e.p,{children:["\u901a\u5e38\uff0c\u4f7f\u7528Java\u6765\u5f00\u53d1\u4e00\u4e2a\u7b80\u5355\u7684\u5e76\u53d1\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u4f1a\u521b\u5efa\u4e00\u4e9b",(0,o.jsx)(e.strong,{children:"Runnable"}),"\u5bf9\u8c61\uff0c\u7136\u540e\u521b\u5efa\u5bf9\u5e94\u7684",(0,o.jsx)(e.strong,{children:"Thread"}),"\u5bf9\u8c61\u6765\u63a7\u5236\u7a0b\u5e8f\u4e2d\u8fd9\u4e9b\u7ebf\u7a0b\u7684\u521b\u5efa\u3001\u6267\u884c\u4ee5\u53ca\u7ebf\u7a0b\u7684\u72b6\u6001\u3002\u81ea\u4eceJava 5\u5f00\u59cb\u5f15\u5165\u4e86",(0,o.jsx)(e.strong,{children:"Executor"}),"\u548c",(0,o.jsx)(e.strong,{children:"ExecutorService"}),"\u63a5\u53e3\u4ee5\u53ca\u5b9e\u73b0\u8fd9\u4e24\u4e2a\u63a5\u53e3\u7684\u7c7b\uff08\u6bd4\u5982",(0,o.jsx)(e.strong,{children:"ThreadPoolExecutor"}),"\uff09\u4e4b\u540e\uff0c\u4f7f\u5f97Java\u5728\u5e76\u53d1\u652f\u6301\u4e0a\u5f97\u5230\u4e86\u8fdb\u4e00\u6b65\u7684\u63d0\u5347\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsxs)(e.strong,{children:["\u6267\u884c\u5668\u6846\u67b6\uff08Executor Framework\uff09",(0,o.jsx)(e.strong,{children:"\u5c06\u4efb\u52a1\u7684\u521b\u5efa\u548c\u6267\u884c\u8fdb\u884c\u4e86\u5206\u79bb\uff0c\u901a\u8fc7\u8fd9\u4e2a\u6846\u67b6\uff0c\u53ea\u9700\u8981\u5b9e\u73b0"}),"Runnable"]}),"\u63a5\u53e3\u7684\u5bf9\u8c61\u548c\u4f7f\u7528",(0,o.jsx)(e.strong,{children:"Executor"}),"\u5bf9\u8c61\uff0c\u7136\u540e\u5c06",(0,o.jsx)(e.strong,{children:"Runnable"}),"\u5bf9\u8c61\u53d1\u9001\u7ed9\u6267\u884c\u5668\u3002\u6267\u884c\u5668\u518d\u8d1f\u8d23\u8fd0\u884c\u8fd9\u4e9b\u4efb\u52a1\u6240\u9700\u8981\u7684\u7ebf\u7a0b\uff0c\u5305\u62ec\u7ebf\u7a0b\u7684\u521b\u5efa\uff0c\u7ebf\u7a0b\u7684\u7ba1\u7406\u4ee5\u53ca\u7ebf\u7a0b\u7684\u7ed3\u675f\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Java 7"}),"\u5219\u53c8\u66f4\u8fdb\u4e86\u4e00\u6b65\uff0c\u5b83\u5305\u62ec\u4e86ExecutorService\u63a5\u53e3\u7684\u53e6\u4e00\u79cd\u5b9e\u73b0\uff0c\u7528\u6765\u89e3\u51b3\u7279\u6b8a\u7c7b\u578b\u7684\u95ee\u9898\uff0c\u5b83\u5c31\u662f",(0,o.jsx)(e.strong,{children:"Fork/Join\u6846\u67b6"}),"\uff0c\u6709\u65f6\u4e5f\u79f0",(0,o.jsx)(e.strong,{children:"\u5206\u89e3/\u5408\u5e76\u6846\u67b6"}),"\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Fork/Join\u6846\u67b6"}),"\u662f\u7528\u6765\u89e3\u51b3\u80fd\u591f\u901a\u8fc7**\u5206\u6cbb\u6280\u672f\uff08Divide and Conquer Technique\uff09**\u5c06\u95ee\u9898\u62c6\u5206\u6210\u5c0f\u4efb\u52a1\u7684\u95ee\u9898\u3002\u5728\u4e00\u4e2a\u4efb\u52a1\u4e2d\uff0c\u5148\u68c0\u67e5\u5c06\u8981\u89e3\u51b3\u7684\u95ee\u9898\u7684\u5927\u5c0f\uff0c\u5982\u679c\u5927\u4e8e\u4e00\u4e2a\u8bbe\u5b9a\u7684\u5927\u5c0f\uff0c\u90a3\u5c31\u5c06\u95ee\u9898\u62c6\u5206\u6210\u53ef\u4ee5\u901a\u8fc7\u6846\u67b6\u6765\u6267\u884c\u7684\u5c0f\u4efb\u52a1\u3002\u5982\u679c\u95ee\u9898\u7684\u5927\u5c0f\u6bd4\u8bbe\u5b9a\u7684\u5927\u5c0f\u8981\u5c0f\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u5728\u4efb\u52a1\u91cc\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u7136\u540e\uff0c\u6839\u636e\u9700\u8981\u8fd4\u56de\u4efb\u52a1\u7684\u7ed3\u679c\u3002\u4e0b\u9762\u7684\u56fe\u5f62\u603b\u7ed3\u4e86\u8fd9\u4e2a\u539f\u7406\u3002"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://java-tutorial.oss-cn-shanghai.aliyuncs.com/20230404203219.png",alt:""})}),"\n",(0,o.jsxs)(e.p,{children:["\u6ca1\u6709\u56fa\u5b9a\u7684\u516c\u5f0f\u6765\u51b3\u5b9a\u95ee\u9898\u7684",(0,o.jsx)(e.strong,{children:"\u53c2\u8003\u5927\u5c0f\uff08Reference Size\uff09"}),"\uff0c\u4ece\u800c\u51b3\u5b9a\u4e00\u4e2a\u4efb\u52a1\u662f\u9700\u8981\u8fdb\u884c\u62c6\u5206\u6216\u4e0d\u9700\u8981\u62c6\u5206\uff0c\u62c6\u5206\u4e0e\u5426\u4ecd\u662f\u4f9d\u8d56\u4e8e\u4efb\u52a1\u672c\u8eab\u7684\u7279\u6027\u3002\u53ef\u4ee5\u4f7f\u7528\u5728\u4efb\u52a1\u4e2d\u5c06\u8981\u5904\u7406\u7684\u5143\u7d20\u7684\u6570\u76ee\u548c\u4efb\u52a1\u6267\u884c\u6240\u9700\u8981\u7684\u65f6\u95f4\u6765\u51b3\u5b9a\u53c2\u8003\u5927\u5c0f\u3002\u6d4b\u8bd5\u4e0d\u540c\u7684\u53c2\u8003\u5927\u5c0f\u6765\u51b3\u5b9a\u89e3\u51b3\u95ee\u9898\u6700\u597d\u7684\u4e00\u4e2a\u65b9\u6848\uff0c\u5c06",(0,o.jsx)(e.strong,{children:"ForkJoinPool"}),"\u7c7b\u770b\u4f5c\u4e00\u4e2a\u7279\u6b8a\u7684",(0,o.jsx)(e.strong,{children:"Executor"}),"\u6267\u884c\u5668\u7c7b\u578b\u3002\u8fd9\u4e2a\u6846\u67b6\u57fa\u4e8e\u4ee5\u4e0b\u4e24\u79cd\u64cd\u4f5c\u3002"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"**\u5206\u89e3\uff08Fork\uff09**\u64cd\u4f5c\uff1a\u5f53\u9700\u8981\u5c06\u4e00\u4e2a\u4efb\u52a1\u62c6\u5206\u6210\u66f4\u5c0f\u7684\u591a\u4e2a\u4efb\u52a1\u65f6\uff0c\u5728\u6846\u67b6\u4e2d\u6267\u884c\u8fd9\u4e9b\u4efb\u52a1\uff1b"}),"\n",(0,o.jsx)(e.li,{children:"**\u5408\u5e76\uff08Join\uff09**\u64cd\u4f5c\uff1a\u5f53\u4e00\u4e2a\u4e3b\u4efb\u52a1\u7b49\u5f85\u5176\u521b\u5efa\u7684\u591a\u4e2a\u5b50\u4efb\u52a1\u7684\u5b8c\u6210\u6267\u884c\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsxs)(e.strong,{children:["Fork/Join\u6846\u67b6\u548c\u6267\u884c\u5668\u6846\u67b6\uff08Executor Framework\uff09",(0,o.jsx)(e.strong,{children:"\u4e3b\u8981\u7684\u533a\u522b\u5728\u4e8e"}),"\u5de5\u4f5c\u7a83\u53d6\u7b97\u6cd5\uff08Work-Stealing Algorithm\uff09"]}),"\u3002\u4e0e\u6267\u884c\u5668\u6846\u67b6\u4e0d\u540c\uff0c\u4f7f\u7528Join\u64cd\u4f5c\u8ba9\u4e00\u4e2a\u4e3b\u4efb\u52a1\u7b49\u5f85\u5b83\u6240\u521b\u5efa\u7684\u5b50\u4efb\u52a1\u7684\u5b8c\u6210\uff0c\u6267\u884c\u8fd9\u4e2a\u4efb\u52a1\u7684\u7ebf\u7a0b\u79f0\u4e4b\u4e3a",(0,o.jsx)(e.strong,{children:"\u5de5\u4f5c\u8005\u7ebf\u7a0b\uff08Worker Thread\uff09"}),"\u3002\u5de5\u4f5c\u8005\u7ebf\u7a0b\u5bfb\u627e\u5176\u4ed6\u4ecd\u672a\u88ab\u6267\u884c\u7684\u4efb\u52a1\uff0c\u7136\u540e\u5f00\u59cb\u6267\u884c\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u8fd9\u4e9b\u7ebf\u7a0b\u5728\u8fd0\u884c\u65f6\u62e5\u6709\u6240\u6709\u7684\u4f18\u70b9\uff0c\u8fdb\u800c\u63d0\u5347\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:["\u4e3a\u4e86\u8fbe\u5230\u8fd9\u4e2a\u76ee\u6807\uff0c\u901a\u8fc7",(0,o.jsx)(e.strong,{children:"Fork/Join\u6846\u67b6"}),"\u6267\u884c\u7684\u4efb\u52a1\u6709\u4ee5\u4e0b\u9650\u5236\u3002"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u4efb\u52a1\u53ea\u80fd\u4f7f\u7528",(0,o.jsxs)(e.strong,{children:["fork()",(0,o.jsx)(e.strong,{children:"\u548c"}),"join()",(0,o.jsx)(e.strong,{children:"\u64cd\u4f5c\u5f53\u4f5c\u540c\u6b65\u673a\u5236\u3002\u5982\u679c\u4f7f\u7528\u5176\u4ed6\u7684\u540c\u6b65\u673a\u5236\uff0c\u5de5\u4f5c\u8005\u7ebf\u7a0b\u5c31\u4e0d\u80fd\u6267\u884c\u5176\u4ed6\u4efb\u52a1\uff0c\u5f53\u7136\u8fd9\u4e9b\u4efb\u52a1\u662f\u5728\u540c\u6b65\u64cd\u4f5c\u91cc\u65f6\u3002\u6bd4\u5982\uff0c\u5982\u679c\u5728"}),"Fork/Join \u6846\u67b6"]}),"\u4e2d\u5c06\u4e00\u4e2a\u4efb\u52a1\u4f11\u7720\uff0c\u6b63\u5728\u6267\u884c\u8fd9\u4e2a\u4efb\u52a1\u7684\u5de5\u4f5c\u8005\u7ebf\u7a0b\u5728\u4f11\u7720\u671f\u5185\u4e0d\u80fd\u6267\u884c\u53e6\u4e00\u4e2a\u4efb\u52a1\u3002"]}),"\n",(0,o.jsx)(e.li,{children:"\u4efb\u52a1\u4e0d\u80fd\u6267\u884cI/O\u64cd\u4f5c\uff0c\u6bd4\u5982\u6587\u4ef6\u6570\u636e\u7684\u8bfb\u53d6\u4e0e\u5199\u5165\u3002"}),"\n",(0,o.jsx)(e.li,{children:"\u4efb\u52a1\u4e0d\u80fd\u629b\u51fa\u975e\u8fd0\u884c\u65f6\u5f02\u5e38\uff08Checked Exception\uff09\uff0c\u5fc5\u987b\u5728\u4ee3\u7801\u4e2d\u5904\u7406\u6389\u8fd9\u4e9b\u5f02\u5e38\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Fork/Join****\u6846\u67b6"}),"\u7684\u6838\u5fc3\u662f\u7531\u4e0b\u5217\u4e24\u4e2a\u7c7b\u7ec4\u6210\u7684\u3002"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"**ForkJoinPool\uff1a**\u8fd9\u4e2a\u7c7b\u5b9e\u73b0\u4e86ExecutorService\u63a5\u53e3\u548c\u5de5\u4f5c\u7a83\u53d6\u7b97\u6cd5\uff08Work-Stealing Algorithm\uff09\u3002\u5b83\u7ba1\u7406\u5de5\u4f5c\u8005\u7ebf\u7a0b\uff0c\u5e76\u63d0\u4f9b\u4efb\u52a1\u7684\u72b6\u6001\u4fe1\u606f\uff0c\u4ee5\u53ca\u4efb\u52a1\u7684\u6267\u884c\u4fe1\u606f\u3002"}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsxs)(e.strong,{children:["ForkJoinTask\uff1a",(0,o.jsx)(e.strong,{children:"\u8fd9\u4e2a\u7c7b\u662f\u4e00\u4e2a\u5c06\u5728"}),"ForkJoinPool"]}),"\u4e2d\u6267\u884c\u7684\u4efb\u52a1\u7684\u57fa\u7c7b\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Fork/Join\u6846\u67b6"}),"\u63d0\u4f9b\u4e86\u5728\u4e00\u4e2a\u4efb\u52a1\u91cc\u6267\u884c",(0,o.jsxs)(e.strong,{children:["fork()",(0,o.jsx)(e.strong,{children:"\u548c"}),"join()",(0,o.jsx)(e.strong,{children:"\u64cd\u4f5c\u7684\u673a\u5236\u548c\u63a7\u5236\u4efb\u52a1\u72b6\u6001\u7684\u65b9\u6cd5\u3002\u901a\u5e38\uff0c\u4e3a\u4e86\u5b9e\u73b0"}),"Fork/Join"]}),"\u4efb\u52a1\uff0c\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u4ee5\u4e0b\u4e24\u4e2a\u7c7b\u4e4b\u4e00\u7684\u5b50\u7c7b\u3002"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"**RecursiveAction\uff1a**\u7528\u4e8e\u4efb\u52a1\u6ca1\u6709\u8fd4\u56de\u7ed3\u679c\u7684\u573a\u666f\u3002"}),"\n",(0,o.jsx)(e.li,{children:"**RecursiveTask\uff1a**\u7528\u4e8e\u4efb\u52a1\u6709\u8fd4\u56de\u7ed3\u679c\u7684\u573a\u666f\u3002"}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u5de5\u4f5c\u7a83\u53d6\u7b97\u6cd5\u4ecb\u7ecd",children:"\u5de5\u4f5c\u7a83\u53d6\u7b97\u6cd5\u4ecb\u7ecd"}),"\n",(0,o.jsx)(e.p,{children:"\u5de5\u4f5c\u7a83\u53d6\uff08work-stealing\uff09\u7b97\u6cd5\u4f18\u70b9\u662f\u5145\u5206\u5229\u7528\u7ebf\u7a0b\u8fdb\u884c\u5e76\u884c\u8ba1\u7b97\uff0c\u5e76\u51cf\u5c11\u4e86\u7ebf\u7a0b\u95f4\u7684\u7ade\u4e89\uff0c\u5176\u7f3a\u70b9\u662f\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u8fd8\u662f\u5b58\u5728\u7ade\u4e89\uff0c\u6bd4\u5982\u53cc\u7aef\u961f\u5217\u91cc\u53ea\u6709\u4e00\u4e2a\u4efb\u52a1\u65f6\u3002\u5e76\u4e14\u6d88\u8017\u4e86\u66f4\u591a\u7684\u7cfb\u7edf\u8d44\u6e90\uff0c\u6bd4\u5982\u521b\u5efa\u591a\u4e2a\u7ebf\u7a0b\u548c\u591a\u4e2a\u53cc\u7aef\u961f\u5217\u3002"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:"https://java-tutorial.oss-cn-shanghai.aliyuncs.com/20230404203237.png",alt:""})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Fork/Join\u6846\u67b6\u57fa\u7840\u7c7b"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"ForkJoinPool\uff1a \u7528\u6765\u6267\u884cTask\uff0c\u6216\u751f\u6210\u65b0\u7684ForkJoinWorkerThread\uff0c\u6267\u884c ForkJoinWorkerThread \u95f4\u7684 work-stealing \u903b\u8f91\u3002ForkJoinPool \u4e0d\u662f\u4e3a\u4e86\u66ff\u4ee3 ExecutorService\uff0c\u800c\u662f\u5b83\u7684\u8865\u5145\uff0c\u5728\u67d0\u4e9b\u5e94\u7528\u573a\u666f\u4e0b\u6027\u80fd\u6bd4 ExecutorService \u66f4\u597d\u3002"}),"\n",(0,o.jsx)(e.li,{children:"ForkJoinTask\uff1a \u6267\u884c\u5177\u4f53\u7684\u5206\u652f\u903b\u8f91\uff0c\u58f0\u660e\u4ee5\u540c\u6b65/\u5f02\u6b65\u65b9\u5f0f\u8fdb\u884c\u6267\u884c"}),"\n",(0,o.jsx)(e.li,{children:"ForkJoinWorkerThread\uff1a \u662f ForkJoinPool \u5185\u7684 worker thread\uff0c\u6267\u884c"}),"\n",(0,o.jsx)(e.li,{children:"ForkJoinTask, \u5185\u90e8\u6709 ForkJoinPool.WorkQueue\u6765\u4fdd\u5b58\u8981\u6267\u884c\u7684ForkJoinTask\u3002"}),"\n",(0,o.jsx)(e.li,{children:"ForkJoinPool.WorkQueue\uff1a\u4fdd\u5b58\u8981\u6267\u884c\u7684ForkJoinTask\u3002"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u57fa\u672c\u601d\u60f3"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"ForkJoinPool \u7684\u6bcf\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u90fd\u7ef4\u62a4\u7740\u4e00\u4e2a\u5de5\u4f5c\u961f\u5217\uff08WorkQueue\uff09\uff0c\u8fd9\u662f\u4e00\u4e2a\u53cc\u7aef\u961f\u5217\uff08Deque\uff09\uff0c\u91cc\u9762\u5b58\u653e\u7684\u5bf9\u8c61\u662f\u4efb\u52a1\uff08ForkJoinTask\uff09\u3002"}),"\n",(0,o.jsx)(e.li,{children:"\u6bcf\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u5728\u8fd0\u884c\u4e2d\u4ea7\u751f\u65b0\u7684\u4efb\u52a1\uff08\u901a\u5e38\u662f\u56e0\u4e3a\u8c03\u7528\u4e86 fork()\uff09\u65f6\uff0c\u4f1a\u653e\u5165\u5de5\u4f5c\u961f\u5217\u7684\u961f\u5c3e\uff0c\u5e76\u4e14\u5de5\u4f5c\u7ebf\u7a0b\u5728\u5904\u7406\u81ea\u5df1\u7684\u5de5\u4f5c\u961f\u5217\u65f6\uff0c\u4f7f\u7528\u7684\u662f LIFO \u65b9\u5f0f\uff0c\u4e5f\u5c31\u662f\u8bf4\u6bcf\u6b21\u4ece\u961f\u5c3e\u53d6\u51fa\u4efb\u52a1\u6765\u6267\u884c\u3002"}),"\n",(0,o.jsx)(e.li,{children:"\u6bcf\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u5728\u5904\u7406\u81ea\u5df1\u7684\u5de5\u4f5c\u961f\u5217\u540c\u65f6\uff0c\u4f1a\u5c1d\u8bd5\u7a83\u53d6\u4e00\u4e2a\u4efb\u52a1\uff08\u6216\u662f\u6765\u81ea\u4e8e\u521a\u521a\u63d0\u4ea4\u5230 pool \u7684\u4efb\u52a1\uff0c\u6216\u662f\u6765\u81ea\u4e8e\u5176\u4ed6\u5de5\u4f5c\u7ebf\u7a0b\u7684\u5de5\u4f5c\u961f\u5217\uff09\uff0c\u7a83\u53d6\u7684\u4efb\u52a1\u4f4d\u4e8e\u5176\u4ed6\u7ebf\u7a0b\u7684\u5de5\u4f5c\u961f\u5217\u7684\u961f\u9996\uff0c\u4e5f\u5c31\u662f\u8bf4\u5de5\u4f5c\u7ebf\u7a0b\u5728\u7a83\u53d6\u5176\u4ed6\u5de5\u4f5c\u7ebf\u7a0b\u7684\u4efb\u52a1\u65f6\uff0c\u4f7f\u7528\u7684\u662f FIFO \u65b9\u5f0f\u3002"}),"\n",(0,o.jsx)(e.li,{children:"\u5728\u9047\u5230 join() \u65f6\uff0c\u5982\u679c\u9700\u8981 join \u7684\u4efb\u52a1\u5c1a\u672a\u5b8c\u6210\uff0c\u5219\u4f1a\u5148\u5904\u7406\u5176\u4ed6\u4efb\u52a1\uff0c\u5e76\u7b49\u5f85\u5176\u5b8c\u6210\u3002"}),"\n",(0,o.jsx)(e.li,{children:"\u5728\u65e2\u6ca1\u6709\u81ea\u5df1\u7684\u4efb\u52a1\uff0c\u4e5f\u6ca1\u6709\u53ef\u4ee5\u7a83\u53d6\u7684\u4efb\u52a1\u65f6\uff0c\u8fdb\u5165\u4f11\u7720\u3002"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u4ee3\u7801\u6f14\u793a"})}),"\n",(0,o.jsx)(e.p,{children:"\u5927\u5bb6\u5b66\u4e60\u65f6\uff0c\u901a\u5e38\u501f\u52a9\u7684\u4f8b\u5b50\u90fd\u7c7b\u4f3c\u4e8e\u4e0b\u9762\u8fd9\u6bb5\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'@Slf4j\npublic class ForkJoinTaskExample extends RecursiveTask<Integer> {\n\n    public static final int threshold = 2;\n    private int start;\n    private int end;\n\n    public ForkJoinTaskExample(int start, int end) {\n        this.start = start;\n        this.end = end;\n    }\n\n    @Override\n    protected Integer compute() {\n        int sum = 0;\n\n        //\u5982\u679c\u4efb\u52a1\u8db3\u591f\u5c0f\u5c31\u8ba1\u7b97\u4efb\u52a1\n        boolean canCompute = (end - start) <= threshold;\n        if (canCompute) {\n            for (int i = start; i <= end; i++) {\n                sum += i;\n            }\n        } else {\n            // \u5982\u679c\u4efb\u52a1\u5927\u4e8e\u9608\u503c\uff0c\u5c31\u5206\u88c2\u6210\u4e24\u4e2a\u5b50\u4efb\u52a1\u8ba1\u7b97\n            int middle = (start + end) / 2;\n            ForkJoinTaskExample leftTask = new ForkJoinTaskExample(start, middle);\n            ForkJoinTaskExample rightTask = new ForkJoinTaskExample(middle + 1, end);\n\n            // \u6267\u884c\u5b50\u4efb\u52a1\n            leftTask.fork();\n            rightTask.fork();\n\n            // \u7b49\u5f85\u4efb\u52a1\u6267\u884c\u7ed3\u675f\u5408\u5e76\u5176\u7ed3\u679c\n            int leftResult = leftTask.join();\n            int rightResult = rightTask.join();\n\n            // \u5408\u5e76\u5b50\u4efb\u52a1\n            sum = leftResult + rightResult;\n        }\n        return sum;\n    }\n\n    public static void main(String[] args) {\n        ForkJoinPool forkjoinPool = new ForkJoinPool();\n\n        //\u751f\u6210\u4e00\u4e2a\u8ba1\u7b97\u4efb\u52a1\uff0c\u8ba1\u7b971+2+3+4\n        ForkJoinTaskExample task = new ForkJoinTaskExample(1, 100);\n\n        //\u6267\u884c\u4e00\u4e2a\u4efb\u52a1\n        Future<Integer> result = forkjoinPool.submit(task);\n\n        try {\n            log.info("result:{}", result.get());\n        } catch (Exception e) {\n            log.error("exception", e);\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u91cd\u70b9\u6ce8\u610f"})}),"\n",(0,o.jsx)(e.p,{children:"\u9700\u8981\u7279\u522b\u6ce8\u610f\u7684\u662f\uff1a"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"ForkJoinPool \u4f7f\u7528submit \u6216 invoke \u63d0\u4ea4\u7684\u533a\u522b\uff1ainvoke\u662f\u540c\u6b65\u6267\u884c\uff0c\u8c03\u7528\u4e4b\u540e\u9700\u8981\u7b49\u5f85\u4efb\u52a1\u5b8c\u6210\uff0c\u624d\u80fd\u6267\u884c\u540e\u9762\u7684\u4ee3\u7801\uff1bsubmit\u662f\u5f02\u6b65\u6267\u884c\uff0c\u53ea\u6709\u5728Future\u8c03\u7528get\u7684\u65f6\u5019\u4f1a\u963b\u585e\u3002"}),"\n",(0,o.jsx)(e.li,{children:"\u8fd9\u91cc\u7ee7\u627f\u7684\u662fRecursiveTask\uff0c\u8fd8\u53ef\u4ee5\u7ee7\u627fRecursiveAction\u3002\u524d\u8005\u9002\u7528\u4e8e\u6709\u8fd4\u56de\u503c\u7684\u573a\u666f\uff0c\u800c\u540e\u8005\u9002\u5408\u4e8e\u6ca1\u6709\u8fd4\u56de\u503c\u7684\u573a\u666f"}),"\n",(0,o.jsx)(e.li,{children:"\u8fd9\u4e00\u70b9\u662f\u6700\u5bb9\u6613\u5ffd\u7565\u7684\u5730\u65b9\uff0c\u5176\u5b9e\u8fd9\u91cc\u6267\u884c\u5b50\u4efb\u52a1\u8c03\u7528fork\u65b9\u6cd5\u5e76\u4e0d\u662f\u6700\u4f73\u7684\u9009\u62e9\uff0c\u6700\u4f73\u7684\u9009\u62e9\u662finvokeAll\u65b9\u6cd5\u3002"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"leftTask.fork();  \nrightTask.fork();\n\n\u66ff\u6362\u4e3a\n\ninvokeAll(leftTask, rightTask);\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u5177\u4f53\u8bf4\u4e00\u4e0b\u539f\u7406\uff1a\u5bf9\u4e8eFork/Join\u6a21\u5f0f\uff0c\u5047\u5982Pool\u91cc\u9762\u7ebf\u7a0b\u6570\u91cf\u662f\u56fa\u5b9a\u7684\uff0c\u90a3\u4e48\u8c03\u7528\u5b50\u4efb\u52a1\u7684fork\u65b9\u6cd5\u76f8\u5f53\u4e8eA\u5148\u5206\u5de5\u7ed9B\uff0c\u7136\u540eA\u5f53\u76d1\u5de5\u4e0d\u5e72\u6d3b\uff0cB\u53bb\u5b8c\u6210A\u4ea4\u4ee3\u7684\u4efb\u52a1\u3002\u6240\u4ee5\u4e0a\u9762\u7684\u6a21\u5f0f\u76f8\u5f53\u4e8e\u6d6a\u8d39\u4e86\u4e00\u4e2a\u7ebf\u7a0b\u3002\u90a3\u4e48\u5982\u679c\u4f7f\u7528invokeAll\u76f8\u5f53\u4e8eA\u5206\u5de5\u7ed9B\u540e\uff0cA\u548cB\u90fd\u53bb\u5b8c\u6210\u5de5\u4f5c\u3002\u8fd9\u6837\u53ef\u4ee5\u66f4\u597d\u7684\u5229\u7528\u7ebf\u7a0b\u6c60\uff0c\u7f29\u77ed\u6267\u884c\u7684\u65f6\u95f4\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},88672:(n,e,r)=>{r.d(e,{Z:()=>t,a:()=>l});var o=r(50959);const i={},s=o.createContext(i);function l(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);