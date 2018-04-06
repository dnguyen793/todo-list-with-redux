import React, { Component } from 'react';
import { getList } from '../actions';
import { connect } from 'react-redux';

class List extends Component{

    componentDidMount(){
        this.props.getList();
    }

    render(){

        const itemElements = this.props.list.map((item, index) => {
            return(
                <li key={index} className="collection-item">{item.title}</li>
            )
        });

        console.log("props:", this.props)
        return(
            <ul className="collection">
                {itemElements}
            </ul>
        )
    }

}

function mapStateToProps(state){
    return{
        list: state.list.items
    }
}

export default connect(mapStateToProps, {getList: getList})(List);