import React from 'react';
import './cssMain.css';
import Darkmode from 'darkmode-js';

class CssMain extends React.Component {
    constructor(p) {
        super(p);
        this.darkmode = null;
    }
    componentDidMount(){
        var options = {
            bottom: '64px', // default: '32px'
            right: 'unset', // default: '32px'
            left: '32px', // default: 'unset'
            time: '0.5s', // default: '0.3s'
            mixColor: '#fff', // default: '#fff'
            backgroundColor: '#fff',  // default: '#fff'
            buttonColorDark: '#100f2c',  // default: '#100f2c'
            buttonColorLight: '#fff', // default: '#fff'
            saveInCookies: false, // default: true,
            label: '🌓', // default: ''
            autoMatchOsTheme: true // default: true
          }
          
          this.darkmode = new Darkmode(options);
        //   darkmode.showWidget();
    }
    changeDark = () => {
        // const darkmode =  new Darkmode();
        this.darkmode.toggle();
        // console.log(darkmode.isActivated())
    }
    render() {
        return <div className="cssMain">
            <div className="textTitle">
                {"Groominig"}
            </div>
            <div className="textContent">
                <div className="imgborder" onMouseEnter={this.changeDark} onMouseLeave={this.changeDark}>
                    <img className="imgOne" src="" alt="" />
                </div>
                {"writing-mode 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向。为整个文档设置书时，应在根元素上设置它（对于 HTML 文档应该在 html 元素上设置）。 它采用以下值之一horizontal-tb | vertical-rl | vertical-lr。"}
                {"writing-mode 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向。为整个文档设置书时，应在根元素上设置它（对于 HTML 文档应该在 html 元素上设置）。 它采用以下值之一horizontal-tb | vertical-rl | vertical-lr。"}
                {"writing-mode 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向。为整个文档设置书时，应在根元素上设置它（对于 HTML 文档应该在 html 元素上设置）。 它采用以下值之一horizontal-tb | vertical-rl | vertical-lr。"}
                {"writing-mode 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向。为整个文档设置书时，应在根元素上设置它（对于 HTML 文档应该在 html 元素上设置）。 它采用以下值之一horizontal-tb | vertical-rl | vertical-lr。"}
                {"writing-mode 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向。为整个文档设置书时，应在根元素上设置它（对于 HTML 文档应该在 html 元素上设置）。 它采用以下值之一horizontal-tb | vertical-rl | vertical-lr。"}
            </div>
            <div className="textTitle">
                {"数字"}
            </div>
            <div className="textContent">
                <span className="one">{"123456/666"}</span>
                <span className="two">{"0.123"}</span>
                <span className="three">{"0.234"}</span>
                <div>
                    {"面试官：你可以用纯 CSS 判断鼠标进入的方向吗？--https://juejin.im/post/5ea8f15ee51d454dc55c8e5b"}
                </div>
            </div>
        </div>
    }
}
export default CssMain;