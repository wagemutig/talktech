import os
import sys
import json
import requests

def create_elevenlabs_agent(api_key, name, system_prompt, first_message, voice_id="XB0fDUnXU5powFXDhCwa", model="gpt-4o"):
    """
    Create an ElevenLabs Conversational AI agent via API.
    
    Args:
        api_key: Your ElevenLabs API key (sk_...)
        name: Agent name
        system_prompt: Full system prompt text
        first_message: First message the agent says
        voice_id: ElevenLabs voice ID (default: Adam - British male)
        model: LLM backend (gpt-4o, gpt-4o-mini, etc.)
    
    Returns:
        Agent ID if successful
    """
    
    url = "https://api.elevenlabs.io/v1/convai/agents/create"
    
    headers = {
        "xi-api-key": api_key,
        "Content-Type": "application/json"
    }
    
    payload = {
        "conversation_config": {
            "agent": {
                "prompt": {
                    "prompt": system_prompt,
                    "llm": model,
                    "temperature": 0.7,
                    "max_tokens": 300
                },
                "first_message": first_message,
                "language": "en"
            },
            "tts": {
                "voice_id": voice_id,
                "model_id": "eleven_turbo_v2_5",
                "stability": 0.5,
                "similarity_boost": 0.7,
                "style": 0.3,
                "speed": 1.0
            },
            "asr": {
                "quality": "high"  # Use high quality STT
            },
            "turn": {
                "turn_timeout": 7,  # Seconds to wait for user to start speaking
                "silence_duration": 1.5,  # Silence before agent considers turn over
                "interrupt_duration": 0.3  # Minimum speech to trigger barge-in
            },
            "conversation": {
                "max_duration_seconds": 900,  # 15 min max
                "client_disconnect_timeout_seconds": 30
            }
        },
        "name": name,
        "description": "Technical English conversation training agent"
    }
    
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        
        result = response.json()
        agent_id = result.get("agent_id")
        
        print(f"✅ Agent created successfully!")
        print(f"   Name: {name}")
        print(f"   Agent ID: {agent_id}")
        print(f"   LLM: {model}")
        print(f"   Voice: {voice_id}")
        print()
        print(f"   Widget embed code:")
        print(f'   <elevenlabs-convai agent-id="{agent_id}"></elevenlabs-convai>')
        print()
        print(f"   Direct link: https://elevenlabs.io/app/talk-to-agent/{agent_id}")
        
        return agent_id
        
    except requests.exceptions.HTTPError as e:
        print(f"❌ Failed to create agent: {e}")
        print(f"   Response: {e.response.text}")
        return None
    except Exception as e:
        print(f"❌ Error: {e}")
        return None


def list_available_voices(api_key):
    """List available voices to choose from."""
    url = "https://api.elevenlabs.io/v1/voices"
    headers = {"xi-api-key": api_key}
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        voices = response.json().get("voices", [])
        print("\n🎙️  Available Voices:")
        print("-" * 50)
        
        for voice in voices:
            vid = voice.get("voice_id", "")
            name = voice.get("name", "")
            labels = voice.get("labels", {})
            accent = labels.get("accent", "")
            gender = labels.get("gender", "")
            age = labels.get("age", "")
            
            if accent and gender:
                print(f"   {vid:<30} {name:<20} ({accent}, {gender}, {age})")
            else:
                print(f"   {vid:<30} {name}")
                
    except Exception as e:
        print(f"❌ Could not list voices: {e}")


def main():
    """Run the setup script."""
    
    # Get API key from environment or prompt
    api_key = os.environ.get("ELEVENLABS_API_KEY")
    
    if not api_key:
        print("🔑 Enter your ElevenLabs API key (starts with sk_...):")
        api_key = input().strip()
    
    if not api_key.startswith("sk_"):
        print("❌ Invalid API key format. Should start with 'sk_'")
        sys.exit(1)
    
    print("\n🚀 TALK-TECH ElevenLabs Agent Setup")
    print("=" * 50)
    
    # List voices first
    list_available_voices(api_key)
    
    # Mr. Barker system prompt
    barker_prompt = """You are Mr. Barker, an experienced international business partner from a UK manufacturing firm. You are technically savvy but not the expert. You're evaluating a gearbox assembly from a Swiss vocational school for potential partnership.

Your job: Ask the technical specialist (the student) to explain the engineering drawing in English. You are patient, curious, and slightly demanding. When explanations are vague, you naturally ask for clarification — but you never correct grammar directly.

CONVERSATION RULES:
- Exactly 10 questions total
- Questions 1-2: K1 level (identify/name components)
- Questions 3-10: adaptive based on answer quality
- After question 10, conclude naturally: "Thank you, that gives me a clear picture. I'll take this back to my team."

BLOOM'S LEVELS:
K1 Knowledge: "Which component is at position 5?" / "What is the part at position 3 called?"
K2 Understanding: "Why do we use a radial shaft seal rather than an O-ring?" / "What's the purpose of the breather vent?"
K3 Application: "The gearbox is overheating. Based on the drawing, what could be the cause?" / "The output shaft vibrates excessively. Which component is likely worn?"

ADAPTIVE DIFFICULTY:
- Strong answer (correct terminology, clear, confident) → level UP
- Adequate answer (partial, hesitant) → stay at level
- Weak answer (incorrect, vague, silent >5s) → level DOWN
- Never skip levels. Never go below K1.

NATURAL CONFUSION RESPONSES (use when explanation is imprecise):
- "I see the part on the drawing, but could you clarify its exact function?"
- "What kind of material are we talking about — aluminium, steel, something else?"
- "How does that component interact with the one next to it?"
- "Could you walk me through that in a bit more detail?"
- "I'm not familiar with that term — could you describe what you mean?"

COMPONENT POOL (positions 1-12):
1 Housing, 2 Input shaft, 3 Output shaft, 4 Spur gear, 5 Bearing, 6 Radial shaft seal, 7 Oil drain plug, 8 Breather vent, 9 Hex socket head screw, 10 Parallel key, 11 Circlip, 12 Gasket. Randomly select from unused components.

VOICE & TONE:
- Moderate pace, patient. Pause 2-3s after student answers.
- Professional but warm. British English.
- Minimal encouragement: occasional "That makes sense" or "Good, I'm following you."
- NEVER say "correct/incorrect", "good job", "well done", or mention Bloom's levels.

GUARDRAILS:
- Stay in character as Mr. Barker. Never break character.
- English only. If student speaks German: "Sorry, I didn't catch that — could you say that in English?"
- You ASK, you don't EXPLAIN. If wrong, ask a follow-up that exposes the gap.
- No meta-commentary about assessment, levels, or pedagogy."""

    barker_first = "Hello there! I'm Mr. Barker from Meridian Manufacturing. I'm here to evaluate your gearbox assembly for a potential partnership. Could you walk me through the drawing — let's start with what you see at position number 1?"
    
    print("\n🎙️  Select a voice for Mr. Barker (British male recommended):")
    print("   Default: XB0fDUnXU5powFXDhCwa (Adam - British professional)")
    print("   Or enter a different voice ID from the list above:")
    voice_input = input("   Voice ID [press Enter for default]: ").strip()
    voice_id = voice_input if voice_input else "XB0fDUnXU5powFXDhCwa"
    
    print("\n📋 Creating Mr. Barker agent...")
    agent_id = create_elevenlabs_agent(
        api_key=api_key,
        name="Mr. Barker — Technical Customer",
        system_prompt=barker_prompt,
        first_message=barker_first,
        voice_id=voice_id,
        model="gpt-4o"
    )
    
    if agent_id:
        print("\n" + "=" * 50)
        print("✅ Setup complete!")
        print(f"\n   Save this Agent ID: {agent_id}")
        print("\n   Next steps:")
        print("   1. Test the agent at: https://elevenlabs.io/app/talk-to-agent/" + agent_id)
        print("   2. Add the widget to your Astro site (see setup guide)")
        print("   3. Run a test conversation and check the transcript")
        
        # Save to file
        with open("elevenlabs_agent_id.txt", "w") as f:
            f.write(f"Agent ID: {agent_id}\n")
            f.write(f"Name: Mr. Barker — Technical Customer\n")
            f.write(f"Voice: {voice_id}\n")
            f.write(f"Created: {__import__('datetime').datetime.now().isoformat()}\n")
        
        print("\n   💾 Agent ID saved to: elevenlabs_agent_id.txt")
    else:
        print("\n❌ Setup failed. Check your API key and try again.")
        sys.exit(1)


if __name__ == "__main__":
    main()
