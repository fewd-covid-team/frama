docker run -d --name sonarqube -p 9000:9000 sonarqube:7.5-community

docker run --network=host \
    --rm \
    -e SONAR_HOST_URL="http://localhost:9000" \
    -e SONAR_LOGIN="6c4e7fbee622145b3e34e235fbafd09fb9ace2c6" \
    -v "$(pwd):/usr/src" \
    sonarsource/sonar-scanner-cli
