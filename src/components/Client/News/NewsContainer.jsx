import React, {Component} from 'react';
import {connect} from "react-redux";

import News from "./News";
import {getArticlesThunkCreator} from "../../../redux/reducers/client-reducer";

class NewsContainer extends Component {

    componentDidMount() {
        this.props.getArticles();
    }

    render() {
        return (
            <div>
                <News articles={this.props.articles} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    articles: state.newsPage.articles
})

const mapDispatchToProps = (dispatch) => {
    return {
        getArticles: () => {
            dispatch(getArticlesThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);