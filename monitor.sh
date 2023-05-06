#!/bin/bash

# 循环监视9000端口是否被占用
while true; do
  #echo "Checking port 9000..."
  #nc -z localhost 9000
  (echo >/dev/tcp/localhost/9000) &>/dev/null
  # 如果端口未被占用，则运行npm restart命令来重启服务并继续循环
  if [ $? -eq 1 ]; then
    echo "Port 9000 is free, restarting service..."
    nohup npm restart > /dev/null 2>&1 &
  fi

  sleep 60  # 等待1分钟后重新检查端口状态
done