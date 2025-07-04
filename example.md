---
theme: ./
layout: cover
background: /background.jpg
---

# openscript Ltd. theme starter

Presentation slides for developers

<div class="pt-12">
  <span @click="next" class="px-2 p-1 rounded cursor-pointer bg-green hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

Read more about [Why Slidev?](https://sli.dev/guide/why)

---
layout: task
name: Task Layout
time: 30min
method: Work in Groups
ai: on
---

Describe the most important steps of the task here:

1. **First** go there
   - One
   - Two
1. Then do this
1. Finally..


---
layout: two-cols-header
---

# Two column header

::left::

- Left
  - Awesome

::right::

```javascript
console.log("With some code"); console.log("With some code"); console.log("With some code");
```

`inline code`

---

# Title ...
## Subtitle

Bliblablub

---

# Math

$\sqrt{3x-1}+(1+x)^2$

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---

# Lists

- This
- are
- bullet points.

1. This
1. is
1. an enumerated list.

---

# Tables

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Row 1    | Row 1    | Row 1    |
| Row 2    | Row 2    | Row 2    |
| Row 3    | Row 3    | Row 3    |
| Row 4    | Row 4    | Row 4    |

---
layout: image-right
image: 'https://images.unsplash.com/photo-1527095655060-4026c4af2b25?q=80&w=1740'
---

# Code `Code`

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```
---

# QR-Code

```html
<QRCode value="https://openscript.ch" style="width: 200px" />
```

<QRCode value="https://openscript.ch" style="width: 200px" />

---
layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
