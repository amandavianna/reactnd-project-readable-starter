import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FetchAddPost, FetchEditPost } from '../actions'
import {
  Form,
  Button,
  TextArea,
  Dropdown,
  Header
} from 'semantic-ui-react'

class FormPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '' ,
      author: '',
      category: 'react',
      newPost: false
    }
  }

  componentDidMount() {
    if(this.props.match.params.id) {
      this.setState(this.props.location.state)
    } else {
      this.setState({newPost: true})
    }
  }

  onClickSubmit(){
    if(this.state.newPost) {
      this.props.dispatch(FetchAddPost(this.state))
    } else {
      this.props.dispatch(FetchEditPost(this.state))
    }
  }

  handleInputChange = (event, {name, value}) => {
    this.setState({ [name]: value })
  }

  getTitle() {
    let title = ''
    if (this.state.newPost) {
      title = 'Adicionar Post'
    } else {
      title = 'Editar Post'
    }
    return title
  }

  render() {
    const { title, author, body, category } = this.state

    return (
      <div>
        <Header as='h2'>{this.getTitle()}</Header>
        <Form>
          <Form.Field>
            <Form.Input
              required
              label='Título'
              name='title'
              value={title}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              required
              label='Autor'
              name='author'
              value={author}
              onChange={this.handleInputChange}
            />
          </Form.Field>

          <Form.Field
            control={Dropdown}
            label='Categoria'
            fluid
            selection
            options={
              this.props.categories.map((category) => (
                {
                  key: category.path,
                  value: category.path,
                  text: category.name
                }
              ))
            }
            value={category}
            name='category'
            onChange={this.handleInputChange}
          >
          </Form.Field>

          <Form.Field>
            <Form.Field
              required
              label='Descrição'
              id='form-textarea-control-opinion'
              control={TextArea}
              name='body'
              value={body}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Link to={this.props.location.state.postUrl} onClick={() => this.onClickSubmit()} >
            <Button color='pink'>{this.getTitle()}</Button>
          </Link>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
})

export default connect(mapStateToProps)(FormPost)
