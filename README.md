# AI 협업 개인 브랜딩 모바일 랜딩 페이지

AI 활용이 막막한 직장인을 위한 실무 중심의 AI 협업 방법을 소개하는 반응형 랜딩 페이지입니다.

## 📋 개요

"AI 활용이 막막한 직장인에게 실무에 바로 적용 가능한 AI 협업 방법을 통해, 업무 생산성을 극대화하고 창의적인 일에 집중하는 즐거움을 제공합니다."

### 주요 콘텐츠
1. **AI 워크 스마트** - 실전 AI 활용법 & 성공 사례
2. **AI 동료 만들기** - No-code/Low-code 업무 자동화
3. **AI로 데이터 인사이트 발견** - 데이터 분석 & 시각화

## ✨ 특징

- 📱 **모바일 우선 디자인** - 480px 컨테이너로 모든 기기에 최적화
- 🎨 **밝은 톤 UI** - 화이트 배경 + 스카이 블루 포인트 컬러
- ⚡ **부드러운 인터랙션**
  - Fade-up 섹션 애니메이션 (IntersectionObserver)
  - 헤더 스크롤 그림자 효과
  - 하단 고정 CTA 바 (스크롤 시 표시)
- 🎯 **원클릭 커피챗 링크** - 모든 버튼이 동일한 구글 폼으로 연결
- 👥 **사용자 이름 쉽게 변경** - HTML의 한 곳만 수정

## 📁 파일 구조

```
.
├── index.html      # 시맨틱 마크업, OG 메타 포함
├── style.css       # 반응형 레이아웃, 애니메이션, CSS 변수
├── script.js       # 커피챗 링크, 스크롤 이벤트, 토스트
└── README.md       # 이 파일
```

## 🚀 빠른 시작

### 1. 로컬 서버 실행
```bash
python -m http.server 8000
# 또는
python3 -m http.server 8000
```

### 2. 브라우저에서 열기
```
http://localhost:8000
```

## ⚙️ 커스터마이징

### 이름/브랜드명 변경

**index.html**에서 다음 부분을 찾아 수정:
```html
<div class="header-brand">YOUR NAME</div>
```

→ 원하는 이름으로 교체하면 헤더에 자동 반영됩니다.

### 커피챗 링크 변경

**script.js**의 최상단 설정:
```javascript
const COFFEE_CHAT_URL = "https://forms.gle/2pQrgPGiLNRxCCPE7";
```

- 현재값: `https://forms.gle/2pQrgPGiLNRxCCPE7`
- 다른 폼 URL로 교체 가능
- 모든 커피챗 버튼(4개)이 자동으로 이 링크 사용

### 컬러 커스터마이징

**style.css**의 CSS 변수 섹션:
```css
:root {
  --color-bg-primary: #ffffff;        /* 배경색 */
  --color-bg-light: #f0f8ff;          /* 밝은 섹션 배경 */
  --color-accent: #3b82f6;            /* 포인트 색 (스카이 블루) */
  --color-text-primary: #1a1a1a;      /* 주 텍스트 */
  --color-text-secondary: #5a5a5a;    /* 보조 텍스트 */
  /* ... 더 많은 변수 ... */
}
```

## 📄 페이지 구성

1. **헤더** (고정)
   - 브랜드명
   - 커피챗 버튼

2. **히어로 섹션**
   - 메인 헤드카피
   - 서브카피 (생산성, 창의적 일)
   - CTA 버튼

3. **개요 섹션**
   - 3가지 제공 가치 (아이콘 + 설명)
   - 반응형 그리드 레이아웃

4. **콘텐츠 섹션**
   - 3개 카드 (주제별)
   - 섀도우 효과, 터치 피드백

5. **CTA 섹션**
   - "함께 시작해 보세요" 메시지
   - 큰 프라이머리 버튼

6. **푸터**
   - 카피라이트

7. **하단 고정 CTA 바** (모바일)
   - 스크롤 시 자동 표시/숨김
   - 전체 폭 버튼

## 🛠️ 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - Flexbox, Grid, 애니메이션
- **Vanilla JavaScript** - 인터랙션, IntersectionObserver
- **Pretendard 폰트** - CDN (한국어 최적화)

### 브라우저 지원
- Chrome, Safari, Firefox, Edge (최신 2개 버전)
- iOS Safari, Chrome Mobile

## 🎬 인터랙션 상세

### 스크롤 애니메이션
- About, 콘텐츠, CTA 섹션이 화면에 들어올 때 fade-up 등장
- `prefers-reduced-motion` 존중 (사용자 설정에 따라 비활성화)

### 헤더 효과
- 스크롤 5px 이상 시 그림자 추가
- 부드러운 `transition` 효과

### 하단 CTA 바
- 히어로 섹션 아래로 스크롤 시 자동 표시
- 스크롤 위로 올릴 때 숨김

### 커피챗 버튼
- 클릭 시 구글 폼 새 탭에서 열기
- 버튼 클릭 시 `scale(0.98)` 압축 효과

## 📱 반응형 대응

| 뷰포트 | 설명 |
|--------|------|
| 모바일 | 최적화 (375px~480px) |
| 태블릿 | 모바일 폭 유지, 3열 그리드 |
| 데스크톱 | 모바일 폭 유지, 중앙 정렬 |

## 🚀 배포

### 정적 호스팅 (권장)
- Netlify, Vercel, GitHub Pages에 파일 3개 업로드
- 별도 빌드 불필요

### 자체 호스팅
1. 서버에 파일 업로드
2. 웹 서버(Apache, Nginx 등) 설정
3. 도메인 연결

## 📝 메타 정보

**OG 메타 태그** (소셜 미디어 공유용):
- `og:title` - "AI 협업으로 일의 즐거움을 찾다"
- `og:description` - "실무 중심의 AI 협업 방법 · No-code 자동화 · 데이터 인사이트"
- `og:type` - website

## 🔧 트러블슈팅

### 폰트가 로드되지 않음
- 네트워크 연결 확인
- CDN 상태 확인: https://cdn.jsdelivr.net

### 커피챗 링크가 작동하지 않음
- `script.js`의 `COFFEE_CHAT_URL` 값 확인
- 구글 폼 URL이 정확한지 확인

### 애니메이션이 작동하지 않음
- 브라우저 개발자 도구 콘솔에서 에러 확인
- JavaScript 비활성화 확인

## 📄 라이선스

MIT License

## 👤 작성자

Hagwon

---

**마지막 업데이트**: 2024년 10월
**버전**: 1.0.0
