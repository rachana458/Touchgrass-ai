# 🌿 TouchGrass AI

TouchGrass AI is an open-source AI-powered web app that encourages people to step away from their screens and spend time outdoors.

Users choose an outdoor activity, available time, and current mood. The app then uses an open-weight AI model to generate a personalized outdoor challenge.

## ✨ Features

* 🚶 Choose an outdoor activity
* ⏱️ Choose how much time you have
* 😊 Choose your current mood
* 🤖 Generate an outdoor challenge using open-source AI
* 🔄 Generate another challenge
* 🌎 Mark a challenge as completed
* 🌱 Track completed outdoor adventures
* 📱 Responsive web interface

## 🤖 Open-Source AI

TouchGrass AI uses the open-weight:

**Qwen2.5-0.5B-Instruct**

through **Transformers.js**.

The model runs directly in the browser, allowing the application to generate outdoor ideas without relying on a paid AI API.

## 🛠️ Technologies

* Next.js
* React
* TypeScript
* Tailwind CSS
* Transformers.js
* Qwen2.5-0.5B-Instruct
* GitHub

## 🚀 Run Locally

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd touchgrass-ai
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🌿 How It Works

1. The user selects an outdoor activity.
2. The user selects the available time.
3. The user selects their mood.
4. TouchGrass AI sends these choices to the open-weight AI model.
5. The model generates a short outdoor activity idea.
6. The app turns the idea into an outdoor challenge.
7. The user can complete the challenge or generate another one.

## 🎯 Why I Built It

Modern technology keeps us connected to our screens, but sometimes the best experience is simply stepping outside.

I built TouchGrass AI for the Hacktoberfest 2026 Week 1 **Touch Grass** challenge to explore how open-source AI can be used for something simple, positive, and practical.

Instead of using AI to keep people on a screen, this project uses AI to encourage people to **leave the screen and go outside.** 🌎

## 🏆 Hacktoberfest

Built for:

**Hacktoberfest 2026 — Week 1: Touch Grass**

The project focuses on using open-source AI/open-weight models to create a practical experience that encourages outdoor activity.

## 📄 License

This project is open source and available under the MIT License.
