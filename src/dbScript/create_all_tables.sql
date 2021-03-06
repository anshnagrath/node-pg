


CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE   "users" (

id serial PRIMARY KEY,
uuid  uuid DEFAULT uuid_generate_v4 (),
name VARCHAR ( 50 )  NOT NULL,
email  VARCHAR ( 50 ) UNIQUE NOT NULL,
mobile  VARCHAR ( 15 ) UNIQUE NOT NULL,
is_active BOOLEAN  NOT NULL DEFAULT FALSE,
password  TEXT NOT NULL,
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

);


CREATE TABLE   posts (

id serial PRIMARY KEY,
uuid  uuid DEFAULT uuid_generate_v4 (),
user_id integer REFERENCES "users" (id),
is_active  BOOLEAN  NOT NULL DEFAULT FALSE,
title TEXT NOT NULL,
attachments  TEXT[],
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    

);

CREATE TABLE   comments  (

id serial PRIMARY KEY,
uuid  uuid DEFAULT uuid_generate_v4 (),
post_id integer REFERENCES posts(id),
is_active   BOOLEAN  NOT NULL DEFAULT FALSE,
title TEXT NOT NULL,
user_id integer REFERENCES "users" (id),
attachments TEXT[],
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

    

);