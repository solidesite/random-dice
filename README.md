# Javascript 랜덤 주사위
html / css / javascript
타이핑 게임(https://github.com/solidesite/Typing-Game)을 만들면서 사용했던 Math.random 메소드를 응용하여 주사위를 만들 수 있지 않을까 하는 생각에서부터 시작했습니다

---
## 익힌 기능
- classList.add/remove를 이용한 클래스 붙였다 떼기 - css와 함께 사용하여 display 조절
- Number()을 사용하여 문자를 숫자로 형변환하기

---
## 고민
- classList.add/remove 대신 toggle을 사용해볼까 생각했지만 2를 눌렀을 때 아무것도 없는 상태에서 4개 모두 클래스가 add되어버리기 때문에 안됨

- 주사위 갯수 선택버튼을 처음 만들 때 classList.add만을 사용하여 1-2-3-4 갯수를 늘릴 수는 있었지만 4에서 1로 갈 때 같은 경우에는 주사위의 숫자가 줄어들지 않아 classList.remove도 사용했음

- 반복이 많고 코드가 길어지는데 효율적으로 축약할 수 있는 방법을 생각해보기

- 주사위 갯수 선택부분과 주사위 랜덤 돌리기 부분을 div로 감싸 flex를 주었는데도 갯수 선택 부분이 중앙정렬이 안됨

- 어차피 로직이 한번만 쓰일거니까 굳이 dis1같은 함수에 담아 사용하지 않아도 될것같다?

- 주사위 추가와 결과값도출을 각각의 div클래스를 찾아서 집어넣는 것이 아니고 자동으로 계산해서 넣어줄 수는 없을까? 만약 주사위를 50개씩 추가하고싶다면 주사위들을 일일이 생성하고 querySelector 걸고 해야하기 때문에 생산성이 떨어지기때문이다