# Class 1 — Condition Render
- - -
## 條件渲染的方法
- **單一條件（只有 if）**：
    - 使用邏輯與 `&&` 運算子進行條件渲染。
    - 範例：`{user.age >= 18 && <p>You are adult!</p>}`。
- **if-else 條件**：
    - 使用三元運算子 `? :` 進行條件渲染。
    - 範例：`{user.age >= 18 ? <p>You can drive a car!</p> : <p>You cannot drive a car!</p>}`。
- **多重條件（if-else-if）**：
    - 通過連續使用三元運算子實現多重條件。
    - 範例：`{user.age >= 18 ? <p>You can drink alcohol!</p> : user.age >= 16 ? <p>You can drink soda!</p> : <p>You cannot drink alcohol!</p>}`。

## 學習重點
- JSX 中可以通過 JavaScript 的條件運算子實現條件渲染。
- 對於不同的條件渲染需求，可以選擇合適的運算子（如 `&&` 或 `? :`）。
- 在 JSX 中實現複雜的條件邏輯，如 if-else-if，通常需要巧妙地組合使用這些運算子。

這些筆記提供了關於在 JSX 中進行條件渲染的基本概念和方法，包括單一條件、if-else 條件以及多重條件的實現。

# Class 2 — List Rendering
- - -
## 列表渲染的方法
- **使用 `.map()` 方法遍歷數組**：
  - 在 JSX 中，通過 `.map()` 方法遍歷數組以渲染列表。
  - 範例：`{users.map((user, index) => <li key={index}>{user.name} - {user.age}</li>})`。
- **為每個列表項目設置唯一的 `key`**：
  - 對於列表的每個項目，都應該設置一個唯一的 `key` 屬性。
  - `key` 幫助 React 識別哪些項目被修改、添加或刪除，從而優化渲染性能。

## 學習重點
- 列表渲染是 React 中的一個常見需求，主要通過 `.map()` 方法實現。
- 為每個渲染的列表項目提供一個唯一的 `key` 是重要的最佳實踐。
- 正確使用 `key` 可以提高列表渲染的效率，因為 React 可以更精準地追蹤每個項目的變化。
