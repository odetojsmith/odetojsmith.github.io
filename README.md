# Academic Personal Website - Prof. Baiwei Guo (郭佰威)

This repository contains the source code for the personal academic homepage of **Baiwei Guo (郭佰威)**, Assistant Professor at The Chinese University of Hong Kong, Shenzhen (CUHK-Shenzhen).

The design mimics the clean, responsive, and minimalist typography-focused structure inspired by [Jiajun Wu's website](https://jiajunwu.com/).

---

## 📁 Project Structure

```text
website/
├── index.html            # Main webpage
├── css/
│   ├── font.css          # Typography configuration (Open Sans)
│   └── main.css          # Layout, color scheme, and responsive styling
├── js/
│   └── main.js           # Interactive recruitment collapsible toggle
└── images/
    └── avatar_placeholder.svg  # Placeholder for profile photo
```

---

## 🚀 How to Preview Locally

Simply double click `index.html` or open it with any web browser (Safari, Chrome, Edge, etc.):
```bash
open website/index.html
```

---

## 🛠️ How to Customize

1. **Profile Photo**: Replace `website/images/avatar_placeholder.svg` with your real photo (e.g., `avatar.jpg` or `photo.png`), and update the `src` attribute in `index.html`.
2. **Paper Figures / Teasers**: In `index.html`, you can replace the placeholder SVG cards inside `.publication .img` with paper teaser figures or architecture diagrams.
3. **Updating Info**: All content is plain, semantic HTML. You can directly edit text, links, and publication entries in `index.html`.
