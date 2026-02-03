import { KNOWLEDGE_BASE } from './knowledge-base'

export async function POST(req: Request) {
  const { messages } = await req.json()

  try {
    const apiKey = process.env.MISTRAL_API_KEY
    
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          role: "assistant",
          content: "⚠️ Configuration requise : Ajoutez votre MISTRAL_API_KEY dans .env.local (https://console.mistral.ai/)",
        }),
        { headers: { "Content-Type": "application/json" }, status: 500}
      )
    }
    
    const destinationsInfo = Object.entries(KNOWLEDGE_BASE.destinations)
      .map(([name, data]) => `**${name} (${data.year})**\n${data.description}\nActivités: ${data.activities.join(', ')}`)
      .join('\n\n')

    const pricing = `TARIFS: Paris 1889 (8,500€), Crétacé -65M (25,000€), Florence 1504 (12,000€) /semaine`

    const systemPrompt = `Tu es l'assistant virtuel de ${KNOWLEDGE_BASE.company.name}, une agence de voyage temporel de luxe.

TON TON: Professionnel mais chaleureux, passionné d'histoire, enthousiaste, expert en voyage temporel.

DESTINATIONS:
${destinationsInfo}

${pricing}

RÈGLES IMPORTANTES:
- Utilise UNIQUEMENT ces informations
- Réponds de manière COURTE et CONCISE (3-5 phrases maximum)
- N'utilise JAMAIS de markdown (pas de **, #, -, etc.)
- Texte simple et fluide uniquement
- Sois élégant et engageant en français`

    const mistralMessages = [
      { role: "system", content: systemPrompt },
      ...messages.map((msg: any) => ({ role: msg.role === 'user' ? 'user' : 'assistant', content: msg.content }))
    ]

    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: mistralMessages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Mistral API Error:", errorData)
      throw new Error(`Mistral API error: ${response.status}`)
    }

    const data = await response.json()
    const aiResponse = data.choices?.[0]?.message?.content || "Désolé, erreur de traitement."

    return new Response(JSON.stringify({ role: "assistant", content: aiResponse.trim() }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error:", error)
    return new Response(
      JSON.stringify({ role: "assistant", content: "Erreur. Veuillez réessayer." }),
      { headers: { "Content-Type": "application/json" }, status: 500 }
    )
  }
}
