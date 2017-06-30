import React from 'react'
import { i18n } from '../../../config'
import { ValidationElement, Address, Field, Text, Textarea, DateControl } from '../../Form'

export default class NonCriminalCourtAction extends ValidationElement {
  constructor (props) {
    super(props)
    this.update = this.update.bind(this)
    this.updateCivilActionDate = this.updateCivilActionDate.bind(this)
    this.updateCourtName = this.updateCourtName.bind(this)
    this.updateCourtAddress = this.updateCourtAddress.bind(this)
    this.updateNatureOfAction = this.updateNatureOfAction.bind(this)
    this.updateResultsOfAction = this.updateResultsOfAction.bind(this)
    this.updatePrincipalPartyNames = this.updatePrincipalPartyNames.bind(this)
  }

  update (queue) {
    this.props.onUpdate({
      CivilActionDate: this.props.CivilActionDate,
      CourtName: this.props.CourtName,
      CourtAddress: this.props.CourtAddress,
      NatureOfAction: this.props.NatureOfAction,
      ResultsOfAction: this.props.ResultsOfAction,
      PrincipalPartyNames: this.props.PrincipalPartyNames,
      ...queue
    })
  }

  updateCivilActionDate (values) {
    this.update({ CivilActionDate: values })
  }

  updateCourtName (values) {
    this.update({ CourtName: values })
  }

  updateCourtAddress (values) {
    this.update({ CourtAddress: values })
  }

  updateNatureOfAction (values) {
    this.update({ NatureOfAction: values })
  }

  updateResultsOfAction (values) {
    this.update({ ResultsOfAction: values })
  }

  updatePrincipalPartyNames (values) {
    this.update({ PrincipalPartyNames: values })
  }

  render () {
    return (
      <div className="non-criminal-court-action">
        <Field title={i18n.t('legal.nonCriminalAction.heading.civilActionDate')}
               help={'legal.nonCriminalAction.help.civilActionDate'}
               adjustFor="datecontrol">
          <DateControl name="CivilActionDate"
                       className="civil-action-date"
                       {...this.props.CivilActionDate}
                       onUpdate={this.updateCivilActionDate}
                       onError={this.props.onError}
                       />
        </Field>

        <Field title={i18n.t('legal.nonCriminalAction.heading.courtName')}
               help={'legal.nonCriminalAction.help.courtName'}>
          <Text name="CourtName"
                className="court-name"
                {...this.props.CourtName}
                onUpdate={this.updateCourtName}
                onError={this.props.onError}
                />
        </Field>

        <Field title={i18n.t('legal.nonCriminalAction.heading.courtAddress')}
               adjustFor="address"
               help={'legal.nonCriminalAction.help.courtAddress'}>
          <Address name="CourtAddress"
                   className="court-address"
                   {...this.props.CourtAddress}
                   onUpdate={this.updateCourtAddress}
                   onError={this.props.onError}
                   />
        </Field>

        <Field title={i18n.t('legal.nonCriminalAction.heading.natureOfAction')}
               help={'legal.nonCriminalAction.help.natureOfAction'}>
          <Textarea name="NatureOfAction"
                    className="nature-of-action"
                    {...this.props.NatureOfAction}
                    onUpdate={this.updateNatureOfAction}
                    onError={this.props.onError}
                    />
        </Field>

        <Field title={i18n.t('legal.nonCriminalAction.heading.resultsOfAction')}
               help={'legal.nonCriminalAction.help.resultsOfAction'}>
          <Textarea name="ResultsOfAction"
                    className="results-of-action"
                    {...this.props.ResultsOfAction}
                    onUpdate={this.updateResultsOfAction}
                    onError={this.props.onError}
                    />
        </Field>

        <Field title={i18n.t('legal.nonCriminalAction.heading.principalPartyNames')}
               help={'legal.nonCriminalAction.help.principalPartyNames'}>
          <Textarea name="PrincipalPartyNames"
                    className="principal-party-names"
                    {...this.props.PrincipalPartyNames}
                    onUpdate={this.updatePrincipalPartyNames}
                    onError={this.props.onError}
                    />
        </Field>
      </div>
    )
  }
}

NonCriminalCourtAction.defaultProps = {
  onUpdate: (queue) => {},
  onError: (value, arr) => { return arr }
}
