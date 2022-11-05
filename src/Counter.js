import { Component } from "react";

class Counter extends Component {
  // 컴포넌트의 생성자 메서드
  constructor(props) {
    super(props);     // 필수 속성

    this.state = {    // state 의 초기값 설정 (객체형식)
      number: 0,
      fixedNumber: 0
    }
  }

  render() {
    const {number, fixedNumber} = this.state;    // state 조회시 this.state 로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick = {() => {
            // 객체형
            // this.setState({number: number + 1});    // this.setState 사용해 state에 새로운 값 넣기 가능

            // 함수형에서 객체 바로 반환
            this.setState(prevState => ({number: prevState.number + 1}))
            // 함수형
            this.setState(prevState => {
              return {
                number: prevState.number + 1
              }
            },
            // setState의 2번째 파라미터 = 콜백함수
            () => {
              console.log('방금 setState가 호출되었습니다.');
              console.log(this.state);
            })
            
          }}
        >
          +1
        </button>
      </div>
    )
  }
}

export default Counter;