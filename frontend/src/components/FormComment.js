import React, { Component } from 'react'
import {
  Form,
  Button,
  Header
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  FetchAddComment,
  FetchEditComment
} from '../actions'

class FormComment extends Component {
  constructor (props){
    super(props)

    this.state = {
      body: '' ,
      author: '',
      parentId: '',
      newComment: false
    }
  }

  componentDidMount() {
    if(this.props.location) {
      this.setState(this.props.location.state)
    } else {
      this.setState({
        newComment: true,
        parentId: this.props.parentId
      })
    }
  }

  onClickSubmit(){
    if(this.state.newComment) {
      this.props.dispatch(FetchAddComment(this.state))
    } else {
      this.props.dispatch(FetchEditComment(this.state))
    }

    this.setState({
      author: '',
      body: ''
    })
  }

  handleInputChange = (event, {name, value}) => {
    this.setState({ [name]: value })
  }

  getTitle() {
    let title = ''
    if (this.state.newComment) {
      title = 'Adicionar comentário'
    } else {
      title = 'Editar comentário'
    }
    return title
  }

  render() {
    const { author, body, newComment } = this.state

    return (
      <div>
        <Header as='h3'>{this.getTitle()}</Header>
        <Form>
          <Form.Input placeholder="Nome" name="author" value={author} onChange={this.handleInputChange}/>
          <Form.TextArea placeholder="Comentário" name="body" value={body} onChange={this.handleInputChange}/>
          <Link to={this.props.location ? this.props.location.state.postUrl : this.props.postUrl} onClick={() => this.onClickSubmit()} >
            <Button content={newComment ? 'Adicionar comentário' : 'Editar comentário'} labelPosition='left' icon='edit' primary />
          </Link>
        </Form>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => ({
  parentId: ownProps.parentId
})


export default connect(mapStateToProps)(FormComment)
