# 국내 모든 임상시험 검색하고 온라인으로 참여하기 (AIVLE x wanted 과제용) v.0.0.1.

### 백엔드 서버에서의 API 호출을 줄이기 위한 전략

1. data가 fetch된 때를 저장하고, 1분 이후에는 expire되도록 설정
2. lastfetched(마지막으로 fetch 된 시간)이 갱신되지 않는 이상 api를 호출하지 않도록 설정
3. console.info("calling api")를 통해 호출 횟수 확인 가능

### 검색 관련 사용법

<img src="">

- 검색어를 입력한 뒤 키보드 방향키를 이용해 커서를 이동할 수 있음
- 엔터를 입력할 경우 관련 페이지로 이동
- 커서가 움직이진 않으나, 마우스 클릭을 통해서도 이동할 수 있음
- 입력창 우측의 search 버튼은 현재 추천 검색어가 저장되는 형태로만 작동함 (커서에 있는 페이지로 이동하지 않음)

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