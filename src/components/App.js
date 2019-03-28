import React from 'react';
import kkbox from '../api/kkbox';
import SearchBar from './SearchBar';
import AlbumList from './AlbumList';




class App extends React.Component {
    state = { albums: [] };
    onSearchSubmit = async (term) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://account.kkbox.com/oauth2/token');
        xhr.send("Content-Type", "application/x-www-form-urlencoded");
        console.log(xhr)

        const res = await kkbox
            .get('/search?', {
                params: { q: term, type: 'album', territory: 'TW', limit: 30 },
            });

        this.setState({ albums: res.data.albums.data });
    }

    render() {

        return (
            <div className="container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                找到：{this.state.albums.length} 張 專輯（最多顯示30筆)
                <AlbumList albums={this.state.albums} />
            </div>)
    }
}






export default App;


