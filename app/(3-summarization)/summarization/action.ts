"use server";

import { generateText, Output } from "ai";
import { z } from "zod";

// TODO: Define the structure for our summary
// Create a Zod schema with these fields:
// - headline (string)
// - context (string)
// - discussionPoints (string)
// - takeaways (string)

const summarySchema = z.object({
  headline: z.string().describe('The main topic or title of the summary. Max 5 words.').max(100),
  context: z.string().describe('A brief overview of the context or background information.').max(200),
  discussionPoints: z.string().describe('Key points discussed in the comments.').max(300),
  takeaways: z.string().describe('Important conclusions or actions to take.').max(300)
});

export const generateSummary = async (comments: any[]) => {
  console.log("Generating summary for", comments.length, "comments...");

  // TODO: Use generateText with Output.object() to create the summary
  // - Model: 'openai/gpt-5-mini'
  // - Prompt: Ask to summarize the comments, focusing on key decisions and action items
  // - Output: Output.object({ schema: yourSchema })
  // - Return the generated summary from the 'output' property
const { output: summary } = await generateText({
  model: "openai/gpt-5-mini",
  prompt: `Please summarize the following comments concisely, focusing on key decisions and action items.
      Comments:
      ${JSON.stringify(comments)}`,
  output: Output.object({
    schema: summarySchema,
  }),
});
console.log("Summary Generated", summary)
return summary;
};
