import React from 'react'
import { Show } from '../Form'
import SectionLink from './SectionLink'

export class ToggleItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      visible: props.visible,
      scroll: false
    }

    this.toggle = this.toggle.bind(this)
  }

  componentWillReceiveProps (next) {
    if (next && next.visible !== this.state.visible) {
      this.setState({ scroll: false, visible: next.visible })
    }
  }

  componentDidUpdate () {
    if (this.state.scroll) {
      const timeout = this.props.timeout + (this.props.timeout * 0.3142)
      this.setState({ scroll: false }, () => {
        window.setTimeout(() => {
          this.scrollIntoView()
        }, timeout)
      })
    }
  }

  toggle (event) {
    const visible = !this.state.visible
    this.setState({ scroll: true, visible: visible }, () => {
      this.props.onToggle({
        ...this.props,
        visible: visible
      })
    })
    event.preventDefault()
  }

  scrollIntoView () {
    if (!this.state.visible) {
      return
    }

    // Grab the bottom position of the item
    const bottom = this.refs.item.getBoundingClientRect().bottom

    // Grab the current window height
    const winHeight = window.innerHeight

    // Flag if tiem is within current viewport
    const notInView = (winHeight < bottom)

    if (notInView) {
      window.scrollBy({ top: (bottom - winHeight), left: 0, behavior: 'smooth' })
    }
  }

  render () {
    return (
      <div ref="item" className={`${this.props.section ? 'section' : 'subsection'} ${this.state.visible ? 'open' : 'closed'}`}>
        <span className="section-title">
          <SectionLink
            className={this.props.className}
            title={this.props.title}
            onClick={this.toggle}
            sectionNum={this.props.number}>
            <Show when={this.state.visible}>
              <i className="fa fa-angle-up" aria-hidden="true"></i>
            </Show>
            <Show when={!this.state.visible}>
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </Show>
          </SectionLink>
          <Show when={this.state.visible}>
            <div className="section-content">
              {this.props.children}
            </div>
          </Show>
        </span>
      </div>
    )
  }
}

ToggleItem.defaultProps = {
  visible: false,
  title: '',
  section: false,
  number: 0,
  className: '',
  timeout: 450,
  onToggle: () => {}
}