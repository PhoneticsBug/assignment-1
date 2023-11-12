# 국내 모든 임상시험 검색하고 온라인으로 참여하기 (AIVLE x wanted 과제용)

### How to use

#### Backend Server

1. 백엔드 폴더로 이동

```
cd backend
```

2. 필수요소 설치

```
npm install
```

3. 서버 시작
```
npm start
```

#### Frontend Server

1. 프론트엔드 폴더로 이동

- backend에서 이동시
```
cd ..
cd assign1
```

2. 필수요소 설치

```
npm install
```

3. 서버 시작
```
npm start
```

### 백엔드 서버에서의 API 호출을 줄이기 위한 전략

1. 


### 

- API 호출별로 로컬 캐싱 구현
    - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
    - 캐싱을 어떻게 기술했는지에 대한 내용 README에 기술
    - expire time을 구현할 경우 가산점
    
- 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
    - README에 전략에 대한 설명 기술
    
- API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

- 키보드만으로 추천 검색어들로 이동 가능하도록 구현
    - 사용법 README에 기술