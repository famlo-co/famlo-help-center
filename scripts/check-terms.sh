#!/usr/bin/env bash
# Terminology and disclosure checker for docs/.
#
# Two jobs:
#   1. BANNED  — words that must never appear publicly. Exit 1.
#   2. STALE   — retired product vocabulary. Warn only, so a rewrite in progress
#                does not block the build.
#
# Frontmatter `slug:` and `keywords:` lines are exempt: the how-to pages rank on
# question phrasing, which legitimately uses words the product no longer says.

set -uo pipefail
cd "$(dirname "$0")/.."
FAIL=0

# Strip exempt lines before matching.
# docs/ and blog/ (the What's New posts); releases/ is the frozen archive.
scan() { grep -rn --include='*.md' --include='*.mdx' -iE "$1" docs/ blog/ 2>/dev/null \
         | grep -viE ':[[:space:]]*(slug|keywords):' \
         | grep -viE '^\S+:[0-9]+:>[[:space:]]*Formerly called'; }

echo "== banned =="
# Deliberately does NOT include bare "react" or "stimulus": both are ordinary
# English in these docs ("react to a message", "sensory stimulus"), and a linter
# that cries wolf gets ignored. Framework mentions are caught with context.
BANNED='\b(ruby on rails|next\.?js|supabase|postgres(ql)?|hotwire)\b'
BANNED="$BANNED"'|\bon rails\b|\brails (app|application|console|framework)\b'
BANNED="$BANNED"'|\breact\s*[0-9]|\bstimulus[ _-]?(controller|js)\b|\bturbo[ _-]?(drive|frame|stream)\b'
BANNED="$BANNED"'|\b(homeschool.?hive|homeschoolhive)\b'
BANNED="$BANNED"'|\b(re-?built the|re-?write of the platform|re-?platform|new platform|relaunch)\b'
BANNED="$BANNED"'|\bgroup[ -]?chats?\b'
# Internal names that mean nothing to a reader and describe the system.
BANNED="$BANNED"'|\bstorefront\b|\bschool os\b|\bdeploy\.yml\b|\bcloudfront\b|\bapns\b|\b[a-z]+_(enabled|public|live)\b'
# Retired money claims: the old plans and fee, and "free, always" for families.
BANNED="$BANNED"'|\b(invoicing|platform) plan\b|capped at \$15|\bfamilies pay (famlo )?\$0\b|free for (you|families),? always'
# Migration wording.
BANNED="$BANNED"'|\bcutover\b|\bmigrat(ed|ion) (to|from) (the )?(new|old) (platform|site|app)\b'
# Features that are switched off in production: documenting them promises
# something nobody can use. Lift a line only when the feature ships.
BANNED="$BANNED"'|\bcurriculum library\b|\blibrary membership\b|\bquiet hours\b|\bmark all read\b'
# Support is the ticket desk only (owner decision, 2026-10); no address.
BANNED="$BANNED"'|support@(support\.)?famlo\.co'
if out=$(scan "$BANNED"); [ -n "$out" ]; then
  echo "$out" | sed 's/^/  /'
  echo "  ^ these must never be published. See .claude/rules."
  FAIL=1
else
  echo "  clean"
fi

echo
echo "== stale vocabulary (warning only) =="
# "Custom" is a real access preset now, so "custom role" is no longer stale.
# "watchlist" alone is not stale either: "Saved & watchlist" is a page title.
STALE='\bgroup leaders?\b|\bRSVPs\b|\bwatchlist tab\b|\bmembership tiers?\b|\bsocial feed\b'
STALE="$STALE"'|\bplatform fee\b|\bevent managers?\b|\bbilling managers?\b|\bmember managers?\b|\btake roll\b'
STALE="$STALE"'|\bTickets & Pricing\b|\bseries pass\b|\bmessage access\b|\bPayouts page\b|\bEdit organization\b|\bhub\b'
if out=$(scan "$STALE"); [ -n "$out" ]; then
  echo "$out" | sed 's/^/  /' | head -30
  n=$(echo "$out" | wc -l | tr -d ' ')
  echo "  ($n occurrence(s) — not blocking)"
else
  echo "  clean"
fi

echo
[ "$FAIL" -eq 0 ] && echo "PASS" || echo "FAIL — banned terms present"
exit $FAIL
