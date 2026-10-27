export type StoryStatus = 'discovered' | 'verified' | 'awaiting_approval' | 'approved' | 'drafting' | 'review' | 'ready';
export type Story = { id: string; title: string; summary: string; sourceUrl: string; status: StoryStatus; createdAt: string; angles: string[]; approvedAngle?: string; draft?: string };
export type AgentName = 'researcher' | 'chief' | 'writer';
export type AgentRun = { id: string; storyId: string; agent: AgentName; model: string; startedAt: string; finishedAt?: string; status: 'queued' | 'running' | 'succeeded' | 'failed'; error?: string };
