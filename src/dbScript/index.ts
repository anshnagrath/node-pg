
import { PgClient } from '../dbConfig/pgClient';
import {join} from 'path';
import fs from 'fs';
const client = PgClient.client;



async function createDatabase(){

   try{
   await client.query(`CREATE DATABASE  ${process.env.DB_NAME}`);
   return true;
   }catch(e){
      console.error(e)
      return false;
   }
}  

async function execScript(query : string) {
  
  try {
    const execQuery = await client.query(query, []);
    return execQuery;
    
  } catch (e) {
    console.error(e)
    return e
  }
}

async function runDbScripts() {
 try{ 
  await client.connect();
  for (var i = 0; i < process.argv.length; i++) {
    switch (process.argv[i]) {
      case 'Setup':
        const dbCreated = await createDatabase();
        if(dbCreated){
        const createTablesQuery = fs.readFileSync(join(__dirname ,'./create_all_tables.sql')).toString();  
        const output = await execScript(createTablesQuery);
        console.log(output);
        break;
        }
    }
  }
}catch(e){
  console.error(e);
}finally{
  await client.end();
}
}


runDbScripts();
