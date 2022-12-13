#!/bin/bash

dpkg --add-architecture i386 && apt update -y
apt install unzip lib32stdc++6 lib32gcc1 libcurl4-gnutls-dev:i386 -y

useradd -m steam
su -c bash --login steam << EOF
steamcmd +login anonymous +app_update $1 validate +quit;
mkdir -p  ~/.klei/DoNotStarveTogether/Cluster_1
echo "pds-g^KU_3wnHrHQI^+eNA3E1Zvq5K/XaE7GjgVRuL2VJYBeoOUg8c/npIJEM=" > ~/.klei/DoNotStarveTogether/Cluster_1/cluster_token.txt
cd /home/steam/.steam/steamapps/common/Don\'t\ Starve\ Together\ Dedicated\ Server/bin/
./dontstarve_dedicated_server_nullrenderer
EOF