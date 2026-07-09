# CLAUDE.md

### 언어

모든 설명 및 답변은 **한국어**로 작성합니다.

---

### 패키지 매니저

**yarn**을 사용합니다. (yarn.lock 존재 / package-lock.json 없음)

---

### 폴더 구조

```
src/
├── api/
│   ├── api.ts        # axios 인스턴스 및 인터셉터
│   └── dto/          # API 요청/응답 DTO 타입
├── components/
│   ├── common/       # 범용 재사용 컴포넌트 (Button, Input 등)
│   └── layout/       # 레이아웃 컴포넌트 (Header, Footer 등)
├── constants/        # 상수 값 (layoutData, roleData 등)
├── hooks/
│   ├── custom/       # 범용 커스텀 훅 (useClickOutside, useDebounce 등)
│   ├── feature/      # 특정 기능/도메인에 종속된 훅
│   └── query/        # TanStack Query 기반 훅 (useUserQuery, useUserMutation 등)
├── pages/            # 라우트에 매핑되는 페이지 컴포넌트
├── providers/        # Context Provider (인증, 쿼리 클라이언트 등)
├── routes/           # 인증 여부에 따른 라우트 가드
├── stores/           # 전역 상태 스토어 (Zustand)
├── styles/           # 전역 CSS
├── types/            # 범용 타입
├── utils/            # 순수 유틸 함수
├── App.tsx           # Router를 감싸는 최상위 컴포넌트
├── main.tsx          # App 진입점
├── provider.tsx      # 전역 Provider 조합
└── router.tsx        # 라우트 정의
```

---

### 네이밍 컨벤션

#### 1. 폴더명 : kebab-case

#### 2. 파일명

- `api/` : PascalCase (axios 설정 파일인 `api.ts`는 예외)

- `api/dto/` : camelCase + `Dto` 접미사
    
- `components/` : PascalCase

- `constants/` : camelCase + `Data` 접미사
    
- `hooks/custom` : `use` 접두사 + PascalCase

- `hooks/feature` : `use` 접두사 + PascalCase

- `hooks/query` : `use` 접두사 + PascalCase + `Query`/`Mutation` 접미사
    
- `pages/` : PascalCase
    
- `providers/` : camelCase + `Provider` 접미사

- `routes/` : camelCase + `Route` 접미사
    
- `stores/` : camelCase + `Store` 접미사

- `styles/` : camelCase

- `types/` : camelCase + `Type` 접미사
    
- `utils/` : camelCase
    
#### 코드 내부 식별자

- 타입 : PascalCase

- 변수 / 함수 : camelCase (API 함수는 camelCase + `API` 접미사)
    
- 상수 : SCREAMING_SNAKE_CASE
    
- Zustand 훅 : `use` 접두사 + PascalCase + `Store` 접미사
    
---

### 아키텍처

#### Provider

테마, i18n 등 새로운 전역 Provider를 추가할 때는 `main.tsx`나 `App.tsx`가 아닌 `provider.tsx`에 추가해야 합니다.

---

### TypeScript 제약

`tsconfig.app.json`에 설정된 컴파일러 옵션 때문에 지켜야 하는 제약입니다.

- **`verbatimModuleSyntax`** : 타입만 가져올 때는 `import type { Foo } from '...'`처럼 명시해야 합니다. 그렇지 않으면 `yarn build`(`tsc -b`)에서 실패할 수 있습니다.

- **`erasableSyntaxOnly`** : `enum`처럼 런타임 동작을 갖는 TS 전용 문법을 쓸 수 없습니다. 문자열 유니온 타입이나 `as const` 객체로 대체하세요.

---

### 코드 스타일

- 하나의 파일에는 하나의 컴포넌트만 작성합니다.

- 함수는 화살표 함수로 선언합니다.

- `interface` 대신 `type`을 사용합니다.

- 스타일은 기본적으로 `style`이 아닌 `className` 속성에 Tailwind CSS로 작성합니다. 동적으로 계산되는 값처럼 Tailwind CSS만으로는 구현하기 어려운 경우에 한해 `style` 속성을 예외적으로 사용합니다.

- 조건부 스타일 적용이 필요할 때는 `twMerge`를 사용합니다.
