import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';
import Menu from './components/Menu/Menu';

class App extends Component {
    render() {
        return (
            //Router bọc toàn bộ nd web, các route định nghĩa sẽ nằm phía trong
            <Router>
                <div className="App">
                    <Menu />
                    {this.showContentMenus(routes)}
                </div>
            </Router>
        );
    }

    //Gọi nội dung từng route tương ứng
    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

export default App;
