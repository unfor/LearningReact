import React from 'react';
import './main.css';
// const App = require('./App.js');
import CssMain from './cssMain'
class MainTab extends React.Component{
    constructor(p){
        super(p);
        this.state = {
            mainTab : <CssMain></CssMain>
        };
    }
    chooseTab = (key) => {
        switch(key){
            case 'main': break;
            case 'js': break;
            case 'other': break;
            case 'css': 
            break;
            case '面试官：你可以用纯 CSS 判断鼠标进入的方向吗？': 
                // window.location.href = "file:///C:/project/new/react/my-app/src/001.html"
            break;
        }
    }
    render(){
        return <div className="mainTab">
            <div className="sideTab">
                <ul>
                    <li className="completed" onClick={()=>this.chooseTab('main')}>{"首页"}</li>
                    <li className="completed" onClick={()=>this.chooseTab('css')}>{"css页"}</li>
                    <li className="completed" onClick={()=>this.chooseTab('js')}>{"js页"}</li>
                    <li className="completed" onClick={()=>{this.chooseTab('面试官：你可以用纯 CSS 判断鼠标进入的方向吗？')}}>{"面试官：你可以用纯 CSS 判断鼠标进入的方向吗？"}</li>
                    <li></li>
                </ul>
            </div>
            <div className="rightTab">
                {this.state.mainTab}
            </div>
        </div>
    }
}
export default MainTab;