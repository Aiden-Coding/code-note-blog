# ���ٹ���SpringBootӦ��

����̳�������springboot�������㹻Ȩ����Ҳ�㹻�򵥡�

##  ��һ�� hello world ����

��������һ������ġ�Hello World�����κ���������������ӵ��Ķ˵㡣���������Ը�����������֣������Ը��Ѻõķ�ʽ��Ӧ��

## ��������Ҫ��

1�������������һ�����ֵ�IDE,����ѡ����� IntelliJ IDEA��Spring Tools��Visual Studio Code �� Eclipse �ȵȡ�

2��JDK�����ڰ汾�Ļ���8-17���ǲ�����ѡ��

3����Ȼ���ﻹ��Ҫ����maven��pom��������������Ҳ��Ҫmaven��maven�����idea�Դ��ˡ����ǻ��ڽ������Ĳ��ֽ��н��ܣ���Ҫ������Щ����

## ��һ��������һ���µ�Spring Boot��Ŀ

ʹ��[start.spring.io](http://start.spring.io/)����һ����web����Ŀ���ڡ�dependencies���Ի��������������ӡ�web�����������Ļ��ͼ��ʾ��

��������ɡ���ť������ zip �ļ����������ѹ����������ϵ�һ���ļ����С�

![Start.spring.io ��������](https://java-tutorial.oss-cn-shanghai.aliyuncs.com/quickstart-1.png)

[start.spring.io](http://start.spring.io/)��������Ŀ����[Spring Boot](https://spring.io/projects/spring-boot)��һ����Spring׼����������Ӧ�ó����ڲ�������������Ҫ̫���������á� Spring Boot ������ Spring ��Ŀ�����������еķ�ʽ��

��������ѡ��ʹ��maven��Ϊ���������ߣ�������������Ŀ������pom�ļ���pom�ļ��������������ӵ�������

```  
<?xml version="1.0" encoding="UTF-8"?>  
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
   xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">   <modelVersion>4.0.0</modelVersion>   <parent>      <groupId>org.springframework.boot</groupId>      <artifactId>spring-boot-starter-parent</artifactId>      <version>3.0.5</version>      <relativePath/> <!-- lookup parent from repository -->   </parent>   <groupId>com.example</groupId>   <artifactId>demo</artifactId>   <version>0.0.1-SNAPSHOT</version>   <name>demo</name>   <description>Demo project for Spring Boot</description>   <properties>      <java.version>17</java.version>   </properties>   <dependencies>      <dependency>         <groupId>org.springframework.boot</groupId>         <artifactId>spring-boot-starter-web</artifactId>      </dependency>  
      <dependency>         <groupId>org.springframework.boot</groupId>         <artifactId>spring-boot-starter-test</artifactId>         <scope>test</scope>      </dependency>   </dependencies>  
   <build>      <plugins>         <plugin>            <groupId>org.springframework.boot</groupId>            <artifactId>spring-boot-maven-plugin</artifactId>         </plugin>      </plugins>   </build>  
</project>  
```  


## �ڶ�����������Ĵ���

������ IDE �д���Ŀ���� `src/main/java/com/example/demo` �ļ������ҵ� `DemoApplication.java` �ļ���

����ͨ�����������������ʾ�Ķ��ⷽ����ע���������ļ������ݡ������Ը��Ʋ�ճ�������ֱ�Ӽ�����롣
```  
package com.example.demo;  
import org.springframework.boot.SpringApplication;  
import org.springframework.boot.autoconfigure.SpringBootApplication;  
import org.springframework.web.bind.annotation.GetMapping;  
import org.springframework.web.bind.annotation.RequestParam;  
import org.springframework.web.bind.annotation.RestController;  
  
@SpringBootApplication  
@RestController  
public class DemoApplication {  
    public static void main(String[] args) {      SpringApplication.run(DemoApplication.class, args);    }    @GetMapping("/hello")    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {      return String.format("Hello %s!", name);    }}  
  
```  

������ Spring Boot �д���һ���򵥵ġ�Hello World�� Web ������������д��롣

�������ӵ�`hello()`����ּ�ڻ�ȡһ����Ϊname��String������Ȼ�󽫴˲���������еĵ���`"Hello"`���������

����ζ��������������н�������������Ϊ��Amy��������Ӧ���ǡ�Hello Amy����

`@RestController` ע�͸��� Spring���˴���������һ���˵㣬�ö˵�Ӧ�� Web �Ͽ��á�   
@GetMapping(��/hello��) ���� Spring ʹ�����ǵ� hello() ��������Ӧ���͵� http://localhost:8080/hello ��ַ������

���@RequestParam ���� Spring ������������һ������ֵ������������ڣ�����Ĭ��ʹ�õ��ʡ�World����

## ������������

�����ǹ��������г��򡣴������У����նˣ�����������ӵ����Ŀ�ļ����ļ��С�

���ǿ���ͨ��������������������������Ӧ�ó���

**MacOS/Linux:**

```  
COPY./gradlew bootRun  
  
```  

**Windows:**

```  
COPY.\gradlew.bat bootRun  
  
```  

��Ӧ�ûῴ��һЩ��˷ǳ����Ƶ������  
![Quick Start On Start.spring.io](https://java-tutorial.oss-cn-shanghai.aliyuncs.com/quickstart-2.png)

���������и������ǣ�SpringӦ���Ѿ���ʼ�����ˡ� Spring Boot ��Ƕ��ʽ Apache Tomcat �������䵱����������������ڼ�����localhost���˿ڡ�8080���ϵ�����

����������ڶ����ĵ�ַ��������`http://localhost:8080/hello`��

��Ӧ�õõ�����һ���ѺõĻ�Ӧ��  
![Quick Start On Start.spring.io](https://java-tutorial.oss-cn-shanghai.aliyuncs.com/quickstart-3.png)

# �ܽ�
������˼򵥣���һ��SpringBootӦ�þ���ô��������ˣ��㲻��Ҫ����������ļ�������������������Ƕ���ķ�������  
ֻ��Ҫһ�������࣬�Ϳ���ʵ��һ���������SpringBoot��Ӧ�á�

��Ҳ��Ϊʲôspringboot�����������ٹ���һ��΢������Ϊ��ʵ����̫�����ˡ�  
��Ȼ��ʵ�ʿ�����������Ҫ�õ�����springboot�Ĺ��ܺ����ԣ����ǽ����ڽ��������½�����չ�����ܡ�

# �ο�����
https://spring.io/quickstart