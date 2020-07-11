import React, {Component} from 'react';
import {connect} from "react-redux";

import Articles from "./Articles";
import {getArticlesThunkCreator} from "../../../redux/reducers/client-reducer";
import {setOpenModalActionCreator} from "../../../redux/reducers/admin-panel-reducer";
import AddArticleContainer from "./AddArticle/AddArticleContainer";

class ArticlesContainer extends Component {

    componentDidMount() {
        this.props.getArticles();
    }

    render() {
        return (
            <>
                <AddArticleContainer/>
                <Articles
                    articles={this.props.articles}
                    deleteArticle={this.props.deleteArticle}
                    onOpenModal={this.props.setOpenModal}
                />
            </>
            )
    }
}

const mapStateToProps = (state) => ({
    articles: state.newsPage.articles
})

const mapDispatchToProps = (dispatch) => {
    return {
        getArticles: () => {
            dispatch(getArticlesThunkCreator())
        },
        setOpenModal: (payload, nameField) => {
            dispatch(setOpenModalActionCreator(payload, nameField))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);