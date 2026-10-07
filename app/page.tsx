"use client";

import { useState } from "react";
import { generateOutdoorChallenge } from "../lib/ai";

export default function Home() {
  const [activity, setActivity] = useState("");
  const [time, setTime] = useState("");
  const [mood, setMood] = useState("");

  const [challenge, setChallenge] = useState("");
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  const generateChallenge = async () => {
    if (!activity || !time || !mood) {
      alert("Please select an activity, time, and mood.");
      return;
    }

    setLoading(true);
    setChallenge("");
    setCompleted(false);

    try {
      const result = await generateOutdoorChallenge(
        activity,
        time,
        mood
      );

      setChallenge(result);
    } catch (error) {
      console.error("Generation error:", error);

      setChallenge(
        "Sorry, the AI could not create your challenge. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const regenerateChallenge = async () => {
    await generateChallenge();
  };

  const completeChallenge = () => {
    setCompleted(true);
    setCompletedCount((previous) => previous + 1);
  };

  const startNewChallenge = () => {
    setActivity("");
    setTime("");
    setMood("");
    setChallenge("");
    setCompleted(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-50 px-6 py-12">

      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <header className="text-center">

          <div className="text-6xl">
            🌿
          </div>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-green-900">
            TouchGrass AI
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-gray-600">
            Step away from the screen and let open-source AI
            create a personalized outdoor adventure for you.
          </p>

          <div className="mt-5 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
            🤖 Powered by Open-Source AI
          </div>

        </header>

        {/* Progress */}
        <div className="mt-8 rounded-2xl border border-green-100 bg-white p-5 text-center shadow-sm">

          <p className="text-sm font-medium text-gray-500">
            🌱 Outdoor adventures completed
          </p>

          <p className="mt-1 text-3xl font-bold text-green-700">
            {completedCount}
          </p>

        </div>

        {/* Main Card */}
        <section className="mt-8 rounded-3xl bg-white p-8 shadow-xl">

          <h2 className="text-2xl font-bold text-gray-800">
            Create Your Outdoor Challenge
          </h2>

          <p className="mt-2 text-gray-500">
            Tell the AI what kind of outdoor experience you want.
          </p>

          {/* Activity */}
          <div className="mt-8">

            <label className="font-semibold text-gray-700">
              What would you like to do?
            </label>

            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              disabled={loading}
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white p-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:bg-gray-100"
            >

              <option value="">
                Choose an activity
              </option>

              <option value="Walking">
                🚶 Walking
              </option>

              <option value="Running">
                🏃 Running
              </option>

              <option value="Gardening">
                🌱 Gardening
              </option>

              <option value="Bird watching">
                🐦 Bird watching
              </option>

              <option value="Hiking">
                🥾 Hiking
              </option>

              <option value="Outdoor photography">
                📸 Outdoor photography
              </option>

            </select>

          </div>

          {/* Time */}
          <div className="mt-6">

            <label className="font-semibold text-gray-700">
              How much time do you have?
            </label>

            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              disabled={loading}
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white p-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:bg-gray-100"
            >

              <option value="">
                Choose your time
              </option>

              <option value="10">
                10 minutes
              </option>

              <option value="20">
                20 minutes
              </option>

              <option value="30">
                30 minutes
              </option>

              <option value="60">
                1 hour
              </option>

              <option value="120">
                2 hours
              </option>

            </select>

          </div>

          {/* Mood */}
          <div className="mt-6">

            <label className="font-semibold text-gray-700">
              How are you feeling?
            </label>

            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              disabled={loading}
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white p-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 disabled:bg-gray-100"
            >

              <option value="">
                Choose your mood
              </option>

              <option value="Tired">
                😴 Tired
              </option>

              <option value="Stressed">
                😣 Stressed
              </option>

              <option value="Bored">
                😐 Bored
              </option>

              <option value="Energetic">
                ⚡ Energetic
              </option>

              <option value="Curious">
                🔎 Curious
              </option>

              <option value="Happy">
                😊 Happy
              </option>

            </select>

          </div>

          {/* Generate */}
          <button
            onClick={generateChallenge}
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-green-700 px-6 py-4 text-lg font-bold text-white shadow-md transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
          >

            {loading
              ? "🌿 Creating your challenge..."
              : "🌿 Generate My Outdoor Challenge"}

          </button>

          {/* Loading */}
          {loading && (
            <div className="mt-6 rounded-2xl bg-green-50 p-6 text-center">

              <div className="text-4xl">
                🌱
              </div>

              <p className="mt-3 text-lg font-semibold text-green-800">
                Creating your outdoor adventure...
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Our open-source AI is thinking of something fun.
              </p>

            </div>
          )}

          {/* Challenge Result */}
          {challenge && !loading && (
            <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">

              <h3 className="text-2xl font-bold text-green-900">
                🌿 Your AI Outdoor Challenge
              </h3>

              <div className="mt-5 whitespace-pre-wrap leading-7 text-gray-700">
                {challenge}
              </div>

              {/* Completed */}
              {completed ? (
                <div className="mt-6 rounded-2xl bg-white p-6 text-center">

                  <div className="text-5xl">
                    🎉
                  </div>

                  <h4 className="mt-3 text-xl font-bold text-green-800">
                    Challenge Completed!
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Amazing! You actually got outside. 🌎
                  </p>

                </div>
              ) : (
                <button
                  onClick={completeChallenge}
                  className="mt-6 w-full rounded-xl bg-green-600 px-6 py-4 text-lg font-bold text-white transition hover:bg-green-700"
                >
                  🌎 I'm Going Outside!
                </button>
              )}

              {/* Regenerate */}
              <button
                onClick={regenerateChallenge}
                disabled={loading}
                className="mt-3 w-full rounded-xl border-2 border-green-600 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-100"
              >
                🔄 Give Me Another Challenge
              </button>

            </div>
          )}

          {/* Start New Challenge */}
          {challenge && !loading && (
            <button
              onClick={startNewChallenge}
              className="mt-4 w-full rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-600 transition hover:bg-gray-50"
            >
              ✨ Start a New Challenge
            </button>
          )}

        </section>

        {/* How it works */}
        <section className="mt-8 rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="text-center text-2xl font-bold text-gray-800">
            How TouchGrass AI Works
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl bg-green-50 p-5 text-center">
              <div className="text-3xl">
                🎯
              </div>

              <h3 className="mt-3 font-bold text-green-900">
                Choose
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Pick an activity, time, and mood.
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-5 text-center">
              <div className="text-3xl">
                🤖
              </div>

              <h3 className="mt-3 font-bold text-green-900">
                AI Creates
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Open-source AI creates your challenge.
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-5 text-center">
              <div className="text-3xl">
                🌎
              </div>

              <h3 className="mt-3 font-bold text-green-900">
                Go Outside
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Put the screen down and enjoy the outdoors.
              </p>
            </div>

          </div>

        </section>

        {/* Footer */}
        <footer className="mt-8 pb-6 text-center">

          <p className="text-sm font-medium text-gray-500">
            🌿 TouchGrass AI
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Built with open-source AI for Hacktoberfest 2026
          </p>

          <p className="mt-1 text-xs text-gray-400">
            Week 1: Touch Grass
          </p>

        </footer>

      </div>

    </main>
  );
}