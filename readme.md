#### API FOR DELIVERY APP FOR ROYAL MANDARIN RESTURANT
---

**POSTMAN PUBLISHED LINK**
> https://documenter.getpostman.com/view/25485568/2s935vjzFd

---

### How to use this project

- Install the packages

> npm init -y

> npm i express mongoose dotenv

---

### Run the program with this command

> npm run dev or npm start

---

### Create a .env file

> PORT=****
> NODE_ENV=****
> MONGO_URI_DEV=****
> MONGO_URI_PROD=****

---

#### ENDPOINT

**HOMEPAGE**

>GET http://localhost:{port_number}/

---

**CREATE ORDER**

POST http://localhost:{port_number}/api/v1/createorder

```json
{
    "Name": "ib",
    "Address": "no 5 olla road",
    "Food":"Rice",
    "Number_of_plates": 1
}
```

---

**ALL ORDER**

>GET http://localhost:{port_number}/api/v1/allorders

---
**TOTAL ORDER**
>GET http://localhost:{port_number}/api/v1/totalorders

---
**DELETE ORDER**
>DELETE http://localhost:{port_number}/api/v1/deleteorders/:id


