����Filter

��Spring MVC�У�DispatcherServletֻ��Ҫ�̶����õ�web.xml�У�ʣ�µĹ�����Ҫ��רע�ڱ�дController��

���ǣ���Servlet�淶�У����ǻ�����ʹ��Filter�����Ҫ��Spring MVC��ʹ��Filter��Ӧ����ô����

�е�ͯЬ����һ�ڵ�WebӦ���п��ܷ����ˣ����ע��ʱ�������Ļᵼ�����룬��ΪServletĬ�ϰ���UTF-8�����ȡ������Ϊ���޸���һ���⣬���ǿ��Լ򵥵�ʹ��һ��EncodingFilter����ȫ�ַ�Χ���HttpServletRequest��HttpServletResponseǿ������ΪUTF-8���롣

�����Լ���дһ��EncodingFilter��Ҳ����ֱ��ʹ��Spring MVC�Դ���һ��CharacterEncodingFilter������Filterʱ��ֻ����web.xml���������ɣ�
```
<web-app>
    <filter>
        <filter-name>encodingFilter</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        <init-param>
            <param-name>encoding</param-name>
            <param-value>UTF-8</param-value>
        </init-param>
        <init-param>
            <param-name>forceEncoding</param-name>
            <param-value>true</param-value>
        </init-param>
    </filter>

    <filter-mapping>
        <filter-name>encodingFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
    ...
</web-app>
```
��Ϊ����Filter������ҵ���ϵ����ע�⵽CharacterEncodingFilter��ʵ��Spring��IoC����û���κι�ϵ�����߾�����֪���Է��Ĵ��ڣ���ˣ���������Filterʮ�ּ򵥡�

�����ٿ�������һ�����⣺��������û�ʹ��Basicģʽ�����û���֤������HTTP����������ͷAuthorization: Basic email:password������������ʵ�֣�

��дһ��AuthFilter����򵥵�ʵ�ַ�ʽ��
```
@Component
public class AuthFilter implements Filter {
@Autowired
UserService userService;

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        // ��ȡAuthorizationͷ:
        String authHeader = req.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Basic ")) {
            // ��Header����ȡemail��password:
            String email = prefixFrom(authHeader);
            String password = suffixFrom(authHeader);
            // ��¼:
            User user = userService.signin(email, password);
            // ����Session:
            req.getSession().setAttribute(UserController.KEY_USER, user);
        }
        // ������������:
        chain.doFilter(request, response);
    }
}
```
�����������ˣ���Spring�д��������AuthFilter��һ����ͨBean��Servlet��������֪�������������������á�

�������ֱ����web.xml���������AuthFilter��ע�⵽AuthFilter��ʵ������Servlet����������Spring������ʼ������ˣ�@Autowire��������Ч�����ڵ�¼��UserService��Ա������Զ��null��

���ԣ���ͨ��һ�ַ�ʽ����Servlet����ʵ������Filter���������Spring����ʵ������AuthFilter��Spring MVC�ṩ��һ��DelegatingFilterProxy��ר������������飺
```
<web-app>
    <filter>
        <filter-name>authFilter</filter-name>
        <filter-class>org.springframework.web.filter.DelegatingFilterProxy</filter-class>
    </filter>

    <filter-mapping>
        <filter-name>authFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
    ...
</web-app>
```
��������ʵ��ԭ����

Servlet������web.xml�ж�ȡ���ã�ʵ����DelegatingFilterProxy��ע��������authFilter��
Spring����ͨ��ɨ��@Componentʵ����AuthFilter��
��DelegatingFilterProxy��Ч�������Զ�����ע����ServletContext�ϵ�Spring����������ͼ�������в�����ΪauthFilter��Bean��Ҳ����������@Component������AuthFilter��

DelegatingFilterProxy�����������AuthFilter�����Ĵ������£�
```
public class DelegatingFilterProxy implements Filter {
    private Filter delegate;
    public void doFilter(...) throws ... {
        if (delegate == null) {
            delegate = findBeanFromSpringContainer();
        }
        delegate.doFilter(req, resp, chain);
    }
}
```
�����һ������ģʽ�ļ�Ӧ�á����ǻ���ͼ��ʾ����֮������ù�ϵ���£�
```
�� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� �� ��
����������������������������������������������        ��������������������������   ��
�� ��DelegatingFilterProxy������������ ��>��AuthFilter ��
����������������������������������������������        ��������������������������   ��
�� ���������������������������������������������� �� ��    ��������������������������
��  DispatcherServlet  ���� �� �� ��>��Controllers��   ��
�� ���������������������������������������������� �� ��    ��������������������������
��
��    Servlet Container    �� ��  Spring Container
�� �� �� �� �� �� �� �� �� �� �� �� ��   �� �� �� �� �� �� �� �� �� �� ��
```
�����web.xml�����õ�Filter���ֺ�Spring������Bean�����ֲ�һ�£���ô��Ҫָ��Bean�����֣�
```
<filter>
    <filter-name>basicAuthFilter</filter-name>
    <filter-class>org.springframework.web.filter.DelegatingFilterProxy</filter-class>
    <!-- ָ��Bean������ -->
    <init-param>
        <param-name>targetBeanName</param-name>
        <param-value>authFilter</param-value>
    </init-param>
</filter>
```
ʵ��Ӧ��ʱ��������������һ�£��Լ��ٲ���Ҫ�����á�

Ҫʹ��Basicģʽ���û���֤�����ǿ���ʹ��curl������ԡ����磬�û���¼����tom@example.com��������tomcat����ô�ȹ���һ��ʹ��URL������û���:������ַ�����

tom%40example.com:tomcat
�������Base64���룬���չ������Header���£�

Authorization: Basic dG9tJTQwZXhhbXBsZS5jb206dG9tY2F0
ʹ�����µ�curl��������Ӧ���£�
```
$ curl -v -H 'Authorization: Basic dG9tJTQwZXhhbXBsZS5jb206dG9tY2F0' http://localhost:8080/profile
> GET /profile HTTP/1.1
> Host: localhost:8080
> User-Agent: curl/7.64.1
> Accept: */*
> Authorization: Basic dG9tJTQwZXhhbXBsZS5jb206dG9tY2F0
>
< HTTP/1.1 200
< Set-Cookie: JSESSIONID=CE0F4BFC394816F717443397D4FEABBE; Path=/; HttpOnly
< Content-Type: text/html;charset=UTF-8
< Content-Language: en-CN
< Transfer-Encoding: chunked
< Date: Wed, 29 Apr 2020 00:15:50 GMT
<
<!doctype html>
```
...HTML���...
������Ӧ˵��AuthFilter����Ч��