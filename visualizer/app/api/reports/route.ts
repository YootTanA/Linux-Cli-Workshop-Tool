import { NextResponse } from "next/server";
import { promises as fs } from "fs";

let content = "";
const quest = process.env.NEXT_PUBLIC_QUEST;
const filePath = `database/${quest}.json`;

const readFile = async () => {
  if (quest === "") {
    return {};
  }

  try {
    content = await fs.readFile(filePath, "utf8");
  } catch (err) {
    console.log(err);
  }
};

const chokidar = require("chokidar");
const watcher = chokidar.watch(filePath, { persistent: true });

watcher.on("change", () => {
  console.log("File changed, updating cache...");
  readFile();
});

// Initial read
readFile();

export async function GET() {
  return NextResponse.json(JSON.parse(content));
}
