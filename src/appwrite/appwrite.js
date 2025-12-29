import { Client,Account,ID } from "appwrite";
import conf from "../conf/conf.js";

export class AuthenticationService {
    Client = new Client();
    account;

    constructor() {
        this.Client
            .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
            this.account = new Account(this.Client);
    }
      
    async register({name,email,pass}){
        try {
            return await this.account.create(ID.unique(),
             name,
             email,
             pass
        )
        } catch (error) {
            throw error;
            console.log("error in register",error); 

        }
    }

    async login({email,pass}){
        try {
            return await this.account.createEmailPasswordSession(
                email,
                pass
            )
        } catch (error) {
            throw error;
            console.log("error in login",error); 
        }
    }

      async currentuser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            throw error;
        }
    }

} 

const auths = new AuthenticationService();
export default auths;
