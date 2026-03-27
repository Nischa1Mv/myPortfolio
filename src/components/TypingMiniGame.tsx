"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// ─── Constants ───────────────────────────────────────────────────────────────

const TEST_SECONDS = 30;
const LS_KEY = "typerush_save";

const PROMPTS_BY_TIER: Record<string, string[]> = {
  easy: [
    "ship fast stay curious",
    "clean code wins matches",
    "focus smooth ui solid",
    "build ship learn repeat",
    "write clean think sharp",
  ],
  medium: [
    "clean code wins matches and great ux keeps players in the game",
    "ship fast stay curious and level up one project at a time",
    "full stack focus smooth ui solid backend and strong deployment flow",
    "great engineers read errors debug fast and always write clear commits",
    "consistency beats talent when talent doesn't practice every single day",
  ],
  hard: [
    "clean code wins matches and great ux keeps players in the game while shipping features daily",
    "ship fast stay curious and level up one project at a time building production systems",
    "full stack focus smooth ui solid backend strong deployment flow and monitoring metrics",
    "great engineers read errors debug fast write clear commits and document their systems well",
    "consistency beats talent when talent doesn't practice and discipline is how you ship products",
  ],
  insane: [
    "clean code wins matches and great ux keeps players in the game while shipping features daily with zero downtime",
    "ship fast stay curious level up one project at a time building production systems and measuring everything",
    "full stack focus smooth ui solid backend strong deployment flow monitoring metrics and automated test coverage",
    "great engineers read errors debug fast write clear commits document their systems and mentor their teammates",
    "consistency beats talent when talent doesn't practice and discipline shipping products and reviewing code daily",
  ],
};

const TIER_LABELS: Record<string, string> = {
  easy: "EASY",
  medium: "MED",
  hard: "HARD",
  insane: "😈",
};

const TIER_COLORS: Record<string, string> = {
  easy: "var(--primary)",
  medium: "#16a34a",
  hard: "#ea580c",
  insane: "#db2777",
};


// ─── Types ───────────────────────────────────────────────────────────────────

interface SaveData {
  bestWpm: number;
  bestLevel: number;
  totalCoins: number;
  gamesPlayed: number;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const getTier = (level: number): string => {
  if (level < 3) return "easy";
  if (level < 6) return "medium";
  if (level < 9) return "hard";
  return "insane";
};

const getPrompt = (level: number, promptIndex: number): string => {
  const tier = getTier(level);
  const pool = PROMPTS_BY_TIER[tier];
  return pool[promptIndex % pool.length];
};

const loadSave = (): SaveData => {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw) as SaveData;
  } catch {}
  return { bestWpm: 0, bestLevel: 0, totalCoins: 0, gamesPlayed: 0 };
};

const persistSave = (data: SaveData) => {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
  } catch {}
};

// ─── Main Component ───────────────────────────────────────────────────────────

function TypingMiniGame() {
  const [level, setLevel] = useState(0);
  const [promptIndex, setPromptIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [timeLeft, setTimeLeft] = useState(TEST_SECONDS);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isSentenceComplete, setIsSentenceComplete] = useState(false);
  const [saveData, setSaveData] = useState<SaveData>(loadSave);
  const [sessionCoins, setSessionCoins] = useState(0);
  const [showFlash, setShowFlash] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const tier = getTier(level);
  const tierColor = TIER_COLORS[tier];
  const activePrompt = getPrompt(level, promptIndex);

  useEffect(() => {
    if (typedText === activePrompt && typedText.length > 0) {
      setIsSentenceComplete(true);
      setIsRunning(false);
      setShowFlash(true);
      setTimeout(() => setShowFlash(false), 600);
    } else {
      setIsSentenceComplete(false);
    }
  }, [typedText, activePrompt]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isSentenceComplete && e.key === "Enter") {
        e.preventDefault();
        handleNextLevel();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isSentenceComplete]);

  useEffect(() => {
    if (!isRunning || isFinished) return;
    const timer = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsFinished(true);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning, isFinished]);

  useEffect(() => {
    if (!isFinished) return;
    const updated: SaveData = {
      bestWpm: Math.max(saveData.bestWpm, stats.wpm),
      bestLevel: Math.max(saveData.bestLevel, level),
      totalCoins: saveData.totalCoins + sessionCoins,
      gamesPlayed: saveData.gamesPlayed + 1,
    };
    setSaveData(updated);
    persistSave(updated);
  }, [isFinished]);

  const stats = useMemo(() => {
    const elapsed = Math.max(1, TEST_SECONDS - timeLeft);
    const words = typedText.trim() ? typedText.trim().split(/\s+/).length : 0;
    let correct = 0;
    for (let i = 0; i < typedText.length; i++) {
      if (typedText[i] === activePrompt[i]) correct++;
    }
    const wpm = Math.round((words / elapsed) * 60);
    const accuracy = typedText.length ? Math.round((correct / typedText.length) * 100) : 100;
    const coins = Math.max(0, Math.round((wpm * accuracy) / 100));
    return { wpm, accuracy, coins };
  }, [typedText, timeLeft, activePrompt]);

  const firstMismatch = useMemo(() => {
    for (let i = 0; i < typedText.length; i++) {
      if (typedText[i] !== activePrompt[i]) {
        const expectedChar = activePrompt[i] ?? "";
        const typedChar = typedText[i] ?? "";
        return {
          index: i,
          expectedChar,
          typedChar,
          expectedLabel: expectedChar === " " ? "space" : `"${expectedChar}"`,
          typedLabel: typedChar === " " ? "space" : `"${typedChar}"`,
        };
      }
    }
    return null;
  }, [typedText, activePrompt]);

  const handleTyping = (value: string) => {
    if (isFinished || isSentenceComplete) return;
    if (!isRunning) setIsRunning(true);
    setTypedText(value.slice(0, activePrompt.length).toLowerCase());
  };

  const handleNextLevel = () => {
    const nextLevel = level + 1;
    setSessionCoins((c) => c + stats.coins);
    setTypedText("");
    setTimeLeft(TEST_SECONDS);
    setIsRunning(false);
    setIsFinished(false);
    setIsSentenceComplete(false);
    setLevel(nextLevel);
    setPromptIndex((p) => (p + 1) % PROMPTS_BY_TIER[getTier(nextLevel)].length);
    setTimeout(() => textareaRef.current?.focus(), 50);
  };

  const handleReset = () => {
    setTypedText("");
    setTimeLeft(TEST_SECONDS);
    setIsRunning(false);
    setIsFinished(false);
    setIsSentenceComplete(false);
    setLevel(0);
    setPromptIndex(0);
    setSessionCoins(0);
    setTimeout(() => textareaRef.current?.focus(), 50);
  };

  const timerWarning = timeLeft <= 10 && isRunning;
  const progressPct = Math.round((typedText.length / activePrompt.length) * 100);

  const statItems = [
    {
      label: "Time",
      value: (
        <span style={{ color: timerWarning ? "#ef4444" : "#f1faee", animation: timerWarning ? "timerPulse 0.6s ease infinite" : undefined, display: "inline-block" }}>
          {timeLeft}s
        </span>
      ),
    },
    { label: "WPM", value: <span style={{ color: "#f1faee" }}>{stats.wpm}</span> },
    { label: "Acc", value: <span style={{ color: "#f1faee" }}>{stats.accuracy}%</span> },
    { label: "Best WPM", value: <span style={{ color: "#f1faee" }}>{saveData.bestWpm}</span> },
    { label: "Best Lvl", value: <span style={{ color: "#f1faee" }}>{saveData.bestLevel}</span> },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Syne:wght@700;800&display=swap');

        :root {
          --tr-bg: var(--card);
          --tr-fg: var(--card-foreground);
          --tr-soft: color-mix(in srgb, var(--foreground) 12%, transparent);
          --tr-soft-2: color-mix(in srgb, var(--foreground) 18%, transparent);
          --tr-muted: color-mix(in srgb, var(--foreground) 48%, transparent);
        }

        .tr * { box-sizing: border-box; }
        .tr { -webkit-tap-highlight-color: transparent; }

        @keyframes timerPulse {
          0%,100% { color:#ef4444; }
          50%     { color:#fca5a5; }
        }
        @keyframes levelBadge {
          0%   { transform:scale(0.7); opacity:0; }
          60%  { transform:scale(1.15); opacity:1; }
          100% { transform:scale(1); opacity:1; }
        }
        @keyframes blink {
          0%,100% { opacity:1; }
          50%     { opacity:0; }
        }

        .tr-stats {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 6px;
          margin-top: 12px;
        }
        @media (max-width: 460px) {
          .tr-stats { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 380px) {
          .tr-stats { grid-template-columns: repeat(2, 1fr); }
        }

        .tr-prompt {
          margin-top: 12px;
          border-radius: 12px;
          border: 1px solid var(--tr-soft);
          background: color-mix(in srgb, var(--secondary) 65%, var(--card));
          padding: 14px;
          font-size: clamp(13px, 3.8vw, 15px);
          line-height: 1.8;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.3px;
          user-select: none;
          -webkit-user-select: none;
          word-break: break-word;
        }

        .tr-textarea {
          margin-top: 10px;
          width: 100%;
          min-height: 92px;
          resize: none;
          border-radius: 12px;
          background: color-mix(in srgb, var(--secondary) 72%, var(--card));
          color: var(--tr-fg);
          padding: 13px 14px;
          /* 16px prevents iOS auto-zoom */
          font-size: 16px;
          font-family: 'JetBrains Mono', monospace;
          transition: border-color 0.2s;
          -webkit-text-size-adjust: 100%;
          outline: none;
        }
        .tr-textarea::placeholder { color: var(--tr-muted); }

        .tr-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 18px;
          border-radius: 10px;
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.15s;
        }
        .tr-btn:active { opacity: 0.7; }

        .tr-alltime {
          margin-top: 12px;
          border-top: 1px solid var(--tr-soft);
          padding-top: 10px;
          display: flex;
          gap: 12px;
          align-items: center;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .tr-alltime::-webkit-scrollbar { display: none; }

        @media (max-width: 560px) {
          .tr-mobile-actions {
            width: 100%;
            justify-content: stretch;
          }
          .tr-mobile-actions .tr-btn {
            flex: 1 1 0;
            min-width: 0;
          }
        }
      `}</style>

      <div
        className="tr"
        style={{
          marginTop: 16,
          borderRadius: 18,
          border: `2px solid ${isSentenceComplete ? tierColor : "var(--tr-soft-2)"}`,
          background: "var(--tr-bg)",
          color: "var(--tr-fg)",
          padding: "clamp(14px, 4.5vw, 22px)",
          maxWidth: 640,
          width: "100%",
          fontFamily: "'Syne', sans-serif",
          position: "relative",
          transition: "border-color 0.3s, box-shadow 0.3s",
          boxShadow: showFlash
            ? `0 0 40px ${tierColor}77`
            : isSentenceComplete
            ? `0 0 18px ${tierColor}33`
            : "none",
        }}
      >
        {/* Milestone toast */}

        {/* ── Header ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontSize: "clamp(14px,4.5vw,17px)", fontWeight: 800, letterSpacing: 1 }}>
              TYPE<span style={{ color: tierColor }}>RUSH</span>
            </span>
            <span
              key={`lvl-${level}`}
              style={{
                fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999,
                background: `${tierColor}22`, border: `1px solid ${tierColor}88`, color: tierColor,
                letterSpacing: 0.5, animation: "levelBadge 0.4s ease forwards",
              }}
            >
              LVL {level}
            </span>
            <span
              style={{
                fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999,
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.5)", letterSpacing: 1,
              }}
            >
              {TIER_LABELS[tier]}
            </span>
          </div>
          <span
            style={{
              fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 999,
              background: "color-mix(in srgb, var(--primary) 20%, transparent)", border: "1px solid color-mix(in srgb, var(--primary) 42%, transparent)",
              color: tierColor, flexShrink: 0,
            }}
          >
            ⚡ {sessionCoins}
          </span>
        </div>

        {/* ── Stats grid ── */}
        <div className="tr-stats">
          {statItems.map(({ label, value }) => (
            <div
              key={label}
              style={{
                background: "color-mix(in srgb, var(--secondary) 45%, var(--card))", border: "1px solid var(--tr-soft)",
                borderRadius: 10, padding: "8px 4px", textAlign: "center",
              }}
            >
              <div style={{ fontSize: 9, color: "var(--tr-muted)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>
                {label}
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "clamp(14px,3.8vw,18px)", lineHeight: 1 }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* ── Progress bar ── */}
        <div style={{ height: 3, background: "var(--tr-soft)", borderRadius: 99, marginTop: 12, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${progressPct}%`, background: `linear-gradient(90deg, ${tierColor}77, ${tierColor})`, borderRadius: 99, transition: "width 0.1s linear" }} />
        </div>

        {/* ── Prompt ── */}
        <p className="tr-prompt">
          {activePrompt.split("").map((char, i) => {
            const typed = typedText[i];
            const isPast = i < typedText.length;
            const isCurrent = i === typedText.length;
            const isSpace = char === " ";
            let color = "var(--tr-muted)";
            if (isPast) color = typed === char ? tierColor : "#f87171";
            return (
              <span
                key={i}
                style={{
                  color,
                  transition: "color 0.05s",
                  borderRight: isCurrent && isRunning ? `2px solid ${tierColor}` : undefined,
                  animation: isCurrent && isRunning ? "blink 1s step-end infinite" : undefined,
                }}
              >
                {isSpace ? "␣" : char}
              </span>
            );
          })}
        </p>

        {/* ── Input ── */}
        <textarea
          ref={textareaRef}
          value={typedText}
          onChange={(e) => handleTyping(e.target.value)}
          disabled={isFinished || isSentenceComplete}
          placeholder={isFinished ? "Time's up — tap Reset" : "Tap here and start typing…"}
          spellCheck={false}
          autoCapitalize="none"
          autoCorrect="off"
          autoComplete="off"
          className="tr-textarea"
          style={{
            border: `1px solid ${isRunning ? `${tierColor}` : "var(--tr-soft-2)"}`,
            opacity: isFinished || isSentenceComplete ? 0.45 : 1,
          }}
        />

        {/* ── Footer ── */}
        <div style={{ marginTop: 10, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, color: "var(--tr-muted)", fontFamily: "'JetBrains Mono', monospace", flex: "1 1 auto", minWidth: 0 }}>
            {isSentenceComplete
              ? `✓ Lvl ${level} cleared!`
              : isFinished
              ? `⏱ Time's up — lvl ${level}`
              : firstMismatch
              ? `Fix char ${firstMismatch.index + 1}: expected ${firstMismatch.expectedLabel}, got ${firstMismatch.typedLabel}`
              : isRunning
              ? `${activePrompt.length - typedText.length} chars left`
              : "Tap to start 30s timer"}
          </span>
          <div className="tr-mobile-actions" style={{ display: "flex", gap: 6, flexShrink: 0 }}>
            {isSentenceComplete && (
              <button type="button" onClick={handleNextLevel} className="tr-btn"
                style={{ border: `1px solid ${tierColor}`, background: `${tierColor}22`, color: tierColor }}>
                NEXT →
              </button>
            )}
            <button type="button" onClick={handleReset} className="tr-btn"
              style={{ border: "1px solid var(--tr-soft-2)", background: "color-mix(in srgb, var(--secondary) 40%, transparent)", color: "var(--tr-fg)" }}>
              RESET
            </button>
          </div>
        </div>

        {/* ── All-time bests ── */}
        {saveData.gamesPlayed > 0 && (
          <div className="tr-alltime">
            <span style={{ fontSize: 9, color: "var(--tr-muted)", letterSpacing: 1.2, textTransform: "uppercase", flexShrink: 0 }}>
              All-time
            </span>
            {[
              { icon: "🏆", val: `${saveData.bestWpm} WPM` },
              { icon: "📈", val: `Lvl ${saveData.bestLevel}` },
              { icon: "⚡", val: `${saveData.totalCoins} pts` },
              { icon: "🎮", val: `${saveData.gamesPlayed} runs` },
            ].map(({ icon, val }) => (
              <span key={val} style={{ fontSize: 11, color: "var(--tr-muted)", fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>
                {icon} {val}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default TypingMiniGame;