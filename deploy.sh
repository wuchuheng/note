#!/usr/bin/env sh

localDir=public
remoteDir=/www/wwwroot/demo.jds.wuchuheng.com
yarn build
node addSearchDataToWS.js # 把搜索文件加入 manifest

sftp root@jds.wuchuheng.com <<EOF
  cd $remoteDir
  lcd $localDir
  put -r * ./
EOF



