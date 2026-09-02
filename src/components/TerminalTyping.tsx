"use client";

import { useEffect, useRef, useState } from "react";

// ── 타입 정의 ──────────────────────────────────────────────

type TokenColor = "keyword" | "key" | "string" | "plain";

interface Token {
  text: string;
  color: TokenColor;
}

interface CommandLine {
  type: "command";
  text: string;
}

interface CodeLine {
  type: "code";
  indent?: boolean;
  tokens: Token[];
}

type TerminalLine = CommandLine | CodeLine;

interface TerminalTypingProps {
  title?: string;
  lines?: TerminalLine[];
  startDelay?: number; // ms
  onDone?: () => void;
}

// ── 기본 콘텐츠 (강민서님 소개용) ──────────────────────────

const DEFAULT_LINES: TerminalLine[] = [
  { type: "command", text: "$ whoami" },
  {
    type: "code",
    tokens: [
      { text: "const ", color: "keyword" },
      { text: "developer ", color: "plain" },
      { text: "= ", color: "plain" },
      { text: "{", color: "plain" },
    ],
  },
  {
    type: "code",
    indent: true,
    tokens: [
      { text: "name: ", color: "key" },
      { text: '"강민서"', color: "string" },
      { text: ",", color: "plain" },
    ],
  },
  {
    type: "code",
    indent: true,
    tokens: [
      { text: "role: ", color: "key" },
      { text: '"Frontend Developer"', color: "string" },
      { text: ",", color: "plain" },
    ],
  },
  {
    type: "code",
    indent: true,
    tokens: [
      { text: "stack: ", color: "key" },
      { text: '["React", "TypeScript", "Next.js", "Tailwind CSS"]', color: "string" },
    ],
  },
  {
    type: "code",
    indent: true,
    tokens: [
      { text: "tools: ", color: "key" },
      { text: '["Figma", "Github"]', color: "string" },
    ]
  },
  {
    type: "code",
    tokens: [{ text: "}", color: "plain" }],
  },
];

// Tailwind 유틸로 못 잡는 정확한 톤은 arbitrary value로 지정
const COLOR_CLASS: Record<TokenColor, string> = {
  keyword: "text-[#d2a8ff]",
  key: "text-[#79c0ff]",
  string: "text-[#ffa657]",
  plain: "text-[#e6e6e6]",
};
const PROMPT_CLASS = "text-[#7ee787]";

// ── 컴포넌트 ────────────────────────────────────────────────

export default function TerminalTyping({
  title = "minseo@portfolio ~ zsh",
  lines = DEFAULT_LINES,
  startDelay = 500,
  onDone,
}: TerminalTypingProps) {
  const [renderedCounts, setRenderedCounts] = useState<number[]>([]);
  const [activeLine, setActiveLine] = useState(0);
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useRef(false);

  // 화면에 보일 때만 시작
  useEffect(() => {
    if (typeof window === "undefined") return;
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    if (prefersReducedMotion.current) {
      setRenderedCounts(
        lines.map((l) =>
          l.type === "command"
            ? l.text.length
            : l.tokens.reduce((sum, t) => sum + t.text.length, 0)
        )
      );
      setActiveLine(lines.length);
      onDone?.();
      return;
    }

    let cancelled = false;
    const counts = new Array(lines.length).fill(0);
    setRenderedCounts([...counts]);

    async function typeAll() {
      await sleep(startDelay);

      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        setActiveLine(i);
        const line = lines[i];
        const fullLength =
          line.type === "command"
            ? line.text.length
            : line.tokens.reduce((sum, t) => sum + t.text.length, 0);

        for (let c = 1; c <= fullLength; c++) {
          if (cancelled) return;
          counts[i] = c;
          setRenderedCounts([...counts]);
          await sleep(18 + Math.random() * 35);
        }
        await sleep(line.type === "command" ? 300 : 60);
      }
      setActiveLine(lines.length);
      onDone?.();
    }

    typeAll();
    return () => {
      cancelled = true;
    };
  }, [started, lines, startDelay, onDone]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[560px] overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#0d0d0d] font-mono shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
    >
      {/* 헤더 */}
      <div className="flex items-center gap-2 border-b border-[#1f1f1f] bg-[#161616] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="mr-[60px] flex-1 text-center text-xs text-[#6e7681]">
          {title}
        </span>
      </div>

      {/* 본문 */}
      <div className="min-h-[180px] px-5 py-6 text-sm leading-[1.8] sm:px-6 sm:py-7 sm:text-[15px]">
        {lines.map((line, i) => {
          if (i > activeLine) return null;
          const count = renderedCounts[i] ?? 0;
          const isActive = i === activeLine;

          return (
            <div
              key={i}
              className={`whitespace-pre-wrap break-words ${
                line.type === "code" && line.indent ? "pl-5" : ""
              }`}
            >
              {line.type === "command" ? (
                <span className={PROMPT_CLASS}>{line.text.slice(0, count)}</span>
              ) : (
                renderTokens(line.tokens, count)
              )}
              {isActive && (
                <span
                  className="ml-0.5 inline-block h-[1em] w-2 animate-[blink_1s_step-end_infinite] bg-[#e6e6e6] align-text-bottom motion-reduce:animate-none"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── 유틸 ──────────────────────────────────────────────────

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function renderTokens(tokens: Token[], count: number) {
  let remaining = count;
  return tokens.map((tok, idx) => {
    const slice = tok.text.slice(0, Math.max(0, remaining));
    remaining -= tok.text.length;
    if (!slice) return null;
    return (
      <span key={idx} className={COLOR_CLASS[tok.color]}>
        {slice}
      </span>
    );
  });
}