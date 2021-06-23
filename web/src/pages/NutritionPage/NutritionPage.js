import {
  Form,
  FormError,
  Label,
  NumberField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'

import { useState } from 'react'

import NutritionCell from 'src/components/NutritionCell'
const NutritionPage = () => {
  const [s, sets] = useState(0)
  const [ur, setur] = useState(0)
  const onSubmit = (data) => {
    if (data && data.student > 0 && data.urfood > 0) {
      sets(data.student)
      setur(data.urfood)
      // console.log(s, ur)
    }
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit}>
        <FormError
          // error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="student"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          How many students for this week?
        </Label>
        <NumberField
          name="student"
          // defaultValue={props.post?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{
            required: true,
            pattern: {
              value: /^\d+/,
            },
          }}
        />
        <FieldError name="student" className="rw-field-error" />

        <Label
          name="urfood"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          How many unregular foods we need?
        </Label>
        <NumberField
          name="urfood"
          // defaultValue={props.post?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="urfood" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit className="rw-button rw-button-blue">Generate Menu...</Submit>
        </div>
      </Form>
      <div>
        <NutritionCell snum={s} urnum={ur} />
      </div>
    </div>
  )
}

export default NutritionPage
