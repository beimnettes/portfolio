# Beimnet Tesfaye - Portfolio Website

A modern, elegant personal portfolio website built with Next.js 15, showcasing full-stack development skills, projects, and open-source contributions.

## 🌟 Features

- **3D Hero Section**: Interactive Three.js animation on the homepage
- **Dark Mode**: Seamless theme switching with persistent preferences
- **Responsive Design**: Mobile-first approach that works beautifully on all devices
- **GitHub Integration**: Real-time pull request portfolio from GitHub API
- **Project Showcase**: Filterable and searchable project gallery
- **Skills Display**: Comprehensive technical skills organized by category
- **Contact Form**: Form validation with elegant UI (frontend only - requires email service integration)
- **Glassmorphism UI**: Modern aesthetic with soft gradients and blur effects

## 🎨 Design

- **Color Scheme**: Feminine, elegant palette with soft pinks, lavenders, and rose gold
- **Typography**: Playfair Display for headings, Inter for body text
- **Animations**: Framer Motion for smooth page transitions and micro-interactions
- **UI Components**: shadcn/ui with custom styling

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber, Three.js
- **Theming**: next-themes
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/BeimnetTesfaye/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (optional):
```env
# Optional: For higher GitHub API rate limits
GITHUB_TOKEN=your_github_personal_access_token

# Site metadata
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Beimnet Tesfaye - Portfolio
NEXT_PUBLIC_GITHUB_USERNAME=BeimnetTesfaye
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── projects/
│   ├── skills/
│   ├── pull-requests/
│   ├── resume/
│   ├── contact/
│   ├── api/github/        # GitHub API route
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Navigation, Footer, ThemeToggle
│   ├── home/             # Hero3D
│   ├── about/            # Biography, Timeline
│   ├── projects/         # ProjectCard, ProjectFilter
│   ├── skills/           # SkillCard, SkillCategory
│   ├── pull-requests/    # PRCard, PRFilter
│   ├── contact/          # ContactForm
│   └── ui/               # shadcn/ui components
├── lib/                   # Utilities and helpers
│   ├── utils.ts
│   ├── constants.ts      # Projects and skills data
│   └── github.ts         # GitHub API helpers
└── public/               # Static assets
```

## 🎯 Customization

### Update Personal Information

1. **Projects**: Edit `lib/constants.ts` to add/modify your projects
2. **Skills**: Update skills array in `lib/constants.ts`
3. **Social Links**: Modify links in `components/layout/Footer.tsx` and `app/contact/page.tsx`
4. **Resume**: Replace `public/resume.pdf` with your actual resume
5. **Bio**: Update text in `components/about/Biography.tsx`
6. **Timeline**: Modify milestones in `components/about/Timeline.tsx`

### Email Service Integration

To enable actual email sending from the contact form:

1. Choose a service (Formspree, EmailJS, Resend, etc.)
2. Update `components/contact/ContactForm.tsx` with API integration
3. Add API keys to `.env.local`

Example with Formspree:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: { 'Content-Type': 'application/json' }
});
```

### Color Scheme

Edit CSS variables in `app/globals.css`:
- Light mode: `:root` section
- Dark mode: `.dark` section

## 📊 GitHub API

The Pull Requests page fetches data from GitHub's public API. For better rate limits:

1. Create a [GitHub Personal Access Token](https://github.com/settings/tokens)
2. Add to `.env.local`: `GITHUB_TOKEN=your_token_here`
3. Rate limit increases from 60 to 5000 requests/hour

## 🧪 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contact

- **Email**: bemnetfeleke96@gmail.com
- **GitHub**: [@beimnettes](https://github.com/beimnettes)
- **LinkedIn**: [Beimnet Tesfaye](https://www.linkedin.com/in/beimnet-tesfaye-220418291/)

---

Built with ❤️ by Beimnet Tesfaye
