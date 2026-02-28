# ICPC Inter-Agency Platform: Frontend Architecture Blueprint

## 1. Frontend Architecture Overview

The platform is designed as a **Secure Single Page Application (SPA)** using **Next.js** in static/SPA mode to minimize server-side footprint and maximize client-side security control. The architecture follows a **Micro-Frontend-ready Modular Monolith** pattern, ensuring that individual modules (e.g., Knowledge Repository, Executive Dashboard) are decoupled but share a unified secure core.

### Core Stack

- **Framework**: Next.js (SPA Mode) / React 18+
- **Language**: TypeScript (Strict Mode)
- **Styling**: TailwindCSS with a custom Institutional Design System
- **State**: Zustand (In-memory specialized stores)
- **API**: Axios with interceptors for secure token handling and idle detection

## 2. SPA Routing Structure

Routing is managed via a hierarchical, role-aware configuration. No route is accessible without passing through the **High-Security Auth Guard**.

```mermaid
graph TD
    Root[/] --> Public[Public/Login]
    Root --> Private[/app]
    Private --> AuthGuard{Auth Guard}
    AuthGuard --> Dashboard[/dashboard]
    AuthGuard --> Repo[/repository]
    AuthGuard --> Training[/training]
    AuthGuard --> Messaging[/messaging]
    AuthGuard --> Admin[/admin]
    
    subgraph Role Verification
    Dashboard --> ExecView[Executive Dashboard]
    Repo --> ClassifiedView[Classified Viewer]
    Admin --> AuditLog[Activity Audit]
    end
```

## 3. Component Hierarchy Map

Components are categorized by their security sensitivity and reusability.

- **Level 1: Core (Atomic)**: Buttons, Inputs, Labels (Shadowed/Themed).
- **Level 2: Secured Molecules**: Document cards, Notification badges, Secure Inputs.
- **Level 3: Functional Organisms**:
  - `ClassifiedDocumentViewer`: Secure stream-based previewer.
  - `ExecutiveMetricCard`: Role-aware data visualization.
  - `WorkflowTimeline`: Tracking nominations and approvals.
- **Level 4: Secure Layouts**: Main App Shell, Sidebar, Floating Security Monitor.

## 4. Design System Specification: "Institutional Confidence"

A visual language that commands respect and ensures focus.

- **Primary Colors**:
  - `Pitch Black`: #0A0A0A (Main background)
  - `ICPC Emerald`: #008450 (Primary actions, agency identity)
  - `Authority Gold`: #D4AF37 (Status highlights, executive markers)
- **Typography**:
  - Sans-serif: *Inter* or *Public Sans* (Clarity, modern federal feel)
  - Monospace: *JetBrains Mono* (Used for audit logs and classified IDs)
- **Elevation**: Minimal. Subtle glassmorphism (10% opacity) for high-level overlays only.
- **Borders**: Sharp 4px radius (Authoritative, not playful).

## 5. UI State Management Strategy

State is strictly partitioned to prevent data leakage across component boundaries.

- **Global Store**: Session state, User roles, System notifications.
- **Feature Stores**: Module-specific data (e.g., `repositoryStore`, `dashboardStore`).
- **Security Constraint**: Sensitive data is never persisted to `localStorage`. Session tokens are handled in-memory or via HTTP-only cookies managed at the network layer.
- **Idle Timeout**: Zustand listener triggers auto-logout and state purge after 15 minutes of inactivity.

## 6. Role-Based Rendering Strategy

We use a **Permission-Aware Component Wrapper (PACW)** pattern.

```typescript
<PermissionGuard roles={['Director', 'Admin']}>
  <ExecutiveControlPanel />
</PermissionGuard>
```

- **Granular Control**: Components check against a flattened `permissions` array returned in the session.
- **Masking**: If a user has "View Metadata" but not "View Content", the UI renders a "Classified Information Mask" instead of the document body.

## 7. Secure UX Patterns

- **Visual Classification Tags**: Every document/screen has a clear marker (e.g., "SECRET", "PUBLIC", "RESTRICTED").
- **No Direct Deep-Linking**: Internal routes require a valid session; direct URL entry triggers re-auth.
- **Controlled File Preview**: Files are never downloaded directly; they are rendered in a canvas-based viewer to prevent browser caching of sensitive assets.
- **Action Verification**: Sensitive actions (e.g., approving a nomination) require a secondary "Security PIN" or biometric confirmation (simulated via UI logic).

## 8. Accessibility Compliance Strategy (WCAG 2.1 AA)

- **High Contrast**: The "Neon Pitch Black" theme is tested for 7:1 contrast ratios.
- **Keyboard Navigation**: Full focus-trap management for classified document modals.
- **Screen Reader Support**: ARIA labels for all security status indicators.

## 9. Performance Optimization Strategy

- **Module Lazy Loading**: The Admin and Messaging modules are only loaded when accessed.
- **Asset Optimization**: SVG-only iconography to reduce bundle size and prevent malicious image script injection.
- **Edge Caching Awareness**: While SPA, static components are served from the nearest CDN, while the data remains strictly routed through the secure ICPC gateway.

## 10. Frontend Testing Strategy

- **Unit Tests**: Logic-heavy utility functions (Vitest).
- **Component Tests**: Interaction testing for secure forms (React Testing Library).
- **E2E Security Flows**: Automated Playwright tests verifying that non-admin roles cannot resolve admin routes.
- **A11y Testing**: Integrated Axe-core checks in the CI/CD pipeline.

## 11. Required Frontend Modules: Detailed Specification

### 1. Executive Dashboard

- **Purpose**: High-level oversight for agency directors.
- **Key Components**: `AgencyComplianceGauge`, `InvestigationTrendChart`, `PendingApprovalsQuickAction`.
- **Interaction**: Drill-down from global metrics to local agency data (respecting role-depth).
- **Security**: Data is scoped to the executive's jurisdictional clearance level.

### 2. Secure Knowledge Repository Interface

- **Purpose**: Centralized access to anti-corruption resources and intelligence.
- **Key Components**: `EncryptedSearchInput`, `AdvancedFilterSidebar`, `ResourceGrid`.
- **Interaction**: Metadata browsing with "Access Request" triggers for restricted items.

### 3. Classified Document Viewer

- **Purpose**: Zero-trust viewing of sensitive files.
- **Key Components**: `CanvasSecureRenderer`, `WatermarkOverlay`, `AccessAuditStamp`.
- **Interaction**: No-right-click, no-print, dynamic watermarking with viewer's ID.

### 4. Training Opportunities Portal

- **Purpose**: Management and browsing of inter-agency training.
- **Key Components**: `TrainingCalendar`, `CourseDetailPanel`, `EligibilityBadge`.
- **Interaction**: Direct "Nominate" action integration for qualified users.

### 5. Nomination & Approval Workflow Screens

- **Purpose**: Formalized multi-stage approval for training/access.
- **Key Components**: `WorkflowSteppers`, `DigitalSignaturePad`, `ConflictOfInterstDeclaration`.
- **Interaction**: Stage-gated forms that only enable "Next" after mandatory security checks.

### 6. Secure Messaging Interface

- **Purpose**: Encrypted communication between officers.
- **Key Components**: `MessageThread`, `FileAttachmentShield`, `EncryptedStatusIndicator`.
- **Interaction**: E2EE simulation; messages are rendered from an encrypted payload decrypted client-side.

### 7. Notification Center

- **Purpose**: Real-time alerts for critical system events.
- **Key Components**: `PriorityAlertFeed`, `SystemNoticeBanner`, `ActionableToast`.
- **Interaction**: Direct links to workflow items or document access requests.

### 8. Admin Control Panel

- **Purpose**: System configuration and user management.
- **Key Components**: `RoleAssignmentMatrix`, `IPWhitelistingControl`, `AuditThresholdSlider`.
- **Interaction**: Real-time permission updates that broadcast to active sessions for immediate re-evaluation.

### 9. User Profile & Security Settings

- **Purpose**: Personal security management.
- **Key Components**: `MFAConfigurationSummary`, `ActiveSessionsList`, `SecurityKeyManagement`.
- **Interaction**: Force-logout of other devices and security history review.

### 10. Activity & Audit Log Viewer

- **Purpose**: Immutable transparency.
- **Key Components**: `AuditTable`, `ExportSecureCSV`, `EventDetailModal`.
- **Interaction**: Searchable, tamper-evident log stream showing every read/write action.

## 12. UI Scalability Roadmap

- **Phase 1**: Core Shell & Document Repository.
- **Phase 2**: Messaging & Nomination Workflows.
- **Phase 3**: Executive Dashboards & Advanced Analytics.
- **Phase 4**: International Oversight API Integration & External Portal.

## 13. Visual Identity Summary: "The Digital Bastion"

The platform represents the **ICPC's Digital Bastion**. It is a tool for intelligence and integrity.

- **The Aesthetic**: *Neon Pitch Black* background suggests a secure, focused environment. *Emerald* accents reflect the Nigerian federal identity and the vitality of the mission. *Gold* highlights are reserved for executive status and verified data markers.
- **The Feel**: The interface does not "wow" with animations; it "reassures" with stability, precision, and a relentless focus on the mission of anti-corruption. It is modern but conservative, elegant but strictly functional.
