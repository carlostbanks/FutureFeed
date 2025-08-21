# BillingCard Component - Carlos Banks

Goal: Build a reusable React component for pricing plans with Material-UI and accessibility support.
![Desktop view of billing cards](https://github.com/user-attachments/assets/0f3f85df-b7f1-4497-b1f1-aae27c01b4d4)


## Approach

Built a responsive billing card component using React + Vite + TypeScript and Material-UI. Used CSS Grid for layout (mobile → tablet → desktop), custom Material-UI theme with typography and color palette, and proper accessibility with ARIA labels and keyboard navigation.

Key decisions:
- TypeScript const objects instead of enums (had project config issue)
- `sx` prop styling over external CSS
- Fixed-position notifications to prevent layout shifts
- Progressive feature lists ("Everything in Basic, plus:")

## Trade-offs

**MUI Grid component**: Had TypeScript interface conflicts with props, so used native CSS Grid instead - simpler and more direct control.

**Notification UX**: Fixed positioning eliminates content jumping but needs z-index management.

**TypeScript enums**: Project config rejected standard enum syntax (`erasableSyntaxOnly` error), so used const objects with type assertions for type safety.

## AI Assistance

**Anthropic Claude Sonnet 4.0**: Component structure, debugging TypeScript errors, and layout issues.

**Google Gemini 2.5 Flash**: General development help and problem-solving.

**Example prompt**: "The Enterprise card causes content to shift up and down when clicked - how do I fix this?"
**Solution**: Added `alignItems: 'start'` to prevent grid realignment.

AI was most helpful for accessibility implementation and fixing layout issues during development.
