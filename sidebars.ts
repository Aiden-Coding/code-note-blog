import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
  java: [
    {
      type: "category",
      label: "基础",
      items: [
        "Java/basic/抽象类和接口",
        "Java/basic/序列化和反序列化",
        "Java/basic/代码块和代码执行顺序",
        "Java/basic/多线程",
        "Java/basic/反射",
        "Java/basic/泛型",
        "Java/basic/继承、封装、多态的实现原理",
        "Java/basic/解读Java中的回调",
        "Java/basic/枚举类",
        "Java/basic/面向对象基础",
        "Java/basic/深入理解内部类",
        "Java/basic/final关键字特性",
        "Java/basic/Java8新特性终极指南",
        "Java/basic/Java基本数据类型",
        "Java/basic/Java集合框架梳理",
        "Java/basic/Java类和包",
        "Java/basic/Java异常",
        "Java/basic/Java中的Class类和Object类",
        "Java/basic/Java注解和最佳实践",
        "Java/basic/Java自动拆箱装箱里隐藏的秘密",
        "Java/basic/javac和javap",
        "Java/basic/JavaIO流",
        "Java/basic/string和包装类",
      ],
    },
    {
      type: "category",
      label: "集合",
      items: [
        "Java/collection/Java集合类总结",
        "Java/collection/Java集合详解：深入理解LinkedHashMap和LRU缓存",
        "Java/collection/Java集合详解：一文读懂ArrayList,Vector与Stack使用方法和实现原理",
        "Java/collection/Java集合详解：HashMap和HashTable",
        "Java/collection/Java集合详解：HashSet，TreeSet与LinkedHashSet",
        "Java/collection/Java集合详解：Iterator，fail-fast机制与比较器",
        "Java/collection/Java集合详解：Java集合类细节精讲",
        "Java/collection/Java集合详解：Queue和LinkedList",
        "Java/collection/Java集合详解：TreeMap和红黑树",
      ],
    },
    {
      type: "category",
      label: "并发",
      items: [
        "Java/concurrency/Java并发编程学习总结",
        "Java/concurrency/Java并发指南：并发基础与Java多线程",
        "Java/concurrency/Java并发指南：并发三大问题与volatile关键字，CAS操作",
        "Java/concurrency/Java并发指南：解读Java阻塞队列BlockingQueue",
        "Java/concurrency/Java并发指南：深度解读Java线程池设计思想及源码实现",
        "Java/concurrency/Java并发指南：深入理解Java内存模型JMM",
        "Java/concurrency/Java并发指南：AQS共享模式与并发工具类的实现",
        "Java/concurrency/Java并发指南：AQS中的公平锁与非公平锁，Condtion",
        "Java/concurrency/Java并发指南：ForkJoin并发框架与工作窃取算法剖析",
        "Java/concurrency/Java并发指南：Java读写锁ReentrantReadWriteLock源码分析",
        "Java/concurrency/Java并发指南：Java内存模型JMM总结",
        "Java/concurrency/Java并发指南：Java中的锁Lock和synchronized",
        "Java/concurrency/Java并发指南：Java中的HashMap和ConcurrentHashMap全解析",
        "Java/concurrency/Java并发指南：JMM中的final关键字解析",
        "Java/concurrency/Java并发指南：JUC的核心类AQS详解",
        "Java/concurrency/Java并发指南：JUC中常用的Unsafe和Locksupport",
      ],
    },
    {
      type: "category",
      label: "设计模式",
      items: [
        "Java/design-parttern/初探Java设计模式：创建型模式（工厂，单例等）",
        "Java/design-parttern/初探Java设计模式：结构型模式（代理模式，适配器模式等）",
        "Java/design-parttern/初探Java设计模式：行为型模式（策略，观察者等）",
        "Java/design-parttern/初探Java设计模式：JDK中的设计模式",
        "Java/design-parttern/初探Java设计模式：Spring涉及到的种设计模式",
        "Java/design-parttern/设计模式学习总结",
      ],
    },
    {
      type: "category",
      label: "jvm",
      items: [
        "Java/JVM/深入理解JVM虚拟机：垃圾回收器详解",
        "Java/JVM/深入理解JVM虚拟机：深入理解JVM类加载机制",
        "Java/JVM/深入理解JVM虚拟机：虚拟机字节码执行引擎",
        "Java/JVM/深入理解JVM虚拟机：再谈四种引用及GC实践",
        "Java/JVM/深入理解JVM虚拟机：GC调优思路与常用工具",
        "Java/JVM/深入理解JVM虚拟机：Java的编译期优化与运行期优化",
        "Java/JVM/深入理解JVM虚拟机：Java内存异常原理与实践",
        "Java/JVM/深入理解JVM虚拟机：Java字节码介绍与解析实践",
        "Java/JVM/深入理解JVM虚拟机：JNDI，OSGI，Tomcat类加载器实现",
        "Java/JVM/深入理解JVM虚拟机：JVM常用参数以及调优实践",
        "Java/JVM/深入理解JVM虚拟机：JVM监控工具与诊断实践",
        "Java/JVM/深入理解JVM虚拟机：JVM垃圾回收基本原理和算法",
        "Java/JVM/深入理解JVM虚拟机：JVM内存的结构与消失的永久代",
        "Java/JVM/深入理解JVM虚拟机：JVM性能管理神器VisualVM介绍与实战",
        "Java/JVM/JVM总结",
      ],
    },
    {
      type: "category",
      label: "网络",
      items: [
        "Java/network/Java网络编程与NIO详解：基于NIO的网络编程框架Netty",
        "Java/network/Java网络编程与NIO详解：浅谈Linux中Selector的实现原理",
        "Java/network/Java网络编程与NIO详解：浅析mmap和DirectBuffer",
        "Java/network/Java网络编程与NIO详解：浅析NIO包中的Buffer、Channel和Selector",
        "Java/network/Java网络编程与NIO详解：深度解读Tomcat中的NIO模型",
        "Java/network/Java网络编程与NIO详解：IO模型与Java网络编程模型",
        "Java/network/Java网络编程与NIO详解：Java非阻塞IO和异步IO",
        "Java/network/Java网络编程与NIO详解：JAVA中原生的socket通信机制",
        "Java/network/Java网络编程与NIO详解：JavaNIO一步步构建IO多路复用的请求模型",
        "Java/network/Java网络编程与NIO详解：LinuxEpoll实现原理详解",
        "Java/network/Java网络编程与NIO详解：Tomcat中的Connector源码分析（NIO）",
        "Java/network/Java网络与NIO总结",
      ],
    },
  ],
  javaweb: [
    "JavaWeb/走进JavaWeb技术世界：JavaWeb的由来和基础知识",
    "JavaWeb/走进JavaWeb技术世界：初探Tomcat9的HTTP请求过程",
    "JavaWeb/走进JavaWeb技术世界：从手动编译打包到项目构建工具Maven",
    "JavaWeb/走进JavaWeb技术世界：从JavaBean讲到Spring",
    "JavaWeb/走进JavaWeb技术世界：单元测试框架Junit",
    "JavaWeb/走进JavaWeb技术世界：极简配置的SpringBoot",
    "JavaWeb/走进JavaWeb技术世界：浅析Tomcat请求处理流程与启动部署过程",
    "JavaWeb/走进JavaWeb技术世界：深入浅出Mybatis基本原理",
    "JavaWeb/走进JavaWeb技术世界：Hibernate入门经典与注解式开发",
    "JavaWeb/走进JavaWeb技术世界：Java日志系统的诞生与发展",
    "JavaWeb/走进JavaWeb技术世界：JDBC的进化与连接池技术",
    "JavaWeb/走进JavaWeb技术世界：JSP与Servlet的曾经与现在",
    "JavaWeb/走进JavaWeb技术世界：Mybatis入门",
    "JavaWeb/走进JavaWeb技术世界：Servlet工作原理详解",
    "JavaWeb/走进JavaWeb技术世界：Tomcat5总体架构剖析",
    "JavaWeb/走进JavaWeb技术世界：Tomcat和其他WEB容器的区别",
    "JavaWeb/JavaWeb技术总结",
  ],
  backend: [
    "backend/后端技术杂谈：白话虚拟化技术",
    "backend/后端技术杂谈：捋一捋大数据研发的基本概念",
    "backend/后端技术杂谈：十分钟理解Kubernetes核心概念",
    "backend/后端技术杂谈：搜索引擎工作原理",
    "backend/后端技术杂谈：搜索引擎基础倒排索引",
    "backend/后端技术杂谈：先搞懂Docker核心概念吧",
    "backend/后端技术杂谈：云计算的前世今生",
    "backend/后端技术杂谈：Docker 核心技术与实现原理",
    "backend/后端技术杂谈：Elasticsearch与solr入门实践",
    "backend/后端技术杂谈：Lucene基础原理与实践",
    "backend/后端技术杂谈：OpenStack的基石KVM",
    "backend/后端技术杂谈：OpenStack架构设计",
    "backend/后端技术杂谈开篇：云计算，大数据与AI的故事",
    "backend/Hadoop生态总结",
  ],
  cache: [
    "cache/探索Redis设计与实现：连接底层与表面的数据结构robj",
    "cache/探索Redis设计与实现：浅析Redis主从复制",
    "cache/探索Redis设计与实现：使用快照和AOF将Redis数据持久化到硬盘中",
    "cache/探索Redis设计与实现：数据库redisDb与键过期删除策略",
    "cache/探索Redis设计与实现：Redis 的基础数据结构概览",
    "cache/探索Redis设计与实现：Redis的事件驱动模型与命令执行过程",
    "cache/探索Redis设计与实现：Redis分布式锁进化史",
    "cache/探索Redis设计与实现：Redis集群机制及一个Redis架构演进实例",
    "cache/探索Redis设计与实现：Redis内部数据结构详解——dict",
    "cache/探索Redis设计与实现：Redis内部数据结构详解——intset",
    "cache/探索Redis设计与实现：Redis内部数据结构详解——quicklist",
    "cache/探索Redis设计与实现：Redis内部数据结构详解——sds",
    "cache/探索Redis设计与实现：Redis内部数据结构详解——skiplist",
    "cache/探索Redis设计与实现：Redis内部数据结构详解——ziplist",
    "cache/探索Redis设计与实现：Redis事务浅析与ACID特性介绍",
    "cache/探索Redis设计与实现开篇：什么是Redis",
    "cache/Redis原理与实践总结",
  ],
  cs: [
    {
      type: "category",
      label: "算法",
      items: ["cs/algorithms/剑指offer"],
    },
    {
      type: "category",
      label: "网络",
      items: ["cs/network/计算机网络学习总结"],
    },
    {
      type: "category",
      label: "网络",
      items: [
        "cs/operating-system/操作系统学习总结",
        "cs/operating-system/Linux内核与基础命令学习总结",
      ],
    },
  ],
  database: [
    "database/重新学习MySQL数据库：『浅入浅出』MySQL和InnoDB",
    "database/重新学习MySQL数据库：从实践sql语句优化开始",
    "database/重新学习MySQL数据库：根据MySQL索引原理进行分析与优化",
    "database/重新学习MySQL数据库：浅谈MySQL的中事务与锁",
    "database/重新学习MySQL数据库：无废话MySQL入门",
    "database/重新学习MySQL数据库：详解MyIsam与InnoDB引擎的锁实现",
    "database/重新学习MySQL数据库：以Java的视角来聊聊SQL注入",
    "database/重新学习MySQL数据库：Innodb中的事务隔离级别和锁的关系",
    "database/重新学习MySQL数据库：Mysql存储引擎与数据存储原理",
    "database/重新学习MySQL数据库：MySQL的事务隔离级别实战",
    "database/重新学习MySQL数据库：MySQL里的那些日志们",
    "database/重新学习MySQL数据库：Mysql索引实现原理和相关数据结构算法",
    "database/重新学习MySQL数据库：Mysql主从复制，读写分离，分表分库策略与实践",
    "database/Mysql原理与实践总结",
  ],
  distributed: [
    {
      type: "category",
      label: "基础",
      items: [
        "distributed/basic/分布式系统理论基础 ：CAP",
        "distributed/basic/分布式系统理论基础： 时间、时钟和事件顺序",
        "distributed/basic/分布式系统理论基础： 一致性、PC和PC",
        "distributed/basic/分布式系统理论基础：选举、多数派和租约",
        "distributed/basic/分布式系统理论基础：Paxos",
        "distributed/basic/分布式系统理论基础：Raft、Zab",
        "distributed/basic/分布式系统理论基础：zookeeper分布式协调服务",
        "distributed/basic/分布式系统理论进阶：Paxos变种和优化",
      ],
    },
    {
      type: "category",
      label: "案例",
      items: [
        "distributed/practice/搞懂分布式技术：分布式session解决方案与一致性hash",
        "distributed/practice/搞懂分布式技术：初探分布式协调服务zookeeper",
        "distributed/practice/搞懂分布式技术：分布式事务常用解决方案",
        "distributed/practice/搞懂分布式技术：分布式系统的一些基本概念",
        "distributed/practice/搞懂分布式技术：分布式一致性协议与Paxos，Raft算法",
        "distributed/practice/搞懂分布式技术：分布式ID生成方案",
        "distributed/practice/搞懂分布式技术：缓存的那些事",
        "distributed/practice/搞懂分布式技术：缓存更新的套路",
        "distributed/practice/搞懂分布式技术：浅谈分布式锁的几种方案",
        "distributed/practice/搞懂分布式技术：浅谈分布式消息技术Kafka",
        "distributed/practice/搞懂分布式技术：浅析分布式事务",
        "distributed/practice/搞懂分布式技术：使用RocketMQ事务消息解决分布式事务",
        "distributed/practice/搞懂分布式技术：消息队列因何而生",
        "distributed/practice/搞懂分布式技术：LVS实现负载均衡的原理与实践",
        "distributed/practice/搞懂分布式技术：SpringBoot使用注解集成Redis缓存",
        "distributed/practice/搞懂分布式技术：ZAB协议概述与选主流程详解",
        "distributed/practice/搞懂分布式技术：Zookeeper的配置与集群管理实战",
        "distributed/practice/搞懂分布式技术：Zookeeper典型应用场景及实践",
      ],
    },
    "distributed/分布式技术实践总结",
    "distributed/分布式理论总结",
  ],
  mianshi: [
    "mianshi/collection",
    "mianshi/fenbushi",
    "mianshi/javabasic",
    "mianshi/javase",
    "mianshi/javathread",
    "mianshi/jvm",
    "mianshi/mybatis",
    "mianshi/mysql",
    "mianshi/network",
    "mianshi/nixi",
    "mianshi/os",
    "mianshi/redis",
    "mianshi/rocketmq",
    "mianshi/spring",
    "mianshi/weifuwu",
    {
      type: "category",
      label: "b",
      items: ["test/b"],
    },
  ],
};

export default sidebars;
