import {
  streamText,
  convertToModelMessages,
  createUIMessageStreamResponse,
  toUIMessageStream,
} from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  // TODO: Extract messages from the request body
try {
  const { messages } = await req.json();
  // TODO: Create a streamText call with:
  // - model: 'openai/gpt-5-mini'
  // - messages: converted using convertToModelMessages
  const result = streamText({
    model: "openai/gpt-5-mini", //Fast model for real-time chat
    // Reasoning models ('openai/gpt-5') would add 10-15s delay - poor UX for chat

    messages: await convertToModelMessages(messages),
  });
  // TODO: Return the stream with createUIMessageStreamResponse + toUIMessageStream

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
} catch (error) {
 
  console.error("Chat API error:", error);

  // Return a proper error response
  return new Response(
    JSON.stringify({
      error: "Failed to process chat request",
      details: error instanceof Error ? error.message : "Unknown error",
    }),
    {
      status: 500,
      headers: { "Content-Type": "application/json" },
    },
  );

}
}