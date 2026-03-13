#!/bin/bash
# PostToolUse hook — runs after Write/Edit tool calls on .tsx/.ts/.jsx files
# Pipes lint errors back into the agentic loop so Claude can self-correct

TOOL="$1"        # tool name passed by Claude Code
FILE="$2"        # file path passed by Claude Code

# Only lint TypeScript/React source files
if [[ "$FILE" == *.tsx || "$FILE" == *.ts || "$FILE" == *.jsx || "$FILE" == *.js ]]; then
  cd "$(git rev-parse --show-toplevel)" 2>/dev/null || exit 0
  OUTPUT=$(yarn lint --quiet 2>&1)
  EXIT_CODE=$?
  if [ $EXIT_CODE -ne 0 ]; then
    echo "ESLint found issues after editing $FILE:"
    echo "$OUTPUT"
    exit 2  # exit 2 signals Claude Code to surface this as feedback
  fi
fi
