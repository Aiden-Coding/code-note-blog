"use strict";(self.webpackChunkcode_note_blog=self.webpackChunkcode_note_blog||[]).push([[1292],{72564:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>t,toc:()=>p});var s=r(11527),i=r(88672);const a={},o=void 0,t={id:"Spring\u5168\u5bb6\u6876/Spring/\u7b2c\u4e00\u4e2aSpring\u5e94\u7528",title:"\u7b2c\u4e00\u4e2aSpring\u5e94\u7528",description:"\u6dfb\u52a0\u4f9d\u8d56",source:"@site/docs/Spring\u5168\u5bb6\u6876/Spring/\u7b2c\u4e00\u4e2aSpring\u5e94\u7528.md",sourceDirName:"Spring\u5168\u5bb6\u6876/Spring",slug:"/Spring\u5168\u5bb6\u6876/Spring/\u7b2c\u4e00\u4e2aSpring\u5e94\u7528",permalink:"/code-note-blog/docs/Spring\u5168\u5bb6\u6876/Spring/\u7b2c\u4e00\u4e2aSpring\u5e94\u7528",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Spring\u5168\u5bb6\u6876/Spring/\u7b2c\u4e00\u4e2aSpring\u5e94\u7528.md",tags:[],version:"current",frontMatter:{},sidebar:"spring",next:{title:"Spring\u6ce8\u89e3",permalink:"/code-note-blog/docs/Spring\u5168\u5bb6\u6876/Spring/Spring\u5e38\u89c1\u6ce8\u89e3"}},l={},p=[{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56",level:2},{value:"\u521b\u5efa Java \u7c7b",id:"\u521b\u5efa-java-\u7c7b",level:2},{value:"\u521b\u5efa\u914d\u7f6e\u6587\u4ef6",id:"\u521b\u5efa\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u8fd0\u884c\u7a0b\u5e8f",id:"\u8fd0\u884c\u7a0b\u5e8f",level:2}];function c(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6dfb\u52a0\u4f9d\u8d56",children:"\u6dfb\u52a0\u4f9d\u8d56"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u5148\u628a Spring \u57fa\u7840 Jar \u5305\u4ee5\u53ca Commons-loggin \u5bfc\u5165\u5230\u9879\u76ee\u4e2d\uff0c\u82e5\u540e\u7eed\u529f\u80fd\u589e\u52a0\uff0c\u5219\u6839\u636e\u9700\u8981\u518d\u5bfc\u5165 Spring \u7684\u5176\u4ed6 Jar\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"org.springframework.core-5.3.13.jar\norg.springframework.beans-5.3.13.jar\nspring-context-5.3.13.jar\nspring-expression-5.3.13.jar\ncommons.logging-1.2.jar\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5f53\u7136\u8fd9\u91cc\u6211\u4eec\u63a8\u8350\u4f7f\u7528maven\u7ba1\u7406\u4f9d\u8d56"}),"\n",(0,s.jsx)(e.h2,{id:"\u521b\u5efa-java-\u7c7b",children:"\u521b\u5efa Java \u7c7b"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 HelloSpring \u4e2d\u521b\u5efa net.biancheng.c \u5305\uff0c\u7136\u540e\u5728\u8fd9\u4e2a\u5305\u4e0b\u521b\u5efa HelloWorld.java \u548c MainApp.java \u7c7b\u3002"}),"\n",(0,s.jsx)(e.p,{children:"HelloWorld.java \u7c7b\u7684\u4ee3\u7801\u5982\u4e0b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'package net.biancheng.c;\npublic class HelloWorld {\n    private String message;\n    public void setMessage(String message) {\n        this.message = message;\n    }\n    public void getMessage() {\n        System.out.println("message : " + message);\n    }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"MainApp.java \u7c7b\u7684\u4ee3\u7801\u5982\u4e0b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'package net.biancheng.c;\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\n\n    public class MainApp {\n        public static void main(String[] args) {\n            ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");\n            HelloWorld obj = context.getBean("helloWorld",HelloWorld.class);\n            obj.getMessage();\n        }\n    }\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5173\u4e8e\u4ee5\u4e0a\u4ee3\u7801\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e24\u70b9\uff1a"}),"\n",(0,s.jsx)(e.p,{children:"\u521b\u5efa ApplicationContext \u5bf9\u8c61\u65f6\u4f7f\u7528\u4e86 ClassPathXmlApplicationContext \u7c7b\uff0c\u8fd9\u4e2a\u7c7b\u7528\u4e8e\u52a0\u8f7d Spring \u914d\u7f6e\u6587\u4ef6\u3001\u521b\u5efa\u548c\u521d\u59cb\u5316\u6240\u6709\u5bf9\u8c61\uff08Bean\uff09\u3002\nApplicationContext.getBean() \u65b9\u6cd5\u7528\u6765\u83b7\u53d6 Bean\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56de\u503c\u7c7b\u578b\u4e3a Object\uff0c\u901a\u8fc7\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u4e3a HelloWorld \u7684\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u8c03\u7528\u5176\u4e2d\u7684 getMessage() \u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u521b\u5efa\u914d\u7f6e\u6587\u4ef6",children:"\u521b\u5efa\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 src \u76ee\u5f55\u4e0b\uff0c\u521b\u5efa\u4e00\u4e2a Spring \u914d\u7f6e\u6587\u4ef6 Beans.xml\uff0c\u5185\u5bb9\u5982\u4e0b\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\nxmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\nxsi:schemaLocation="http://www.springframework.org/schema/beans\nhttp://www.springframework.org/schema/beans/spring-beans-3.0.xsd">\n    <bean id="helloWorld" class="net.biancheng.c.HelloWorld">\n        <property name="message" value="Hello World!" />\n    </bean>\n</beans>\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u4e5f\u53ef\u4ee5\u5c06\u8be5\u914d\u7f6e\u6587\u4ef6\u547d\u540d\u4e3a\u5176\u5b83\u6709\u6548\u7684\u540d\u79f0\uff0c\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8be5\u6587\u4ef6\u540d\u5fc5\u987b\u4e0e MainApp.java \u4e2d\u8bfb\u53d6\u7684\u914d\u7f6e\u6587\u4ef6\u540d\u79f0\u4e00\u81f4\u3002"}),"\n",(0,s.jsx)(e.p,{children:"Beans.xml \u7528\u4e8e\u7ed9\u4e0d\u540c\u7684 Bean \u5206\u914d\u552f\u4e00\u7684 ID\uff0c\u5e76\u7ed9\u76f8\u5e94\u7684 Bean \u5c5e\u6027\u8d4b\u503c\u3002\u4f8b\u5982\uff0c\u5728\u4ee5\u4e0a\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u4e0d\u5f71\u54cd\u5176\u5b83\u7c7b\u7684\u60c5\u51b5\u4e0b\uff0c\u7ed9 message \u53d8\u91cf\u8d4b\u503c\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd0\u884c\u7a0b\u5e8f",children:"\u8fd0\u884c\u7a0b\u5e8f"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd0\u884c MainApp.java\uff0cEclipse IDE \u63a7\u5236\u53f0\u4e2d\u663e\u793a\u4fe1\u606f\u5982\u4e0b\u3002\nmessage : Hello World!"}),"\n",(0,s.jsx)(e.p,{children:"\u81f3\u6b64\uff0c\u6211\u4eec\u5c31\u6210\u529f\u521b\u5efa\u4e86\u7b2c\u4e00\u4e2a Spring \u5e94\u7528\u7a0b\u5e8f\u3002"})]})}function g(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},88672:(n,e,r)=>{r.d(e,{Z:()=>t,a:()=>o});var s=r(50959);const i={},a=s.createContext(i);function o(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);