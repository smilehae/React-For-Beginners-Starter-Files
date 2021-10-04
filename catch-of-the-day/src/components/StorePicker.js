import React from 'react';
import {getFunName} from '../helpers';
//import React,{Fragment} from 'react'; 하면 Fragment앞에 React 필요 없음

//컴포넌트마다 각각의 클래스가 필요하다. 첫글자를 대문자로! 그래야 reusable한 컴포넌트이다 라고 할 수 있음
class StorePicker extends React.Component{
    //storePickekr이 만들어지기 전에 실행

    //이 방법은 ES6 이전의 방식이다.
    /*
    constructor(){
        super();
        console.log("Gonna crate a component");
        //여기 안에 메소드를 bind할 수 있다.
        //메소드를 override해서 bind해준다. this를 인스턴스로 전해준다.
        //이게 없으면, goToStore에서 this가 undefined이다.
        this.goToStore = this.goToStore.bind(this);
    }
    */
    myInput  = React.createRef();
    //이 안에 것을 표현할 것임
    //한번에 1개의 element만 리턴할 수 있음.
    //16.02에서 React.Fragment가 추가되어서 여러개 렌더 가능. 

    //여기서 method를 선언하는 것보다 property를 선언하는 것이 좋다.? 
    //this에 접근하고 싶다면, arrow funciton으로
    goToStore= (e)=>{
        //form이 submit되는 것을 멈추기
        e.preventDefault();
        //2. 인풋 값을 받아오기
        const storeName = this.myInput.current.value;
        //3. 그 위치로 /store/값 으로 바꾸기 : react router에 접근해야함!
        this.props.history.push(`/store/${storeName}`);

    }
    //컴포넌트가 페이지에 추가될때 사용된다
    componentDidMount(){
        console.log("Mounted!");
    }
    render(){
        return ( 
        
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <input 
                type="text"
                ref={this.myInput}
                required 
                placeholder="Store Name" 
                defaultValue={getFunName()} 
                
                />
            <button type="submit">Visit store</button>
        </form>
        
        )
    }
}
//이 파일의 default는 StorePicker임!
export default StorePicker;
