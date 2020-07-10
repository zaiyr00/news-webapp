import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

import NewsDetail from "./NewsDetail";
import {getInformationArticleThunkCreator} from "../../../redux/reducers/client-reducer";

class NewsDetailContainer extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getInformationArticle(id);
    }

    render() {
        return <NewsDetail article={this.props.article} />
    }
}

const mapStateToProps = (state) => ({
    article: state.newsPage.articleDetailedInformation
})

const mapDispatchToProps = (dispatch) => {
    return {
        getInformationArticle: (id) => {
            dispatch(getInformationArticleThunkCreator(id))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(NewsDetailContainer);