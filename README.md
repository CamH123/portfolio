# Portfolio

A personal portfolio website presented as an interactive architectural magazine.

The UI was designed in Figma and draws inspiration from *Kinfolk* magazine.

Deployed on Vercel: [cameronh.com](https://cameronh.com)

## Architecture

- **Framework:** Next.js 16 with the App Router
- **UI:** React 19 and TypeScript
- **Styling:** Tailwind CSS 4
- **Magazine interaction:** `react-pageflip`
- **Media:** Next.js Image optimization and local assets served from `public/`

## Project structure

```text
src/
├── app/                    # Next.js routes, root layout, and global styles
└── components/
    ├── header/             # Site navigation
    └── magazine/           # Magazine state, page frames, and page components
public/
├── desk/                   # Background assets
└── pages/                  # Portfolio images, video, and document assets
```


