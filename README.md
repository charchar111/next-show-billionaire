# next-show-billionaires

## 컨셉

이 사이트의 목적은 세계의 억만장자를 통람하고 상세정보를 제공하는 것입니다. 제작 동기는 노마드 코더의 캐럿마켓 클론 강의를 수강하면서 도전과제(챌린지)를 위해 만들었습니다.

- 사이트 주소
- https://codesandbox.io/p/github/charchar111/next-show-billionaire/main?workspaceId=253bbec8-14e6-427d-974c-b32294bcc2d8

## 목차

- 구현 기능
- 예외 상황 테스트
- 디자인 구조

## 구현 기능

### global

- recoil 세팅 ✅
- theme 세팅 ✅

  - jsx로 theme 객체를 \_app에 세팅
  - tailwindCSS가 오버라이드 가능

  - 반응형 디자인 ✅

### page

#### index

- 억만장자 목록을 썸네일 형태로 보여준다. ✅

  - 한 페이지는 30개까지 리스트를 보여준다.

- sort
  - 이름 순, 재산 순, 나이 순 나열 기능을 지원한다.

#### detail/\[id\]

- 억만장자의 상세정보를 보여준다 ✅

### component

#### pagination

- 한번에 10개까지 생성 ✅
- 화살표 클릭 시 그 이전이나 이후로 이동 ✅
- 링크를 누르면 querystring 변환 ✅
- querystring에 따라 위치를 표시하도록 ui 표시 ✅

## 예외 상황 테스트

- 사진이 없을 때 no image 출력 ✅
- page query에다가 순수 숫자가 아닌 문자를 넣는 경우 404 페이지로 리다이렉트 ✅
- api의 특정 프로퍼티가 없을 때를 대비하여 optional chaining ⏸

## 디자인 구조
