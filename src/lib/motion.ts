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
 * 스크롤 연동 순차 등장 컨테이너.
 * 안쪽의 data-reveal 요소들이 시간차가 아니라 스크롤한 만큼 하나씩 나타나고,
 * 다시 위로 스크롤하면 하나씩 사라진다.
 *   <ul {...revealSequence()}>
 *     <li {...reveal("left")} />
 *   </ul>
 */
export function revealSequence() {
  return { "data-reveal-sequence": "" };
}

/**
 * 스크롤 아웃 속성. 화면 첫 부분(인트로)에 붙이면
 * 아래로 스크롤할수록 위로 밀려나며 흐려진다.
 */
export function scrollOut() {
  return { "data-scroll-out": "" };
}

/**
 * 패럴랙스 속성. overflow-hidden 부모 안의 요소에 사용한다.
 * speed가 클수록 스크롤 대비 더 많이 움직인다. (권장 0.05 ~ 0.15)
 */
export function parallax(speed = 0.1) {
  return { "data-parallax": String(speed) };
}
