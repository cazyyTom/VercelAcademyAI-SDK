import dotenvFlow from "dotenv-flow";
dotenvFlow.config();
import fs from "fs";
import { generateText, Output } from "ai"; 
import { google } from "@ai-sdk/google";
import { z } from "zod";

// Read essay file
const essay = fs.readFileSync("app/(1-extraction)/essay.txt", "utf-8");

async function main() {
  const result = await generateText({
    model: google("gemini-3.1-flash-lite"),
    // 2. Pass schema via Output.object inside 'output'
    output: Output.object({
      schema: z.object({
        names: z
          .array(z.string())
          .describe("All human names mentioned in the essay"),
      }),
    }),
    prompt: `Extract all the names mentioned in the following essay:\n\n${essay}`,
  });

  // 3. Access structured data via result.output
  console.log("\n--- AI Response ---");
  console.log("Extracted Array:", result.output.names);
  console.log("Formatted Output:", result.output.names.join(", "));
  console.log("-------------------");
}

main().catch((error) => {
  console.error("❌ Extraction failed:", error.message);
  process.exit(1);
});
