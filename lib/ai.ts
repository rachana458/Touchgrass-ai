import { pipeline } from "@huggingface/transformers";

let generator: any = null;

export async function generateOutdoorChallenge(
    activity: string,
    time: string,
    mood: string
) {
    try {
        if (!generator) {
            generator = await pipeline(
                "text-generation",
                "onnx-community/Qwen2.5-0.5B-Instruct",
                {
                    dtype: "q4f16",
                }
            );
        }

        const messages = [
            {
                role: "system",
                content: `
You are a tiny AI that gives ONE short outdoor activity idea.

Your answer must be ONE sentence only.

Rules:
- Maximum 20 words.
- Only discuss the requested activity.
- Make it realistic.
- Make it suitable for the person's mood.
- Do not mention health conditions.
- Do not mention medical advice.
- Do not mention different times of day.
- Do not give a list.
- Do not give instructions.
- Do not repeat the prompt.
        `,
            },
            {
                role: "user",
                content: `
Activity: ${activity}
Time available: ${time} minutes
Mood: ${mood}

Give one creative idea for this outdoor activity.
        `,
            },
        ];

        const result: any = await generator(messages, {
            max_new_tokens: 35,
            do_sample: false,
            repetition_penalty: 1.2,
            return_full_text: false,
        });

        const generated = result?.[0]?.generated_text;

        let idea = "";

        if (Array.isArray(generated)) {
            const assistantMessage = generated
                .filter((message: any) => message.role === "assistant")
                .pop();

            idea = assistantMessage?.content || "";
        } else if (typeof generated === "string") {
            idea = generated;
        }

        idea = idea
            .replace(/^["']|["']$/g, "")
            .replace(/\n/g, " ")
            .trim();

        if (!idea) {
            throw new Error("AI did not return an idea.");
        }

        return `
🌿 ${activity} Challenge

⏱️ ${time} minutes

1. Start with a few minutes of gentle movement to warm up.
2. ${idea}
3. Finish with a few minutes of easy movement and enjoy the outdoors.

💚 Motivational tip:
You don't need to be perfect — getting outside and moving is already a win.
`;
    } catch (error) {
        console.error("TouchGrass AI error:", error);
        throw error;
    }
}