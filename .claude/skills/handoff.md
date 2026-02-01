# Handoff Skill

> **Last updated:** 2026-02-01
> **CRITICAL:** When user asks for a "handoff" or to "create handoff", follow this structure exactly.

## When to Use

- Context window getting full
- User taking a break
- Complex task spanning sessions
- Before risky operations
- User explicitly asks for handoff

---

## Step 1: Gather Context

Run these commands first:

```bash
git branch --show-current
git status --short
git log --oneline -10
git diff --stat
git stash list
```

---

## Step 2: Create Handoff Document

Save to `docs/handoffs/YYYY-MM-DD-<topic>.md`:

```markdown
# Handoff: [Topic]

**Date**: YYYY-MM-DD HH:MM
**Branch**: `branch-name`
**Goal**: [What we were accomplishing]

---

## Original Request

> [User's original request verbatim]

[Any clarifications]

---

## Work Completed

### Files Created
- `path/to/file.ts` - [Purpose]

### Files Modified
- `path/to/file.ts:42-67` - [What changed]

### Commands Run
```bash
pnpm install some-package
```

### Decisions Made
1. **[Decision]**: [Reasoning]

### Discoveries
- [Important finding]

---

## Work Remaining

### Next Steps
1. [ ] [Task] - `file:line` reference
2. [ ] [Task]

### Blocked
- [ ] [Task] - Blocked by: [reason]

---

## What Didn't Work

1. **[Approach]**: [Why it failed]
   - Error: `[message]`

---

## Critical Context

### Key Files
1. `path/to/file.ts` - [Why important]

### Environment Notes
- [Env vars, services running]

### Assumptions
- [Things assumed but not verified]

---

## Current State

- **Compiles**: ✅ / ❌
- **Tests Pass**: ✅ / ❌ / N/A
- **Lint Clean**: ✅ / ❌

### Uncommitted Changes
```
[git status output]
```

### Temporary Code
- `file:line` - `// TODO: remove debug`

---

## Resume Instructions

1. `git checkout branch-name`
2. Read: [key files]
3. Start with: [first action]
4. Run: `pnpm run lint && pnpm run build`

---

## Related

- Roadmap: `.claude/ROADMAP.md`
- PR: [URL if applicable]
- Issue: #[number if applicable]
```

---

## Quick Handoff (For Simpler Tasks)

```markdown
# Quick Handoff: [Topic]

**Branch**: `branch-name`
**Status**: [In progress / Blocked]

## Done
- [x] Thing 1

## Next
- [ ] Thing 2 (`file:line`)

## Key Files
- `path/to/file.ts`

## Notes
- [Important context]
```

---

## After Creating Handoff

1. Ensure `docs/handoffs/` folder exists
2. Save the handoff document
3. Optionally commit:
   ```bash
   git add docs/handoffs/
   git commit -m "docs: add handoff for [topic]"
   ```
4. Tell user where saved and how to resume

---

## Resuming From Handoff

When user provides a handoff file:

1. Read the handoff file
2. Verify state matches (branch, git status)
3. Read key files listed
4. Summarize what's done/remaining
5. Confirm before proceeding
6. Start with first "Work Remaining" item
