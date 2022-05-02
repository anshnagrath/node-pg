# NODE PG

- Requirements :
  - node 16
  - PG 13

## To start API

- create the environment file by copying the env.example to ".env"
- replace the values of .env file according to the environment
- npm install
- run migeration scripts using npm run pg-migration . This will create database and all required table
- start application
  - npm run dev (Development mode)
  - npm start (Prod mode)

### Sample Api Routes And Payload

- http://localhost:3100/api/v1/user/ ((POST) CREATE USER)

                {
                 "name" :"ansh",
                 "email" :"144varunnagraJh@gmail.com",
                 "mobile":"7017205021",
                 "password":"hdshi"
                }

- http://localhost:3100/api/v1/auth/login ((POST) AUTH GENERATES TOKEN)

                {
                    "password" :"hashi",
                    "email" :"144varunnagraJh@gmail.com"
                }

- http://localhost:3100/api/v1/post/ ((GET) TO GET LIST OF POST)

- http://localhost:3100/api/v1/post/ ((POST) INSERT POST) (Accepts json , Multiplart/formdata )
                    {
                    title : "csdcsc",
                    attachements : [Files] array of files
                    }
