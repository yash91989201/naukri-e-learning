# Draft: Naukri Prototype Migration

## Requirements (confirmed)
- Migrate ALL 9 prototype routes from /tmp/naukri-prototype to /home/yash/projects/naukri-e-learning
- Ensure reveal animations work via IntersectionObserver
- Fix any build/type errors
- Build must pass

## Current State Assessment

### What EXISTS in Target Project
| Route | File | Status | Completeness |
|-------|------|--------|--------------|
| `/` (Home) | `routes/index.tsx` | EXISTS | ~75% - Missing FAQ section, "How It Works" section, Featured Courses, Blog section |
| `/courses` | `routes/courses.tsx` | EXISTS | ~60% - Missing sidebar filters, category scrollbar with "All Categories" button |
| `/contact` | `routes/contact.tsx` | EXISTS | ~50% - Missing course selector feature with search/filter |
| `/about` | `routes/about.tsx` | EXISTS | ~40% - Missing hero section, learning methodology, core values, reveals |
| `/enterprise` | `routes/enterprise.tsx` | EXISTS | ~50% - Missing hero grid, admin dashboard mockup, logos section |
| `/process` | `routes/process.tsx` | EXISTS | ~60% - Missing hero section, timeline/overview, exam process, 10-step roadmap |
| `/help` | `routes/help.tsx` | EXISTS | ~50% - Missing hero search, quick categories, support options |
| `/careers` | `routes/careers.tsx` | EXISTS | ~50% - Missing hero, perks section, enhanced job cards |
| `/blog` | `routes/blog.tsx` | EXISTS | ~50% - Missing featured post, newsletter section |

### Components Status
| Component | Status | Notes |
|-----------|--------|-------|
| threed-tilt-card.tsx | EXISTS | Complete |
| course-card.tsx | EXISTS | Complete |
| navbar.tsx | EXISTS | Complete |
| footer.tsx | EXISTS | Complete |
| loader.tsx | EXISTS | Complete |

### Critical Missing Features
1. **ScrollAndAnimationHandler** - Current implementation in `__root.tsx` does NOT re-trigger on route changes
2. **Reveal Animations** - CSS exists but IntersectionObserver doesn't re-initialize on navigation

## Technical Decisions

### ScrollAndAnimationHandler Fix
- Prototype uses `useLocation()` pathname dependency to re-run observer
- Current implementation runs only once on mount
- Need to add `useLocation()` from TanStack Router and reinitialize observer on route changes

### Page Completeness Strategy
- Port missing sections from prototype to each route file
- Preserve TanStack Router structure (`createFileRoute`, `RouteComponent`)
- Convert react-router-dom `Link` to TanStack `Link`
- Add appropriate `reveal`, `reveal-left`, `reveal-right`, `reveal-scale` classes

## Research Findings
- Build passes successfully
- No TypeScript errors detected
- CSS already has all reveal animation classes
- Constants file is complete with all data

## Open Questions
- NONE - All requirements clear

## Scope Boundaries
- **INCLUDE**: 
  - Fix IntersectionObserver route change handling
  - Port all missing page sections
  - Ensure reveal animations trigger correctly
  - Verify build passes
- **EXCLUDE**:
  - Dashboard page (separate feature)
  - New components beyond what exists
  - Backend/API changes
