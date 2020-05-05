import React from 'react';
import {Input, Button, List} from 'antd';
import store from './store';
import {addTodo, deleteTodo, changeInput} from './action'; 
export default class ReduxMain extends React.Component{
    constructor(p){
        super(p);
        this.state = store.getState();
        store.subscribe(this.storeChange);
    }
    changeInputValue = (e) => {
        // console.log(e.target.value);
        let action = changeInput(e.target.value);
        store.dispatch(action);
    }
    deleteItem = (index) => {
        let action = deleteTodo(index);
        store.dispatch(action);
    }
    storeChange = () => {
        this.setState(store.getState());
    }
    clickBtn = () =>{
        let action = addTodo();
        store.dispatch(action);
    }
    render(){
        return <div style={{ margin: '10px' }}>
            <div>
                <Input placeholder={this.state.inputValue} style={{ width: '250px', marginRight: '10px'}} onChange={this.changeInputValue}></Input>
                <Button type='primary' onClick={this.clickBtn.bind(this)}>增加</Button>
            </div>
            <div style={{margin:'10px', width:'300px'}}>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index)=>(<List.Item onClick={this.deleteItem.bind(this, index)}>{item.text}</List.Item>)}>
                </List>
            </div>
        </div>
    }
}