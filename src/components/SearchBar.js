import React from 'react';


class SearchBar extends React.Component {
    state = { term: '周杰倫' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)

    }


    render() {
        return (
            <div >
                <form onSubmit={this.onFormSubmit}>
                    <label>關鍵字：</label>
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value })}
                        className="form-control mr-sm-2"
                        placeholder="ex:周杰倫"

                    />

                </form>

            </div>
        )


    }




}





export default SearchBar;