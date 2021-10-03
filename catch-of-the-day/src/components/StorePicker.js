import React from 'react';

//컴포넌트마다 각각의 클래스가 필요하다. 첫글자를 대문자로! 그래야 reusable한 컴포넌트이다 라고 할 수 있음
class StorePicker extends React.Component{
    //이 안에 것을 표현할 것임
    render(){
        return<p>I am the store Picker!</p>
    }
}
//이 파일의 default는 StorePicker임!
export default StorePicker;
