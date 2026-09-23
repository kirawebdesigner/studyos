# StudyOS Coding Guardrails

- Keep API keys server-only; never expose service-role or provider keys to the browser.
- Validate request bodies at route boundaries and return actionable errors.
- Keep Jev deterministic grading separate from Gemini generation.
- Prefer typed domain objects and small server functions.
- Use accessible labels, focus states, semantic landmarks, and reduced-motion support.
- Never claim provider features are live until verified against the installed SDK.
