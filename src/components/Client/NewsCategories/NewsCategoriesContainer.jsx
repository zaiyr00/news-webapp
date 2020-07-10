import React, {Component} from 'react';
import {connect} from "react-redux";

import NewsCategories from "./NewsCategories";
import {getArticlesByCategoryIdThunkCreator} from "../../../redux/reducers/client-reducer";

class NewsCategoriesContainer extends Component {

    componentDidMount() {
        this.props.getArticlesByCategoryId();
    }

    render() {
        return <NewsCategories articles={this.props.articles} />
    }
}

const mapStateToProps = (state) => ({
    articles: state.newsPage.articles
})

const mapDispatchToProps = (dispatch) => {
    return {
        getArticlesByCategoryId: () => {
            dispatch(getArticlesByCategoryIdThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsCategoriesContainer);