/**
 * 기존 컴파운드 컴포넌트 작성 방식은 매번 타입을 수기 작성하고 캐스팅해야했기 때문에 이를 함수로 제공하기 위해 작성하였습니다.
 *
 * @param LayoutComponent 컴파운드 컴포넌트의 부모 컴포넌트
 * @param CompoundComponent 컴파운드 컴포넌트 스타일 컴포넌트 객체
 * @returns
 */
export const compoundBuilder = <
  LayoutComponentType,
  CompoundComponentType extends Record<
    string,
    (React.FC<LayoutComponentType> & CompoundComponentType)[keyof CompoundComponentType]
  >,
>(
  LayoutComponent: React.FC<LayoutComponentType>,
  CompoundComponent: CompoundComponentType,
) => {
  const _layout = LayoutComponent as typeof LayoutComponent & CompoundComponentType;

  Object.entries(CompoundComponent).forEach(([layoutName, layoutComponent]) => {
    _layout[layoutName as keyof CompoundComponentType] = layoutComponent;
  });

  return _layout;
};

/** 에러 메시지의 일관성을 지키기 위해 에러 메시지를 생성하는 빌더 함수입니다. */
export const errorMessageBuilder = (title: string) => {
  return `${title} 중 오류가 발생하였습니다.`;
};
