import type { CSSProperties } from "react";

export type RevealVariant = "up" | "left" | "right" | "scale";

/**
 * 스크롤 등장 애니메이션 속성.
 * 요소에 펼쳐서 사용하면 화면에 들어올 때 ScrollEffects가 애니메이션을 실행한다.
 *   <div {...reveal()} />            아래에서 위로
 *   <li {...reveal("up", 120)} />     120ms 늦게 시작
 */
export function reveal(variant: RevealVariant = "up", delay = 0) {
  return {
    "data-reveal": variant,
    style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
  };
}

/**
 * 패럴랙스 속성. overflow-hidden 부모 안의 요소에 사용한다.
 * speed가 클수록 스크롤 대비 더 많이 움직인다. (권장 0.05 ~ 0.15)
 */
export function parallax(speed = 0.1) {
  return { "data-parallax": String(speed) };
}
