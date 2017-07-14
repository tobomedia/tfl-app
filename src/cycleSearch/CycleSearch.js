import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { parseCycleDocks } from '../utils/dataParser';

class CycleSearch extends Component {
    constructor() {
        super();

        this.search = this.search.bind(this);
        this.searching = this.searching.bind(this);
        this.state = {
            cycleSearch: [],
            searchText: ''
        };
    }

    componentDidMount() {
        this.props.getCycleData();
    }


        searching(el) {
            this.setState({searchText: el.target.value})
        }

        search(a) {
            a.preventDefault();
            const VALUE = this.state.searchText;

            let result = this.props.cycleData.filter((el) => {
                return el.commonName.toLowerCase().indexOf(VALUE.toLowerCase()) > -1
            });

            this.setState({cycleSearch: result});

            this.props.startSearch(this.state.searchText);
        }

        render() {
            return (<div>
                <h2>Search for cycle points</h2>
                <p> Previous searches: {this.props.searches.map((text,i) => {
                    return <span style={{display: 'block'}} key={`searched_${i}`}>{text}</span>
                })}</p>
                <form onSubmit={this.search}>
                    <input onChange={this.searching} type="text" />
                    <input onClick={this.search} type="submit" value="Search" />
                </form>
                <ul>
                    {this.state.cycleSearch.map((a,i) => {
                        return <li key={`cycleBay_${i}`}>{a.commonName} - <small>Bikes { parseCycleDocks(a, 'NbBikes') } : Bays {parseCycleDocks(a, 'NbEmptyDocks')}</small></li>
                    })}
                </ul>
                </div>)
        }
}


CycleSearch.propTypes = {
    searches: PropTypes.array,
    cycleData: PropTypes.array,
    getCycleData: PropTypes.func
}

export default CycleSearch;
