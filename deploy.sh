#!/usr/bin/env bash

user=ec2-user
host=18.217.233.182
port=22

src=`pwd`"/src/"
des=/home/wwwroot/example/
now=`date +"%Y-%m-%d %H:%M:%S"`

echo "将 $src 目录下的文件同步到 $host:$des 目录下"
rsync -zrc -e "ssh -p $port" --exclude '*.map' $src $user@$host:$des
echo "$now update $host $des code"
