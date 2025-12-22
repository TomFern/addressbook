# Claude Code Documentation

## Semaphore CI/CD

See [.semaphore/MCP.md](.semaphore/MCP.md) for Semaphore tool usage.

Key rules:
- Cache org/project IDs in `.semaphore/config.json`
- Download test results once (URLs expire)
- Use `mode="summary"` to reduce API calls
