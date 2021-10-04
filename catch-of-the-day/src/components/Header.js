import React from 'react';

//이거 구조분해해서 {tagline,age} 이렇게 써도 된다. 그러면 아래쪽이 props.tagline이 아니고 그냥 tagline이 된다.
const Header=(props)=>(
    <header className="top">
        <h1>
            Catch
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">the</span>
            </span>
            Day
        </h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
);

//이 클래스는 사실 데이터를 받아 render하는 것 말고는 역할이 없었다. 
//따라서 클래스로 만들기보다는 stateless function으로 구현해서, props를 매개변수로 받아서 표현하는 html자체를 리턴하게 구현해도 된다.
// class Header extends React.Component{
//     render(){
//         return (
//             <header className="top">
//                 <h1>
//                     Catch
//                     <span className="ofThe">
//                         <span className="of">Of</span>
//                         <span className="the">the</span>
//                     </span>
//                     Day
//                 </h1>
//                 <h3 className="tagline">
//                     <span>{this.props.tagline}</span>
//                 </h3>
//             </header>
            
//         )
//     }
// }

export default Header;