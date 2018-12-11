import React, { Component } from 'react';
import './AmiiboForm.css';
import Amiibos from './Amiibos';

class AmiiboForm extends Component {
    constructor(props){
        super(props);
        this.state = {showForm : true};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSeries = this.handleChangeSeries.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({showForm: false});
        return;
    }

    handleChangeName(event) {
        this.setState({title: event.target.value});
    }

    handleChangeSeries(event) {
        this.setState({series: event.target.value});
    }
    
    render(){
        const titleStyle = {
            backgroundColor: '#00c8af',
            fontSize: '25pt',
            borderRadius: '15px 15px 0px 0px',
            textAlign: 'center',
            width: '500px',
            position: 'absolute',
            top: 0
        }

        const formStyle = {
            backgroundColor: '#666666',
            width: '500px',
            borderRadius: '0px 15px 15px 0px',
            position: 'relative',
            padding: '10px'
        }

        const fieldStyle = {
            backgroundColor: '#85bfc6',
            textColor: 'black'
        }

        const buttonStyle = {
            borderRadius: '5px',
            align: 'center',
            backgroundColor: '#00c8af',
            margin: 'auto',
            width: '20%'
        }

        if (this.state.showForm) {
            return(
                <div>
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <label for="searchname">Search for Amiibo by name:</label>
                    <input style={fieldStyle} id="searchname" type="text" placeholder="eg; mario..." value={this.state.title} onChange={this.handleChangeName}/>
                    <br></br>
                    <label for="searchseries">Search for Amiibo by game series:</label>
                    <input style={fieldStyle} id="searchseries" type="text" placeholder="eg; super mario bros..." value={this.state.series} onChange={this.handleChangeSeries}/>
                    <br></br>
                    <button style={buttonStyle} type="submit">GO</button>
                </form>
                </div>
            )
        } else {
            return <Amiibos title={this.state.title} series={this.state.series}/>
        }
    }

}

export default AmiiboForm;