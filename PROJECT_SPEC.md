# Project Brief: Financial Tracker App (Hybrid Architecture)

**1. Project Core**
I am building a cross-platform mobile application named **"Pundi"**, a Financial Tracker to manage incomes, expenses, and transactions.

* **Framework:** React Native + Expo (Managed Workflow)
* **UI Framework:** Tamagui
* **Navigation:** Expo Router (File-based)
* **Primary Color:** `#136daf`
* **Typography:** Inter
* **Icons:** Lucide React Native

**2. Data Architecture (Hybrid/Offline-First)**
The app must work seamlessly without internet.

* **Local DB:** `expo-sqlite` for immediate data persistence.
* **Cloud DB:** **Supabase** (PostgreSQL) for backup, sync, and Auth.
* **Sync Logic:** Writes go to SQLite first. A background sync service pushes local changes to Supabase when online.

**3. Database Schema (Postgres & SQLite)**
Ensure both local and cloud schemas are synchronized:

* **`profiles`**: `id (UUID)`, `email (Text)`, `full_name (Text)`, `avatar_url (Text)`
* **`categories`**: `id (UUID)`, `user_id (UUID)`, `name (Text)`, `type ('income' | 'expense')`, `icon (Text)`, `color (Text)`
* **`transactions`**: `id (UUID)`, `user_id (UUID)`, `category_id (UUID)`, `amount (Decimal)`, `description (Text)`, `date (Timestamp)`

**4. State Management (Zustand)**
Use **Zustand** for global state to ensure a "snappy" UI. The store should handle:

* **Global Balance:** Total income, total expense, and net balance.
* **Transaction Cache:** Temporary storage for the latest transactions to avoid redundant DB calls.
* **Sync Status:** Tracking whether data is currently syncing or pending.
* **User Session:** Managing current user profile data.

**5. Folder Structure (Feature-Based Modular)**

```text
/app                 # Routing (Expo Router)
  /(auth)            # Login, Register, Forgot Password
  /(tabs)            # Main App (Home, Transactions, Profile)
/src
  /features          # Domain-driven modules
    /auth            # Auth logic, hooks, and UI
    /tracker         # Transaction CRUD, Charts, Logic
    /wallet          # Balance and Account management
  /components        # Global UI (Buttons, Inputs, Cards)
  /lib               # Third-party config (supabase.ts, sqlite.ts)
  /hooks             # Shared hooks (useSync, useConnectivity)
  /store             # Zustand store (useTransactionStore.ts, useAuthStore.ts)
  /utils             # Formatting, Math, Date helpers

```

**6. Design & UI Guidelines**

* Use **Tamagui** for all styling with `#136daf` as the primary token.
* Implement **Dark/Light Mode** support.
* Use **Lucide Icons** with `size={24}` and `strokeWidth={2}`.

**7. Code Quality & Standards**

* **Naming Conventions:**
  * Use **descriptive, self-explanatory** variable and function names.
  * Avoid single-letter variables except for common iterators (`i`, `j`) or well-known conventions (`x`, `y` for coordinates).
  * Function names should clearly describe what they do: `calculateTotalBalance()` not `calc()`.
  * Boolean variables should use `is`, `has`, `should` prefixes: `isLoading`, `hasError`, `shouldSync`.

* **Tamagui Props:**
  * **Always use full prop names** instead of abbreviations for clarity:
    * ✅ `flex={1}` not `f={1}`
    * ✅ `padding="$4"` not `p="$4"`
    * ✅ `backgroundColor="$primary"` not `bg="$primary"`
    * ✅ `marginTop="$2"` not `mt="$2"`
    * ✅ `alignItems="center"` not `ai="center"`
  * Exception: `gap` is acceptable as it's clear and widely understood.

* **Code Readability:**
  * Prefer explicit over implicit.
  * Write code that reads like documentation.
  * Use meaningful comments for complex logic, not obvious code.
  * Keep functions small and focused on a single responsibility.

**8. Common Components**

Reusable composable UI components located in `src/components/common/`.

### Fallback Component

A fully composable component for displaying error and warning states.

**Usage:**
```tsx
import { Fallback } from "@/src/components/common";

<Fallback.Error>
  <Fallback.Icon />
  <Fallback.Title>Error Loading Data</Fallback.Title>
  <Fallback.Message>Unable to fetch data. Please try again.</Fallback.Message>
</Fallback.Error>
```

**API:**
- `Fallback.Error` / `Fallback.Warning` - Root container (provides context)
- `Fallback.Icon` - Icon display (default or custom via children)
- `Fallback.Title` - Title text
- `Fallback.Message` - Description text

**Custom Icon Example:**
```tsx
<Fallback.Error>
  <Fallback.Icon>
    <XCircle size={100} color="#dc2626" strokeWidth={2} />
  </Fallback.Icon>
  <Fallback.Title>Custom Error</Fallback.Title>
  <Fallback.Message>Error message here.</Fallback.Message>
</Fallback.Error>
```

### Loader Component

A fully composable component for displaying loading states.

**Usage:**
```tsx
import { Loader } from "@/src/components/common";

<Loader.Root>
  <Loader.Spinner />
  <Loader.Text>Loading...</Loader.Text>
</Loader.Root>
```

**API:**
- `Loader.Root` - Root container (props: `color`, `size`)
- `Loader.Spinner` - Activity indicator (props: `color`, `size`)
- `Loader.Text` - Loading text

**Custom Color Example:**
```tsx
<Loader.Root color="#ef4444" size="small">
  <Loader.Spinner />
  <Loader.Text>Loading data...</Loader.Text>
</Loader.Root>
```

**Design Philosophy:**
Both components follow a **fully composable pattern**:
- Each piece is a separate component
- Complete control over rendering and order
- Custom content can be added anywhere
- Configuration shared via React Context

**9. Implementation Instructions for AI Agent**

* "Use **Zustand** for state management to reflect balance changes instantly across the UI."
* "Prioritize **TypeScript** with strict typing for all store definitions."
* "Write clean, modular code following the **Feature-Based** structure."
* "Ensure all UI components are built using **Tamagui** tokens for consistency."
* "Follow the coding standards in section 7 for all code generation."
* "Use full, explicit prop names for all Tamagui components - no abbreviations."
* "Use composable components (Fallback, Loader) from section 8 for error and loading states."

