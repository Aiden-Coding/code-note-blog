"use strict";(self.webpackChunkcode_note_blog=self.webpackChunkcode_note_blog||[]).push([[4953],{12891:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=r(11527),s=r(88672);const i={},c="Spring MVC \u5904\u7406\u5668\u5f02\u5e38\u89e3\u6790\u5668",d={id:"Spring\u5168\u5bb6\u6876/SpringMVC/SpringMVC\u4e2d\u7684\u5f02\u5e38\u5904\u7406\u5668",title:"Spring MVC \u5904\u7406\u5668\u5f02\u5e38\u89e3\u6790\u5668",description:"2018-07-26 14:32 \u66f4\u65b0",source:"@site/docs/Spring\u5168\u5bb6\u6876/SpringMVC/SpringMVC\u4e2d\u7684\u5f02\u5e38\u5904\u7406\u5668.md",sourceDirName:"Spring\u5168\u5bb6\u6876/SpringMVC",slug:"/Spring\u5168\u5bb6\u6876/SpringMVC/SpringMVC\u4e2d\u7684\u5f02\u5e38\u5904\u7406\u5668",permalink:"/code-note-blog/docs/Spring\u5168\u5bb6\u6876/SpringMVC/SpringMVC\u4e2d\u7684\u5f02\u5e38\u5904\u7406\u5668",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Spring\u5168\u5bb6\u6876/SpringMVC/SpringMVC\u4e2d\u7684\u5f02\u5e38\u5904\u7406\u5668.md",tags:[],version:"current",frontMatter:{},sidebar:"spring",previous:{title:"Spring MVC \u4f7f\u7528ViewResolver\u63a5\u53e3\u89e3\u6790\u89c6\u56fe",permalink:"/code-note-blog/docs/Spring\u5168\u5bb6\u6876/SpringMVC/SpringMVC\u4e2d\u7684\u89c6\u56fe\u89e3\u6790\u5668"},next:{title:"\u8bf7\u6c42\u6267\u884c\u6d41\u7a0b\uff08\u4e8c\uff09\u4e4b\u6267\u884cHandler\u65b9\u6cd5",permalink:"/code-note-blog/docs/Spring\u5168\u5bb6\u6876/SpringMVC\u6e90\u7801\u5206\u6790/\u8bf7\u6c42\u6267\u884c\u6d41\u7a0b\uff08\u4e8c\uff09\u4e4b\u6267\u884cHandler\u65b9\u6cd5"}},o={},l=[];function p(e){const n={blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"spring-mvc-\u5904\u7406\u5668\u5f02\u5e38\u89e3\u6790\u5668",children:"Spring MVC \u5904\u7406\u5668\u5f02\u5e38\u89e3\u6790\u5668"}),"\n",(0,t.jsx)(n.p,{children:"2018-07-26 14:32 \u66f4\u65b0"}),"\n",(0,t.jsxs)(n.p,{children:["Spring\u7684\u5904\u7406\u5668\u5f02\u5e38\u89e3\u6790\u5668",(0,t.jsx)(n.code,{children:"HandlerExceptionResolver"}),"\u63a5\u53e3\u7684\u5b9e\u73b0\u8d1f\u8d23\u5904\u7406\u5404\u7c7b\u63a7\u5236\u5668\u6267\u884c\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u7684\u5f02\u5e38\u3002\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u8bb2\uff0c",(0,t.jsx)(n.code,{children:"HandlerExceptionResolver"}),"\u4e0e\u4f60\u5728web\u5e94\u7528\u63cf\u8ff0\u7b26",(0,t.jsx)(n.code,{children:"web.xml"}),"\u6587\u4ef6\u4e2d\u80fd\u5b9a\u4e49\u7684\u5f02\u5e38\u6620\u5c04\uff08exception mapping\uff09\u5f88\u76f8\u50cf\uff0c\u4e0d\u8fc7\u5b83\u6bd4\u540e\u8005\u63d0\u4f9b\u4e86\u66f4\u7075\u6d3b\u7684\u65b9\u5f0f\u3002\u6bd4\u5982\u5b83\u80fd\u63d0\u4f9b\u5f02\u5e38\u88ab\u629b\u51fa\u65f6\u6b63\u5728\u6267\u884c\u7684\u662f\u54ea\u4e2a\u5904\u7406\u5668\u8fd9\u6837\u7684\u4fe1\u606f\u3002\u5e76\u4e14\uff0c\u4e00\u4e2a\u66f4\u7075\u6d3b\uff08programmatic\uff09\u7684\u5f02\u5e38\u5904\u7406\u65b9\u5f0f\u53ef\u4ee5\u4e3a\u4f60\u63d0\u4f9b\u66f4\u591a\u9009\u62e9\uff0c\u4f7f\u4f60\u5728\u8bf7\u6c42\u88ab\u76f4\u63a5\u8f6c\u5411\u5230\u53e6\u4e00\u4e2aURL\u4e4b\u524d\uff08\u4e0e\u4f60\u4f7f\u7528Servlet\u89c4\u8303\u7684\u5f02\u5e38\u6620\u5c04\u662f\u4e00\u6837\u7684\uff09\u6709\u66f4\u591a\u7684\u65b9\u5f0f\u6765\u5904\u7406\u5f02\u5e38\u3002"]}),"\n",(0,t.jsx)("section",{children:(0,t.jsxs)(n.p,{children:["\u5b9e\u73b0",(0,t.jsx)(n.code,{children:"HandlerExceptionResolver"}),"\u63a5\u53e3\u5e76\u975e\u5b9e\u73b0\u5f02\u5e38\u5904\u7406\u7684\u552f\u4e00\u65b9\u5f0f\uff0c\u5b83\u53ea\u662f\u63d0\u4f9b\u4e86",(0,t.jsx)(n.code,{children:"resolveException(Exception, Hanlder)"}),"\u65b9\u6cd5\u7684\u4e00\u4e2a\u5b9e\u73b0\u800c\u5df2\uff0c\u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"ModelAndView"}),"\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u6846\u67b6\u63d0\u4f9b\u7684",(0,t.jsx)(n.code,{children:"SimpleMappingExceptionResolver"}),"\u6216\u5728\u5f02\u5e38\u5904\u7406\u65b9\u6cd5\u4e0a\u6ce8\u89e3",(0,t.jsx)(n.code,{children:"@ExceptionHandler"}),"\u3002",(0,t.jsx)(n.code,{children:"SimpleMappingExceptionResolver"}),"\u5141\u8bb8\u4f60\u83b7\u53d6\u53ef\u80fd\u629b\u51fa\u7684\u5f02\u5e38\u7c7b\u7684\u540d\u5b57\uff0c\u5e76\u628a\u5b83\u6620\u5c04\u5230\u4e00\u4e2a\u89c6\u56fe\u540d\u4e0a\u53bb\u3002\u8fd9\u4e0eServlet API\u63d0\u4f9b\u7684\u5f02\u5e38\u6620\u5c04\u7279\u6027\u662f\u529f\u80fd\u7b49\u4ef7\u7684\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u57fa\u4e8e\u6b64\u5b9e\u73b0\u7c92\u5ea6\u66f4\u7cbe\u7ec6\u7684\u5f02\u5e38\u6620\u5c04\u3002\u800c",(0,t.jsx)(n.code,{children:"@ExceptionHandler"}),"\u6ce8\u89e3\u7684\u65b9\u6cd5\u5219\u4f1a\u5728\u5f02\u5e38\u629b\u51fa\u65f6\u88ab\u8c03\u7528\u4ee5\u5904\u7406\u8be5\u5f02\u5e38\u3002\u8fd9\u6837\u7684\u65b9\u6cd5\u53ef\u4ee5\u5b9a\u4e49\u5728",(0,t.jsx)(n.code,{children:"@Controller"}),"\u6ce8\u89e3\u7684\u63a7\u5236\u5668\u7c7b\u91cc\uff0c\u4e5f\u53ef\u4ee5\u5b9a\u4e49\u5728",(0,t.jsx)(n.code,{children:"@ControllerAdvice"}),"\u7c7b\u4e2d\uff0c\u540e\u8005\u53ef\u4ee5\u4f7f\u8be5\u5f02\u5e38\u5904\u7406\u65b9\u6cd5\u88ab\u5e94\u7528\u5230\u66f4\u591a\u7684",(0,t.jsx)(n.code,{children:"@Controller"}),"\u63a7\u5236\u5668\u4e2d\u3002\u4e0b\u4e00\u5c0f\u8282\u5c06\u63d0\u4f9b\u66f4\u4e3a\u8be6\u7ec6\u7684\u4fe1\u606f\u3002"]})}),"\n",(0,t.jsx)(n.h1,{id:"spring-mvc-\u4f7f\u7528exceptionhandler\u6ce8\u89e3",children:"Spring MVC \u4f7f\u7528@ExceptionHandler\u6ce8\u89e3"}),"\n",(0,t.jsx)(n.p,{children:"2018-07-26 14:33 \u66f4\u65b0"}),"\n",(0,t.jsxs)("section",{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"HandlerExceptionResolver"}),"\u63a5\u53e3\u4ee5\u53ca",(0,t.jsx)(n.code,{children:"SimpleMappingExceptionResolver"}),"\u89e3\u6790\u5668\u7c7b\u7684\u5b9e\u73b0\u4f7f\u5f97\u4f60\u80fd\u58f0\u660e\u5f0f\u5730\u5c06\u5f02\u5e38\u6620\u5c04\u5230\u7279\u5b9a\u7684\u89c6\u56fe\u4e0a\uff0c\u8fd8\u53ef\u4ee5\u5728\u5f02\u5e38\u88ab\u8f6c\u53d1\uff08forward\uff09\u5230\u5bf9\u5e94\u7684\u89c6\u56fe\u524d\u4f7f\u7528Java\u4ee3\u7801\u505a\u4e9b\u5224\u65ad\u548c\u903b\u8f91\u3002\u4e0d\u8fc7\u5728\u4e00\u4e9b\u573a\u666f\uff0c\u7279\u522b\u662f\u4f9d\u9760",(0,t.jsx)(n.code,{children:"@ResponseBody"}),"\u8fd4\u56de\u54cd\u5e94\u800c\u975e\u4f9d\u8d56\u89c6\u56fe\u89e3\u6790\u673a\u5236\u7684\u573a\u666f\u4e0b\uff0c\u76f4\u63a5\u8bbe\u7f6e\u54cd\u5e94\u7684\u72b6\u6001\u7801\u5e76\u5c06\u5ba2\u6237\u7aef\u9700\u8981\u7684\u9519\u8bef\u4fe1\u606f\u76f4\u63a5\u5199\u56de\u54cd\u5e94\u4f53\u4e2d\uff0c\u53ef\u80fd\u662f\u66f4\u65b9\u4fbf\u7684\u65b9\u6cd5\u3002"]}),(0,t.jsxs)(n.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(n.code,{children:"@ExceptionHandler"}),"\u65b9\u6cd5\u6765\u505a\u5230\u8fd9\u70b9\u3002\u5982\u679c",(0,t.jsx)(n.code,{children:"@ExceptionHandler"}),"\u65b9\u6cd5\u662f\u5728\u63a7\u5236\u5668\u5185\u90e8\u5b9a\u4e49\u7684\uff0c\u90a3\u4e48\u5b83\u4f1a\u63a5\u6536\u5e76\u5904\u7406\u7531\u63a7\u5236\u5668\uff08\u6216\u5176\u4efb\u4f55\u5b50\u7c7b\uff09\u4e2d\u7684",(0,t.jsx)(n.code,{children:"@RequestMapping"}),"\u65b9\u6cd5\u629b\u51fa\u7684\u5f02\u5e38\u3002\u5982\u679c\u4f60\u5c06",(0,t.jsx)(n.code,{children:"@ExceptionHandler"}),"\u65b9\u6cd5\u5b9a\u4e49\u5728",(0,t.jsx)(n.code,{children:"@ControllerAdvice"}),"\u7c7b\u4e2d\uff0c\u90a3\u4e48\u5b83\u4f1a\u5904\u7406\u76f8\u5173\u63a7\u5236\u5668\u4e2d\u629b\u51fa\u7684\u5f02\u5e38\u3002\u4e0b\u9762\u7684\u4ee3\u7801\u5c31\u5c55\u793a\u4e86\u4e00\u4e2a\u5b9a\u4e49\u5728\u63a7\u5236\u5668\u5185\u90e8\u7684",(0,t.jsx)(n.code,{children:"@ExceptionHandler"}),"\u65b9\u6cd5\uff1a"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"@Controller\npublic class SimpleController {\n\n    // @RequestMapping methods omitted ...\n\n    @ExceptionHandler(IOException.class)\n    public ResponseEntity<String> handleIOException(IOException ex) {\n        // prepare responseEntity\n        return responseEntity;\n    }\n\n}\n\n"})}),(0,t.jsxs)(n.p,{children:["\u6b64\u5916\uff0c",(0,t.jsx)(n.code,{children:"@ExceptionHandler"}),"\u6ce8\u89e3\u8fd8\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u5f02\u5e38\u7c7b\u578b\u7684\u6570\u7ec4\u4f5c\u4e3a\u53c2\u6570\u503c\u3002\u82e5\u629b\u51fa\u4e86\u5df2\u5728\u5217\u8868\u4e2d\u58f0\u660e\u7684\u5f02\u5e38\uff0c\u90a3\u4e48\u76f8\u5e94\u7684",(0,t.jsx)(n.code,{children:"@ExceptionHandler"}),"\u65b9\u6cd5\u5c06\u4f1a\u88ab\u8c03\u7528\u3002\u5982\u679c\u6ca1\u6709\u7ed9\u6ce8\u89e3\u4efb\u4f55\u53c2\u6570\u503c\uff0c\u90a3\u4e48\u9ed8\u8ba4\u5904\u7406\u7684\u5f02\u5e38\u7c7b\u578b\u5c06\u662f\u65b9\u6cd5\u53c2\u6570\u6240\u58f0\u660e\u7684\u90a3\u4e9b\u5f02\u5e38\u3002"]}),(0,t.jsxs)(n.p,{children:["\u4e0e\u6807\u51c6\u7684\u63a7\u5236\u5668",(0,t.jsx)(n.code,{children:"@RequestMapping"}),"\u6ce8\u89e3\u5904\u7406\u65b9\u6cd5\u4e00\u6837\uff0c",(0,t.jsx)(n.code,{children:"@ExceptionHandler"}),"\u65b9\u6cd5\u7684\u65b9\u6cd5\u53c2\u6570\u548c\u8fd4\u56de\u503c\u4e5f\u53ef\u4ee5\u5f88\u7075\u6d3b\u3002\u6bd4\u5982\uff0c\u5728Servlet\u73af\u5883\u4e0b\u65b9\u6cd5\u53ef\u4ee5\u63a5\u6536",(0,t.jsx)(n.code,{children:"HttpServletRequest"}),"\u53c2\u6570\uff0c\u800cPortlet\u73af\u5883\u4e0b\u65b9\u6cd5\u53ef\u4ee5\u63a5\u6536",(0,t.jsx)(n.code,{children:"PortletRequest"}),"\u53c2\u6570\u3002\u8fd4\u56de\u503c\u53ef\u4ee5\u662f",(0,t.jsx)(n.code,{children:"String"}),"\u7c7b\u578b\u2014\u2014\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4f1a\u88ab\u89e3\u6790\u4e3a\u89c6\u56fe\u540d\u2014\u2014\u53ef\u4ee5\u662f",(0,t.jsx)(n.code,{children:"ModelAndView"}),"\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u662f",(0,t.jsx)(n.code,{children:"ResponseEntity"}),"\u3002\u6216\u8005\u4f60\u8fd8\u53ef\u4ee5\u5728\u65b9\u6cd5\u4e0a\u6dfb\u52a0",(0,t.jsx)(n.code,{children:"@ResponseBody"}),"\u6ce8\u89e3\u4ee5\u4f7f\u7528\u6d88\u606f\u8f6c\u6362\u5668\u4f1a\u8f6c\u6362\u4fe1\u606f\u4e3a\u7279\u5b9a\u7c7b\u578b\u7684\u6570\u636e\uff0c\u7136\u540e\u628a\u5b83\u4eec\u5199\u56de\u5230\u54cd\u5e94\u6d41\u4e2d\u3002"]})]}),"\n",(0,t.jsx)(n.h1,{id:"spring-mvc-\u5904\u7406\u4e00\u822c\u7684\u5f02\u5e38",children:"Spring MVC \u5904\u7406\u4e00\u822c\u7684\u5f02\u5e38"}),"\n",(0,t.jsx)(n.p,{children:"2018-07-26 14:34 \u66f4\u65b0"}),"\n",(0,t.jsxs)(n.p,{children:["\u5904\u7406\u8bf7\u6c42\u7684\u8fc7\u7a0b\u4e2d\uff0cSpring MVC\u53ef\u80fd\u4f1a\u629b\u51fa\u4e00\u4e9b\u7684\u5f02\u5e38\u3002",(0,t.jsx)(n.code,{children:"SimpleMappingExceptionResolver"}),"\u53ef\u4ee5\u6839\u636e\u9700\u8981\u5f88\u65b9\u4fbf\u5730\u5c06\u4efb\u4f55\u5f02\u5e38\u6620\u5c04\u5230\u4e00\u4e2a\u9ed8\u8ba4\u7684\u9519\u8bef\u89c6\u56fe\u3002\u4f46\uff0c\u5982\u679c\u5ba2\u6237\u7aef\u662f\u901a\u8fc7\u81ea\u52a8\u68c0\u6d4b\u54cd\u5e94\u7684\u65b9\u5f0f\u6765\u5206\u53d1\u5904\u7406\u5f02\u5e38\u7684\uff0c\u90a3\u4e48\u540e\u7aef\u5c31\u9700\u8981\u4e3a\u54cd\u5e94\u8bbe\u7f6e\u5bf9\u5e94\u7684\u72b6\u6001\u7801\u3002\u6839\u636e\u629b\u51fa\u5f02\u5e38\u7684\u7c7b\u578b\u4e0d\u540c\uff0c\u53ef\u80fd\u9700\u8981\u8bbe\u7f6e\u4e0d\u540c\u7684\u72b6\u6001\u7801\u6765\u6807\u8bc6\u662f\u5ba2\u6237\u7aef\u9519\u8bef\uff084xx\uff09\u8fd8\u662f\u670d\u52a1\u5668\u7aef\u9519\u8bef\uff085xx\uff09\u3002"]}),"\n",(0,t.jsxs)("section",{children:[(0,t.jsxs)(n.p,{children:["\u9ed8\u8ba4\u5904\u7406\u5668\u5f02\u5e38\u89e3\u6790\u5668",(0,t.jsx)(n.code,{children:"DefaultHandlerExceptionResolver"}),"\u4f1a\u5c06Spring MVC\u629b\u51fa\u7684\u5f02\u5e38\u8f6c\u6362\u6210\u5bf9\u5e94\u7684\u9519\u8bef\u72b6\u6001\u7801\u3002\u8be5\u89e3\u6790\u5668\u5728MVC\u547d\u540d\u7a7a\u95f4\u914d\u7f6e\u6216MVC Java\u914d\u7f6e\u7684\u65b9\u5f0f\u4e0b\u9ed8\u8ba4\u5df2\u7ecf\u88ab\u6ce8\u518c\u4e86\uff0c\u53e6\u5916\uff0c\u901a\u8fc7",(0,t.jsx)(n.code,{children:"DispatcherServlet"}),"\u6ce8\u518c\u4e5f\u662f\u53ef\u884c\u7684\uff08\u5373\u4e0d\u4f7f\u7528MVC\u547d\u540d\u7a7a\u95f4\u6216Java\u7f16\u7a0b\u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\u7684\u65f6\u5019\uff09\u3002\u4e0b\u8868\u5217\u51fa\u4e86\u8be5\u89e3\u6790\u5668\u80fd\u5904\u7406\u7684\u4e00\u4e9b\u5f02\u5e38\uff0c\u53ca\u4ed6\u4eec\u5bf9\u5e94\u7684\u72b6\u6001\u7801\u3002"]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u5f02\u5e38"}),(0,t.jsx)(n.th,{children:"HTTP\u72b6\u6001\u7801"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"BindException"})}),(0,t.jsx)(n.td,{children:"400 (\u65e0\u6548\u8bf7\u6c42)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ConversionNotSupportedException"})}),(0,t.jsx)(n.td,{children:"500 (\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpMediaTypeNotAcceptableException"})}),(0,t.jsx)(n.td,{children:"406 (\u4e0d\u63a5\u53d7)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpMediaTypeNotSupportedException"})}),(0,t.jsx)(n.td,{children:"415 (\u4e0d\u652f\u6301\u7684\u5a92\u4f53\u7c7b\u578b)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpMessageNotReadableException"})}),(0,t.jsx)(n.td,{children:"400 (\u65e0\u6548\u8bf7\u6c42)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpMessageNotWritableException"})}),(0,t.jsx)(n.td,{children:"500 (\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"HttpRequestMethodNotSupportedException"})}),(0,t.jsx)(n.td,{children:"405 (\u4e0d\u652f\u6301\u7684\u65b9\u6cd5)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"MethodArgumentNotValidException"})}),(0,t.jsx)(n.td,{children:"400 (\u65e0\u6548\u8bf7\u6c42)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"MissingServletRequestParameterException"})}),(0,t.jsx)(n.td,{children:"400 (\u65e0\u6548\u8bf7\u6c42)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"MissingServletRequestPartException"})}),(0,t.jsx)(n.td,{children:"400 (\u65e0\u6548\u8bf7\u6c42)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"NoHandlerFoundException"})}),(0,t.jsx)(n.td,{children:"404 (\u8bf7\u6c42\u672a\u627e\u5230)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"NoSuchRequestHandlingMethodException"})}),(0,t.jsx)(n.td,{children:"404 (\u8bf7\u6c42\u672a\u627e\u5230)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"TypeMismatchException"})}),(0,t.jsx)(n.td,{children:"400 (\u65e0\u6548\u8bf7\u6c42)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"MissingPathVariableException"})}),(0,t.jsx)(n.td,{children:"500 (\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"NoHandlerFoundException"})}),(0,t.jsx)(n.td,{children:"404 (\u8bf7\u6c42\u672a\u627e\u5230)"})]})]})]}),(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u5f85\u7ffb\u8bd1\u3002"}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"DefaultHandlerExceptionResolver"})," works transparently by setting the status of the response. However, it stops short of writing any error content to the body of the response while your application may need to add developer- friendly content to every error response for example when providing a REST API. You can prepare a ",(0,t.jsx)(n.code,{children:"ModelAndView"})," and render error content through view resolution?--?i.e. by configuring a ",(0,t.jsx)(n.code,{children:"ContentNegotiatingViewResolver"}),", ",(0,t.jsx)(n.code,{children:"MappingJackson2JsonView"}),", and so on. However, you may prefer to use",(0,t.jsx)(n.code,{children:"@ExceptionHandler"})," methods instead."]}),(0,t.jsxs)(n.p,{children:["If you prefer to write error content via ",(0,t.jsx)(n.code,{children:"@ExceptionHandler"})," methods you can extend ",(0,t.jsx)(n.code,{children:"ResponseEntityExceptionHandler"})," instead. This is a convenient base for ",(0,t.jsx)(n.code,{children:"@ControllerAdvice"})," classes providing an ",(0,t.jsx)(n.code,{children:"@ExceptionHandler"})," method to handle standard Spring MVC exceptions and return ",(0,t.jsx)(n.code,{children:"ResponseEntity"}),". That allows you to customize the response and write error content with message converters. See the ",(0,t.jsx)(n.code,{children:"ResponseEntityExceptionHandler"})," javadocs for more details."]})]}),"\n",(0,t.jsx)(n.h1,{id:"spring-mvc-\u4f7f\u7528responsestatus\u6ce8\u89e3\u4e1a\u52a1\u5f02\u5e38",children:"Spring MVC \u4f7f\u7528@ResponseStatus\u6ce8\u89e3\u4e1a\u52a1\u5f02\u5e38"}),"\n",(0,t.jsx)(n.p,{children:"2020-07-31 10:52 \u66f4\u65b0"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e1a\u52a1\u5f02\u5e38\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(n.code,{children:"@ResponseStatus"}),"\u6765\u6ce8\u89e3\u3002\u5f53\u5f02\u5e38\u88ab\u629b\u51fa\u65f6\uff0c",(0,t.jsx)(n.code,{children:"ResponseStatusExceptionResolver"}),"\u4f1a\u8bbe\u7f6e\u76f8\u5e94\u7684\u54cd\u5e94\u72b6\u6001\u7801\u3002",(0,t.jsx)(n.code,{children:"DispatcherServlet"}),"\u4f1a\u9ed8\u8ba4\u6ce8\u518c\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"ResponseStatusExceptionResolver"})," \u4ee5\u4f9b\u4f7f\u7528\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"ResponseStatus\u6ce8\u89e3\u7684\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u5f02\u5e38\u7c7b\uff0c\u52a0\u4e0a\u6ce8\u89e3"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'package com.zj.exception;\n\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.ResponseStatus;\n\n@ResponseStatus(value=HttpStatus.FORBIDDEN,reason="\u7528\u6237\u4e0d\u5339\u914d")\npublic class UserNotMatchException extends RuntimeException{\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"ResponseStatus\u6ce8\u89e3\u662f\u4fee\u9970\u7c7b\u7684\n\u5b83\u6709\u4e24\u4e2a\u5c5e\u6027\uff0cvalue\u5c5e\u6027\u662fhttp\u72b6\u6001\u7801\uff0c\u6bd4\u5982404\uff0c500\u7b49\u3002reason\u662f\u9519\u8bef\u4fe1\u606f"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5199\u4e00\u4e2a\u76ee\u6807\u65b9\u6cd5\u629b\u51fa\u8be5\u5f02\u5e38"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'@RequestMapping("/testResponseStatus")\npublic String testResponseStatus(int i){\n    if(i==0)\n        throw new UserNotMatchException();\n    return "hello";\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u4e86ResponseStatus\u6ce8\u89e3\u4e4b\u540e\uff0c\u7528\u6237\u770b\u5230\u7684\u5f02\u5e38\u754c\u9762\u6b63\u662f\u6211\u4eec\u81ea\u5df1\u5b9a\u4e49\u7684\u5f02\u5e38\uff0c\u800c\u4e0d\u518d\u662f\u4e00\u5927\u5806\u7528\u6237\u770b\u4e0d\u61c2\u7684\u4ee3\u7801\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"spring-mvc-\u5bf9servlet\u9ed8\u8ba4\u5bb9\u5668\u9519\u8bef\u9875\u9762\u7684\u5b9a\u5236\u5316",children:"Spring MVC \u5bf9Servlet\u9ed8\u8ba4\u5bb9\u5668\u9519\u8bef\u9875\u9762\u7684\u5b9a\u5236\u5316"}),"\n",(0,t.jsx)(n.p,{children:"2018-07-26 14:36 \u66f4\u65b0"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u54cd\u5e94\u7684\u72b6\u6001\u7801\u88ab\u8bbe\u7f6e\u4e3a\u9519\u8bef\u72b6\u6001\u7801\uff0c\u5e76\u4e14\u54cd\u5e94\u4f53\u4e2d\u6ca1\u6709\u5185\u5bb9\u65f6\uff0cServlet\u5bb9\u5668\u901a\u5e38\u4f1a\u6e32\u67d3\u4e00\u4e2aHTML\u9519\u8bef\u9875\u3002\u82e5\u9700\u8981\u5b9a\u5236\u5bb9\u5668\u9ed8\u8ba4\u63d0\u4f9b\u7684\u9519\u8bef\u9875\uff0c\u4f60\u53ef\u4ee5\u5728",(0,t.jsx)(n.code,{children:"web.xml"}),"\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u9519\u8bef\u9875\u9762",(0,t.jsx)(n.code,{children:"<error-page>"}),"\u5143\u7d20\u3002\u5728Servlet 3\u89c4\u8303\u51fa\u6765\u4e4b\u524d\uff0c\u8be5\u9519\u8bef\u9875\u5143\u7d20\u5fc5\u987b\u88ab\u663e\u5f0f\u6307\u5b9a\u6620\u5c04\u5230\u4e00\u4e2a\u5177\u4f53\u7684\u9519\u8bef\u7801\u6216\u4e00\u4e2a\u5f02\u5e38\u7c7b\u578b\u3002\u4eceServlet 3\u5f00\u59cb\uff0c\u9519\u8bef\u9875\u4e0d\u518d\u9700\u8981\u6620\u5c04\u5230\u5176\u4ed6\u4fe1\u606f\u4e86\uff0c\u8fd9\u610f\u5473\u7740\uff0c\u4f60\u6307\u5b9a\u7684\u4f4d\u7f6e\u5c31\u662f\u5bf9Servlet\u5bb9\u5668\u9ed8\u8ba4\u9519\u8bef\u9875\u7684\u81ea\u5b9a\u5236\u4e86\u3002"]}),"\n",(0,t.jsxs)("section",{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<error-page>\n    <location>/error</location>\n</error-page>\n\n"})}),(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u9519\u8bef\u9875\u7684\u4f4d\u7f6e\u6240\u5728\u53ef\u4ee5\u662f\u4e00\u4e2aJSP\u9875\u9762\uff0c\u6216\u8005\u5176\u4ed6\u7684\u4e00\u4e9bURL\uff0c\u53ea\u8981\u5b83\u6307\u5b9a\u5bb9\u5668\u91cc\u4efb\u610f\u4e00\u4e2a",(0,t.jsx)(n.code,{children:"@Controller"}),"\u63a7\u5236\u5668\u4e0b\u7684\u5904\u7406\u5668\u65b9\u6cd5\uff1a"]}),(0,t.jsxs)(n.p,{children:["\u5199\u56de",(0,t.jsx)(n.code,{children:"HttpServletResponse"}),"\u7684\u9519\u8bef\u4fe1\u606f\u548c\u9519\u8bef\u72b6\u6001\u7801\u53ef\u4ee5\u5728\u63a7\u5236\u5668\u4e2d\u901a\u8fc7\u8bf7\u6c42\u5c5e\u6027\u6765\u83b7\u53d6\uff1a"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'@Controller\npublic class ErrorController {\n\n    @RequestMapping(path = "/error", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)\n    @ResponseBody\n    public Map<String, Object> handle(HttpServletRequest request) {\n\n        Map<String, Object> map = new HashMap<String, Object>();\n        map.put("status", request.getAttribute("javax.servlet.error.status_code"));\n        map.put("reason", request.getAttribute("javax.servlet.error.message"));\n\n        return map;\n    }\n\n}\n\n'})}),(0,t.jsx)(n.p,{children:"\u6216\u8005\u5728JSP\u4e2d\u8fd9\u4e48\u4f7f\u7528:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'<%@ page contentType="application/json" pageEncoding="UTF-8"%>\n{\n    status:<%=request.getAttribute("javax.servlet.error.status_code") %>,\n    reason:<%=request.getAttribute("javax.servlet.error.message") %>\n}\n'})})]})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},88672:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var t=r(50959);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);