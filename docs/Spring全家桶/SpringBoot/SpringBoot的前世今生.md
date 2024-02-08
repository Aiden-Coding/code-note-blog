# SpringBoot��ǰ������

Spring Boot 2.0 ���Ƴ��ּ�����һ��ѧϰ Spring Boot �ȣ��͵����Ҹ��˵Ĳ��͵ķ�����������ӾͿ��Ը��ܵ���Ҷ�ѧϰ Spring Boot �����飬��ô����ô����������ѧϰ Spring Boot ֮ʱ�����Լ�Ҳ��˼���� Spring Boot �����ı�����ʲô��Spring ��ҵ���ǻ���ʲô���Ŀ��Ǵ��� Spring Boot? ��ͳ��ҵʹ�� Spring Boot ������Ǵ���ʲô�����?

������Щ���⣬����һ�����˽��� Spring Boot ������ʲô?

## Spring ��ʷ

˵�� Spring Boot ���ǲ��ò����˽�һ�� Spring �����ҵ��������Ϊ Spring Boot ��Դ�� Spirng ����壬���� Spring Boot �ĵ����� Sping ��ܵķ�չϢϢ��ء�

ʱ��ص�2002�꣬��ʱ���� Java EE �� EJB ���������ʱ�򣬺ܶ�֪����˾���ǲ��ô˼�������������Ŀ��������ʱ����һ��������С������Ϊ EJB ̫��ӷ�ף����������е���Ŀ����Ҫʹ�� EJB ���ִ��Ϳ�ܣ�Ӧ�û���һ�ָ��õķ��������������⡣

Ϊ��֤�������뷨����ȷ�ģ���2002��10������д��һ���顶 Expert One-on-One J2EE ���������˵�ʱ Java ��ҵӦ�ó��򿪷����������ָ���� Java EE �� EJB �������д��ڵ�һЩ��Ҫȱ�ݡ����Ȿ���У��������һ��������ͨ Java �������ע��ĸ��򵥵Ľ��������

�����У���չʾ������ڲ�ʹ�� EJB ������¹���������������չ��������λԤ��ϵͳ��Ϊ�˹���Ӧ�ó�������д�˳��� 30,000 �еĻ����ṹ���룬��Ŀ�еĸ�������Ϊ com.interface21������������������׿�Դ���Ϊ interface21��Ҳ���� Spring ��ǰ����

����˭�أ������Ǵ��������� Rod Johnson ����ͼ��, Rod Johnson ��Ϥ���ѧ��������˼����ѧλ��ͬʱ�����������ѧλ�������˳Ծ������ڻص�������������֮ǰ���������������ѧ�Ĳ�ʿѧλ������ Rod Johnson �Ѿ��뿪�� Spring ����Ϊ��һ����ʹͶ���ˣ�ͬʱҲ�Ƕ����˾�Ķ��£��������������۷塣

![](https://java-tutorial.oss-cn-shanghai.aliyuncs.com/springboot-hot.png)

���Ȿ�鷢����һ��һ�� J2EE ��ƺͿ���һ�ڶ��졣�Ȿ������ṩ�Ĵ󲿷ֻ����ܹ����붼�Ǹ߶ȿ����õġ� 2003 �� Rod Johnson ��ͬ���ڴ˿�ܵĻ����Ͽ�����һ��ȫ�µĿ������Ϊ Spring ,�� Rod Johnson ���� Spring �Ǵ�ͳ J2EE �µĿ�ʼ����� Spring ��չ����쳵����

*   2004 �� 03 �£�1.0 �淢����
*   2006 �� 10 �£�2.0 �淢����
*   2007 �� 11 �¸���Ϊ SpringSource��ͬʱ������ Spring 2.5��
*   2009 �� 12 �£�Spring 3.0 ������
*   2013 �� 12 �£�Pivotal �������� Spring ��� 4.0��
*   2017 �� 09 �£�Spring 5.0 ������

## Spring Boot �ĵ���

����ʹ�� Spring ���п����ĸ��˺���ҵԽ��Խ�࣬Spring Ҳ������һ����һ����С��ܱ��һ�����ȫ�Ŀ�Դ������Spring �ı߽粻�ϵĽ������䣬���˺��� Spring �����������κ������ˣ������������Ŀ�Դ�������м������ Spring ��Ӧ���֧�֣����������� Spring �����ֱ���֮��Ҳ������һЩ���⡣

Spring ÿ����һ����Դ����������Ҫ����һЩ�������ã��������������ǿ�������ĿԽ��Խ�Ӵ�������Ҫ���ɺܶ࿪Դ��������˺���ʹ�� Spirng ����������Ŀ��Ҫ����ܶ������ļ���̫������÷ǳ��������⣬���������ó��������˺������������� Spring Ϊ���õ�����

Spring �ƺ�Ҳ��ʶ������Щ���⣬��������ôһ���������Խ����Щ���⣬���ʱ��΢����ĸ���Ҳ�������𣬿��ٿ���΢С������Ӧ�ñ�ø�Ϊ���ȣ�Spring �պô�����ôһ��������ϣ��� 2013 �����ʼ�� Spring Boot ��Ŀ���з���2014��4�£�Spring Boot 1.0.0 ������

Spring Boot ����֮�������ܵ���Դ�����ĳ�����ע��½����һЩ���˺���ҵ������ʹ���� Spring Boot����Ѹ��ϲ��������Դ������ֱ��2016�꣬�ڹ��� Spring Boot �ű�����ʹ�����������ڼ�ܶ��о� Spring Boot �Ŀ�����������д�˴������� Spring Boot �����£�ͬʱ��һЩ��˾����ҵ�ڲ�������С��ģ��ʹ�ã�����ʹ�þ�������˳�������2016�굽2018�꣬ʹ�� Spring Boot ����ҵ�͸��˿�����Խ��Խ�࣬���Ǵ� Spring Boot �ؼ��ֵİٶ�ָ���Ϳ��Կ�����

![](https://java-tutorial.oss-cn-shanghai.aliyuncs.com/springboot-hot.png)

��ͼΪ2014�굽2018�� Spring Boot �İٶ�ָ�������Կ��� Spring Boot 2.0 ���Ƴ������������߷塣

��Ȼ Spring Boot ����Ϊ��ȡ�� Spring ,Spring Boot ���� Spring ��������Ϊ�������Ǹ����׵�ʹ�� Spring������ Spring Boot ���г���Ӧ��Spring �ٷ�Ҳ�ǳ����� Spring Boot �ĺ�����չ���Ѿ��� Spring Boot ��Ϊ��˾�������Ŀ���ƹ㣬�ŵ��˹����ϵ�һ��λ�ã���˺��� Spring Boot �ĳ�����չҲ�����á�

# ��������

![](https://java-tutorial.oss-cn-shanghai.aliyuncs.com/20230415111020.png)

����spring��������springboot�Ļ�������

Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".

We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need minimal Spring configuration.

�����֮�������ڸ������ǣ�springboot���԰������ǿ��ٹ������������������Ӧ��

��ֻ��Ҫһ������@SpringBootApplication ע���Ӧ����ڣ����ɱ�ʶ��Ϊһ��springbootӦ��

���ң�springboot�̳��˴����ĵ������⣬���ǽ��������������ȫ����Ҫ��������ã��Ϳ��Խ���Ӧ�ô����Ϊspringboot��ܱ����Ѿ����������ú��˴�����Ĭ�����á�

# ��������

Features

*   Create stand-alone Spring applications
*   Embed Tomcat, Jetty or Undertow directly (no need to deploy WAR files)
*   Provide opinionated 'starter' dependencies to simplify your build configuration
*   Automatically configure Spring and 3rd party libraries whenever possible
*   Provide production-ready features such as metrics, health checks, and externalized configuration
*   Absolutely no code generation and no requirement for XML configuration

�ٷ�����springboot�������Ե���������

1������һ�����������springӦ�ã��������ڶ���΢���񣬻�����һ��webӦ��

2�����õ�tomcat������������Ҳ��Ҫ��springӦ�ô����war��������ֻ��Ҫ��������jar�����в��𼴿ɡ�

3���ṩstarter���������Ӽ���springboot��̬�е����������ã����統����ʹ��springweb�������ʱ�����ǲ���Ҫ���������Ӷ��springmvc��ص�maven����������ֱ������spring-boot-starter-web�Ϳ����ˣ����starter���Զ�������ص����������Ұ�������汾�ţ�������ؼ򻯺��Ż����maven����

4���Զ�װ��spring�͵������⣬������Ҫ��ָͨ��ע��������ļ������Զ�װ�䣬���һ���һЩ�ǻ���Լ�����Զ�װ����ƣ�����԰����ǽ�ʡ�����Ķ������ã�Ҳ�����Զ�װ���ⲿjar���ṩ��spring���bean�����á�

5���ṩ������������ص����ԣ������ء�ָ���㡢�������ȹ��ܣ�springboot�ṩ��ǿ�����̬��������ﲻ������springboot�Լ��������Ҳ����һЩ�ⲿ����̬�����

6���������ڴ������ɣ�Ҳ����Ҫxml�����ļ�����֤����springboot�Ŀ�������ȣ��Լ��������ü򻯵ļ���׷�����ǽ���Ҫapplication.properties���л������ò�����������Ҳ������springboot�������ҵ���̬���ɵĶ���class�ļ���

# ��Spring�Ĺ�ϵ

![](https://java-tutorial.oss-cn-shanghai.aliyuncs.com/20230415111139.png)

## SpringFramework�����ʲô���⣿

Spring��Java��ҵ�棨Java Enterprise Edition��JEE��Ҳ��J2EE��������������Ʒ�����迪����������EnterpriseJavaBean��EJB����SpringΪ��ҵ��Java�����ṩ��һ����Լ򵥵ķ�����ͨ������ע������������̣��ü򵥵�Java����Plain Old Java Object��POJO��ʵ����EJB�Ĺ��ܡ�

1.ʹ��Spring��IOC����,������֮���������ϵ����Spring,�������֮��������,�����Ǹ�רע��Ӧ���߼�

2.�����ṩ�ڶ����,�������,WS�ȡ�

3.�ܺõ�֧��AOP,�������������̡�

4.�������Ŀ���ṩ�˺ܺõļ���֧��,��Hibernate,Struts2,JPA��

5.Spring DI���ƽ�����ҵ������滻�ĸ����ԡ�

6.Spring���ڵ�����,������Ⱦ���͡�

7.Spring�ĸ߶ȿɿ�����,����ǿ��������Spring,�����߿�������ѡ��Spring���ֻ�ȫ��

## SpringFrameworkû�н����ʲô���⣿

��ȻSpring������������������ģ�����������ȴ���������ġ�һ��ʼ��Spring��XML���ã������Ǻܶ�XML���á�Spring 2.5�����˻���ע������ɨ�裬�������˴������Ӧ�ó��������������ʽXML���á�Spring 3.0�����˻���Java�����ã�����һ�����Ͱ�ȫ�Ŀ��ع����÷�ʽ�����Դ���XML��

������Щ���ö������˿���ʱ����ġ���Ϊ��˼��Spring�������úͽ��ҵ������֮����Ҫ����˼ά�л������Ա�д���ü�ռ�˱�дӦ�ó����߼���ʱ�䡣�����п��һ����Springʵ�ã������ͬʱ��Ҫ��Ļر�Ҳ���١�

����֮�⣬��Ŀ����������Ҳ��һ����ʱ���������顣�ڻ����ʱ����Ҫ����Ҫ������Щ������꣬���һ���Ҫ����������֮��������ϵ������������꣬һ��ѡ���������İ汾����֮�����Ĳ���������ͻ������谭��Ŀ�Ŀ������ȡ�

## SpringBoot�������Spring��ȱ��

SpringBoot������Spring��ȱ����еĸ��ƺ��Ż�������Լ���������õ�˼�룬�����ÿ�����Ա�������������߼�ҵ��֮�����˼ά���л���ȫ���ĵ�Ͷ�뵽�߼�ҵ��Ĵ����д�У��Ӷ��������˿�����Ч�ʣ�һ���̶�����������Ŀ���ڡ�

��ʹ��Spring��ܽ��п����Ĺ����У���Ҫ���úܶ�Spring��ܰ�����������spring-core��spring-bean��spring-context�ȣ�����Щ����ͨ�������ظ����ӵģ�������Ҫ���ܶ���ʹ�ü������������ظ����ã��翪��ע�⡢������־�ȡ�Spring Boot������������Щ����Ҫ�Ĳ������ṩĬ�����ã���Ȼ��ЩĬ�������ǿ��԰����޸ĵģ����ٴ������������SpringӦ��

# ��SpringMVC�Ĺ�ϵ

![](https://java-tutorial.oss-cn-shanghai.aliyuncs.com/20230415111153.png)

Spring Boot��Spring Bootʹ���������Ϳ�ʼ��������Spring��Ӧ�ó��������ס� �������˺ܶ�������롣 ����Ļ�������˺ܶิ���ԣ���˿�����Ա���Կ������ֲ����ɿ�������Spring��Ӧ�ó���

Spring MVC��Spring MVC�����ڹ���WebӦ�ó����Web MVC��ܡ� �������������ڸ��ֹ��ܵ������ļ��� ����һ������HTTP��WebӦ�ó��򿪷���ܡ�



Spring Boot��Spring MVC���ڲ�ͬ��Ŀ�Ķ����ڡ� ����������Spring Boot��Spring MVC֮�����Ҫ����



| Spring Boot | Spring MVC |
| --- | --- |
| Spring Boot����ʹ�ú�����Ĭ��ֵ�������Spring��Ӧ�ó��� | Spring MVC��Spring����»���ģ����ͼ��������Web��ܡ� |
| ���ṩ��Ĭ������������Spring֧�ֵĿ�ܡ� | ���ṩ�����ڹ���WebӦ�ó���ļ����͹��ܡ� |
| �����ֶ��������á� | ����Ҫ�ֶ����й������á� |
| ����Ҫ������������ | �����������Ǳ���ġ� |
| ��������������룬�����������װ��һ����Ԫ�С� | ���ֱ�ָ��ÿ������� |
| �������˿���ʱ�䲢����������ʡ� | ʵ����ͬĿ����Ҫ����ʱ�䡣 |

# ��΢����SpringCloud�Ĺ�ϵ

Spring Boot��Spring����ĳ�Ա������һ��ȫ�µĿ�ܣ��������Ŀ���Ǿ����ܼ򵥺Ϳ��ٵĿ���������SpringӦ�ó��򣬼����á���Ϊ�����߿�ݵ�ʹ��Spring����ؿ�������ṩ�˱�����������������΢����Ŀ�ܣ���ֻ��Ϊ΢�����ܵ�ʹ��Ҳ�ṩ�˺ܺõĽ��ּܡ�

![](https://java-tutorial.oss-cn-shanghai.aliyuncs.com/20230415111929.png)

![](https://java-tutorial.oss-cn-shanghai.aliyuncs.com/20230415111950.png)
��������ͼ���������ߵĻ�������springboot���ڹ�����������Ӧ�ã�Ҳ�������ǳ�˵��΢����

��springcloud���ڷ���������Ҳ���Ǵ�����������Э�����΢����springbootӦ�ó���

springcloud�а������ڶ����������ص����������API����Springcloud Gateway�������������Config Serever����·��Circuit Breaker������ע������Service Registty��������Sleuth��

# ʹ��Springboot��8��ԭ��

## ����Ŀ���

Spring Boot �� Spring ��̬ϵͳ�������˺ܶ�����͹�ִ������Ĭ�����á� �������������ڿ�����Ա�������ò�Ͷ�뿪����

���磬Spring MVC ����ͨ������ XML bean ������Զ��� servlet ��ʵ�֡� ����ʹ�� Spring Boot������������������������һ���򵥡� ���Բ���Ҫ�������� XML ���á�

## һ�н����Ȼ�

Spring Boot Starters �ǰ���������ǵ�һЩ�Զ����õ� Maven �������� ���ң���Щ������������Ϊ Spring Boot Ӧ�ó����ṩ���ܡ� ��Ҫ�������ݿ����ӣ� ��һ������������� ������Ϣ����ͨ�����͵����ʼ��� Spring Boot ��������һ�С�

���ڼ������е� Spring ģ�飬����һ�����������������Ϊ�������������ݡ� ����һЩ��������Ҳͨ�����ǵ�����ģ���ṩ�� Spring ��֧�֡� ���û����Щ������������Ϊ������Ա�����ò�ά��������� XML ���á� ������Ӧ��ʹ�� Spring Boot ����һ��ԭ��

## Ƕ��ʽ������

Spring Boot ΪǶ��ʽ Tomcat��Jetty �� Undertow �������ṩ���伴�õ�֧�֡� ������������Ա�Ͳ��ص����ڴ�ͳӦ�÷������в��� Web Ӧ�ó��� ͨ���ʵ�����������������������Խ�һ�ַ������������������������������� ������ʵ�������յõ���һ���������κ� JAR һ�����е� JAR �ļ��� ������ʱ��JAR �����㹻�Ŀ����������ΪӦ�ó����������������������

�������Ƕ��ʽ������������Ȥ����������ʱ�� Spring Boot Ӧ�ó���� JAR ת��Ϊ WAR���������ǲ��𵽴�ͳ��������

## IDE �� Spring Boot ��֧��

������Ҫ�� IDE ���ṩ�� Spring Boot ���������֧�֡� ���磬IntelliJ IDEA Ultimate Ϊ Spring Boot ��Ŀ�ṩ�˳�ɫ�Ĵ�����ɺ͵������ܡ�����֮�⣬VSCode �� Eclipse Ҳ�����ṩ�˷ḻ�Ĺ���֧�֡�

## �����������ù���

Spring Boot �ṩ���������������ԣ������ء�ָ��Ϳ��伴�õ�ע���� ������Щ���ԣ�������Ա���Ա����������á� ���磬����ִ�����˵�ȹ���ʹӦ�ó���״̬��س�Ϊ���ܡ� ���磬

���������� Prometheus �����Ĺ����ռ�Ӧ�ó���ָ��

������ Kubernetes �� Openshift ������ʹ�þ����Ժͻ�Ծ�Ƚ����˵㡣

ֻ�������������Ի�ͨ�� /actuator/logging �˵㼴�ɸ�����־��¼����

���⣬������Ա����ʹ���Լ����Զ��彡���˵�������Щִ�����˵㡣

## ���伴�õ� JUnit ֧��

Ĭ������£����� Spring Boot ��Ŀ������ JUnit 5�� ���⣬Spring Boot �ṩ��@SpringBootTest ע������������Ҫʱ��ʼ�����������ġ� ���Կ�����Աֻ��Ҫ��д���������� ���ǲ����ٵ��Ĳ��������ĸ��� spring �����ġ�

���磬�����Զ����ɵĲ��Խ�����������Ƿ���ȷ���ء�

```
@SpringBootTest
class SpringBootDerbyDatabaseApplicationTests {

     @����
     void contextLoads() {
     }

}
```

## Spring Profiles

Spring Profiles �� spring Boot ��һ��ǿ�����ԣ������ڸ���Ӧ�ó����еĲ�ͬ����� ʹ�������ļ������������ض����������û��������� ������������ض�����ʹ�ò�ͬ�����ʱ������ܻ������ó���
```
@Profile(value = {"prod","uat"})
class RabbitMQConfig {

// ����

}
```

������Ĵ����У������Ľ������������������ھ��� prod �� uat ��Ϊ������ļ��Ļ��������С�

## ���ִ���Ͳ���ѡ��

�ÿ���ṩ�˶��ַ�ʽ���������Ӧ�ó��� ��������֮ǰ��˵��Ӧ�ó�������� JAR �� WAR �ļ��� ͨ��һЩ��������úͲ������������Դ������伴�õĸ����� docker ����

������ֹͣ Spring Boot Ӧ�ó���ǳ��򵥡� ���⣬������ͨ����������Ĳ��轫��Щ JAR �ļ�����Ϊ linux ���� JAR �ļ���Ϊ FAT jar�����ǰ�����Ӧ�ó�����ص���������� ��ʹ�ò�����̲���ô���ӡ� ʵ���ϣ���Щ�����������κ�װ�� Java 8 ����߰汾�Ļ��������С�

# �ο�����

[https://spring.io/](https://spring.io/)

[https://pdai.tech/md/spring/springboot/springboot-x-overview.html](https://pdai.tech/md/spring/springboot/springboot-x-overview.html)

[https://springhow.com/why-use-spring-boot/](https://springhow.com/why-use-spring-boot/)

[https://dzone.com/articles/why-springboot](https://dzone.com/articles/why-springboot)

[https://scand.com/company/blog/pros-and-cons-of-using-spring-boot/](https://scand.com/company/blog/pros-and-cons-of-using-spring-boot/)

[https://cloud.tencent.com/developer/article/1620255](https://cloud.tencent.com/developer/article/1620255)

[https://www.yiibai.com/spring-boot/spring-vs-spring-boot-vs-spring-mvc.html](https://www.yiibai.com/spring-boot/spring-vs-spring-boot-vs-spring-mvc.html)