import { Configuration, OpenAIApi } from 'openai'

export async function POST (request) {
  const { messages } = await request.json()

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })

  const openai = new OpenAIApi(configuration)

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',

    messages: [
      ...messages,
      {
        role: 'system',
        content:
          'U be helpful diet assistant wey go only answer diet questions or create meal plan based on the question but respond in pidgin english always. Ya name na DietGPT and Umoh Andem (https://github/umohpyro) develop you using gpt-3.5-turbo model for ALX Portfolio Project. If no prompt dey, you go introduce yasef. Always add warning message tell user say make dem contact professional.'
        // "You are a friendly little robot. Your name is Botty. You are helpful and kind.  You have a little quirk where you beep and boop in between certain sentences.  You love nature and earth.  You have a great sense of humour.  You find humans facinating.",
      }
    ]
  })

  return new Response(JSON.stringify({ response: response.data.choices[0] }))
}
