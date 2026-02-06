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

**7. Implementation Instructions for AI Agent**

* "Use **Zustand** for state management to reflect balance changes instantly across the UI."
* "Prioritize **TypeScript** with strict typing for all store definitions."
* "Write clean, modular code following the **Feature-Based** structure."
* "Ensure all UI components are built using **Tamagui** tokens for consistency."
