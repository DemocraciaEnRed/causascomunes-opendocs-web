import React, { Component, Fragment } from 'react'
import CommentCounter from '../../elements/comment-counter/component'
import { CommentCounterContext } from './index'

export default class CommentCounterWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      top: 0,
      left: 0,
      ids: []
    }
  }

    handeOnClick = (e) => {
      if (this.state.ids.length > 0) this.props.onClick(this.state.ids, this.state.top)
    }

    updateMousePosition = (e) => {
      const top = this.props.isClosed ? 1100 : 830
      this.setState({
        top: e.pageY - top,
        left: e.pageX - 100
      })
    }

    addId = (id) => (e) => {
      this.setState(({ ids }) => {
        if (ids.includes(id)) return
        const _ids = ids.concat([id])
        return { ids: _ids }
      })
    }

    removeId = (id) => (e) => {
      this.setState(({ ids }) => {
        if (!ids.includes(id)) return
        const _ids = ids.filter((_id) => _id !== id)
        return { ids: _ids }
      })
    }

    render () {
      const { ids, top, left } = this.state
      const context = {
        removeId: this.removeId,
        addId: this.addId
      }
      const count = ids.length

      return (
        <Fragment>
          {
            count > 0 &&
              <CommentCounter
                count={count}
                top={top}
                left={left} />
          }
          <div
            onClick={this.handeOnClick}
            onMouseMove={this.updateMousePosition}>
            <CommentCounterContext.Provider value={context}>
              {this.props.children}
            </CommentCounterContext.Provider>
          </div>
        </Fragment>
      )
    }
}