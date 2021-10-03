import React from 'react';
//import React,{Fragment} from 'react'; 하면 Fragment앞에 React 필요 없음

//컴포넌트마다 각각의 클래스가 필요하다. 첫글자를 대문자로! 그래야 reusable한 컴포넌트이다 라고 할 수 있음
class StorePicker extends React.Component{
    //이 안에 것을 표현할 것임
    //한번에 1개의 element만 리턴할 수 있음.
    //16.02에서 React.Fragment가 추가되어서 여러개 렌더 가능. 
    render(){
        return ( 
        <React.Fragment>
            {/* <p>Fish!</p> */}
            <form action="" className="store-selector">
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit store</button>
            </form>
        </React.Fragment>
        )
    }
}
//이 파일의 default는 StorePicker임!
export default StorePicker;
