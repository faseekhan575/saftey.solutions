import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";

export class AuthenticationService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  // ✅ REGISTER
  async register({ name, email, pass }) {
    try {
      return await this.account.create(
        ID.unique(),
        email.trim(), // ✅ email first
        pass,         // ✅ password second
        name          // ✅ name last (optional)
      );
    } catch (error) {
      console.error("Error in register:", error.message);
      throw error;
    }
  }

  // ✅ LOGIN
  async login({ email, pass }) {
    try {
      return await this.account.createEmailPasswordSession(
        email.trim(),
        pass
      );
    } catch (error) {
      console.error("Error in login:", error.message);
      throw error;
    }
  }

  // ✅ CURRENT USER
  async currentuser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }

  // ✅ LOGOUT
  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      throw error;
    }
  }
}

const auths = new AuthenticationService();
export default auths;
