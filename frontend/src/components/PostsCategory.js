import React, { Component } from 'react'
import {
  Icon,
  Label,
  Divider
} from 'semantic-ui-react'
import { FetchGetPostCategory } from '../actions'
import { connect } from 'react-redux'
import Root from './Root'

class PostsCategory extends Component {
  componentDidMount() {
    this.props.getPostCategory(this.props.categoryName)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.categoryName !== nextProps.categoryName) {
      this.props.getPostCategory(nextProps.categoryName)
    }
  }

  render() {
    return (
      <div>

        <Label.Group color='teal'>
          <Label>
            <Icon name='tag' />
            {this.props.categoryName}
            <Label.Detail>{this.props.posts.length}</Label.Detail>
          </Label>
        </Label.Group>

        <Divider />

        <Root />
      </div>
    )
  }
}

const mapStateToProps = ({posts}, ownProps) => ({
  posts,
  categoryName: ownProps.match.params.category
})

const mapDispatchToProps = dispatch => ({
    getPostCategory: name => dispatch(FetchGetPostCategory(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsCategory)
