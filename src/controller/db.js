const { promises: fs } = require("fs");

class DBController {
  static dbPath = "./src/state/db.json";

  static async writeDB(state) {
    return await fs.writeFile(this.dbPath, JSON.stringify(state), "utf8");
  }
  static async readDB() {
    const state = await fs.readFile(this.dbPath, "utf8");
    if (!state) return [];
    return JSON.parse(state);
  }
}

module.exports = DBController;
