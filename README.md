# Pundi 💰

**Pundi** is a cross-platform Financial Tracker application designed to help users manage incomes, expenses, and transactions with a seamless offline-first experience.

## 🚀 Project Core

- **Name:** Pundi
- **Type:** Financial Tracker (Hybrid/Offline-First)
- **Primary Color:** `#136daf`
- **Typography:** Inter

### Tech Stack

- **Framework:** React Native + Expo (Managed Workflow)
- **UI Framework:** [Tamagui](https://tamagui.dev/)
- **Navigation:** Expo Router (File-based)
- **Icons:** Lucide React Native
- **State Management:** Zustand
- **Database:**
  - **Local:** `expo-sqlite` (Immediate persistence)
  - **Cloud:** Supabase (PostgreSQL) (Backup & Sync)

## 🏗 Architecture

### Data Architecture (Hybrid/Offline-First)
The app is designed to work seamlessly without an internet connection.
1.  **Writes:** All data is written to **SQLite** first.
2.  **Sync:** A background service synchronizes local changes to **Supabase** when online.

### Database Schema
Both local (SQLite) and cloud (PostgreSQL) schemas are synchronized:
- **`profiles`**: User identity.
- **`categories`**: Transaction categories (Income/Expense).
- **`transactions`**: Financial records.

### State Management (Zustand)
Zustand is used for a "snappy" global state:
- **Global Balance:** Net balance, total income, total expense.
- **Transaction Cache:** Optimistic updates.
- **Sync Status:** Tracking online/offline sync state.

## 📂 Folder Structure

The project follows a **Feature-Based Modular** structure:

```text
/app                 # Routing (Expo Router)
  /(auth)            # Login, Register, Forgot Password
  /(tabs)            # Main App (Home, Transactions, Profile)
/src
  /features          # Domain-driven modules
    /auth            # Auth logic, hooks, UI
    /tracker         # Transaction CRUD, Charts, Logic
    /wallet          # Balance and Account management
  /components        # Global reusable UI (Buttons, Inputs)
  /lib               # Third-party config (supabase.ts, sqlite.ts)
  /hooks             # Shared hooks (useSync, useConnectivity)
  /store             # Zustand store (useTransactionStore.ts)
  /utils             # Formatting, Math, Date helpers
```

## 🛠 Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd Pundi
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the app**

    ```bash
    npx expo start
    ```

## 📱 Design Guidelines

- **Styling:** All UI components are built using **Tamagui**.
- **Theming:** Full support for **Dark/Light Mode**.
- **Icons:** **Lucide Icons** (`size={24}`, `strokeWidth={2}`).

---
Built with ❤️ using Expo & React Native.
