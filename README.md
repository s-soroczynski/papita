# papita

# BACKEND

## database + pgadmin4 + backend

to start backend, database and pgadmin4 run in main folder `docker-compose up`  
you should be able to visit

- pgadmin4 at **localhost:5050**
- backend app on **localhost:3000**

### helpers

sometimes postgres is still running in background so you have to find running port, type `sudo lsof -t -i:5432` and then u can kill it with `sudo kill -9 {id}` where **id** is returned from first command

to add database in **pgadmin4 web** use `docker inspect CONTAINER_ID | grep IPAddress.` it will return database host
