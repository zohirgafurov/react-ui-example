import React from 'react'
import Button from 'material-ui/Button'
import sinon from 'sinon'
import { mount } from 'enzyme'
import Page500 from '../../../src/modules/Error/components/Page500'
import WrapperProvider from '../../WrapperProvider'

describe('(Component) Page500', () => {
  let onGoHome, component

  beforeEach(() => {
    onGoHome = sinon.spy()

    component = mount(
      <WrapperProvider>
        <Page500 onGoHome={onGoHome} />
      </WrapperProvider>
    )
  })

  it('call should work when click home', () => {
    component.find(Button).at(0).simulate('click')
    expect(onGoHome).to.have.property('callCount', 1)
  })
})
