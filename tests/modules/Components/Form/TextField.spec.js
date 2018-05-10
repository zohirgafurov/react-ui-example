import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { mount } from 'enzyme'
import TextField from '../../../../src/components/Form/TextField'
import validate from '../../../../src/helpers/validate'
import WrapperProvider from '../../../WrapperProvider'
import createStore from '../../../../src/store'
import { getFormValueFromState } from '../../../../src/helpers/form'

const FORM = 'TestForm'

describe('(Component) TextField', () => {
  let component, store

  beforeEach(() => {
    store = createStore({})

    const TextForm = reduxForm({ form: FORM })(({ handleSubmit }) => (
      <form onSubmit={handleSubmit(() => validate({ text: ['This field is required.'] }))}>
        <Field
          name="text"
          component={TextField}
          label="Text"
          placeholder="Enter Text"
          fullWidth={true}
          margin="normal"
        />
      </form>
    ))

    component = mount(
      <WrapperProvider store={store}>
        <TextForm />
      </WrapperProvider>
    )
  })

  it('change value', () => {
    component.find('input[name="text"]').simulate('change', { target: { value: 'text' } })

    const formValues = getFormValueFromState(FORM, store.getState())
    expect(formValues.text).to.equal('text')
  })

  it('error', () => {
    component.find('form').simulate('submit')

    expect(component.find(TextField).first().instance().props.meta.error[0]).to.equal('This field is required.')
  })
})
