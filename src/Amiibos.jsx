import React, { Component } from 'react';
import AmiiboForm from './AmiiboForm';
import Amiibo from './Amiibo';
{/*{import BrowserRouter as Router, Route, Link } from 'react-router-dom';*/}

class Amiibos extends Component {
    constructor(props){
        super(props);
        this.state = {amiibos: [], showAmiiboForm: false};
    }

    /*here, replace the link with a variable depending on the type of amiibo you want to see */
    componentDidMount() {
        if (this.props.title != null){
            var amiiboName = 'http://www.amiiboapi.com/api/amiibo/?name=' + this.props.title;
            console.log(amiiboName);
            fetch(amiiboName).then(response => response.json())
            .then(result => this.setState({ amiibos: result["amiibo"] }));
        }
        else if (this.props.series != null) {
            var amiiboSeries = 'http://www.amiiboapi.com/api/amiibo/?gameseries=' + this.props.series;
            console.log(amiiboName);
            fetch(amiiboSeries).then(response => response.json())
            .then(result => this.setState({ amiibos: result["amiibo"] }));
        }
    }

    handleClick() {
        this.setState({showAmiiboForm: !this.state.showAmiiboForm});
    }
    render(){
        const buttonStyle = {
            borderRadius: '5px',
            align: 'center',
            backgroundColor: '#00c8af',
            margin: 'auto',
            width: 'auto'
        }

        if(!this.state.showAmiiboForm){
            return(
                <div id="showamiibos">
                    <button style={buttonStyle} onClick={this.handleClick.bind(this)}>Go back to search</button>
                    {/*<Link to="/">Back to search</Link>-->*/}
                    <p>results for the search term: "{this.props.title} {this.props.series}"</p>
                    <h3>information:</h3>
                    <div>
                        <ul>
                            {this.state.amiibos.map( amiibo => <Amiibo 
                            amiiboSeries={amiibo.amiiboSeries}
                            character={amiibo.character}
                            gameSeries={amiibo.gameSeries}
                            image={amiibo.image}
                            name={amiibo.name}
                            release={amiibo.release.na}/>)}
                        </ul>
                    </div>
                            {/*<Route path="/" exact component={AmiiboForm} render={(props) => <AmiiboForm {...props} showForm={true} />}/>*/}

                </div>
            );
        }
        else {
            return (<AmiiboForm showForm={false}/>);
        }
    }
}

export default Amiibos;