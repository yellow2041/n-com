# Next + React Query로 SNS 서비스 만들기
> 인프런 제로초님 강의 실습 프로젝트
## 학습 기록
### Section 2
#### Next 프로젝트 시작하기
- 사용자가 새로고침을 했을 때 어떻게 처리할것인지?
- `npx create-next-app@latest`명령어로 프로젝트 생성
  - 라우팅과 관련된 코드들은 모두 src/app 하위에 작성
- `next.config.mjs`: next 관련 설정 파일
- `template.tsx`: 페이지 넘나들면서 기록을 해야할 때(페이지 이동 기록 남길 때)
  - 리렌더링이 되게 하고싶으면 템플릿, 되지 않으려면 레이아웃
  - ex) GA등...
#### dvw, dvh
- 새로 나온 단위로 가장 쉽게 화면 전체를 채울 수 있다.
  > 모바일에서 상단 주소창이 생겼다 없어졌다 하면서 css가 깨지는걸 막아줌
#### parallel route
- 한페이지에 2개의 화면을 동시에 띄우고싶을 때 사용
- 폴더명을 `@modal` 이런식으로 만들면 됨