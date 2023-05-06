import type { ResumeConfig } from '@/components/types';

/** 初始化常量 */
export const RESUME_INFO: ResumeConfig = {
  avatar: {
    hidden: false,
    src:
      'https://raw.githubusercontent.com/wenyoufu/testaaaaaa/master/fordwen1.png',
    // "src":"https://gitee.com/fordwen/resume/raw/4539f824724470b1005b9220df03628d8d8b73f4/fordwen1.png",
    shape: 'circle',
  },
  profile: {
    name: '温有福',
    email: '1334788676@qq.com',
    mobile: '18811521695',
    github: '',
    zhihu: '',
    workExpYear: '6年',
    workPlace: '',
    positionTitle: '',
    birth: '1991.01',
  },
  educationList: [
    {
      edu_time: ['2014.09', '2017.04'],
      school: '北京交通大学',
      major: '计算机科学与技术（硕士）',
    },
    {
      edu_time: ['2010.09', '2014.07'],
      school: '河北建筑工程学院',
      major: '计算机科学与技术（本科）',
      academic_degree: '本科',
    },
  ],
  awardList: [
    {
      award_time: '2022',
      award_info: '软著：coraldb存算分离数据库',
    },
    {
      award_time: '2021',
      award_info: 'coraldb存算分离创新项目奖',
    },
    {
      award_time: '2019',
      award_info: '海思破飞机奖',
    },
    {
      award_info: '云通讯产品线总裁奖',
      award_time: '2018',
    },
    {
      award_time: '2017',
      award_info: '研究生优秀毕业论文',
    },
    {
      award_info: '省数学竞赛三等奖',
      award_time: '2013',
    },
    {
      award_info: '院级三好学生',
      award_time: '2012',
    },
    {
      award_info: '英语 CET6',
      award_time: ' 2012',
    },
  ],
  workExpList: [
    {
      work_time: ['2021.01', ''],
      company_name: '京东',
      department_name: '数据库研发部',
      work_desc: '负责数据库中间件及内核高可用低成本设计及研发工作',
    },
    {
      work_time: ['2017.05', '2020.12'],
      company_name: '华为',
      department_name: '海思balong解决方案软件开发部',
      work_desc:
        '海思balong基带协议栈 (lte-rrc、nr-rrc) 开发及代码重构 \n\n总结：两段工作经历使得我在云原生、数据库内核、数据库中间件、微服务框架、服务高可用高性能、网络通讯协议栈等有深刻的理解和应用能力。',
    },
  ],
  skillList: [
    {
      skill_name: '数据库内核及中间件方案',
      skill_level: 100,
      skill_desc:
        '数据库内核（innodb）改造及数据库中间件（vitess）方案设计及研发经验',
    },
    {
      skill_name: '设计模式',
      skill_level: 100,
      skill_desc: '常用的数据库高可用，高性能的架构设计经验',
    },
    {
      skill_name: '云原生经验',
      skill_level: 89,
      skill_desc: '部署及云原生经验(docker,k8s) ',
    },
    {
      skill_name: '语言基础',
      skill_level: 89,
      skill_desc: '熟练c/c++,go语言编程;熟悉python脚本编程',
    },
  ],
  projectList: [
    {
      project_name: '数据库中间件高可用建设',
      project_role: '设计研发owner',
      project_time: '2021.08 - 2023.03',
      project_desc:
        '存算分离架构下，云原生数据库中间件不能满足：1.服务部署、初始化、启动\n2.数据库高可用要求',
      project_content:
        '数据库中间件高可用建设及落地（go 实现）\n1.设计并实现数据库数据损坏恢复的高可用方案；\n2.设计并实现数据库无感升级运维方案；\n3.部分设计及实现数据库弹性伸缩方案。',
    },
    {
      project_name: '数据库内核存储低成本建设',
      project_role: '核心设计研发',
      project_time: '2021.01 - 2021.08',
      project_desc:
        '数据库内核存算分离架构[主从共用一份数据](类似阿里polarDB)，达到降本增效的目的',
      project_content:
        '内核模块设计及研发（c/c++ 实现）\n1.设计并实现在主从存算分离架构下ddl；\n2.设计并实现数据库内核自定义协议承载链路。 (用于心跳及传输拷贝页数据)',
    },
    {
      project_name: '4G/5G 通信协议栈RRC研发',
      project_role: '开发工程师',
      project_time: '2017.05-2021.12',
      project_desc:
        '海思balong基带协议栈 , RRC层(lte-rrc、nr-rrc) 作为物理层（PHY）和NAS层的纽带，具有呈上启下的重要作用',
      project_content:
        '海思balong基带协议栈 (lte-rrc、nr-rrc) 开发及代码重构 (c 实现)\n1.主导项目小组各版本问题定位及部分修改 ；(接口人)\n2.依据3gpp协议，进行协议实现；\n3.负责4g快速回5g搜网开发工作；\n4.参与搜网模块代码重构。\n',
    },
  ],
  workList: [],
  aboutme: {
    aboutme_desc:
      '🌱 聚焦于数据库内核低成本及数据库中间件高可用的设计和研发\n😈 能力项：\n    1.丰富的容器化云原生及云化数据库经验(docker,k8s,vitess等)\n    2.扎实的计算机基础（数据结构、算法、网络、常用设计模式等）\n    3.较强的上手学习、沟通协调能力\n',
  },
};
