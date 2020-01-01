
#How To Run Application
Go to root directory and run maven install
```
cd newman_jerome
mvn clean install
```

From there make your way to the 'backend' directory and deploy the jar
```

cd newman_jerome_be
java -jar target\newman_jerome_be-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod

```
Finally open your browser and navigate to http://localhost:8080 to see the application.