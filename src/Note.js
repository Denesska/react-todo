import React, { Component } from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'
import { withStyle } from 'material-ui/styles'
import Card, { CardAction, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
        this.save = this.save.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.renderForm = this.renderForm.bind(this)

    }

    edit() {
        console.log('you are editing')
        this.setState({
            editing: true
        })
    }

    remove() {
        console.log('deleted item')
        this.props.onRemove(this.props.index)

    }

    save(e) {
        e.preventDefault()
        this.props.onChange(this._newNote.value, this.props.index)
        this.setState({
            editing: false
        })
        alert(this._newNote.value)
        // console.log('saved')
    }

    renderDisplay() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit} id="edit"><FaPencil/></button>
                    <button onClick={this.remove} id="remove"><FaTrash/></button>
                </span>
            </div>
        )
    }

    renderForm() {
        return (
            <div className="note">
                <form onSubmit={this.save}>
                    <textarea ref={input => this._newNote = input}/>
                    <button><FaFloppyO/></button>
                </form>
            </div>
        )
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay()
    }
}

export default Note;