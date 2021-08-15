#!/usr/bin/env sh

localDir=public
remoteDir=/www/wwwroot/wuchuheng.com
yarn build

sftp root@jds.wuchuheng.com <<EOF
  cd $remoteDir
  lcd $localDir
  put -r * ./
EOF



