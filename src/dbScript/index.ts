
import { PgClient } from '../dbConfig/pgClient';
import {join} from 'path';
import fs from 'fs';
const globalClient = PgClient.globalClient;
const dbClient = PgClient.dbClient;



async function createDatabase(){

   try{
   await globalClient.query(`CREATE DATABASE  ${process.env.DB_NAME}`);
   return true;
   }catch(e){
      console.error(e)
      return false;
   }
}  

async function execScript(query : string) {
  
  try {
    
    const execQuery = await dbClient.query(query, []);
    return execQuery;
    
  } catch (e) {
    console.error(e)
    return e
  }
}

async function runDbScripts() {
 try{ 

  for (var i = 0; i < process.argv.length; i++) {
    switch (process.argv[i]) {
      case 'Setup':
        globalClient.connect();
        const dbCreated = await createDatabase();
        if(dbCreated){
        await dbClient.connect();
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
  await dbClient.end();
  await globalClient.end();
}
}


runDbScripts();
