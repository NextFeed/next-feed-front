# Next Feed Front
Next Feed Service Web Frontend

### NPM scripts
1. **npm start**: 로컬에서 프론트엔드 앱 테스트 (Hot Reload)
1. **npm build**: 배포용으로 앱 빌드
1. **npm test**: 로컬에서 서버 테스트 (빌드가 선행되어야함)
1. **npm run server**: 서버 실행

### 크롤러 사용법
1. .env.sample 파일 복사해서 .env 만들기\
PORT=3000\
INSTAGRAM_ID=[instagram ID]\
INSTAGRAM_PW=[instagram PW]
1. npm test로 서버 로컬에서 시작
1. localhost:3000/api/tag?tag=[instagram tag]으로 http 요청