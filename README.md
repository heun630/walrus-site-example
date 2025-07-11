# Walrus Site Example

자동 배포 및 업데이트가 되는 예시 사이트입니다.

## 🚀 기능

- **자동 배포**: main 브랜치에 푸시할 때마다 자동으로 GitHub Pages에 배포
- **실시간 업데이트**: 코드 변경사항이 즉시 반영
- **CI/CD 파이프라인**: GitHub Actions를 통한 자동화된 빌드 및 배포
- **모던 기술 스택**: React + Vite를 사용한 빠른 개발 환경

## 🛠️ 설정 방법

### 1. GitHub Pages 활성화

1. GitHub 저장소 설정으로 이동
2. Pages 섹션에서 Source를 "GitHub Actions"로 설정

### 2. 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 빌드
npm run build
```

### 3. 자동 배포 확인

1. `main` 브랜치에 코드 변경사항 푸시
2. GitHub Actions 탭에서 워크플로우 실행 확인
3. 배포 완료 후 사이트 자동 업데이트 확인

## 📁 프로젝트 구조

```
walrus-site-example/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 배포 워크플로우
├── public/
│   └── walrus.svg             # 파비콘
├── src/
│   ├── App.jsx                # 메인 컴포넌트
│   ├── App.css                # 스타일
│   ├── main.jsx               # 진입점
│   └── index.css              # 전역 스타일
├── index.html                 # HTML 템플릿
├── package.json               # 패키지 설정
├── vite.config.js             # Vite 설정
└── README.md                  # 프로젝트 문서
```

## 🔄 배포 프로세스

1. **코드 푸시** → GitHub 저장소
2. **GitHub Actions 트리거** → 자동 빌드 시작
3. **빌드 및 테스트** → 의존성 설치, 빌드 실행
4. **아티팩트 업로드** → 빌드된 파일 GitHub Pages에 배포
5. **사이트 업데이트** → 자동으로 라이브 사이트 갱신

## 🌐 라이브 사이트

배포된 사이트: `https://[username].github.io/walrus-site-example/`

## 📝 커스터마이징

- `src/App.jsx`: 메인 컴포넌트 수정
- `src/App.css`: 스타일 변경
- `.github/workflows/deploy.yml`: 배포 설정 조정
- `vite.config.js`: 빌드 설정 변경

## ⚡ 특징

- 빠른 핫 리로드 개발 환경
- 자동 린팅 및 타입 체크
- 최적화된 프로덕션 빌드
- 반응형 디자인
- 실시간 배포 상태 표시