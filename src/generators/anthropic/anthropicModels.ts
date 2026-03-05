export const enum AnthropicTextGenModel {
	CLAUDE_SONNET_4 = "claude-sonnet-4-20250514",
	CLAUDE_OPUS_4 = "claude-opus-4-20250514",
	CLAUDE_HAIKU_4_5 = "claude-haiku-4-5-20251001",
	CLAUDE_SONNET_4_5 = "claude-sonnet-4-5-20250929",
	CLAUDE_OPUS_4_5 = "claude-opus-4-5-20251101",
}

export const anthropicTextGenModels: Record<AnthropicTextGenModel, string> = {
	[AnthropicTextGenModel.CLAUDE_SONNET_4]: "Claude Sonnet 4",
	[AnthropicTextGenModel.CLAUDE_OPUS_4]: "Claude Opus 4",
	[AnthropicTextGenModel.CLAUDE_HAIKU_4_5]: "Claude Haiku 4.5",
	[AnthropicTextGenModel.CLAUDE_SONNET_4_5]: "Claude Sonnet 4.5",
	[AnthropicTextGenModel.CLAUDE_OPUS_4_5]: "Claude Opus 4.5",
};
