"use strict";(self.webpackChunkcode_note_blog=self.webpackChunkcode_note_blog||[]).push([[5914],{80492:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=e(11527),t=e(88672);const s={},o=void 0,a={id:"mq/kafka/\u6d88\u606f\u961f\u5217kafka\u8be6\u89e3\uff1aKafka\u4e00\u6761\u6d88\u606f\u5b58\u5230broker\u7684\u8fc7\u7a0b",title:"\u6d88\u606f\u961f\u5217kafka\u8be6\u89e3\uff1aKafka\u4e00\u6761\u6d88\u606f\u5b58\u5230broker\u7684\u8fc7\u7a0b",description:"\u524d\u8a00",source:"@site/docs/mq/kafka/\u6d88\u606f\u961f\u5217kafka\u8be6\u89e3\uff1aKafka\u4e00\u6761\u6d88\u606f\u5b58\u5230broker\u7684\u8fc7\u7a0b.md",sourceDirName:"mq/kafka",slug:"/mq/kafka/\u6d88\u606f\u961f\u5217kafka\u8be6\u89e3\uff1aKafka\u4e00\u6761\u6d88\u606f\u5b58\u5230broker\u7684\u8fc7\u7a0b",permalink:"/code-note-blog/docs/mq/kafka/\u6d88\u606f\u961f\u5217kafka\u8be6\u89e3\uff1aKafka\u4e00\u6761\u6d88\u606f\u5b58\u5230broker\u7684\u8fc7\u7a0b",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mq/kafka/\u6d88\u606f\u961f\u5217kafka\u8be6\u89e3\uff1aKafka\u4e00\u6761\u6d88\u606f\u5b58\u5230broker\u7684\u8fc7\u7a0b.md",tags:[],version:"current",frontMatter:{},sidebar:"mq",previous:{title:"\u6d88\u606f\u961f\u5217kafka\u8be6\u89e3\uff1aKafka\u4ecb\u7ecd",permalink:"/code-note-blog/docs/mq/kafka/\u6d88\u606f\u961f\u5217kafka\u8be6\u89e3\uff1aKafka\u4ecb\u7ecd"},next:{title:"\u6d88\u606f\u961f\u5217kafka\u8be6\u89e3\uff1aKafka\u539f\u7406\u5206\u6790\u603b\u7ed3\u7bc7",permalink:"/code-note-blog/docs/mq/kafka/\u6d88\u606f\u961f\u5217kafka\u8be6\u89e3\uff1aKafka\u539f\u7406\u5206\u6790\u603b\u7ed3\u7bc7"}},l={},c=[{value:"<strong>\u5ba2\u6237\u7aef\u7ec4\u4ef6</strong>",id:"\u5ba2\u6237\u7aef\u7ec4\u4ef6",level:2},{value:"<strong>\u5ba2\u6237\u7aef\u7f13\u5b58\u5b58\u50a8\u6a21\u578b</strong>",id:"\u5ba2\u6237\u7aef\u7f13\u5b58\u5b58\u50a8\u6a21\u578b",level:2},{value:"<strong>\u786e\u5b9a\u6d88\u606f\u7684 partition \u4f4d\u7f6e</strong>",id:"\u786e\u5b9a\u6d88\u606f\u7684-partition-\u4f4d\u7f6e",level:2},{value:"<strong>\u6ce8\u610f</strong>",id:"\u6ce8\u610f",level:3},{value:"<strong>\u53d1\u9001\u7ebf\u7a0b\u7684\u5de5\u4f5c\u539f\u7406</strong>",id:"\u53d1\u9001\u7ebf\u7a0b\u7684\u5de5\u4f5c\u539f\u7406",level:2},{value:"<strong>Sender \u7684\u4e3b\u8981\u5de5\u4f5c</strong>",id:"sender-\u7684\u4e3b\u8981\u5de5\u4f5c",level:3},{value:"<strong>NetWorkClient \u7684\u5de5\u4f5c\u5185\u5bb9</strong>",id:"networkclient-\u7684\u5de5\u4f5c\u5185\u5bb9",level:3},{value:"<strong>\u603b\u7ed3</strong>",id:"\u603b\u7ed3",level:2}];function d(n){const r={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"\u524d\u8a00"})}),"\n",(0,i.jsxs)(r.p,{children:["\u7ecf\u8fc7\u4e0a\u7bc7\u6587\u7ae0\u7684\u7b80\u5355\u5b9e\u6218\u4e4b\u540e\uff0c",(0,i.jsx)(r.strong,{children:"\u4eca\u5929\u6765\u804a\u804a\u751f\u4ea7\u8005\u5c06\u6d88\u606f\u4ece\u5ba2\u6237\u7aef\u53d1\u9001\u5230 Broker \u4e0a\u80cc\u540e\u53d1\u751f\u4e86\u54ea\u4e9b\u6545\u4e8b"}),"\uff0c\u770b\u4e0d\u770b\u7531\u4f60\uff0c\u4f46\u662f\u6211\u4fdd\u8bc1\u53ef\u4ee5\u672c\u7bc7\u6587\u7ae0\u4f60\u4e00\u5b9a\u53ef\u4ee5\u5b66\u5230\u5e94\u7528\u80cc\u540e\u7684\u4e00\u4e9b\u5b9e\u8d28\u4e1c\u897f\u3002"]}),"\n",(0,i.jsx)(r.p,{children:"\u672c\u6587\u6211\u4eec\u4ece\u4ee5\u4e0b 4 \u4e2a\u65b9\u9762\u6765\u63a2\u8ba8\u4e0b\u4e00\u6761\u6d88\u606f\u5982\u4f55\u88ab\u51c6\u786e\u7684\u53d1\u9001\u5230 Broker \u7684 partition \u4e0a\u3002"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"1. \u5ba2\u6237\u7aef\u7ec4\u4ef6"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"2. \u5ba2\u6237\u7aef\u7f13\u5b58\u5b58\u50a8\u6a21\u578b"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"3. \u786e\u5b9a\u6d88\u606f\u7684 partition \u4f4d\u7f6e"})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"4. \u53d1\u9001\u7ebf\u7a0b\u7684\u5de5\u4f5c\u539f\u7406"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"\u5ba2\u6237\u7aef\u7ec4\u4ef6",children:(0,i.jsx)(r.strong,{children:"\u5ba2\u6237\u7aef\u7ec4\u4ef6"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.strong,{children:"KafkaProducer:"})}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"KafkaProducer \u662f\u4e00\u4e2a\u751f\u4ea7\u8005\u5ba2\u6237\u7aef\u7684\u8fdb\u7a0b\uff0c\u901a\u8fc7\u8be5\u5bf9\u8c61\u542f\u52a8\u751f\u4ea7\u8005\u6765\u53d1\u9001\u6d88\u606f\u3002"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.strong,{children:"RecordAccumulator:"})}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"RecordAccumulator \u662f\u4e00\u4e2a\u8bb0\u5f55\u6536\u96c6\u5668\uff0c\u7528\u4e8e\u6536\u96c6\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u6d88\u606f\uff0c\u5e76\u5c06\u6536\u96c6\u5230\u7684\u6d88\u606f\u6682\u5b58\u5230\u5ba2\u6237\u7aef\u7f13\u5b58\u4e2d\u3002"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.strong,{children:"Sender:"})}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Sender \u662f\u4e00\u4e2a\u53d1\u9001\u7ebf\u7a0b\uff0c\u8d1f\u8d23\u8bfb\u53d6\u8bb0\u5f55\u6536\u96c6\u5668\u4e2d\u7f13\u5b58\u7684\u6279\u91cf\u6d88\u606f\uff0c\u7ecf\u8fc7\u4e00\u4e9b\u4e2d\u95f4\u8f6c\u6362\u64cd\u4f5c\uff0c\u5c06\u8981\u53d1\u9001\u7684\u6570\u636e\u51c6\u5907\u597d\uff0c\u7136\u540e\u4ea4\u7531 Selector \u8fdb\u884c\u7f51\u7edc\u4f20\u8f93\u3002"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.strong,{children:"Selector:"})}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Selector \u662f\u4e00\u4e2a\u9009\u62e9\u5668\uff0c\u7528\u4e8e\u5904\u7406\u7f51\u7edc\u8fde\u63a5\u548c\u8bfb\u5199\u5904\u7406\uff0c\u4f7f\u7528\u7f51\u7edc\u8fde\u63a5\u5904\u7406\u5ba2\u6237\u7aef\u4e0a\u7684\u7f51\u7edc\u8bf7\u6c42\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u901a\u8fc7\u4f7f\u7528\u4ee5\u4e0a\u56db\u5927\u7ec4\u4ef6\u5373\u53ef\u5b8c\u6210\u5ba2\u6237\u7aef\u6d88\u606f\u7684\u53d1\u9001\u5de5\u4f5c\u3002\u6d88\u606f\u5728\u7f51\u7edc\u4e2d\u4f20\u8f93\u7684\u65b9\u5f0f\u53ea\u80fd\u901a\u8fc7\u4e8c\u7ea7\u5236\u7684\u65b9\u5f0f\uff0c\u6240\u4ee5\u9996\u5148\u9700\u8981\u5c06\u6d88\u606f\u5e8f\u5217\u5316\u4e3a\u4e8c\u8fdb\u5236\u5f62\u5f0f\u7f13\u5b58\u5728\u5ba2\u6237\u7aef\uff0ckafka \u4f7f\u7528\u4e86\u53cc\u7aef\u961f\u5217\u7684\u65b9\u5f0f\u5c06\u6d88\u606f\u7f13\u5b58\u8d77\u6765\uff0c\u7136\u540e\u4f7f\u7528\u53d1\u9001\u7ebf\u7a0b\uff08Sender\uff09\u8bfb\u53d6\u961f\u5217\u4e2d\u7684\u6d88\u606f\u4ea4\u7ed9 Selector \u8fdb\u884c\u7f51\u7edc\u4f20\u8f93\u53d1\u9001\u7ed9\u670d\u52a1\u7aef\uff08Broker\uff09"}),"\n",(0,i.jsx)("figure",{"data-size":"normal",children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:"https://java-tutorial.oss-cn-shanghai.aliyuncs.com/v2-7d57acd1d7dc5942e999e6ffebb28679_720w.webp",alt:""})})}),"\n",(0,i.jsx)(r.p,{children:"\u4ee5\u4e0a\u4e3a\u53d1\u9001\u6d88\u606f\u7684\u4e3b\u6d41\u7a0b\uff0c\u9644\u4e0a\u90e8\u5206\u6e90\u7801\u4f9b\u5927\u5bb6\u53c2\u8003\uff0c\u63a5\u4e0b\u6765\u5206\u6790\u4e0b\u51e0\u4e2a\u975e\u5e38\u91cd\u8981\u6d41\u7a0b\u7684\u5177\u4f53\u5b9e\u73b0\u539f\u7406\u3002"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"\u5ba2\u6237\u7aef\u7f13\u5b58\u5b58\u50a8\u6a21\u578b",children:(0,i.jsx)(r.strong,{children:"\u5ba2\u6237\u7aef\u7f13\u5b58\u5b58\u50a8\u6a21\u578b"})}),"\n",(0,i.jsx)("figure",{"data-size":"normal",children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:"https://java-tutorial.oss-cn-shanghai.aliyuncs.com/v2-5da65c5f9f8c0c9082e07c6431e78cd2_720w.webp",alt:""})})}),"\n",(0,i.jsx)(r.p,{children:"\u4ece\u4e0a\u56fe\u53ef\u4ee5\u770b\u51fa\uff0c\u4e00\u6761\u6d88\u606f\u9996\u5148\u9700\u8981\u786e\u5b9a\u8981\u88ab\u5b58\u50a8\u5230\u90a3\u4e2a partition \u5bf9\u5e94\u7684\u53cc\u7aef\u961f\u5217\u4e0a\uff1b\u5176\u6b21\uff0c\u5b58\u50a8\u6d88\u606f\u7684\u53cc\u7aef\u961f\u5217\u662f\u4ee5\u6279\u7684\u7ef4\u5ea6\u5b58\u50a8\u7684\uff0c\u5373 N \u6761\u6d88\u606f\u7ec4\u6210\u4e00\u6279\uff0c\u4e00\u6279\u6d88\u606f\u6700\u591a\u5b58\u50a8 N \u6761\uff0c\u8d85\u8fc7\u540e\u5219\u65b0\u5efa\u4e00\u4e2a\u7ec4\u6765\u5b58\u50a8\u65b0\u6d88\u606f\uff1b\u5176\u6b21\uff0c\u65b0\u6765\u7684\u6d88\u606f\u603b\u662f\u4ece\u5de6\u4fa7\u5199\u5165\uff0c\u5373\u8d8a\u9760\u5de6\u4fa7\u7684\u6d88\u606f\u4ea7\u751f\u7684\u65f6\u95f4\u8d8a\u665a\uff1b\u6700\u540e\uff0c\u53ea\u6709\u5f53\u4e00\u6279\u6d88\u606f\u51d1\u591f N \u6761\u540e\u624d\u4f1a\u53d1\u9001\u7ed9 Broker\uff0c\u5426\u5219\u4e0d\u4f1a\u53d1\u9001\u5230 Broker \u4e0a\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u4e86\u89e3\u4e86\u5ba2\u6237\u7aef\u5b58\u50a8\u6a21\u578b\u540e\uff0c\u6765\u63a2\u8ba8\u4e0b\u786e\u5b9a\u6d88\u606f\u7684 partition\uff08\u5206\u533a\uff09\u4f4d\u7f6e\uff1f"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"\u786e\u5b9a\u6d88\u606f\u7684-partition-\u4f4d\u7f6e",children:(0,i.jsx)(r.strong,{children:"\u786e\u5b9a\u6d88\u606f\u7684 partition \u4f4d\u7f6e"})}),"\n",(0,i.jsx)(r.p,{children:"\u6d88\u606f\u53ef\u5206\u4e3a\u4e24\u79cd\uff0c\u4e00\u79cd\u662f\u6307\u5b9a\u4e86 key \u7684\u6d88\u606f\uff0c\u4e00\u79cd\u662f\u6ca1\u6709\u6307\u5b9a key \u7684\u6d88\u606f\u3002"}),"\n",(0,i.jsxs)(r.p,{children:["\u5bf9\u4e8e\u6307\u5b9a\u4e86 key \u7684\u6d88\u606f\uff0cpartition \u4f4d\u7f6e\u7684\u8ba1\u7b97\u65b9\u5f0f\u4e3a\uff1a",(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"Utils.murmur2(key) % numPartitions"})}),"\uff0c\u5373\u5148\u5bf9 key \u8fdb\u884c\u54c8\u5e0c\u8ba1\u7b97\uff0c\u7136\u540e\u5728\u4e8e partition \u4e2a\u6570\u6c42\u4f59\uff0c\u4ece\u800c\u5f97\u5230\u8be5\u6761\u6d88\u606f\u5e94\u8be5\u88ab\u5b58\u50a8\u5728\u54ea\u4e2a partition \u4e0a\u3002"]}),"\n",(0,i.jsxs)(r.p,{children:["\u5bf9\u4e8e\u6ca1\u6709\u6307\u5b9a key \u7684\u6d88\u606f\uff0cpartition \u4f4d\u7f6e\u7684\u8ba1\u7b97\u65b9\u5f0f\u4e3a\uff1a",(0,i.jsx)(r.strong,{children:"\u91c7\u7528 round-robin \u65b9\u5f0f\u786e\u5b9a partition \u4f4d\u7f6e"}),"\uff0c\u5373\u91c7\u7528\u8f6e\u8be2\u7684\u65b9\u5f0f\uff0c\u5e73\u5747\u7684\u5c06\u6d88\u606f\u5206\u5e03\u5230\u4e0d\u540c\u7684 partition \u4e0a\uff0c\u4ece\u800c\u907f\u514d\u67d0\u4e9b partition \u6570\u636e\u91cf\u8fc7\u5927\u5f71\u54cd Broker \u548c\u6d88\u8d39\u7aef\u6027\u80fd\u3002"]}),"\n",(0,i.jsx)(r.h3,{id:"\u6ce8\u610f",children:(0,i.jsx)(r.strong,{children:"\u6ce8\u610f"})}),"\n",(0,i.jsx)(r.p,{children:"\u7531\u4e8e partition \u6709\u4e3b\u526f\u7684\u533a\u5206\uff0c\u6b64\u5904\u53c2\u4e0e\u8ba1\u7b97\u7684 partition \u6570\u91cf\u662f\u5f53\u524d\u6709\u4e3b partition \u7684\u6570\u91cf\uff0c\u5373\u5982\u679c\u67d0\u4e2a partition \u65e0\u4e3b\u7684\u65f6\u5019\uff0c\u5219\u6b64 partition \u662f\u4e0d\u80fd\u591f\u8fdb\u884c\u6570\u636e\u5199\u5165\u7684\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u7a0d\u5fae\u89e3\u91ca\u4e00\u4e0b\uff0c\u4e3b\u526f partition \u7684\u673a\u5236\u662f\u4e3a\u4e86\u63d0\u9ad8 kafka \u7cfb\u7edf\u7684\u5bb9\u9519\u6027\u7684\uff0c\u5373\u5f53\u67d0\u4e2a Broker \u610f\u5916\u5b95\u673a\u65f6\uff0c\u5728\u6b64 Broker \u4e0a\u7684\u4e3b partition \u72b6\u6001\u4e3a\u4e0d\u53ef\u8bfb\u5199\u65f6\uff08\u53ea\u6709\u4e3b partition \u53ef\u5bf9\u5916\u63d0\u4f9b\u8bfb\u5199\u670d\u52a1\uff0c\u526f partition \u53ea\u6709\u6570\u636e\u5907\u4efd\u7684\u529f\u80fd\uff09\uff0ckafka \u4f1a\u4ece\u4e3b partition \u5bf9\u5e94\u7684 N \u4e2a\u526f partition \u4e2d\u6311\u9009\u4e00\u4e2a\uff0c\u5e76\u5c06\u5176\u72b6\u6001\u6539\u4e3a\u4e3b partition\uff0c\u4ece\u800c\u7ee7\u7eed\u5bf9\u5916\u63d0\u4f9b\u8bfb\u5199\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(r.p,{children:"\u6d88\u606f\u88ab\u786e\u5b9a\u5206\u914d\u5230\u67d0\u4e2a partition \u5bf9\u5e94\u8bb0\u5f55\u6536\u96c6\u5668\uff08\u5373\u53cc\u7aef\u961f\u5217\uff09\u540e\uff0c\u63a5\u4e0b\u6765\uff0c\u53d1\u9001\u7ebf\u7a0b\uff08Sender\uff09\u4ece\u8bb0\u5f55\u6536\u96c6\u5668\u4e2d\u6536\u96c6\u6ee1\u8db3\u6761\u4ef6\u7684\u6279\u6570\u636e\u53d1\u9001\u7ed9 Broker\uff0c\u90a3\u4e48\u53d1\u9001\u7ebf\u7a0b\u662f\u5982\u4f55\u6536\u96c6\u6ee1\u8db3\u6761\u4ef6\u7684\u6279\u6570\u636e\u7684\uff1f\u6279\u6570\u636e\u662f\u6309\u7167 partition \u7ef4\u5ea6\u53d1\u9001\u7684\u8fd8\u662f\u6309\u7167 Broker \u7ef4\u5ea6\u53d1\u9001\u6570\u636e\u7684\uff1f"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"\u53d1\u9001\u7ebf\u7a0b\u7684\u5de5\u4f5c\u539f\u7406",children:(0,i.jsx)(r.strong,{children:"\u53d1\u9001\u7ebf\u7a0b\u7684\u5de5\u4f5c\u539f\u7406"})}),"\n",(0,i.jsx)(r.p,{children:"Sender \u7ebf\u7a0b\u7684\u4e3b\u8981\u5de5\u4f5c\u662f\u6536\u96c6\u6ee1\u8db3\u6761\u4ef6\u7684\u6279\u6570\u636e\uff0c\u4f55\u4e3a\u6ee1\u8db3\u6761\u4ef6\u7684\u6279\u6570\u636e\uff1f\u7f13\u5b58\u6570\u636e\u662f\u4ee5\u6279\u7ef4\u5ea6\u5b58\u50a8\u7684\uff0c\u5f53\u4e00\u6279\u6570\u636e\u91cf\u8fbe\u5230\u6307\u5b9a\u7684 N \u6761\u65f6\uff0c\u5c31\u6ee1\u8db3\u53d1\u9001\u7ed9 Broker \u7684\u6761\u4ef6\u4e86\u3002"}),"\n",(0,i.jsx)(r.p,{children:"partition \u7ef4\u5ea6\u548c Broker \u7ef4\u5ea6\u53d1\u9001\u6d88\u606f\u6a21\u578b\u5bf9\u6bd4\u3002"}),"\n",(0,i.jsx)("figure",{"data-size":"normal",children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:"https://java-tutorial.oss-cn-shanghai.aliyuncs.com/v2-36b7c2761f17fb2d6481747523999011_720w.webp",alt:""})})}),"\n",(0,i.jsx)(r.p,{children:"\u4ece\u56fe\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c\u5de6\u4fa7\u6309\u7167 partition \u7ef4\u5ea6\u53d1\u9001\u6d88\u606f\uff0c\u6bcf\u4e2a partition \u90fd\u9700\u8981\u548c Broker \u5efa\u8fde\uff0c\u603b\u5171\u53d1\u751f\u4e86\u56db\u6b21\u7f51\u7edc\u8fde\u63a5\u3002\u800c\u53f3\u4fa7\u5c06\u5206\u5e03\u5728\u540c\u4e00\u4e2a Broker \u7684 partition \u6309\u7ec4\u805a\u5408\u540e\u5728\u4e0e Broker \u5efa\u8fde\uff0c\u53ea\u9700\u8981\u4e24\u6b21\u7f51\u7edc\u8fde\u63a5\u5373\u53ef\u3002\u6240\u4ee5 Kafka \u9009\u62e9\u53f3\u4fa7\u7684\u65b9\u5f0f\u3002"}),"\n",(0,i.jsx)(r.h3,{id:"sender-\u7684\u4e3b\u8981\u5de5\u4f5c",children:(0,i.jsx)(r.strong,{children:"Sender \u7684\u4e3b\u8981\u5de5\u4f5c"})}),"\n",(0,i.jsx)(r.p,{children:"\u7b2c\u4e00\u6b65\uff1a\u626b\u63cf\u8bb0\u5f55\u6536\u96c6\u5668\u4e2d\u6ee1\u8db3\u6761\u4ef6\u7684\u6279\u6570\u636e\uff0c\u7136\u540e\u5c06 partition -> \u6279\u6570\u636e\u6620\u5c04\u8f6c\u6362\u6210 BrokerId -> N \u6279\u6570\u636e\u7684\u6620\u5c04\u3002\u7b2c\u4e8c\u6b65\uff1aSender \u7ebf\u7a0b\u4f1a\u4e3a\u6bcf\u4e2a BrokerId \u521b\u5efa\u4e00\u4e2a\u5ba2\u6237\u7aef\u8bf7\u6c42\uff0c\u7136\u540e\u5c06\u8bf7\u6c42\u4ea4\u7ed9 NetWorkClient\uff0c\u7531 NetWrokClient \u53bb\u771f\u6b63\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42\u5230 Broker\u3002"}),"\n",(0,i.jsx)(r.h3,{id:"networkclient-\u7684\u5de5\u4f5c\u5185\u5bb9",children:(0,i.jsx)(r.strong,{children:"NetWorkClient \u7684\u5de5\u4f5c\u5185\u5bb9"})}),"\n",(0,i.jsx)(r.p,{children:"Sender \u7ebf\u7a0b\u51c6\u5907\u597d\u8981\u53d1\u9001\u7684\u6570\u636e\u540e\uff0c\u4ea4\u7531 NetWorkClient \u6765\u8fdb\u884c\u7f51\u7edc\u76f8\u5173\u64cd\u4f5c\u3002\u4e3b\u8981\u5305\u62ec\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u7684\u5efa\u8fde\u3001\u53d1\u9001\u5ba2\u6237\u7aef\u8bf7\u6c42\u3001\u63a5\u53d7\u670d\u52a1\u7aef\u54cd\u5e94\u3002\u5b8c\u6210\u5982\u4e0a\u4e00\u7cfb\u5217\u7684\u5de5\u4f5c\u4e3b\u8981\u7531\u5982\u4e0b\u65b9\u6cd5\u5b8c\u6210\u3002"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"reday()\u65b9\u6cd5\u3002\u4ece\u8bb0\u5f55\u6536\u96c6\u5668\u83b7\u53d6\u51c6\u5907\u5b8c\u6bd5\u7684\u8282\u70b9\uff0c\u5e76\u8fde\u63a5\u6240\u6709\u51c6\u5907\u597d\u7684\u8282\u70b9\u3002"}),"\n",(0,i.jsx)(r.li,{children:"send()\u65b9\u6cd5\u3002\u4e3a\u6bcf\u4e2a\u8282\u70b9\u521b\u5efa\u4e00\u4e2a\u5ba2\u6237\u7aef\u8bf7\u6c42\uff0c\u7136\u540e\u5c06\u8bf7\u6c42\u6682\u65f6\u5b58\u5230\u8282\u70b9\u5bf9\u5e94\u7684 Channel\uff08\u901a\u9053\uff09\u4e2d\u3002"}),"\n",(0,i.jsx)(r.li,{children:"poll()\u65b9\u6cd5\u3002\u8be5\u65b9\u6cd5\u4f1a\u771f\u6b63\u8f6e\u8be2\u7f51\u7edc\u8bf7\u6c42\uff0c\u53d1\u9001\u8bf7\u6c42\u7ed9\u670d\u52a1\u7aef\u8282\u70b9\u548c\u63a5\u53d7\u670d\u52a1\u7aef\u7684\u54cd\u5e94\u3002"}),"\n"]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"\u603b\u7ed3",children:(0,i.jsx)(r.strong,{children:"\u603b\u7ed3"})}),"\n",(0,i.jsxs)(r.p,{children:["\u4ee5\u4e0a\uff0c\u5373\u4e3a\u751f\u4ea7\u8005\u5ba2\u6237\u7aef\u7684\u4e00\u6761\u6d88\u606f\u4ece\u751f\u4ea7\u5230\u53d1\u9001\u5230 Broker \u4e0a\u7684\u5168\u8fc7\u7a0b\u3002\u73b0\u5728\u662f\u4e0d\u662f\u5c31\u5f88\u6e05\u6670\u4e86\u5462\uff1f\u4e5f\u8bb8\u6709\u4e9b\u670b\u53cb\u4f1a\u6bd4\u8f83\u7591\u60d1\u5b83\u7684",(0,i.jsx)(r.strong,{children:"\u7f51\u7edc\u8bf7\u6c42\u6a21\u578b\u662f\u4ec0\u4e48\u6837\u7684"}),"\uff0c\u4f5c\u8005\u5c31\u731c\u4f60\u4f1a\u4f60\u4f1a\u95ee\uff0c\u4e0b\u4e00\u7bc7\u6211\u4eec\u5c31\u6765\u6252\u5f00\u5b83\u7684\u795e\u79d8\u9762\u7eb1\u770b\u770b\u5176\u7a76\u7adf\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff0c\u656c\u8bf7\u671f\u5f85\u3002"]})]})}function h(n={}){const{wrapper:r}={...(0,t.a)(),...n.components};return r?(0,i.jsx)(r,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},88672:(n,r,e)=>{e.d(r,{Z:()=>a,a:()=>o});var i=e(50959);const t={},s=i.createContext(t);function o(n){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function a(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),i.createElement(s.Provider,{value:r},n.children)}}}]);