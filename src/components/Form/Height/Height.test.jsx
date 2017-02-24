import React from 'react'
import { mount } from 'enzyme'
import Height from './Height'

describe('The Height component', () => {
  let onUpdate = () => {}
  it('no error on empty', () => {
    let expected = {
      name: 'height',
      label: 'Feet',
      value: ''
    }
    const component = mount(<Height name={expected.name} label={expected.label} value={expected.value} />)
    component.find('input#feet').simulate('change')
    expect(component.find('label[htmlFor="feet"]').text()).toEqual(expected.label)
    expect(component.find('input[name="feet"]').length).toEqual(1)
    expect(component.find('.usa-input-error-label').length).toEqual(0)

    expected = {
      name: 'height',
      label: 'Inches',
      value: ''
    }
    component.find('input#inches').simulate('change')
    expect(component.find('label[htmlFor="inches"]').text()).toEqual(expected.label)
    expect(component.find('input[name="inches"]').length).toEqual(1)
    expect(component.find('.usa-input-error-label').length).toEqual(0)
  })

  it('no error on empty', () => {
    let expected = {
      name: 'height',
      label: 'Feet',
      value: ''
    }
    const component = mount(<Height name={expected.name} feet="5" inches="1" label={expected.label} value={expected.value} onUpdate={onUpdate} />)

    component.find('input[name="feet"]').simulate('blur')
    component.find('input[name="feet"]').simulate('focus')
    expect(component.find('input[name="feet"]').hasClass('usa-input-focus')).toBe(true)

    component.find('input[name="feet"]').simulate('change')
    expect(component.find('input[name="feet"]').hasClass('usa-input-success')).toBe(true)
  })
})