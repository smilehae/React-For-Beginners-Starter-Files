import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component{
    state = { //초기 상태설정.
        fishes: {},
        order:{}
    };
    addFish = (fish) =>{
        //1. 존재하는 state의 카피를 만들기. : 바로 본체를 바꾸는건 에러를 만들 수 있다.
        const fishes = {...this.state.fishes};
        //2. 새로운 fish 추가 with timeStamp
        fishes[`fish${Date.now()}`] = fish;
        //3. 상태에 fish를 이걸로 변경
        this.setState({
            fishes //ES6에서는 이름 같으면 이렇게 써도 됨. 원래는 fishes: this.fishes
        })
        
    }
    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="seafood market"/>
                </div>
                <Order/>
                <Inventory addFish = {this.addFish}/>
            </div>
        )
    }

}

export default App;