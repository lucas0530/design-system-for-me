import type { ComponentProps, ElementType } from "react";
/**
 * T와 K에서 T의 프로퍼티를 제거한 타입을 병합합니다.
 */
type Combine<T, K> = T & Omit<K, keyof T>;
/**
 * 원하는 엘리먼트의 프로퍼티와 커스텀 프로퍼티를 병합합니다.
 */
export type CombineElementProps<E extends ElementType, P = unknown> = Combine<
  P,
  ComponentProps<E>
>;
/**
 * 원하는 엘리먼트로 렌더링할 수 있는 as 프로퍼티와 커스텀 프로퍼티를 병합합니다.
 */
export type OverridableProps<E extends ElementType, P = unknown> = {
  as?: E;
  ref?: React.ForwardedRef<HTMLDivElement>;
} & CombineElementProps<E, P>;

declare type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;

export declare type Leaves<T> = T extends object
  ? {
      [K in keyof T]-?: Join<K, Leaves<T[K]>>;
    }[keyof T]
  : "";
