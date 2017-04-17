import React from 'react'
import { i18n } from '../../../../config'
import { Address, Branch, Field, DateControl, ValidationElement, Show, RadioGroup, Radio, Email, Telephone, Name, BirthPlace, ForeignBornDocuments, SSN, MaidenName, DateRange } from '../../../Form'

export default class EndedDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Name: props.Name,
      Birthdate: props.Birthdate,
      BirthPlace: props.BirthPlace,
      Telephone: props.Telephone,
      Recognized: props.Recognized,
      Address: props.Address,
      DateDivorced: props.DateDivorced,
      Status: props.Status,
      Deceased: props.Deceased,
      DeceasedAddress: props.DeceasedAddress
    }

    this.updateName = this.updateName.bind(this)
    this.updateBirthdate = this.updateBirthdate.bind(this)
    this.updateBirthPlace = this.updateBirthPlace.bind(this)
    this.updateTelephone = this.updateTelephone.bind(this)
    this.updateRecognized = this.updateRecognized.bind(this)
    this.updateAddress = this.updateAddress.bind(this)
    this.updateDateDivorced = this.updateDateDivorced.bind(this)
    this.updateStatus = this.updateStatus.bind(this)
    this.updateDeceased = this.updateDeceased.bind(this)
    this.updateDeceasedAddress = this.updateDeceasedAddress.bind(this)
  }

  update (field, values) {
    this.setState({[field]: values}, () => {
      if (this.props.onUpdate) {
        this.props.onUpdate({
          Name: this.state.Name,
          Birthdate: this.state.Birthdate,
          BirthPlace: this.state.BirthPlace,
          Telephone: this.state.Telephone,
          Recognized: this.state.Recognized,
          Address: this.state.Address,
          DateDivorced: this.state.DateDivorced,
          Status: this.state.Status,
          Deceased: this.state.Deceased,
          DeceasedAddress: this.state.DeceasedAddress
        })
      }
    })
  }

  updateName (values) {
    this.update('Name', values)
  }

  updateBirthdate (values) {
    this.update('Birthdate', values)
  }

  updateBirthPlace (values) {
    this.update('BirthPlace', values)
  }

  updateTelephone (values) {
    this.update('Telephone', values)
  }

  updateRecognized (values) {
    this.update('Recognized', values)
  }

  updateAddress (values) {
    this.update('Address', values)
  }

  updateDateDivorced (values) {
    this.update('DateDivorced', values)
  }

  updateStatus (values) {
    this.update('Status', values.value)
  }

  updateDeceased (values) {
    this.update('Deceased', values.value)
  }

  updateDeceasedAddress (values) {
    this.update('DeceasedAddress', values)
  }

  render () {
    return (
      <div>
        <Field title={i18n.t('relationships.status.heading.name')}
          adjustFor="labels">
          <Name name="Name"
            {...this.state.Name}
            onUpdate={this.updateName}
            onValidate={this.handleValidation}
          />
        </Field>

        <Field help="relationships.status.endedDetails.help.birthdate"
          title={i18n.t('relationships.status.endedDetails.heading.birthdate')}
          shrink={true}
          adjustFor="labels">
          <DateControl name="birthdate"
            {...this.state.Birthdate}
            onUpdate={this.updateBirthdate}
            onValidate={this.handleValidation}
          />
        </Field>

        <Field help="relationships.status.help.birthplace"
          title={i18n.t('relationships.status.endedDetails.heading.birthplace')}>
          <BirthPlace name="birthplace"
            {...this.state.BirthPlace}
            onUpdate={this.updateBirthPlace}
            onValidate={this.handleValidation}
          />
        </Field>

        <Field title={i18n.t('relationships.status.endedDetails.heading.telephone')}
          help="alias.used.help"
          adjustFor="telephone"
          shrink={true}>
          <Telephone name="Telephone"
            {...this.state.Telephone}
            onUpdate={this.updateTelephone}
            onValidate={this.handleValidation}
          />
        </Field>

        <Field help="relationships.status.endedDetails.help.recognized"
          title={i18n.t('relationships.status.endedDetails.heading.recognized')}
          shrink={true}
          adjustFor="labels">
          <DateControl name="Recognized"
            {...this.state.Recognized}
            onUpdate={this.updateRecognized}
            onValidate={this.handleValidation}
          />
        </Field>

        <Field help="relationships.status.endedDetails.help.address"
          title={i18n.t('relationships.status.endedDetails.heading.address')}
          shrink={true}
          adjustFor="labels">
          <Address name="address"
            {...this.state.Address}
            onUpdate={this.updateAddress}
            onValidate={this.handleValidation}
          />
        </Field>

        <Field help="relationships.status.endedDetails.help.dateDivorced"
          title={i18n.t('relationships.status.endedDetails.heading.dateDivorced')}
          shrink={true}
          adjustFor="labels">
          <DateControl name="DateDivorced"
            {...this.state.DateDivorced}
            onUpdate={this.updateDateDivorced}
            onValidate={this.handleValidation}
          />
        </Field>

        <Field title={i18n.t('relationships.status.endedDetails.heading.status')}>
          <RadioGroup name="status" selectedValue={this.state.Status}>
            <Radio
              label={i18n.m('relationships.status.endedDetails.label.divorced')}
              value="Divorced"
              className="divorced"
              onUpdate={this.updateStatus}
            />
            <Radio
              label={i18n.m('relationships.status.endedDetails.label.widowed')}
              value="Widowed"
              className="widowed"
              onUpdate={this.updateStatus}
            />
            <Radio
              label={i18n.m('relationships.status.endedDetails.label.annulled')}
              value="Annulled"
              className="annulled"
              onUpdate={this.updateStatus}
            />
          </RadioGroup>
        </Field>

        <Show when={['Divorced', 'Annulled'].includes(this.state.Status)}>
          <div>
            <div>TODO: City, State</div>
            <Field title={i18n.t('relationships.status.endedDetails.heading.deceased')}>
              <RadioGroup name="deceased" selectedValue={this.state.Deceased}>
                <Radio
                  label="Yes"
                  value="Yes"
                  onUpdate={this.updateDeceased}
                />
                <Radio
                  label="No"
                  value="No"
                  className="widowed"
                  onUpdate={this.updateDeceased}
                />
                <Radio
                  label="I don't know"
                  value="DK"
                  onUpdate={this.updateDeceased}
                />
              </RadioGroup>
            </Field>

            <Show when={this.state.Deceased === 'Yes'}>
              <Field title={i18n.t('relationships.status.endedDetails.heading.deceasedAddress')}>
                <Address
                  {...this.state.DeceasedAddress}
                  onUpdate={this.updateDeceasedAddress}
                />
              </Field>
            </Show>
          </div>
        </Show>
      </div>
    )
  }
}
