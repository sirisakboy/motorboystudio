# MotorBoy Studio Architecture & Conventions

## Core Architectural Principles
This project strictly follows a decoupled architectural pattern to ensure scalability, maintainability, and ease of future expansion (e.g., AI services).

### 1. Frontend (View & UX Layer)
- **Technology:** React (TypeScript), Vite.
- **Responsibility:** User Interface rendering, UX interactions, state management, and communication with the Backend API.
- **Constraint:** NO direct file parsing or heavy computation. All data must be fetched from the backend.

### 2. Backend (Analysis & Logic Layer)
- **Technology:** PHP or Python API (TBD).
- **Responsibility:** BIN analysis, XDF generation, repository management, and data orchestration.
- **Constraint:** Must provide a clean API interface for the frontend to consume.

### 3. Database (Persistence Layer)
- **Responsibility:** Persistence of BIN files, XDF structures, XML/CSV metadata, and scan/edit history.
- **Constraint:** Must be the single source of truth for application data.

## Universal Component Library Strategy
To ensure consistency across multiple platforms (React/Web, Python/Tk, Flutter), we define components by their **Functional Contracts** (Inputs/Props, Outputs/Events), not by their implementation.

- **Definition:** Each component must have a clearly defined specification (Props, Events, Styling Guidelines).
- **Implementation:** Framework-specific implementations must adhere to the defined specification.
- **Goal:** Shared UX language across all UI layers.

## Animation System Conventions
Animations must strictly serve functional purposes, enhancing user awareness of system states without compromising professionalism.

- **Timing:** 120–180 ms for all transitions.
- **Easing:** `Ease-In-Out` as the default.
- **Accessibility:** All animations must be toggleable via Settings.
- **Purpose-Driven:** Animations must signify system status (e.g., Flashing for ECU writes, Glow for active connections).
- **Aesthetic:** Avoid intrusive effects; focus on smooth transitions (Fade, Slide) and context-aware feedback (e.g., Log auto-scrolling).

---
## Development Conventions
- Follow the modular directory structure defined in the project root.
- Keep business logic OUT of React components (`src/components` should only handle UI/UX).
- API interaction logic belongs in `src/services`.
