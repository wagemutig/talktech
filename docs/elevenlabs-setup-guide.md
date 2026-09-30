# ElevenLabs TALK-TECH Agent Setup Guide

## Step 1: Create Account & Get API Key

1. Go to https://elevenlabs.io and sign up (or log in)
2. Navigate to **Profile → API Keys** (top right menu)
3. Click **"Create API Key"**
4. Name it `talktech-mvp`
5. Copy the key (starts with `sk_...`)

---

## Step 2: Create the Mr. Barker Agent

### In the ElevenLabs Dashboard:

1. Go to **ElevenAgents → Create Agent** (or https://elevenlabs.io/app/agents)
2. Click **"Create from scratch"**
3. Name: `Mr. Barker — Technical Customer`
4. Description: `English conversation partner for technical English training`

### Configure Tab by Tab:

#### **Agent Behavior**

Paste the system prompt from `voice-agent-design.md` (Mr. Barker section).

**First message** (greeting):
```
Hello there! I'm Mr. Barker from Meridian Manufacturing. I'm here to evaluate your gearbox assembly for a potential partnership. Could you walk me through the drawing — let's start with what you see at position number 1?
```

**Language**: English

#### **Voice & Language**

- **Voice**: Select a British male voice. Recommended:
  - `Adam` (professional, warm)
  - `Brian` (older, authoritative)
  - Or clone your own if you have a preferred voice
- **Stability**: 0.5 (balanced — not too robotic, not too variable)
- **Clarity + Similarity Enhancement**: 0.7
- **Style**: 0.3 (slightly expressive but professional)
- **Speed**: 1.0 (normal pace)

#### **LLM Selection**

- **Model**: `GPT-4o` (best conversation quality) or `GPT-4o-mini` (cheaper, still good)
- **Temperature**: 0.7 (creative enough for natural conversation, structured enough to follow rules)
- **Max tokens**: 300 (keep responses concise for voice)

#### **Knowledge Base** (Optional for MVP)

Skip for now — the component list is in the system prompt. Add later for richer technical context.

#### **Tools** (For Bloom's Engine — Advanced)

Skip for MVP. The adaptive logic in the system prompt handles basic level progression. Add webhook tools later for precise tracking.

#### **Guardrails**

- **Max duration**: 15 minutes (hard cap)
- **Idle timeout**: 30 seconds
- **End call phrases**: "Thank you, that gives me a clear picture", "I'll take this back to my team"

---

## Step 3: Test the Agent

1. Click **"Test Agent"** in the dashboard
2. Have a conversation — try:
   - Answering K1 correctly (should escalate to K2)
   - Being vague (should get natural confusion follow-up)
   - Answering in German (should get English-only redirect)
3. Check the **transcript** after the call

---

## Step 4: Deploy Web Widget (MVP)

### Get the Widget Embed Code

1. In your agent settings, go to **Deploy → Web**
2. Click **"Create Widget"**
3. Configure:
   - **Widget name**: `talktech-conversation`
   - **Auto-open**: Off (user clicks to start)
   - **Start button text**: "Start Technical Conversation"
   - **Color**: Match your brand
4. Copy the **embed code** (looks like):
```html
<script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
<elevenlabs-convai agent-id="YOUR_AGENT_ID"></elevenlabs-convai>
```

---

## Step 5: Create Astro Page (MVP Web Client)

Create `src/pages/conversation.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
const ELEVENLABS_AGENT_ID = import.meta.env.ELEVENLABS_AGENT_ID;
---

<Layout title="TALK-TECH — Technical Conversation">
  <main class="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
    <div class="max-w-2xl w-full text-center">
      <h1 class="text-4xl font-bold text-white mb-4">Technical English Practice</h1>
      <p class="text-slate-400 mb-8">
        You are a technical specialist. Mr. Barker, a UK business partner, 
        wants to understand your gearbox assembly. Explain it in English.
      </p>
      
      <div class="glass rounded-2xl p-8 border border-white/10">
        <div id="widget-container" class="flex justify-center">
          <elevenlabs-convai agent-id={ELEVENLABS_AGENT_ID}></elevenlabs-convai>
        </div>
        
        <div class="mt-6 text-sm text-slate-500">
          <p>💡 Tip: Speak clearly. Mr. Barker will ask follow-up questions if something is unclear.</p>
        </div>
      </div>
    </div>
  </main>
</Layout>

<script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
```

Add to `.env`:
```
ELEVENLABS_AGENT_ID=your_agent_id_here
```

---

## Step 6: Create Ms. Goodwill Agents (Later)

Repeat Step 2 for:
1. **Ms. Goodwill — Briefing** (German, 2-min scenario setup)
2. **Ms. Goodwill — Reflection** (Mixed DE/EN, transcript analysis)

Use the prompts from `voice-agent-design.md`.

---

## Pricing Check

| Tier | Monthly Cost | Characters | Suitable For |
|------|-------------|------------|--------------|
| Free | $0 | 10k | Testing only |
| Starter | $5 | 100k | ~5-10 sessions |
| Creator | $22 | 500k | ~50 sessions |
| Pro | $99 | 2M | Classroom scale |

For 24 students × ~15 min = estimate **500k-1M chars/month** → **Creator or Pro tier**.

---

## Next Steps After MVP

1. **Add Bloom's backend**: Supabase Edge Function for precise level tracking
2. **Add transcript storage**: Save conversations for teacher review
3. **Add teacher dashboard**: Class overview, progress tracking
4. **Add Ms. Goodwill briefing/reflection**: Pre/post conversation agents
5. **Mobile optimization**: PWA for phone-based practice

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Agent doesn't follow 10-question limit | Add stronger emphasis in system prompt: "CRITICAL: After exactly 10 questions, you MUST conclude." |
| Agent breaks character | Add guardrail: "If asked who you are, say 'I'm Mr. Barker from Meridian Manufacturing.'" |
| Too slow/laggy | Switch LLM to GPT-4o-mini, or check "Optimize for latency" in voice settings |
| Not adaptive enough | Add tool/webhook to backend for explicit level tracking |
| Student speaks German, agent responds in English | Strengthen rule: "If you detect German, ONLY say: 'Sorry, I didn't catch that — could you say that in English?'" |
