
# 联系方式

- 手 机：18612832316
- 邮 箱：ehlxr.me@gmail.com
- 微 信：elvin_henry

---

# 个人信息

 - 李享荣 / 男 / 1991
 - 本科 / 长春工业大学 / 计算机科学与技术
 - 工作年限：7 年+ Java，2 年 Golang
 - 外语能力：国家英语四级，熟悉专业类英语，能熟练的阅读英文文档
 - 期望职位：Java 高级研发工程师、Golang 研发工程师
 - 期望城市：北京
 - 技术博客：https://ehlxr.me

---

# 技能清单

 - 熟练掌握 Java 核心基础和基于 J2EE 编程
 - 熟悉 Golang 语言编程
 - 熟悉微服务架构相关知识; 熟悉使用 Docker，k8s 等容器相关技术
 - 掌握 SQL Server、Oracle、MySQL、MongoDB 等数据库技术
 - 熟悉 Spring Boot/Cloud、MyBatis 等技术框架
 - 掌握 Redis，Zookeeper，Etcd，Consul, Kafka，RabbitMQ 等分布式常用技术
 - 掌握 Linux 系统基本操作及 shell 基础命令；熟悉常用正则表达规则
 - 掌握 MVC 编程思想和常见设计模式的使用
 - 掌握 Html、JavaScript、Css、JSON、JQuery、Ajax、Angular JS 等 WEB 技术
 - 熟悉 Bootstrap 、Ace Admin 等前段框架
 - 掌握 Tomcat，Jetty，Nginx 等服务器的配置及使用，熟悉 WebLogic 的使用

---

# 自我评价

在工作学习过程中，锻炼了我冷静思考和独立解决问题的能力；具有良好沟通能力和团队协作精神；对负责的工作能付出极高精力和热情，能够快速制定出缜密计划，力争在最短时间内将目标达成；喜欢挑战，能在较短时间内适应高压力的工作。

---

# 工作经历

| 时间 | 公司 | 职位
| --- | --- | ---
| 2017/2 – 现在 | 新奥 | 软件研发高级工程师
| 2015/12 – 2017/2 | 北京数字家圆 | 软件研发高级工程师
| 2014/05 - 2015/12 | 蓬景数字 | 软件研发工程师
| 2011/11 - 2014/05 | 中科软科技 | 软件研发工程师

---

# 项目经验

## Ceres 微服务治理平台（新奥）

### 技术架构

Ceres 微服务治理框架是基于 Google gRPC 研发而成，gRPC 是一款语言中立、平台中立、开源的远程过程调用 (RPC) 系统。系统使用 Protocol Buffers(Protobuf) 作为结构数据序列化机制，Protobuf 提供了一种灵活、高效、自动序列化结构数据的机制，

### 项目描述

Ceres 是基于 gRPC 实现的跨语言平台的微服务治理平台，目前主要实现了 Java 和 Golang 端的支持，Java 支持版本值基于 Spring xml 配置加载、注解加载和更加简洁的 Spring-Boot 加载方式，实现了以下能力：

- 注册发现（实现了基于 Etcd 研发的企业级注册中心，支持类似 zookeeper、consul 等第三方服务发现中间件）
- 重试机制
- 熔断机制（基于 Hystrix 实现）
- 负载均衡
- 监控机制（实现基于 Pinpoint 的点对点监控和基于 Prometheus + Grafana 全面的性能监控系统）
- 框架级扩展机制（基于 Java SPI 标准扩展）
- 统一的 API Gateway（Api Gateway 为边界服务，保护 paas 内的微服务，同时也提供了通用的基于面向切面架构的功能，如灰度部署、流量控制、指标统计分析、请求缓存、授权鉴权、路由、协议转换、日志处理等等功能）

### 项目职责

参与 Ceres 微服务治理平台前期调研，Ceres Java 端开发，主要负责开发实现了 Spring-Boot 支持，注解方式加载 Service 和 Reference 实现，服务注册发现以及熔断等模块的研发。以及 Ceres 治理平台（Golang实现）的相关工作。

### 项目收获

参与微服务治理平台的研发，最大的收获就是对微服务有了更加深刻的理解和把握，为了更好的实现 Ceres 相关功能，研读了许多优秀的开源框架，拓展了知识体系。

## 来康标注系统（新奥）

### 技术架构

SpringBoot + MongoDB + Redis + RabbitMQ + Docker

### 项目描述

标注系统实结合来康镜子，提供给医生对患者拍摄的面、舌照片的标注管理。

### 项目职责

负责项目的整体架构设计和核心代码的开发。

### 项目收获

通过此项目，让我对设计微服务系统架构有了深入的理解，并且在项目开发过程中，熟悉使用了 MongoDB 数据库，

## 来康运营管理平台（新奥）

### 技术架构

SpringBoot + Ceres + MySQL + MyBatis + Redis + Docker

### 项目描述

来康运营管理平台是针对来康 APP 的运营管理平台。

### 项目职责

主要参与了离线推送的相关业务设计开发；搭建离线推送服务微服务。

### 项目收获

熟悉分布式微服务系统的设计，加强了微服务治理工具 docker、k8s 的使用，对分布式事务有了较深入的认知。


## Qlove 亲见智能座机后台服务（北京数字家圆）

### 技术架构

OpenResty + Spring MVC + MyBatis + MySql + Redis + Dubbo + Zookeeper + Kafka + RabbitMQ + Docker

### 项目描述

Qlove 亲见智能座机服务平台是以 Dubbo 微服务为设计架构，为亲见智能座机提供支持千万级并发访问的高性能分布式服务系统。

### 项目职责

 - 核心业务系统的研发和上线，包括需求分析、方案设计和核心业务代码的编写
 - 基础平台技术架构的研究，并进行技术落地
 - 核心业务的编码开发工作

### 项目收获

通过此项目我不止学习到了 Dubbo，Zookeeper，Kafka，RabbitMQ 等分布式常用技术，也了解到了 Docker 等自动化运维相关技术，更主要的是通过此项目，让我对高并发系统的整体设计架构有了深刻的学习和实践。

## DSP 精准投放系统平台（蓬景数字）

### 技术架构

H5 + Angular JS + Bootstrap + Ace Admin + Nginx + Spring MVC + MyBatis + MySql + Redis

### 项目描述

DSP 精准投放系统平台，是互联网大数据广告精准投放管理信息平台，此平台为广告主提供精准营销需求和全方位的服务。通过此系统可以对广告出价、定向、投放、反馈、优化等各个环节进行控制和实时的优化处理。

### 项目职责

 - 负责推广计划、推广组的投放模块研发
 - 负责H5落地页项目后台数据交互和日常运维
 - 系统平台开发需求讨论，系统性能调优和分析

### 项目收获

在此项目中第一次接触到了大数据相关的处理方法，主要运用到了实时 Storm 数据处理的相关技术；在参与系统性能调优和分析过程中，主要研究了 MySQL 的分库、分表技术；对前端开发技术也有了大量的运用，包括 H5、Angular JS、Bootstrap 、Ace Admin 等。

## 团险核心业务综合处理系统（中科软科技）

### 技术架构

Spring + Struts2 + Hibernate + Oracle

### 项目描述

团险核心业务综合处理系统是中科软科为寿险团险提出的一套通用的完善解决方案，系统包括新契约、保全、理赔、财务收费等主要模块，实现了整个团体人寿保险的业务处理过程。

### 项目职责

 - 项目后期担任开发组长，参与并组织了包括保险计划变更保全支持、业务员提奖功能开发、长期护理险和万能险开发等
 - 负责财务接口相关报表开发、团险报价管理子系统分析、设计、开发工作
 - 长期驻扎甲方保险公司，负责处理客户需求沟通和运维相关工作

### 项目收获

此项目属于比较庞大的综合保险业务处理系统，在前期学习和运维过程中，我能够很快的了解保险业务和掌握核心技术，使得我在众人中得到了经理和客户的认可，之后以开发组长的身份负责了后期几款产品和部分功能的开发。在此期间，对我挑战最大锻炼最深刻的的就是如何宏观的去把控开发进度和人员的调配，以及和客户商讨需求的开发。

一次系统中隐藏 bug，导致生产数据出错，问题发现时已经产生了重大的数据错误，在顶住压力的同时及时的解决了 bug 并提出了错误数据补救措施，得到了领导和客户的认同。

## 反洗钱上报系统、健康险、意外险系统（中科软科技）

### 技术架构

Spring + Struts2 + Hibernate + SQLServer + Oracle

### 项目描述

瑞泰反洗钱系统实现了对团、个险核心业务系统数据的可疑筛选和信息上报功能。通过 SQLServer 的 DTS 组件实现了数据从核心系统的 Oracle 数据库到反洗钱系统 SQLServer 数据库的转换。健康险系统和意外险系统，分别实现了保险核心业务数据中健康险种、意外险种数据的检测和上报保监会功能。

### 项目职责

 - 负责承保、保全、理赔提数存储过程的编写，指导项目组新成员程序开发
 - 负责系统日常运维与监管报表设计、开发

### 项目收获

此项目开发过程中，我负责核心提数规则部分的开发，为了完成 Oracle 与 SQLServer 之间的数据转换任务，在有限的时间内研究了 SQLServer 中的 DTS（DataTransformation Services）技术，并比较完善的解决了此问题。在这个项目设计开发中，大量使用了 Oracle 存储过程，让我对存储过程有了较深的了解。

---

# 致谢

感谢您花时间阅读我的简历，期待能有机会和您共事。