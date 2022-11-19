# -*- coding: utf-8 -*-

#################################
# 默认变量
#################################

# 登录账号密码
BASIC_AUTH_USERNAME = "admin"
BASIC_AUTH_PASSWORD = "123456"
BASIC_AUTH_JWT_KEY = 'FU0qnuV4t8rr1pvg93NZL3DLn6sHrR1sCQqRzachbo0='

# token过期时间，单位天
BASIC_AUTH_EXPIRES = 7

# scrapyd地址, 结尾不要加斜杆
SCRAPYD_SERVER = 'http://127.0.0.1:6800'

# 调度器 调度历史存储设置
# mysql or sqlite and other, any database for peewee support
SCHEDULE_HISTORY_DATABASE_URL = 'sqlite:///dbs/schedule_history.db'

# 调度器 定时任务存储地址
JOB_STORES_DATABASE_URL = 'sqlite:///dbs/apscheduler.db'

# 日志文件夹
LOG_DIR = 'logs'

# 数据存储文件夹
DATABASE_DIR = 'dbs'
