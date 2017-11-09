import * as R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import * as ROUTE from '../../../constants/routes'
import AppBar from '../../../components/AppBar'
import CompanyList from './CompanyList'
import CompanyDetail from './CompanyDetail'

const Company = ({ appBar, list, ...props }) => {
  const companyId = R.pipe(R.path(['params', 'companyId']), parseInt)(props)
  const push = R.prop('push', props)
  const location = R.prop('location', props)
  const route = { location, push, companyId }

  const detail = {
    id: R.path(['detail', 'id'], props),
    detail: (
      <CompanyDetail route={route} detail={R.prop('detail', props)} />
    )
  }

  return (
    <AppBar activeMenuName={ROUTE.COMPANY} {...appBar}>
      <CompanyList
        route={route}
        list={list}
        detail={detail}
        onSubmitFilter={props.onSubmitFilter}
        onCloseFilter={props.onCloseFilter}
        onOpenFilter={props.onOpenFilter}
      />
    </AppBar>
  )
}

Company.propTypes = {
  appBar: PropTypes.object.isRequired,
  list: PropTypes.object,
  detail: PropTypes.object,
  onSubmitFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
  onOpenFilter: PropTypes.func,
}

export default Company
