export async function registerMemory(message: string, summary: string) {
  // TODO: persist memory entry { message, summary, embedding }
  // 1. Generate embedding for the message
  // 2. Store in vector DB with metadata
  // 3. Update conversation summary
}

export async function retrieveMemories(query: string, limit = 5) {
  // TODO: retrieve relevant memories for context
  // 1. Generate embedding for query
  // 2. Search vector DB for similar memories
  // 3. Return ranked results
}
