# 2022-01-OSSP1-3KANG1HO-08

> Today I Learned 태그 분석을 통한 개발 공부자료 추천 웹 

<br />

## 💭 About

> 자신이 매일 공부한 내용을 태그와 함께 업로드를 하면 분석을 하여 내일에 하면 좋을 공부를 추천해주는 웹  
> 양질의 컨텐츠를 제공하여 질좋은 TIL 공부를 할 수 있도록 격려


<br />

## ✨ Main Feat

- **`회원가입 & 로그인`**
<img width="600" height="300" src="https://user-images.githubusercontent.com/59119468/173852143-da67df87-cd72-4cb5-a738-17b43193e613.png">
<img width="600" height="300" src="https://user-images.githubusercontent.com/59119468/173852305-c5af6462-eedf-47a9-9d2b-8fac5a477e86.png">

- **`메인 화면`**
<img width="600" height="300" src="https://user-images.githubusercontent.com/59119468/173856288-b4e31f9f-b8a2-449f-aab4-e8c257ad1637.png">

- **`글 작성 페이지`**   
<img width="600" height="300" src="https://user-images.githubusercontent.com/59119468/173852488-1e0fa472-3f83-4b24-b69b-0c68ca026cd9.png">

- **`공부자료 추천 모달`**  
<img width="600" height="400" src="https://user-images.githubusercontent.com/59119468/173852417-7521143b-092f-49ca-9097-28e40a0f1517.png">

- **`작성된 게시물 페이지`**
<img width="600" height="300" alt="스크린샷 2022-06-15 오후 5 29 24" src="https://user-images.githubusercontent.com/59119468/173852564-8b5537eb-38ec-47ac-938d-38ef7f078db2.png">

## ✨ Database

- **`Neo4j DB`**
<img src="https://user-images.githubusercontent.com/84655070/173525263-c30f2721-e5c9-4532-8938-504a57914e8f.png" width="700" height="400"/>


<br /> 

## Team Member 

| -- | -- | -- | -- |
|:--:|:--:|:--:|:--:|
|**강지영**|**박광렬**|**정원호**|**최강희**|
|**FE**|**BE**|**FE**|**BE**|
|[@zzi](https://github.com/99-zziy)|[@pgrgrgrgr](https://github.com/pgrgrgrgr)|[@wonho](https://github.com/wonho1401)|[@rkdgml3577](https://github.com/rkdgml3577)|



<br />

## 📚 Tech Stack
- **React**
- **Redux**
- **styled-components**
- **Express**
- **Neo4j**
- **MongoDB**


<br />


## 📍 Commit Convention
|**Type**|설명|
|:--:|:--:|
|**Docs** |  문서 작성 및 수정 작업(README 등)  |
|**Add**  |  기능이 아닌 것 생성 및 추가 작업(파일·익스텐션·프로토콜 등)  |
|**Feat**  | 새로운 기능 추가 작업  |
|**Style** |  UI 관련 작업(UI 컴포넌트, Xib 파일, 컬러·폰트 작업 등)  |
|**Fix** |  에러 및 버그 수정, 기능에 대한 수정 작업  |
|**Edit** |  Fix가 아닌 모든 수정 작업(주석, 파일 및 폴더 위치, 코드 스타일 등)  |
|**Del**   | 파일, 에셋 등 삭제 작업  |
|**Set**   | 세팅 관련 작업  |
|**Test**  |  테스트 관련 작업  |

<br />

## 🐾 Branch Strategy

<details markdown="1">
<summary>브랜치 종류 소개</summary>

`develop` - default 
- protected → 승인 받아야만 merge 가능

`feature`
- feature/#이슈번호
- feature/#1

</details>

<details markdown="1">
<summary>시나리오</summary>

> 1️⃣ **Issue**
> 1. 이슈생성

> 2️⃣ **Branch**
> - ex. feature/#16

> 3️⃣ **Pull request**
> 1. reviewer → 4명
> 2. 4명 중 2명이 승인(approve)을 해야 merge 가능

> 4️⃣ **Code Review**
> 1. 수정 요청
> 2. 대상자(작업자)가 수정을 하고 다시 커밋을 날림
> 3. 수정 반영하고 답글로 커밋로그 남기기
>    - 수정사항은 커밋번호로 남기기

> 5️⃣ **merge**
> 1. 팀원 호출
> 2. 간단한 리뷰, 피드백, 회의 마친 후
> 3. 다 같이 보는 자리에서 합칠 수 있도록 하기

</details>
<br />

## 🗂 Folder Architecture
### - FE
 **|-- comonents  => 공통 컴포넌트 관리 <br />
   |-- store => 리덕스 관련 모듈들 <br />
   |-- hooks => 공통 hooks 관리 <br />
   |-- pages  => router 페이지 관리 <br />
   |-- utils => util 파일 관리 <br />
   |-- api => api 목록들  <br />
   |-- constants => 상수(매직넘버)  <br />
   |-- assets => 프로젝트에 쓸 font, image 등 <br />**
### - BE
 **|-- models => 데이터 스키마 관리 <br />
   |-- middleware => auth 정보 관리 <br />
   |-- data => neo4j 데이터(노드,릴레이션) 관리 <br />
   |-- routes => router 관리 <br />**

