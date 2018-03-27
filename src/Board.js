import React, { Component } from 'react'
import Note from './Note'
import FaPlus from 'react-icons/lib/fa/plus'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [
                {
                    id: 0,
                    note: 'Hai noroc'
                },
                {
                    id: 1,
                    note: 'Montare geamuri'

                }
            ]
        }
        this.eachNote = this.eachNote.bind(this)
        this.updateNote = this.updateNote.bind(this)
        this.removeNote = this.removeNote.bind(this)
        this.addNote = this.addNote.bind(this)
        this.nextId = this.nextId.bind(this)
    }

    eachNote(note, i) {
        return (
            <Note key={i}
                  index={i}
            onChange = {this.updateNote}
            onRemove = {this.removeNote}>
                {note.note}
            </Note>
        )
    }

    updateNote(newText, i) {
        console.log('updating note with index: ', i, newText)
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i ) ? note : {...note, note: newText}
            )
        }))
    }

    removeNote(id) {
        console.log('removing item at ', id)
        this.setState(prevState => ({
            notes: prevState.notes.filter(
                note => note.id !== id
            )
        }))
    }

    addNote(text) {
        console.log('add new note')
        this.setState(prevState => ({
            notes: [...prevState.notes,
                {
                    id: this.nextId(),
                    note: text
                }
            ]
            })

        )
    }

    nextId() {
        this.uniqueId = this.uniqueId || 0
        this.uniqueId++
    }
    render() {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
                <button onClick={this.addNote.bind(null, 'Your Note')}><FaPlus/></button>
            </div>
        )
    }
}

export default Board