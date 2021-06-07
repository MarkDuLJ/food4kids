import {
  Form,
  FormError,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'

const NutritionPage = () => {
  const onSubmit = () => {
    // console.log(data)
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
        <TextField
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
        <TextField
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
    </div>
  )
}


export default NutritionPage
