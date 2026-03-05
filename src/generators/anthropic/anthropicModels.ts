export const enum AnthropicTextGenModel {
	CLAUDE_HAIKU = "claude-haiku-4-5",
	CLAUDE_SONNET = "claude-sonnet-4-6",
}

export const anthropicTextGenModels: Record<AnthropicTextGenModel, string> = {
	[AnthropicTextGenModel.CLAUDE_HAIKU]: "Claude Haiku",
	[AnthropicTextGenModel.CLAUDE_SONNET]: "Claude Sonnet",
};
