import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { parseCycleDocks } from '../utils/dataParser';

class CycleSearch extends Component {
    constructor() {
        super();

        this.search = this.search.bind(this);
        this.searching = this.searching.bind(this);
        this.previousSearch = this.previousSearch.bind(this);

        this.state = {
            cycleSearch: [],
            searchText: '',
            previousSearch: false
        };
    }

    componentDidMount() {
        this.props.getCycleData();
    }


        searching(el) {
            this.setState({searchText: el.target.value})
        }


        previousSearch(el) {
            el.preventDefault();
            this.setState({
                searchText: el.target.innerText,
                previousSearch: true
            }, () => this.search(el));
        }

        search(a) {
            if (!this.state.previousSearch) a.preventDefault();

            const VALUE = this.state.searchText;

            let result = this.props.cycleData.filter((el) => {
                return el.commonName.toLowerCase().indexOf(VALUE.toLowerCase()) > -1
            });

            this.setState({cycleSearch: result});

            if(!this.state.previousSearch) {
                this.props.startSearch(this.state.searchText);
            } else {
                this.setState({previousSearch: false});
            }
        }

        render() {
            return (<div>
                    <h2>Search for cycle points</h2>
                    <p> Previous searches: {this.props.searches.map((text,i) => {
                        return <a href onClick={this.previousSearch} value={text} className="c-cycle-search__previous-search" style={{display: 'block'}} key={`searched_${i}`}>{text}</a>
                    })}</p>
                <form className="c-cycle-search__search-form" onSubmit={this.search}>
                    <input className="c-cycle-search__search-input" onChange={this.searching} type="text" />
                    <input className="c-cycle-search__search-submit" onClick={this.search} type="submit" value="Search" />
                </form>
                <ul>
                    {this.state.cycleSearch.map((a,i) => {
                        return <li className='e-cycle-search__terminal-result' key={`cycleBay_${i}`}>{a.commonName} - <small>Bikes { parseCycleDocks(a, 'NbBikes') } : Bays {parseCycleDocks(a, 'NbEmptyDocks')}</small></li>
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
